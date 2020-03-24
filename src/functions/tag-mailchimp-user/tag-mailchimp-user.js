const request = require("request-promise")

const headers = {
  Authorization:
    "Basic YW55c3RyaW5nOjY3YWJmMzA1ODZjNWZjMGJhZmIwMGE3ZGVlMTlmNDkwLXVzNA==",
  "Content-Type": "application/json",
}
const list = "f8ac74c453"

exports.handler = async (event, context) => {
  try {
    const email = event.queryStringParameters.email
    const tag = event.queryStringParameters.tag
    if (!email || !tag) {
      throw new Error("Validation error. Email and tag are mandatory fields.")
    }

    // Check if segment already exists.
    const { segments } = JSON.parse(
      await request({
        headers,
        method: "GET",
        url: `https://us4.api.mailchimp.com/3.0/lists/${list}/segments`,
      }),
    )
    let segment = segments.find(segment => segment.name === tag)
    // Create a new segment if does not exist.
    if (!segment) {
      segment = JSON.parse(
        await request({
          // eslint-disable-next-line @typescript-eslint/camelcase
          body: JSON.stringify({ name: tag, static_segment: [] }),
          headers,
          method: "POST",
          url: `https://us4.api.mailchimp.com/3.0/lists/${list}/segments`,
        }),
      )
    }
    // Tag user.
    console.log(
      await request({
        // eslint-disable-next-line @typescript-eslint/camelcase
        body: JSON.stringify({ email_address: email }),
        headers,
        method: "POST",
        url: `https://us4.api.mailchimp.com/3.0/lists/${list}/segments/${segment.id}/members`,
      }),
    )

    // Response (success).
    return {
      body: JSON.stringify({ message: "Okay!", success: true }),
      statusCode: 200,
    }
  } catch (err) {
    // Print error.
    console.error(err)
    // Response (failure).
    return {
      body: JSON.stringify({ message: err.toString(), success: false }),
      statusCode: 500,
    }
  }
}
