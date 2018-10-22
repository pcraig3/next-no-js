import Link from 'next/link'
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <h1>Home</h1>
    <p>Thank you for visiting.</p>
    <p>
      Thank <em>us</em> for blowing your mind with our daring innovation.
    </p>

    <Link href="/about">
      <a>About us →</a>
    </Link>
  </Layout>
)

export default Index
