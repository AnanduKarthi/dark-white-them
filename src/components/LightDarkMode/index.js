import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  modeChange = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const modeClassName = isDark ? 'dark-mode' : 'light-mode'
    const buttonText = isDark ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="full-container">
        <div className={`box-container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mood</h1>
          <button type="button" className="button" onClick={this.modeChange}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
