import React from 'react'
import styled from 'styled-components'

const StyledModal4 = styled.div`
  display: flex;
  flex-direction: column;

  .modal-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  hr {
    margin: -3px 0 30px 0;
  }

  .result {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.5;

    .monthly {
      text-align: center;
      margin-left: -15px;
      font-size: 70px;
      margin-bottom: 20px;
    }
  }

  .button-div {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

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
`

export default function ModalStage4({
  modalStage,
  setModalStage,
  formData,
  setFormData,
}) {
  const calcMonthlyPayments = () => {
    let n = formData.termMonths
    let r = formData.interestRate / 100 / 12
    let d = ((1 + r) ** n - 1) / (r * (1 + r) ** n)

    return formData.loanAmount / d
  }

  return (
    <StyledModal4>
      <div className="modal-title">Your Monthly Payment is:</div>
      <hr />
      <div className="result">
        <div className="monthly">${calcMonthlyPayments().toFixed(2)}</div>
        <div>Total Principal Paid: ${formData.loanAmount}</div>
        <div>
          Total Interest Paid: $
          {(
            calcMonthlyPayments() * formData.termMonths -
            formData.loanAmount
          ).toFixed(2)}
        </div>
      </div>
      <div className="button-div">
        <button
          type="button"
          onClick={() => {
            setFormData({
              ...formData,
              loanAmount: '',
              termYears: '',
              termMonths: '',
              interestRate: '',
            })
            setModalStage(1)
          }}
        >
          Reset
        </button>
      </div>
    </StyledModal4>
  )
}
