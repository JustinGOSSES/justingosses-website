/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const mastodonPersonalLink = href && href.includes("fosstodon.org/web/@JustinG")
  if (mastodonPersonalLink){
    return <a target="_blank" rel="me noopener noreferrer" href={href} {...rest} />
  }

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }
  
  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
