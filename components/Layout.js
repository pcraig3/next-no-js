import Head from 'next/head'

const layoutStyle = {
  fontSize: 28,
  fontFamily: 'sans-serif',
  marginTop: 15,
  paddingLeft: 15,
  paddingRight: 10,
}

const Layout = props => (
  <div style={layoutStyle}>
    <Head>
      <title>{props.title ? `${props.title} — ` : null} TV srch</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {props.children}
  </div>
)

export default Layout
