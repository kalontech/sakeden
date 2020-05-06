// @ts-ignore
import addToMailchimp from "gatsby-plugin-mailchimp"
import qs from "query-string"
import { encode } from "querystring"
import React, { useState } from "react"
import { Box, Button, Flex, Heading, Input, Text, Textarea } from "theme-ui"

import { ContentfulBlockForm as ContentfulBlockFormProps } from "../../graphql-types"
import { InternalLink } from "./link"

const ContentfulBlockForm: React.FC<ContentfulBlockFormProps> = ({
  contentfulfields,
  description,
  extraDescription,
  extraTitle,
  sendToMailchimp,
  sendToNetlifyForms,
  successDescription,
  successTitle,
  title,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formValues, setFormValues] = useState({})

  const setFormValue = (fieldName: string, value: string) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    })
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLDivElement>,
  ): Promise<void> => {
    e.preventDefault()

    if (isSubmitting) {
      return
    }

    try {
      setIsSubmitting(true)
      if (sendToMailchimp) {
        console.log(await addToMailchimp((formValues as any).EMAIL, formValues))
      }
      if (sendToNetlifyForms) {
        await fetch(
          `${
            process.env.FIREBASE_FUNCTIONS_PREFIX
          }/emailFeedback?${qs.stringify(formValues)}`,
        )
      }
      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
    } finally {
      setIsSubmitted(true)
      setIsSubmitting(false)
    }
  }

  const renderContentfulfield = (contentfulfield: string): React.ReactNode => {
    // Destruct field options.
    const [name, type, placeholder] = contentfulfield.split(":")

    // Render textarea.
    if (type === "textarea") {
      return (
        <Textarea
          my={3}
          name={name}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => {
            setFormValue(name, e.target.value)
          }}
          placeholder={placeholder}
          value={(formValues as any)[contentfulfield]}
          variant="borderless"
        />
      )
    }

    // Render input.
    return (
      <>
        {contentfulfield && (
          <Input
            my={3}
            name={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setFormValue(name, e.target.value)
            }}
            placeholder={placeholder}
            value={(formValues as any)[contentfulfield]}
            variant="borderless"
          />
        )}
      </>
    )
  }

  console.log(successTitle, successDescription)

  return (
    <Flex
      sx={{
        flexDirection: ["column", "column", "row", "row"],
        height: "100%",
        justifyContent: "center",
      }}
    >
      {extraDescription && extraTitle && (
        <>
          <Flex
            sx={{
              flex: 0.6,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: ["none", "none", "block", "block"] }}>
              <Heading as="h1" variant="h1">
                {extraTitle}
              </Heading>
            </Box>
            <Box sx={{ display: ["block", "block", "none", "none"] }}>
              <Heading as="h2" variant="h2">
                {extraTitle}
              </Heading>
            </Box>
            <Text>{extraDescription.extraDescription}</Text>
            <Box p={1} />
            <Box mt={4}>
              <InternalLink href="/">
                <Button>Sake collection</Button>
              </InternalLink>
            </Box>
          </Flex>
          <Box p={4} />
        </>
      )}
      <Flex
        sx={{ flex: 0.4, flexDirection: "column", justifyContent: "center" }}
      >
        {isSubmitted ? (
          <>
            <Heading as="h2" variant="h2">
              {successTitle}
            </Heading>
            {successDescription && (
              <Text>{successDescription.successDescription}</Text>
            )}
          </>
        ) : (
          <>
            <Heading as="h2" variant="h2">
              {title}
            </Heading>
            {description && <Text>{description.description}</Text>}
            <Box as="form" onSubmit={handleSubmit}>
              {contentfulfields &&
                contentfulfields.map(contentfulfield =>
                  renderContentfulfield(contentfulfield!),
                )}
              <Button mt={4}>{isSubmitting ? "Submitting" : "Submit"}</Button>
            </Box>
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default ContentfulBlockForm
