import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import img from './images/bg.jpg'

const StyledApp = styled.div`
  background-image: url(${img});
  height: 100vh;
  background-position: center;
  background-size: cover;

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
      transition: opacity 1s ease;

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
      background-color: #fff;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 300px;
      min-height: 200px;
    }

    .fly-in {
      animation: fly-in-animation 2s cubic-bezier(0.5, 0.25, 0, 1);
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
    }, 1000)
  }

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
          <div className="modal fly-in">Words words words words</div>
        )}
      </div>
    </StyledApp>
  )
}

export default App
