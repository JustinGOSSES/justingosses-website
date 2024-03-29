import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  
  return (
    <footer>
      
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">       
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" /> */}
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
            <SocialIcon kind="mastodon" rel="me" href={siteMetadata.mastodon} size="6" />
          <SocialIcon kind="observable" href={siteMetadata.observable} size="6" />
          <SocialIcon kind="rss" href={siteMetadata.rss} size="6" />
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p>
          This blog is part of the <a className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://pitwebring.billhunt.dev/">Public Interest Tech Webring </a>:
          <a className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://pitwebring.billhunt.dev/redirect?dir=prev&from=https%3A%2F%2Fjustingosses.com"> Previous Site</a>
           |
           <a className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="https://pitwebring.billhunt.dev/redirect?from=https%3A%2F%2Fjustingosses.com">Next Site</a>
          </p>
        </div>          
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          {/* <div>{` • `}</div> */}
          {/* <Link href="/">{siteMetadata.title}</Link> */}
        </div>
        {/* <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div> */}
      </div>
    </footer>
  )
}
