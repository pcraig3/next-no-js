const layoutStyle = {
  fontSize: 28,
  fontFamily: 'sans-serif',
  marginTop: 15,
  paddingLeft: 15,
  paddingRight: 10,
}

const Layout = props => <div style={layoutStyle}>{props.children}</div>

export default Layout
