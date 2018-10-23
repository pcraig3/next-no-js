import Link from 'next/link'
import Layout from '../components/Layout'

const About = () => (
  <Layout title={'About us'}>
    <h1>About us</h1>
    <p>
      We use <em>every part</em> of the avocado.
    </p>
    <p>
      We make websites that work <em>even in space</em>.
    </p>
    <p>
      When we are not redefining the possible, we unwind with{' '}
      <Link href={{ pathname: '/show', query: { q: 'batman+beyond' } }}>
        <a>our fave TV show</a>
      </Link>.{' '}
      <span role="img" aria-label="Bat">
        🦇
      </span>
    </p>
  </Layout>
)

export default About
