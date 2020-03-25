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
import { Flex } from "theme-ui"

interface SocialBarProps {
  shareUrl: string
  title: string
}

const SocialBar: React.FC<SocialBarProps> = ({ shareUrl, title }) => {
  return (
    <Flex>
      <EmailShareButton title={title} url={shareUrl}>
        <MdEmail size="28px" />
      </EmailShareButton>
      <FacebookShareButton title={title} url={shareUrl}>
        <FaFacebookSquare size="28px" />
      </FacebookShareButton>
      <TwitterShareButton title={title} url={shareUrl}>
        <FaTwitterSquare size="28px" />
      </TwitterShareButton>
      <WhatsappShareButton title={title} url={shareUrl}>
        <FaWhatsappSquare size="28px" />
      </WhatsappShareButton>
    </Flex>
  )
}

export default SocialBar
