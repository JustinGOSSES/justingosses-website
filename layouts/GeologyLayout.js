import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function CodeLayout({ children, frontMatter }) {
    // const { name, avatar, occupation, company, email, twitter, linkedin, github, observable} = frontMatter
  const {name,github, observable,avatar} = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="mx-auto max-w-3xl divide-y px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Geology
          </h1>
        </div>
        <div className="items-start space-y-2 ">
        {/* <div className="flex flex-col items-center space-x-2 pt-8 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-2"> */}
          <div className="flex flex-col items-center space-x-2 pt-8">
           
            {/* <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3> */}
             {/* <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">Links</h3> */}
            {/* <div className="text-gray-500 dark:text-gray-400">{occupation}</div> 
            <div className="text-gray-500 dark:text-gray-400">{company}</div> */}
            <div className="flex space-x-3 pt-6">
         
              {/* <SocialIcon kind="mail" href={`mailto:${email}`} /> */}
              {/* <SocialIcon kind="github" href={github} />
              <SocialIcon kind="observable" href={observable} /> */}
              {/* <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} /> */}
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}