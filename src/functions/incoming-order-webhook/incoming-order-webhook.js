const mailgun = require("mailgun-js")({
  apiKey: "4b6173d81d1bf3a6adce446b0e78d2d3-3fb021d1-0040c1d5",
  domain: "mg.sakeden.com",
})

const { generatePackingSlip, prefetchImages } = require("./pdf-utils")
// const testOrder = require("./order.json")

exports.handler = async (event, context) => {
  try {
    // Parse order.
    const order = JSON.parse(event.body)
    // Generate packing slip.
    await prefetchImages(order)
    const packingSlip = await generatePackingSlip(order)
    // Send email.
    await new Promise((resolve, reject) => {
      mailgun.messages().send(
        {
          attachment: packingSlip.outputPathname,
          from: "Sakeden <incoming-order-webhook@mg.sakeden.com>",
          subject: `New order #${order.order_number}`,
          text:
            "A new order was created. See packing slip is in the attachments.",
          to: process.env.PACKING_SLIP_RECIPIENT_EMAIL,
        },
        (error, body) => {
          if (error) {
            reject(error)
          } else {
            resolve(body)
          }
        },
      )
    })
    // Reponse (success).
    return {
      body: JSON.stringify({ message: "Okay!", success: true }),
      statusCode: 200,
    }
  } catch (err) {
    // Print error.
    console.error(err)
    // Response (failure)
    return {
      body: JSON.stringify({ message: err.toString(), success: false }),
      statusCode: 500,
    }
  }
}
