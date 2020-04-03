const fs = require("fs")
const moment = require("moment")
const path = require("path")
const PDFDocument = require("pdfkit")
const request = require("request-promise")

const lh = 1.15

const generateGiftCard = (order, wishText) => {
  return new Promise((resolve, reject) => {
    // Create a PDF document.
    const doc = new PDFDocument({
      margins: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      },
      size: [595, 420],
    })
    const outputFilename = `gift-card-#${order.order_number}.pdf`
    const outputPathname = `/tmp/${outputFilename}`
    const writeStream = fs.createWriteStream(outputPathname)
    doc.pipe(writeStream)

    doc.font(path.join(__dirname, "Barlow-Regular.ttf")).fontSize(14)

    doc.image(path.join(__dirname, "frame.png"), 0, 0, {
      height: 420,
      width: 595,
    })

    const wishOptions = {
      lineGap: 7,
    }
    doc.text(
      wishText,
      63,
      210 - doc.heightOfString(wishText, wishOptions) / 2,
      wishOptions,
    )

    // Finalize PDF file.
    doc.end()

    // Resolve filename and pathname.
    writeStream.on("finish", () => {
      resolve({ outputFilename, outputPathname })
    })
  })
}

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
    //   .font(path.join(__dirname, "Barlow-Bold.ttf"))
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
      .font(path.join(__dirname, "Barlow-Regular.ttf"))
      .fontSize(14)
      .text(
        `Order #${order.order_number}\n${moment(order.created_at).format(
          "MMMM DD, YYYY",
        )}\n${
          order.note_attributes.find(
            attribute => attribute.name === "Shipping date",
          )
            ? `Shipping date ${moment(
                order.note_attributes.find(
                  attribute => attribute.name === "Shipping date",
                ).value,
              ).format("MMMM DD, YYYY")}`
            : ""
        }`,
        logoNode.x,
        logoNode.y - 24 * lh,
        {
          align: "right",
        },
      )
    doc.moveDown()

    // Addresses.
    const shipToNode = doc
      .font(path.join(__dirname, "Barlow-Bold.ttf"))
      .text("Ship to")
    doc.font(path.join(__dirname, "Barlow-Regular.ttf")).text(shippingAddress)
    doc
      .font(path.join(__dirname, "Barlow-Bold.ttf"))
      .text("Bill to", shipToNode.x, shipToNode.y - 100 * lh, {
        align: "right",
      })
    doc
      .font(path.join(__dirname, "Barlow-Regular.ttf"))
      .text(billingAddress, { align: "right" })
    doc.moveDown()

    // Items.
    const itemsNode = doc
      .font(path.join(__dirname, "Barlow-Bold.ttf"))
      .text("Items")
    doc
      .text("Quantity", itemsNode.x, itemsNode.y - 14 * lh, { align: "right" })
      .font(path.join(__dirname, "Barlow-Regular.ttf"))
    for (let i = 0; i < order.line_items.length; i++) {
      const itemNode = doc
        .image(
          `/tmp/product-${order.line_items[i].product_id}.jpg`,
          72 - 8,
          undefined,
          {
            fit: [40, 40],
          },
        )
        .stroke()
      doc.text(
        "             " + order.line_items[i].title,
        itemNode.x,
        itemNode.y - 17.5,
      )
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
    doc
      .font(path.join(__dirname, "Barlow-Bold.ttf"))
      .text("Thanks for drinking with us!", {
        align: "center",
      })
    doc.moveDown()
    doc.font(path.join(__dirname, "Barlow-Regular.ttf")).text("SAKEDEN", {
      align: "center",
    })
    doc
      .font(path.join(__dirname, "Barlow-Regular.ttf"))
      .text("enquiries@sakeden.com", {
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
  generateGiftCard,
  generatePackingSlip,
  prefetchImages,
}
