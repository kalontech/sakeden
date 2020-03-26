import React from "react"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"
import { Box, Flex } from "theme-ui"

interface SocialBarProps {
  shareUrl: string
  title: string
}

const SocialBar: React.FC<SocialBarProps> = ({ shareUrl, title }) => {
  return (
    <Flex py={2}>
      <Box mr={2}>
        <EmailShareButton title={title} url={shareUrl}>
          <MdEmail size="28px" />
        </EmailShareButton>
      </Box>
      <Box mr={2}>
        <FacebookShareButton title={title} url={shareUrl}>
          <FaFacebookSquare size="28px" />
        </FacebookShareButton>
      </Box>
      <Box mr={2}>
        <TwitterShareButton title={title} url={shareUrl}>
          <FaTwitterSquare size="28px" />
        </TwitterShareButton>
      </Box>
      <Box>
        <WhatsappShareButton title={title} url={shareUrl}>
          <FaWhatsappSquare size="28px" />
        </WhatsappShareButton>
      </Box>
    </Flex>
  )
}

export default SocialBar
