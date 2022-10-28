import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const SidebarContent = (props) => {
  const [recentBodyVisible, setRecentBodyVisible] = useState(true);
  const [groupBodyVisible, setGroupBodyVisible] = useState(true);

  return (
    <Container>
      <UserInfoCard>
        <CoverPhoto></CoverPhoto>

        <UserInfo>
          <Link to="">
            <UserImg>
              <img
                src={props.user ? props.user.photoURL : "/images/user.svg"}
                alt=""
              />
            </UserImg>
            <UserName>{props.user ? props.user.displayName : ""}</UserName>
          </Link>
          <UserBio>Software engineer at United Media Services (UMS)</UserBio>
        </UserInfo>

        <Connections>
          <Link to="">
            <div>
              <span className="title">Connections</span>
              <span className="network"> Grow your network </span>
            </div>
            <div>
              <span className="connectionNo">5</span>
            </div>
          </Link>
        </Connections>

        <Hiring href="">
          <span>Access exclusive tools & insights</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path
                d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                fill="#f8c77e"
              ></path>
              <path
                d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                fill="#e7a33e"
              ></path>
            </svg>
            Get Hired Faster, Try Premium Free
          </div>
        </Hiring>

        <Items href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
          </svg>
          <span>My items</span>
        </Items>
      </UserInfoCard>

      <Widgets>
        <WedgetList>
          <WedgetItem>
            <WedgetTitle>
              <h5 className="recent">Recent</h5>
              <img
                src="/images/down-icon.svg"
                alt=""
                onClick={() => {
                  setRecentBodyVisible(!recentBodyVisible);
                }}
                style={{
                  transform: `${recentBodyVisible ? "rotate(180deg)" : ""}`,
                }}
              />
            </WedgetTitle>
            {recentBodyVisible ? (
              <WedgetBody>
                <Link to="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                    <circle cx="8" cy="4" r="2"></circle>
                    <circle cx="12.5" cy="5.5" r="1.5"></circle>
                    <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                    <circle cx="3.5" cy="5.5" r="1.5"></circle>
                  </svg>
                  React JS, Angular, Vue JS, Node.JS Developers (All Versions)
                </Link>
              </WedgetBody>
            ) : (
              ""
            )}
          </WedgetItem>
          <WedgetItem>
            <WedgetTitle>
              <Link to="">Group</Link>
              <img
                src="/images/down-icon.svg"
                alt=""
                onClick={() => {
                  setGroupBodyVisible(!groupBodyVisible);
                }}
                style={{
                  transform: `${groupBodyVisible ? "rotate(180deg)" : ""}`,
                }}
              />
            </WedgetTitle>
            <WedgetBody
              style={{
                height: `${groupBodyVisible ? "100%" : "0"}`,
              }}
            >
              <Link to="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z"></path>
                  <circle cx="8" cy="4" r="2"></circle>
                  <circle cx="12.5" cy="5.5" r="1.5"></circle>
                  <path d="M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z"></path>
                  <circle cx="3.5" cy="5.5" r="1.5"></circle>
                </svg>
                React JS, Angular, Vue JS, Node.JS Developers (All Versions)
              </Link>
              <Link to="" className="see-all">
                See all
              </Link>
            </WedgetBody>
          </WedgetItem>
          <WedgetItem>
            <WedgetTitle>
              <Link to="">Events</Link>
              <img src="/images/plus-icon.svg" alt="" className="events" />
            </WedgetTitle>
          </WedgetItem>
          <WedgetItem>
            <WedgetTitle>
              <Link to="">Followed Hashtags</Link>
            </WedgetTitle>
          </WedgetItem>
        </WedgetList>
        <DiscoverMore Link to="">
          Discover more
        </DiscoverMore>
      </Widgets>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(SidebarContent);

const Container = styled.div`
  grid-area: sidebar;

  & > div {
    border-radius: 0.8rem;
  }
`;

const UserInfoCard = styled.div`
  position: relative;
  margin-bottom: 1rem;
  background-color: white;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 10%), 0 0 0 rgba(0 0 0 / 20%);
  overflow: hidden;
`;

const CoverPhoto = styled.div`
  height: 6.5rem;
  background: url("/images/card-bg.svg") no-repeat center / cover;
`;

const UserInfo = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  a {
    display: flex;
    flex-direction: column;
    margin-top: -35px;
    transition: all 167ms;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    a {
      text-decoration: underline;
    }
  }
`;

const UserImg = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  padding: 2px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.08);
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const UserName = styled.h4`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--text-color);
  margin-top: 1.5rem;
`;

const UserBio = styled.p`
  margin-top: 0.5rem;
  padding: 0 2rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
`;

const Connections = styled.div`
  padding: 1rem 0;

  a {
    width: 100%;
    display: flex;
    padding: 0.5rem 1rem;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }

  span {
    display: block;
    font-size: 1.2rem;
    font-weight: 600;

    &.title {
      color: rgba(0, 0, 0, 0.6);
    }

    &.network {
      color: rgba(0, 0, 0, 0.9);
    }

    &.connectionNo {
      color: #0a66c2;
    }
  }
`;

const Hiring = styled.a`
  display: block;
  padding: 1.5rem 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  transition: all 167ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);

    div {
      color: #0a66c2;
    }
  }

  & > span {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const Items = styled.a`
  padding: 1.5rem 1rem;
  display: flex;
  align-items: flex-end;
  gap: 0.7rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: rgba(0, 0, 0, 0.6);
  }

  span {
    font-family: inhiret;
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.9);
    margin-right: 1rem;
  }
`;

const Widgets = styled(UserInfoCard)``;

const WedgetList = styled.ul`
  padding: 2.5rem 0 1.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`;

const WedgetItem = styled.li`
  width: 100%;
  overflow: hidden;
`;

const WedgetTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 1.5rem;
  line-height: 2rem;

  &:hover > img {
    opacity: 1;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
  }

  h5 {
    font-size: 1.3rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
    padding-bottom: 0;
  }

  a {
    font-size: 1.3rem;
    font-weight: 500;
    color: #0a66c2;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  & > img {
    display: inline-block;
    padding: 1rem;
    opacity: 0;
    border-radius: 50%;
    transition: transform 167ms;
    cursor: pointer;

    &.events {
      opacity: 1;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

const WedgetBody = styled.div`
  width: 100%;
  transition: all 167ms;
  text-overflow: ellipsis !important;
  padding-right: 1rem;
  cursor: pointer;
  overflow: hidden;

  svg {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.5rem;
    vertical-align: text-bottom;
  }

  a {
    width: 100%;
    display: block;
    padding: 0 1.5rem;
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.6);
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis !important;

    &.see-all {
      padding-left: 3.5rem;
      margin-bottom: 0;
    }

    &:hover {
      color: rgba(0, 0, 0, 0.9);
      background-color: rgba(0, 0, 0, 0.08);
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

const DiscoverMore = styled.a`
  display: block;
  padding: 1.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  text-align: center;

  &:hover {
    animation: blackBgFlash 0.5s;
  }
`;
