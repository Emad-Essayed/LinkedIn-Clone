import React from "react";
import styled from "styled-components";

const HeaderModal = ({ title, resetModal }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <button onClick={(e) => resetModal(e)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="mercado-match"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
        </svg>
      </button>
    </Container>
  );
};

export default HeaderModal;

const Container = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 2rem;
    font-weight: 400;
  }

  button {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.6);

    svg {
      width: 2.4rem;
      height: 2.4rem;
      pointer-events: none;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;
