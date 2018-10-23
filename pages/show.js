import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'

const Show = ({ show }) => (
  <Layout title={'Batman Beyond'}>
    <h1>{show.name}</h1>
    <div>
      {show.image ? <img src={show.image.medium} /> : 'No image available'}
    </div>
    <p>Premiered: {show.premiered}</p>
    <p>Rating: Love it.</p>
  </Layout>
)

Show.getInitialProps = async function() {
  const res = await fetch(
    'https://api.tvmaze.com/singlesearch/shows?q=batman+beyond',
  )
  const data = await res.json()

  return {
    show: data,
  }
}

export default Show
