import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AsideContent = () => {
  return (
    <Container>
      <Suggestions>
        <Header>
          <span>Add to your feed</span>
          <Link to="">
            <img src="/images/feed-icon.svg" alt="" />
          </Link>
        </Header>
        <SuggestionsList>
          <SuggetionItem>
            <Link to="">
              <img src="/images/user.svg" alt="" />
            </Link>
            <div>
              <Link to="">
                <span className="title">Robert Kenneth</span>
                <span className="description">
                  HR Manager | MBA in Progress
                </span>
              </Link>
              <button>
                <img src="/images/plus-icon.svg" alt="" /> Follow
              </button>
            </div>
          </SuggetionItem>
          <SuggetionItem>
            <Link to="">
              <img src="/images/user.svg" alt="" />
            </Link>
            <div>
              <Link to="">
                <span className="title">Robert Kenneth</span>
                <span className="description">
                  HR Manager | MBA in Progress
                </span>
              </Link>
              <button>
                <img src="/images/plus-icon.svg" alt="" /> Follow
              </button>
            </div>
          </SuggetionItem>
          <SuggetionItem>
            <Link to="">
              <img src="/images/user.svg" alt="" />
            </Link>
            <div>
              <Link to="">
                <span className="title">Robert Kenneth</span>
                <span className="description">
                  HR Manager | MBA in Progress
                </span>
              </Link>
              <button>
                <img src="/images/plus-icon.svg" alt="" /> Follow
              </button>
            </div>
          </SuggetionItem>
        </SuggestionsList>
        <ViewAll href="">
          View all recommendations
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="#0a66c2"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
          </svg>
        </ViewAll>
      </Suggestions>

      <Ads>
        <AdsHeader>
          <span>Ad</span>
          <button>...</button>
        </AdsHeader>
        <AdsBody>
          <p>Follow Ebi the lighthouse of the banking sector</p>
          <img src="/images/photo.svg" alt="" />
          <p>Emad,Stay updates with the latest news</p>
          <button>Follow</button>
        </AdsBody>
      </Ads>
    </Container>
  );
};

export default AsideContent;

const Container = styled.div`
  grid-area: aside;
`;

const Suggestions = styled.div`
  position: relative;
  margin-bottom: 1rem;
  border-radius: 0.8rem;
  background-color: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 0 0 rgb(0 0 0 / 20%);
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0.5rem 1.5rem 1.5rem;

  span {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--text-color);
    margin-top: 0.7rem;
  }

  img {
    cursor: pointer;
  }
`;

const SuggestionsList = styled.ul`
  padding: 0 1.5rem;
`;

const SuggetionItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;

  & > a > img {
    width: 4rem;
    height: 4rem;
    display: block;
    border-radius: 50%;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
    span {
      display: block;

      &.title {
        font-size: 1.3rem;
        font-weight: 500;
        color: var(--text-color);
      }

      &.description {
        font-size: 1.15rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.6);
        padding-bottom: 0.3rem;
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      color: rgba(0, 0, 0, 0.6);
      font-family: inherit;
      font-size: 1.6rem;
      font-weight: 600;
      padding: 0.7rem 1.7rem;
      line-height: 2rem;
      border-radius: 2rem;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      transition: all 167ms;

      &:hover {
        box-shadow: inset 0 0 0 2px rgb(0 0 0 / 60%);
        background-color: rgba(0, 0, 0, 0.08);
      }

      img {
        opacity: 0.8;
      }
    }
  }
`;

const ViewAll = styled.a`
  width: fit-content;
  margin: 1.5rem 2rem 1.5rem;
  padding: 0 1rem;
  display: flex;
  align-items: flex-end;
  gap: 0.3rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    animation: blackBgFlash 0.4s;
  }

  svg {
    fill: rgba(0, 0, 0, 0.6);
  }
`;

const Ads = styled(Suggestions)`
  padding-bottom: 2rem;
`;

const AdsHeader = styled(Header)`
  justify-content: flex-end;
  align-items: center;

  span {
    font-size: 1.4rem;
    margin-top: 0;
  }

  button {
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.8rem;
    color: rgba(0, 0, 0, 0.6);
    width: 3rem;
    height: 3rem;
    text-align: center;
    border-radius: 50%;
    font-family: unset;
    cursor: pointer;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

const AdsBody = styled.div`
  text-align: center;
  padding: 0 1.5rem;

  p {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.4rem;

    &:last-of-type {
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 2.5rem;
    }
  }

  img {
    display: block;
    margin: 2rem auto;
  }

  button {
    font-size: 1.6rem;
    font-weight: 600;
    color: #00a0dc;
    padding: 0.8rem 2rem;
    border-radius: 2rem;
    margin-top: 0.5rem;

    box-shadow: inset 0 0 0 1px #00a0dc;
    transition: all 167ms;

    &:hover {
      box-shadow: inset 0 0 0 2px #0a66c2;
      background-color: rgba(112, 181, 249, 0.15);
    }
  }
`;
