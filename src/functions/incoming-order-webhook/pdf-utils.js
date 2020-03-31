const fs = require("fs")
const http = require("http")
const moment = require("moment")
const path = require("path")
const PDFDocument = require("pdfkit")
const request = require("request-promise")

const lh = 1.15

const generatePackingSlip = order => {
  return new Promise((resolve, reject) => {
    // Address lines.
    const billingAddress = `${order.billing_address.first_name || ""} ${order
      .billing_address.last_name || ""}
${order.billing_address.address1 || ""}
${order.billing_address.address2 || ""}
${order.billing_address.city || ""}
${order.billing_address.province || ""} ${order.billing_address.country || ""}
${order.billing_address.phone || ""}`
    const shippingAddress = `${order.shipping_address.first_name || ""} ${order
      .shipping_address.last_name || ""}
${order.shipping_address.address1 || ""}
${order.shipping_address.address2 || ""}
${order.shipping_address.city || ""}
${order.shipping_address.province || ""} ${order.shipping_address.country || ""}
${order.shipping_address.phone || ""}`

    // Create a PDF document.
    const doc = new PDFDocument()
    const outputFilename = `packing-slip-#${order.order_number}.pdf`
    const outputPathname = `/tmp/${outputFilename}`
    const writeStream = fs.createWriteStream(outputPathname)
    doc.pipe(writeStream)

    // Header.
    // const logoNode = doc
    //   .font("Helvetica-Bold")
    //   .fontSize(24)
    //   .text("Sakeden")
    const logoNode = doc.image(
      path.join(__dirname, "logo.png"),
      undefined,
      undefined,
      {
        width: 100,
      },
    )
    doc
      .font("Helvetica")
      .fontSize(14)
      .text(
        `Order #${order.order_number}\n${moment(order.created_at).format(
          "MMMM DD, YYYY",
        )}\nShipping date ${moment(
          order.note_attributes.find(
            attribute => attribute.name === "Shipping date",
          ).value,
        ).format("MMMM DD, YYYY")}`,
        logoNode.x,
        logoNode.y - 24 * lh,
        {
          align: "right",
        },
      )
    doc.moveDown()

    // Addresses.
    const shipToNode = doc.font("Helvetica-Bold").text("Ship to")
    doc.font("Helvetica").text(shippingAddress)
    doc
      .font("Helvetica-Bold")
      .text("Bill to", shipToNode.x, shipToNode.y - 100 * lh, {
        align: "right",
      })
    doc.font("Helvetica").text(billingAddress, { align: "right" })
    doc.moveDown()

    // Items.
    const itemsNode = doc.font("Helvetica-Bold").text("Items")
    doc
      .text("Quantity", itemsNode.x, itemsNode.y - 14 * lh, { align: "right" })
      .font("Helvetica")
    for (let i = 0; i < order.line_items.length; i++) {
      const itemNode = doc
        .image(
          `/tmp/product-${order.line_items[i].product_id}.jpg`,
          undefined,
          undefined,
          {
            fit: [50, 50],
          },
        )
        .stroke()
        .text(order.line_items[i].title)
      // const itemNode = doc.text(order.line_items[i].title)
      doc.text(order.line_items[i].quantity, itemNode.x, itemNode.y - 14 * lh, {
        align: "right",
      })
    }
    doc.moveDown()

    // Footer.
    doc.moveDown()
    doc.text(
      "If you like our sake, why not try our Sub Club?\n3 bottles selected by our sommeliers, delivered to you door every month!\nMore info on sakeden.com/subs",
      {
        align: "center",
      },
    )
    doc.moveDown()
    doc.font("Helvetica-Bold").text("Thanks for drinking with us!", {
      align: "center",
    })
    doc.moveDown()
    doc.font("Helvetica").text("SAKEDEN", {
      align: "center",
    })
    doc.font("Helvetica").text("enquiries@sakeden.com", {
      align: "center",
    })

    // Finalize PDF file.
    doc.end()

    // Resolve filename and pathname.
    writeStream.on("finish", () => {
      resolve({ outputFilename, outputPathname })
    })
  })
}

const downloadFile = async (pathname, url) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(pathname)
    request(url)
      .pipe(file)
      .on("finish", () => {
        resolve()
      })
      .on("error", error => {
        reject(error)
      })
  })
}

const prefetchImages = async order => {
  for (let i = 0; i < order.line_items.length; i++) {
    const productId = order.line_items[i].product_id
    const response = JSON.parse(
      // kalon-dev
      // await request(
      //   `https://8b6d59a6adc753e59b415b878524db68:a79693a95f02b744302befb5bce18ab4@kalon-dev.myshopify.com/admin/products/${productId}/images.json`,
      // ),
      // sakaguranow
      await request(
        `https://67349518a4124055e31971bb43dfabbf:fa3f399e35a3cada32a45de29deaa11a@sakaguranow.myshopify.com/admin/products/${productId}/images.json`,
      ),
    )
    await downloadFile(`/tmp/product-${productId}.jpg`, response.images[0].src)
  }
}

module.exports = {
  generatePackingSlip,
  prefetchImages,
}
