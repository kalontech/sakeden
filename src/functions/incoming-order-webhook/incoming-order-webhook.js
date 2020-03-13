const mailgun = require("mailgun-js")({
  apiKey: "4b6173d81d1bf3a6adce446b0e78d2d3-3fb021d1-0040c1d5",
  domain: "sandboxc0a31bd45f39441dbbb86f692d9681db.mailgun.org",
})

const { generatePackingSlip } = require("./pdf-utils")

exports.handler = async (event, context) => {
  try {
    // Parse order.
    const order = JSON.parse(event.body)
    // Generate packing slip.
    const packingSlip = await generatePackingSlip(order)
    // Send email.
    mailgun.messages().send(
      {
        attachment: packingSlip.outputPathname,
        from:
          "Sakeden <sakeden@sandboxc0a31bd45f39441dbbb86f692d9681db.mailgun.org>",
        subject: "New order",
        text:
          "A new order was created. See packing slip is in the attachments.",
        to: "andriy.tsaryov@kalon.tech",
      },
      (error, body) => {
        if (error) {
          console.error(error)
        }
        console.log(body)
      },
    )
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
