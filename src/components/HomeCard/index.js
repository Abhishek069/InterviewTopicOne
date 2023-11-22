import {Component} from 'react'
import './index.css'

class HomeCardCon extends Component {
  state = {
    isButtonClicked: true,
    takeInputValue: '',
  }

  render() {
    const {isButtonClicked, takeInputValue} = this.state
    const changeText = () => {
      if (isButtonClicked) {
        console.log('n')
        this.setState({isButtonClicked: false})
      } else {
        this.setState({isButtonClicked: true})
      }
    }

    const getInputValue = e => {
      console.log(takeInputValue)
      this.setState({takeInputValue: e.target.value})
    }

    return (
      <div className="home-card-container">
        <div className="card-con">
          <div className="header-card-container">
            <h1>Editable Text input</h1>
          </div>

          {isButtonClicked ? (
            <div className="Body-card-con">
              <input
                className="input-box"
                value={takeInputValue}
                onChange={getInputValue}
              />
              <button
                onClick={changeText}
                className="button-attach-with-input-box"
              >
                save
              </button>
            </div>
          ) : (
            <div className="Body-card-con">
              <p>{takeInputValue}</p>
              <button
                onClick={changeText}
                className="button-attach-with-input-box"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default HomeCardCon
