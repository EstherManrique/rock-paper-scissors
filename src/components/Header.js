import React from 'react';
import styled from 'styled-components';
import Score from './Score';

const HeaderStyled = styled.div`
  color: white;
  padding: 12px 12px 12px 23px;
  border-radius: .5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid rgba(255, 255, 255, .29);  
  h1 {
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;    
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    padding: 24px;
    h1 {
      font-size: 30px;
      line-height: .9;
    }
  }
`

const Header = () => {
  return (
    <HeaderStyled>
      <h1>
        Rock <br/> Paper <br/> Scissors
      </h1>
      <Score />
    </HeaderStyled>
  )
}

export default Header

