/** @jsx jsx */

import { Link } from "gatsby"
import React from "react"
import { jsx } from "theme-ui"

interface LinkProps {
  children: React.ReactNode
  href: string
}

const sharedProps = {
  sx: { color: "inherit", textDecoration: "none" },
}

export const ExternalLink: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank" {...sharedProps}>
      {children}
    </a>
  )
}

export const InternalLink: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <Link to={href} {...sharedProps}>
      {children}
    </Link>
  )
}
