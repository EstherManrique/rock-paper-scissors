import React from 'react'
import styled from 'styled-components';
import Button from './Button';


const RulesStyled = styled.div`
  text-align: center;
  .rules-overlay {
    background: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2 {
      color: #3B4262;
      text-transform: uppercase;
      font-weight: 700;
      font-family: Arial;
      letter-spacing: -2px;
      margin-bottom: 3em;
    }
  }
`

const Rules = () => {

  function handleClick() {
    console.log('ola ke ase');
  }


  return (
    <RulesStyled>
      <div className="rules-overlay">
        <h2>Rules</h2>
        <img src="./images/image-rules.svg" alt="Game Rules"/>
      </div>
      <Button onClick={handleClick} />
    </RulesStyled>
  )
}

export default Rules;
