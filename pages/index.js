import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      {/* <div style="color:black">test</div> */}

      <div className="w-full+90 background-image z+1 h-screen bg-center bg-no-repeat">
        <div className="flex h-screen w-full items-center justify-center bg-black bg-opacity-0 dark:bg-opacity-20">
          <div className="mx-4 text-center text-white">
            <h1 className="mb-4 text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Justin Gosses</h1>
            <h3 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Code, Data, Rocks, Maps, Sharing at Scale, and Other Stuff
            </h3>
            {/* <div>
                <a href="" class="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">
                    Code Side Projects
                </a>
                <a href="" class="bg-red-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2">
                    Blog
                </a>
                <a href="" class="bg-red-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2">
                    Resume
                </a>
            </div> */}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl divide-y divide-gray-200 px-4 dark:divide-gray-700 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Hello
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <p>Welcome to my website!</p>
          <p>
            I use this website as a place to share information about myself, write blog posts, and
            establish a record of side projects as a mind trick againts myself to finish them.
          </p>
          <p>
            You can find more information about me in the{' '}
            <Link
              href="/about"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <a>About</a>
            </Link>{' '}
            page.
          </p>
        </div>

        {/* <div class="py-20" >
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-2 text-white">
            Smart Health Monitoring Wristwatch!
          </h2>
          <h3 class="text-2xl mb-8 text-gray-200">
            Monitor your health vitals smartly anywhere you go.
          </h3>

          <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Pre Order
          </button>
        </div>
      </div> */}

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              <a>{title}</a>
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
