import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import img from './images/bg.jpg'

const StyledApp = styled.div`
  background-image: url(${img});
  height: 100vh;
  background-position: center;
  background-size: cover;

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  .overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;

    .welcome {
      max-width: 430px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      text-align: center;
      font-size: 18px;
      opacity: 1;
      transition: opacity 0.8s ease;

      .title {
        font-size: 70px;
        margin-bottom: 10px;
      }

      button {
        color: #f5f4f4;
        font-size: 20px;
        margin-top: 30px;
        border-radius: 5px;
        padding: 10px 20px;
        background-color: #667eea;
        cursor: pointer;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #849aff;
        }
      }
    }

    .modal {
      background-color: #f5f4f4;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      /* justify-content: center;
      align-items: center; */
      min-width: 300px;
      min-height: 100px;
      padding: 30px;
      box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);

      .modal-text {
        display: flex;
        flex-direction: column;

        .modal-title {
          font-size: 20px;
          margin-bottom: 10px;
        }

        hr {
          margin: -3px 0 30px 0;
          /* border: 1px solid #cecefb; */
        }

        .input-form {
          & > div {
            font-size: 20px;
            display: flex;
            align-items: center;
          }

          input {
            height: 30px;
            border: 1px solid #bfbfbf;
            border-radius: 5px;
            font-size: 20px;
            padding: 2px 7px;
            margin-left: 5px;
            width: 268px;
          }

          .button-div {
            margin-top: 30px;
            width: 100%;
            display: flex;
            justify-content: center;

            button {
              color: #f5f4f4;
              font-size: 16px;
              border-radius: 5px;
              padding: 10px 20px;
              background-color: #667eea;
              cursor: pointer;
              transition: background-color 0.3s ease;
              box-shadow: none;
              border: none;

              &:hover {
                background-color: #849aff;
              }
            }
          }
        }
      }
    }

    .fly-in {
      animation: fly-in-animation 1s cubic-bezier(0.5, 0.25, 0, 1);
    }

    @keyframes fly-in-animation {
      0% {
        transform: translateY(100vh);
      }
      100% {
        transform: translateY(0%);
      }
    }
  }
`

function App() {
  const [modalStage, setModalStage] = useState(0)
  const [formData, setFormData] = useState({
    loanAmount: null,
    termYears: null,
    termMonths: null,
    interestRate: null,
  })
  const welcomeDiv = useRef(null)

  const handleGetStarted = () => {
    welcomeDiv.current.style.opacity = '0'
    setTimeout(function () {
      welcomeDiv.current.style.display = 'none'
      setModalStage(1)
    }, 800)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  console.log('FROM DATA', formData)

  return (
    <StyledApp>
      <div className="overlay"></div>
      <div className="container">
        <div ref={welcomeDiv} className="welcome">
          <div className="title">Welcome</div>
          <div>
            Before you buy your dream home, you need to figure out loan payments
            that you can afford. We can help you get there.
          </div>
          <button type="button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
        {modalStage === 1 && (
          <div className="modal fly-in">
            <div className="modal-text">
              <div className="modal-title">Enter Loan Amount:</div>
              <hr />
              <form
                onSubmit={() => setModalStage(modalStage + 1)}
                className="input-form"
              >
                <div>
                  <span>$</span>
                  <input
                    type="number"
                    name="loanAmount"
                    onChange={handleChange}
                    value={formData.loanAmount}
                  />
                </div>
                <div className="button-div">
                  <button type="submit">Continue</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </StyledApp>
  )
}

export default App
