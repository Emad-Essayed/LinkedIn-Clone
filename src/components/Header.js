import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { signoutApi } from "../actions";

const Header = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpened, setIsOpened] = useState(false);
  const userctrl = useRef();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    function closeMenu(e) {
      if (userctrl.current && !userctrl.current.contains(e.target)) {
        setIsOpened(false);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousedown", closeMenu);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("mousedown", closeMenu);
    };
  }, []);

  const handleOpenSubMenuCLick = (e) => {
    if (e.target !== e.currentTarget) {
      setIsOpened(false);
      return;
    }

    setIsOpened(!isOpened);
  };
  return (
    <Container>
      <MainHeader>
        <Logo to="/home">
          <img src="/images/home-logo.svg" alt="" />
        </Logo>

        <UserProfile>
          <UserImage>
            <Link to="">
              {props.user && props.user.photoURL ? (
                <img src={props.user.photoURL} alt="" />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
            </Link>
          </UserImage>
        </UserProfile>

        <Search>
          <input type="text" placeholder="Search" />
          <img src="/images/search-icon.svg" alt="" />
        </Search>

        <Navbar>
          <Menu>
            <MenuList>
              <MenuItem className="active">
                <Link to="/home">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                  >
                    <path d="m23 9v2h-2v7c0 1.7-1.3 3-3 3h-4v-6h-4v6h-4c-1.7 0-3-1.3-3-3v-7h-2v-2l11-7z"></path>
                    <path d="m20 2h-3v3.2l3 1.9z"></path>
                  </svg>
                  <span>Home</span>
                </Link>
              </MenuItem>

              <MenuItem>
                <Link to="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="people-medium"
                    data-supported-dps="24x24"
                    fill="currentColor"
                  >
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                  </svg>
                  <span>My Network</span>
                </Link>
              </MenuItem>

              {windowWidth < 992 && (
                <MenuItem>
                  <Link to="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="post-fill-medium"
                      data-supported-dps="24x24"
                      fill="currentColor"
                    >
                      <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-5 8h4v2h-4v4h-2v-4H7v-2h4V7h2z"></path>
                    </svg>
                    <span>Post</span>
                  </Link>
                </MenuItem>
              )}

              {windowWidth < 992 && (
                <MenuItem>
                  <Link to="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="bell-active-medium"
                      data-supported-dps="24x24"
                      fill="currentColor"
                    >
                      <path d="M22 19.24a3.46 3.46 0 01-.09.78l-.22 1-6.76-1.51A2.16 2.16 0 0115 20a2 2 0 11-3.53-1.28L2 16.62l.22-1A4.45 4.45 0 014 13.12l1.22-.93 15.46 3.44.7 1.36a5 5 0 01.62 2.25zm-1.49-10.4a6.29 6.29 0 00-4.92-6.69A6.76 6.76 0 0014.18 2a6.29 6.29 0 00-5.9 4.12l-2 5.27 13.8 3.08z"></path>
                    </svg>
                    <span>Notifications</span>
                  </Link>
                </MenuItem>
              )}

              <MenuItem>
                <Link to="">
                  <svg
                    id="global-nav-icon--mercado__jobs"
                    height="24"
                    width="24"
                  >
                    <path d="m17 6v-1c0-1.7-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3v1h-5v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-4zm-8-1c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1h-6zm10 9c1.2 0 2.3-.5 3-1.4v4.4c0 1.7-1.3 3-3 3h-14c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4z"></path>
                  </svg>
                  <span>Jobs</span>
                </Link>
              </MenuItem>

              {windowWidth >= 992 && (
                <>
                  <MenuItem>
                    <Link to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="messages-medium"
                        data-supported-dps="24x24"
                        fill="currentColor"
                      >
                        <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                      </svg>
                      <span>Messaging</span>
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="bell-active-medium"
                        data-supported-dps="24x24"
                        fill="currentColor"
                      >
                        <path d="M22 19.24a3.46 3.46 0 01-.09.78l-.22 1-6.76-1.51A2.16 2.16 0 0115 20a2 2 0 11-3.53-1.28L2 16.62l.22-1A4.45 4.45 0 014 13.12l1.22-.93 15.46 3.44.7 1.36a5 5 0 01.62 2.25zm-1.49-10.4a6.29 6.29 0 00-4.92-6.69A6.76 6.76 0 0014.18 2a6.29 6.29 0 00-5.9 4.12l-2 5.27 13.8 3.08z"></path>
                      </svg>
                      <span>Notifications</span>
                    </Link>
                  </MenuItem>

                  <MenuItem className="sub-menu" ref={userctrl}>
                    <UserAccount>
                      <UserImage>
                        <Link to="" onClick={handleOpenSubMenuCLick}>
                          {props.user && props.user.photoURL ? (
                            <img src={props.user.photoURL} alt="" />
                          ) : (
                            <img src="/images/user.svg" alt="" />
                          )}

                          <span onClick={handleOpenSubMenuCLick}>
                            Me
                            <svg
                              id="global-nav-icon--classic__down-arrow"
                              width="16"
                              height="16"
                              data-supported-dps="16x16"
                              onClick={handleOpenSubMenuCLick}
                            >
                              <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                            </svg>
                          </span>
                        </Link>
                        {isOpened ? (
                          <div className="user-controls">
                            <div className="user-info">
                              <div>
                                <UserImage>
                                  <Link to="">
                                    {props.user && props.user.photoURL ? (
                                      <img src={props.user.photoURL} alt="" />
                                    ) : (
                                      <img src="/images/user.svg" alt="" />
                                    )}
                                  </Link>
                                </UserImage>
                                <div>
                                  <h4>
                                    {props.user ? props.user.displayName : ""}
                                  </h4>
                                  <p>
                                    Software Engineer at United Media Services
                                    (UMS)
                                  </p>
                                </div>
                              </div>
                              <Link to="">View Profile</Link>
                            </div>

                            <div className="Account">
                              <h4>Account</h4>
                              <ul>
                                <li>
                                  <Link to="">Settings & Privacy</Link>
                                </li>
                                <li>
                                  <Link to="">Help</Link>
                                </li>
                                <li>
                                  <Link to="">Language</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="manage">
                              <h4>Manage</h4>
                              <ul>
                                <li>
                                  <Link to="">Posts & Activities</Link>
                                </li>
                                <li>
                                  <Link to="">Jop Posting Account</Link>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <Link to="" onClick={() => props.signOut()}>
                                Sign Out
                              </Link>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </UserImage>
                    </UserAccount>
                  </MenuItem>

                  <MenuItem className="sub-menu">
                    <SubMenu>
                      <Link to="">
                        <svg
                          id="global-nav-icon--classic__work"
                          height="24"
                          width="24"
                        >
                          <path d="M10 10h4v4h-4v-4zm0 11h4v-4h-4v4zm-7-7h4v-4H3v4zm0 7h4v-4H3v4zM3 7h4V3H3v4zm14 7h4v-4h-4v4zm0-11v4h4V3h-4zm-7 4h4V3h-4v4zm7 14h4v-4h-4v4z"></path>
                        </svg>
                        <span>
                          Work
                          <svg
                            id="global-nav-icon--classic__down-arrow"
                            width="16"
                            height="16"
                            data-supported-dps="16x16"
                          >
                            <path d="M8.8 10.66L14 5.12a.07.07 0 00-.07-.12H2.07a.07.07 0 00-.07.12l5.2 5.54a1.1 1.1 0 001.6 0z"></path>
                          </svg>
                        </span>
                      </Link>
                    </SubMenu>
                  </MenuItem>

                  <MenuItem className="sub-menu">
                    <PremiumLink>
                      <Link to="">
                        <span>Get Hired Faster, Try Premium Free</span>
                      </Link>
                    </PremiumLink>
                  </MenuItem>
                </>
              )}
            </MenuList>
          </Menu>

          {windowWidth < 992 && (
            <Messages>
              <Link to="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="messages-medium"
                  data-supported-dps="24x24"
                  fill="currentColor"
                >
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                </svg>
              </Link>
            </Messages>
          )}
        </Navbar>
      </MainHeader>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signoutApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
  padding-left: 2.4rem;
  z-index: 9999;

  @media (min-width: 1128px) {
    padding-left: 0;
  }
`;

const MainHeader = styled.header`
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  display: none;
  font-size: 0;
  margin-right: 0.8rem;

  @media (min-width: 992px) {
    display: block;
    font-size: 0;
    margin-right: 0.8rem;
  }

  img {
    width: 3.4rem;
    height: 3.4rem;
  }
`;

const UserProfile = styled.div`
  margin-right: 0.8rem;
  font-size: 0;

  @media (min-width: 992px) {
    display: none;
  }
`;

const UserImage = styled.div`
  img {
    width: 3.5rem;
    height: 3.5rem;
    object-fit: cover;
    border-radius: 50%;
    transition: all 167ms;
  }
`;

const Search = styled.div`
  flex-grow: 1;
  position: relative;
  z-index: 999;
  padding: 0.7rem 0;

  @media (min-width: 992px) {
    max-width: 280px;
  }

  input {
    width: 100%;
    height: 3.4rem;
    padding: 0 0.8rem 0 3.5rem;
    line-height: 1.75;
    font-family: inherit;
    font-size: 1.4rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    background-color: #eef3f8;
    border-color: #dce6f1;
    border-radius: 0.4rem;
    transition: all 200ms ease-in-out;

    @media (min-width: 992px) {
      width: 80%;

      &:focus {
        width: 100%;
      }
    }
  }

  & > img {
    position: absolute;
    top: 50%;
    left: 1.3rem;
    transform: translateY(-50%);
    opacity: 0.6;
    pointer-events: none;
  }
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 992px) {
    flex-grow: 1;
  }
`;

const Menu = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f5f5f5;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 2.4rem;

  @media (min-width: 992px) {
    position: static;
    background-color: #fff;
    margin-left: auto;
    border-top: 0;
    padding: 0;
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  max-width: 576px;
  margin: auto;

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    justify-content: flex-end;
    gap: 2rem;
    max-width: none;
  }
`;

const MenuItem = styled.li`
  padding: 0.5rem;
  position: relative;
  transition: 200ms ease-in-out;

  @media (min-width: 992px) {
    padding: 0.5rem 0.5rem 0.5rem;

    &:not(.sub-menu)::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.9);
      transform: scaleX(0);
      transition: 200ms ease-in-out;
    }
  }

  &.active,
  &:hover {
    &::before {
      transform: scaleX(1);
    }

    a {
      color: rgba(0, 0, 0, 0.9);
      opacity: 1;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    white-space: nowrap;
    line-height: 1.5;

    svg {
      display: block;
      width: 2.4rem;
      height: 2.4rem;
      fill: currentColor;
    }
  }
`;

const UserAccount = styled.div`
  padding-right: 2.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    & ${UserImage} img {
      transform: scale(0.9);
    }
  }

  & ${UserImage} img {
    width: 2.4rem;
    height: 2.4rem;
    pointer-events: none;
  }

  a {
    border: 0;
    cursor: pointer;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    pointer-events: none;

    svg {
      width: auto;
      height: auto;
      pointer-events: none;
    }
  }

  .user-controls {
    position: absolute;
    right: 0;
    top: 130%;
    width: 27rem;
    background-color: white;
    display: block;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);

    & > div {
      padding: 0.5rem 1rem 1rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);

      h4 {
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--text-color);
      }
    }

    .user-info {
      & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem;

        ${UserImage} img {
          width: 6rem;
          height: 6rem;
          transform: none;
        }

        p {
          font-size: 1.4rem;
          font-weight: 400;
          white-space: normal;
        }
      }

      & > a {
        display: block;
        width: 100%;
        text-align: center;
        color: var(--primary-color);
        box-shadow: inset 0 0 0 1px var(--primary-color);
        border-radius: 2rem;
        margin-top: 1rem;
        font-size: 1.4rem;
        padding: 0.2rem 0;
        font-weight: 500;
        transition: all 200ms;

        :hover {
          text-decoration: none;
          box-shadow: inset 0 0 0 2px var(--primary-color);
          animation: blueBgFlash 0.5s;
        }
      }
    }

    ul {
      text-align: left;

      li {
        margin: 0.5rem 0;

        :hover a {
          text-decoration: underline;
        }
      }
    }

    a {
      display: block;
      color: rgba(0, 0, 0, 0.6);
      font-size: 1.4rem;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const SubMenu = styled(UserAccount)`
  padding-right: 0;

  &::after {
    display: none;
  }
`;

const PremiumLink = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0 1rem;

    a {
      max-width: 10rem;
      min-width: 8rem;
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 400;
      color: #915907;
      white-space: normal;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Messages = styled.div`
  padding-left: 2rem;
  padding-right: 5rem;

  svg {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
    color: rgba(0, 0, 0, 0.6);
    opacity: 0.8;
  }
`;
