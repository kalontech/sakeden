const fs = require("fs")
const moment = require("moment")
const path = require("path")
const PDFDocument = require("pdfkit")

const lh = 1.15

const generatePackingSlip = order => {
  return new Promise((resolve, reject) => {
    // Address lines.
    const billingAddress = `${order.billing_address.first_name} ${
      order.billing_address.last_name
    }
${order.billing_address.address1 || ""}
${order.billing_address.address2 || ""}
${order.billing_address.city || ""}
${order.billing_address.province} ${order.billing_address.country}`
    const shippingAddress = `${order.shipping_address.first_name} ${
      order.shipping_address.last_name
    }
${order.shipping_address.address1 || ""}
${order.shipping_address.address2 || ""}
${order.shipping_address.city || ""}
${order.shipping_address.province} ${order.shipping_address.country}`

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
        )}`,
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
      .text("Bill to", shipToNode.x, shipToNode.y - 84 * lh, { align: "right" })
    doc.font("Helvetica").text(billingAddress, { align: "right" })
    doc.moveDown()

    // Items.
    const itemsNode = doc.font("Helvetica-Bold").text("Items")
    doc
      .text("Quantity", itemsNode.x, itemsNode.y - 14 * lh, { align: "right" })
      .font("Helvetica")
    for (let i = 0; i < order.line_items.length; i++) {
      const itemNode = doc.text(order.line_items[i].title)
      doc.text(order.line_items[i].quantity, itemNode.x, itemNode.y - 14 * lh, {
        align: "right",
      })
    }
    doc.moveDown()

    // Footer.
    doc.text("Thanks for shopping with us!", {
      align: "center",
    })
    doc.font("Helvetica-Bold").text("Sakeden", {
      align: "center",
    })
    doc.font("Helvetica").text("mike@sakeden.com", {
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

module.exports = {
  generatePackingSlip,
}
