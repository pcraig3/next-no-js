import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import Rating from '../components/Rating'

const plus2space = str => (str ? str.replace(/\+/g, ' ') : '')

const HomeLink = () => (
  <Link href="/">
    <a>← Start over</a>
  </Link>
)

const ShowFound = ({ show, q }) => (
  <React.Fragment>
    <h1>{show.name}</h1>
    {show.name.toLowerCase() !== plus2space(q).toLowerCase() ? (
      <p>Closest match for ‘{`${plus2space(q)}`}’</p>
    ) : null}
    <div>
      {show.image ? <img src={show.image.medium} /> : 'No image available'}
    </div>
    <p>Premiered: {show.premiered}</p>
    <Rating average={show.rating.average} />
    <HomeLink />
  </React.Fragment>
)

const ShowNotFound = ({ q }) => (
  <React.Fragment>
    <h1>Whoops</h1>
    <p>Nothing found for ‘{!q ? ' ' : `${plus2space(q)}`}’</p>
    <p>Check urself b4 u wreck urself.</p>
    <HomeLink />
  </React.Fragment>
)

const Show = ({ show, found, q }) => (
  <Layout>
    {found ? <ShowFound show={show} q={q} /> : <ShowNotFound q={q} />}
  </Layout>
)

Show.getInitialProps = async function(props) {
  let data = {}
  const notFound = { found: false, data, q: '' }

  // if no query param exists, fail
  if (!props.query || !props.query.q) {
    return notFound
  }

  try {
    const res = await fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${props.query.q}`,
    )
    data = await res.json()
  } catch (e) {
    return { ...notFound, q: props.query.q }
  }

  return { found: true, show: data, q: props.query.q }
}

export default Show
