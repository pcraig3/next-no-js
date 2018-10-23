import Link from 'next/link'
import { withRouter } from 'next/router'

const aStyle = {
  marginRight: 15,
}

const aStyleSelected = {
  marginRight: 15,
  textDecoration: 'line-through',
}

const links = [
  {
    pathname: '/',
    name: 'Home',
  },
  {
    pathname: '/about',
    name: 'About us',
  },
]

const Header = ({ router }) => (
  <div>
    {links.map((link, i) => (
      <Link key={i} href={link.pathname}>
        <a
          aria-current={link.pathname === router.pathname ? true : null}
          style={link.pathname === router.pathname ? aStyleSelected : aStyle}
        >
          {link.name}
        </a>
      </Link>
    ))}
  </div>
)

export default withRouter(Header)
