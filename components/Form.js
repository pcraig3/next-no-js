import { Component } from 'react'

const _baseStyle = {
  fontSize: 28,
  fontFamily: 'sans-serif',
  borderRadius: 0,
  WebkitAppearance: 'none',
}

const visuallyHidden = {
  position: 'absolute',
  overflow: 'hidden',
  left: -99999,
  height: 1,
  width: 1,
  margin: -1,
}

const inputStyle = {
  ..._baseStyle,
  display: 'block',
  width: '90%',
  maxWidth: 400,
  marginBottom: 15,
  padding: 5,
  border: 'none',
  borderBottom: '2px solid black',
}

const buttonStyleDisabled = {
  ..._baseStyle,
  border: '2px solid #7f7f7f',
  color: '#7f7f7f',
  padding: '2px 5px',
  background: 'transparent',
  cursor: 'not-allowed',
}

const buttonStyleEnabled = {
  ...buttonStyleDisabled,
  cursor: 'pointer',
  border: '2px solid black',
  color: 'black',
  backgroundColor: 'cyan',
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { allowDisableButton: false }
  }

  componentDidMount() {
    this.setState({ allowDisableButton: true })
  }

  render() {
    const { handleSubmit, handleChange, value } = this.props
    return (
      <form onSubmit={handleSubmit} action="/show" method="get">
        <label>
          <span style={visuallyHidden}>Search for a TV show:</span>
          <input
            style={inputStyle}
            type="text"
            name="q"
            value={value}
            onChange={handleChange}
            placeholder={'Search…'}
          />
        </label>
        <input
          style={
            this.state.allowDisableButton && Boolean(!value)
              ? buttonStyleDisabled
              : buttonStyleEnabled
          }
          type="submit"
          value="Submit"
          disabled={this.state.allowDisableButton && Boolean(!value)}
        />
      </form>
    )
  }
}

export default Form
