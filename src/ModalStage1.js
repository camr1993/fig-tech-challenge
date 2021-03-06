import React from 'react'
import styled from 'styled-components'

const StyledModal1 = styled.div`
  display: flex;
  flex-direction: column;

  .modal-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  hr {
    margin: -3px 0 30px 0;
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
`

export default function ModalStage1({
  modalStage,
  setModalStage,
  handleChange,
  formData,
}) {
  return (
    <StyledModal1>
      <div className="modal-title">Enter Loan Amount:</div>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setModalStage(modalStage + 1)
        }}
        className="input-form"
      >
        <div>
          <span>$</span>
          <input
            type="number"
            name="loanAmount"
            onChange={handleChange}
            value={formData.loanAmount}
            required
            min="0"
          />
        </div>
        <div className="button-div">
          <button type="submit">Continue</button>
        </div>
      </form>
    </StyledModal1>
  )
}
