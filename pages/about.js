import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Link from '@/components/Link'

// import dynamic from 'next/dynamic';

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      // toc={toc}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}





// const FileViewer = dynamic(() => import('react-file-viewer'), {
//     ssr: false
// });

// export default function Index() {
//     return (
//         <FileViewer fileType="pdf" filePath="/static/images/JustinGosses_Resume_20210912_senior_program_manager_inner_source-1.pdf" />
//     );
// };