import { Component } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import Form from '../components/Form'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    let q = encodeURI(this.state.value.trim().replace(/\s+/g, '+'))

    Router.push({
      pathname: '/show',
      query: { q },
    })
  }

  render() {
    return (
      <Layout>
        <h1>TV srch</h1>
        <p>The hipp.ly-est (dot io) place to search for TV shows.</p>
        <Form
          handleSubmit={this.handleSubmit}
          value={this.state.value}
          handleChange={this.handleChange}
        />
      </Layout>
    )
  }
}

export default Index
