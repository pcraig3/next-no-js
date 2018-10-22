import Link from 'next/link'
import Layout from '../components/Layout'

const About = () => (
  <Layout>
    <h1>About us</h1>
    <p>
      We use <em>every part</em> of the avocado.
    </p>
    <p>
      We make websites that work <em>even in space</em>.
    </p>

    <Link href="/">
      <a>← Home</a>
    </Link>
  </Layout>
)

export default About
