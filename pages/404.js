import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className=" md:mt-24 md:items-center md:justify-center md:space-x-6">
      <div className="px-4">
        <h1>Sorry your page isn't here. We have 404ed. Darn.</h1>
      </div>
      <div className="px-4 py-5">
      <h2><Link href="/">CLICK HERE</Link> to go to the homepage.</h2>
     
      </div>
      <div className="px-4">
      <h2>OR wander around <Link href="https://observablehq.com/@justingosses/fourzerofour">THIS abandoned industrial island in dispair</Link>.</h2>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1487820746671!6m8!1m7!1sA3tTI4JZsf22r2rcUZch3w!2m2!1d32.62712480678462!2d129.7386352339616!3f41.1332668802539!4f-3.7115668392063412!5f0.7820865974627469" height="600px" width="100%"></iframe>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1487820746671!6m8!1m7!1sA3tTI4JZsf22r2rcUZch3w!2m2!1d32.62712480678462!2d129.7386352339616!3f41.1332668802539!4f-3.7115668392063412!5f0.7820865974627469" height="100%" width="100%"></iframe> */}
      {/* <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
        <Link href="/">
          <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
            Back to homepage
          </button>
        </Link>
      </div> */}
    </div>
  )
}
