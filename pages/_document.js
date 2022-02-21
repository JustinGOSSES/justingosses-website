import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            // href="/static/favicons/favicon-16x16.png"
            href="/static/favicons/favicon-32x32.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
            integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
            crossOrigin="anonymous"
          />
        </Head>
        {/* <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white"> */}
        <body className=" bg-white text-black dark:bg-gray-900 dark:text-white">
          {/* <div className="absolute">test2</div>
          <div className="absolute">test2</div>
          <div className="absolute">test2</div>
          <div>test 1</div>
          <div>test 1</div>
          <div>test 1</div>
        <div className="w-full h-screen bg-center bg-no-repeat background-image absolute z-[50]"> */}
          {/* <div className="w-full h-screen bg-opacity-10 bg-black flex justify-center items-center absolute z-10">
          </div> */}
          {/* </div> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
