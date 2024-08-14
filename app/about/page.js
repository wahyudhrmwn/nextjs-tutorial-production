import Link from "next/link"

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>AboutPage</h1>
      <Link href={'/'} className="text-2xl">HomePage</Link>
    </div>
  )
}

export default AboutPage