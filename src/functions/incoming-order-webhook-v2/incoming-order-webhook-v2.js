const request = require("request-promise")

exports.handler = async (event, context) => {
  try {
    request({
      body: JSON.parse(event.body),
      json: true,
      method: "POST",
      uri: "https://sakeden.com/.netlify/functions/generate-pdfs-v2",
    })
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 2000)
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
