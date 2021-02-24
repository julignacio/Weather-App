import styled from 'styled-components';

export const StyledCiudad = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
    background-color: ${props => props.bkg};
    font-family: 'Ubuntu', sans-serif;
    padding: 1rem;

  .nombre {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    padding: .5rem;
  }

  .temp, .weather, .position {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: auto;
    margin-bottom: 2rem;
  }

  .data {
    flex-direction: column;
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  .data:hover, .nombre:hover {
    background-color: ${props => props.bkgHover};
    border-radius: 10px;
  }
`
