import styled from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid rgba(0, 0, 0, 11);
  background-color: ${(props) => props.bkg};
  border-radius: 0.25rem;
  width: 30%;
  margin-bottom: 20px;
  font-family: "Ubuntu", sans-serif;
  color: #000;
  box-shadow: 5px 5px 1px black;

  &:hover {
    color: black;
    text-decoration: none;
    background-color: ${(props) => props.bkgHover};
  }

  button {
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 5px;
    background-color: rgba(239, 43, 43, 0.8);
    cursor: pointer;
    color: #fff;
    padding: 0.2rem;
    font-size: 12px;
    width: 1.5rem;
    border: 1px solid gray;

    &:hover {
      background-color: rgba(239, 43, 43, 1);
      border-color: black;
    }
  }

  h4 {
    display: inline-block;
    padding: 0 1rem;
    margin-top: 1rem;
  }

  .temp {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 0.3rem 1rem;
  }

  .minTemp,
  .maxTemp {
    display: flex;
    flex-direction: column;
  }

  .temp h5 {
    margin-bottom: 1rem;
  }

  .link,
  .link:hover {
    color: black;
    text-decoration: none;
  }

  .hora {
    font-size: 12px;
    color: ${(props) => props.textColor};
  }

  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;
