import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import styled from "styled-components";
import { signInApi } from "../actions";
import { Navigate } from "react-router-dom";

const Login = (props) => {
  const [emailorPhone, setEmailorPhone] = useState("");
  const [password, setPassword] = useState("");
  const [sliderIndex, setSliderIndex] = useState(0);
  const slider = useRef();

  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    afterChange: (current) => setSliderIndex(current),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      {props.user && <Navigate to="/home" />}
      <Header>
        <div className="container">
          <Navbar>
            <LogoLink>
              <img src="/images/login-logo.svg" alt="" />
            </LogoLink>
            <Menu>
              <LeftMenuList>
                <MenuItem>
                  <MenuItemLink href="">
                    <img src="/images/nav-discover.svg" alt="" />
                    <span>Discover</span>
                  </MenuItemLink>
                </MenuItem>
                <MenuItem>
                  <MenuItemLink href="">
                    <img src="/images/nav-network.svg" alt="" />
                    <span>People</span>
                  </MenuItemLink>
                </MenuItem>
                <MenuItem>
                  <MenuItemLink href="">
                    <img src="/images/nav-learning.svg" alt="" />
                    <span>Learning</span>
                  </MenuItemLink>
                </MenuItem>
                <MenuItem>
                  <MenuItemLink href="">
                    <img src="/images/nav-jobs.svg" alt="" />
                    <span>Jobs</span>
                  </MenuItemLink>
                </MenuItem>
              </LeftMenuList>
              <RightMenuList>
                <Join href="">Join now</Join>
                <SignIn href="">Sign In</SignIn>
              </RightMenuList>
            </Menu>
          </Navbar>
        </div>
      </Header>

      <HeroSection>
        <div className="container">
          <HeroWrapper>
            <Form>
              <h1>Welcome to your professional community</h1>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="input">
                  <input
                    className={emailorPhone && "filled"}
                    type="text"
                    name="email"
                    value={emailorPhone}
                    onChange={(e) => setEmailorPhone(e.target.value)}
                  />
                  <label htmlFor="email">Email or phone number</label>
                </div>
                <div className="input">
                  <input
                    className={password && "filled"}
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="password" className="placeholder">
                    Password (6 + character)
                  </label>
                </div>
                <p>
                  By clicking Agree & Join, you agree to the LinkedIn{" "}
                  <span>User Agreement, Privacy Policy</span> ,and{" "}
                  <span>Cookie Policy</span>
                </p>
                <button>Sign in</button>
                <p className="or">Or</p>
                <button onClick={() => props.signIn()}>
                  <img src="/images/google.svg" alt="" />
                  Sign in With Google
                </button>
              </form>
            </Form>
            <LoginHero>
              <img src="images/login-hero.svg" alt="" />
            </LoginHero>
          </HeroWrapper>
        </div>
      </HeroSection>

      <ExploreTopicsSection>
        <div className="container">
          <h2 className="section-heading">
            Explore topics you are intersted in
          </h2>
          <div>
            <h3>Content Topics</h3>
            <TopicsList>
              <li className="allTopics">
                <a href="">See All Topics</a>
              </li>
              <li>
                <a href="">Science and Environment</a>
              </li>
              <li>
                <a href="">Marketing and Advertising</a>
              </li>
              <li>
                <a href="">Sales and Retail</a>
              </li>
              <li>
                <a href="">Technology</a>
              </li>
              <li>
                <a href="">Finance and Economy</a>
              </li>
              <li>
                <a href="">Health</a>
              </li>
              <li>
                <a href="">Business and Management</a>
              </li>
            </TopicsList>
            <ShowMore href="">
              Show more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                preserveAspectRatio="xMinYMin meet"
                focusable="false"
                className="lazy-loaded"
              >
                <path
                  d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"
                  fill="currentColor"
                ></path>
              </svg>
            </ShowMore>
          </div>
        </div>
      </ExploreTopicsSection>

      <FindJobsSection>
        <div className="container">
          <h2 className="section-heading">
            Find the right job or internship for you
          </h2>
          <div>
            <h3>Suggested searches</h3>
            <TopicsList>
              <li>
                <a href="">Engineering</a>
              </li>
              <li>
                <a href="">Business Devekopment</a>
              </li>
              <li>
                <a href="">Finance</a>
              </li>
              <li>
                <a href="">Administrative Assistant</a>
              </li>
              <li>
                <a href="">Retail Associate</a>
              </li>
              <li>
                <a href="">Customer Service</a>
              </li>
              <li>
                <a href="">Operations</a>
              </li>
              <li>
                <a href="">Information Technology</a>
              </li>
              <li>
                <a href="">Marketing</a>
              </li>
              <li>
                <a href="">Human Resources</a>
              </li>
            </TopicsList>
            <ShowMore href="">
              Show more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                preserveAspectRatio="xMinYMin meet"
                focusable="false"
                className="lazy-loaded"
              >
                <path
                  d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"
                  fill="currentColor"
                ></path>
              </svg>
            </ShowMore>
          </div>
        </div>
      </FindJobsSection>

      <PostJobs>
        <div className="container">
          <div className="postjobs-wrapper">
            <h4>Post your job for millions of people to see</h4>
            <button>Post a job</button>
          </div>
        </div>
      </PostJobs>

      <Testimonials>
        <div className="container">
          <SliderHeader>
            <button
              onClick={() => slider.current.slickPrev()}
              disabled={sliderIndex === 0 ? true : false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                x="0"
                y="0"
                preserveAspectRatio="xMinYMin meet"
                className="artdeco-icon lazy-loaded"
                focusable="false"
              >
                <path
                  d="M10,12l6,8.94L14.45,22,8.26,12.85a1.5,1.5,0,0,1,0-1.69L14.45,2,16,3.06Z"
                  className="large-icon"
                  style={{ fill: "currentColor" }}
                ></path>
              </svg>
              <span>Previous</span>
            </button>
            <button
              onClick={() => slider.current.slickNext()}
              disabled={sliderIndex > 1 ? true : false}
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                x="0"
                y="0"
                preserveAspectRatio="xMinYMin meet"
                className="artdeco-icon lazy-loaded"
                focusable="false"
              >
                <path
                  d="M14,12L8,3.06,9.55,2l6.19,9.15a1.5,1.5,0,0,1,0,1.69L9.55,22,8,20.94Z"
                  className="large-icon"
                  style={{ fill: "currentColor" }}
                ></path>
              </svg>
            </button>
          </SliderHeader>
        </div>
        <Slider {...settings} ref={slider}>
          <SliderItem>
            <img src="/images/feature1.png" alt="" />
            <div>
              <h2> Let the right people know you’re open to work</h2>
              <p>
                With the Open To Work feature, you can privately tell recruiters
                or publicly share with the LinkedIn community that you are
                looking for new job opportunities.
              </p>
            </div>
          </SliderItem>
          <SliderItem>
            <img src="/images/feature2.png" alt="" />
            <div>
              <h2> Conversations today could lead to opportunity tomorrow</h2>
              <p>
                Sending messages to people you know is a great way to strengthen
                relationships as you take the next step in your career.
              </p>
            </div>
          </SliderItem>
          <SliderItem>
            <img src="/images/feature3.png" alt="" />
            <div>
              <h2> Stay up to date on your industry</h2>
              <p>
                From live videos, to stories, to newsletters and more, LinkedIn
                is full of ways to stay up to date on the latest discussions in
                your industry.
              </p>
            </div>
          </SliderItem>
        </Slider>
      </Testimonials>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Header = styled.header`
  width: 100%;
  padding: 1rem 0;
`;

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const LogoLink = styled.a`
  display: inline-block;
  width: 84px;
  height: 21px;

  @media (min-width: 768px) {
    width: 135px;
    height: 34px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LeftMenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 0 2rem 0.3rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    width: 1px;
    height: 37px;
    background-color: rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li``;

const MenuItemLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;

  img {
    opacity: 80%;
    transition: opacity 334ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.4rem;
  }

  &:hover img {
    opacity: 100%;
  }
`;

const RightMenuList = styled.div`
  padding: 0.8rem 0 0.8rem 0.2rem;
  position: relative;
`;

const Join = styled.a`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.6rem;
  font-weight: 600;
  margin-right: 0.5rem;
  padding: 0.5rem 0.9rem;

  border-radius: 0.3rem;
  transition-duration: 167ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

  &:hover {
    color: rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.08);
  }

  @media (min-width: 768px) {
    padding: 0.925rem 1.2rem;
  }
`;

const SignIn = styled(Join)`
  color: #0a66c2;
  padding: 0.5rem 1.5rem;
  margin-right: 0.2rem;
  box-shadow: inset 0 0 0 1px #0a66c2;
  border-radius: 3rem;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    box-shadow: inset 0 0 0 2px #0a66c2;
  }

  @media (min-width: 768px) {
    padding: 1rem 2.4rem;
  }
`;

const HeroSection = styled.section`
  width: 100%;
  padding-top: 2.4rem;
  position: relative;
`;

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

const Form = styled.div`
  display: block;
  width: 100%;
  max-width: none;
  flex-shrink: 0;

  @media (min-width: 768px) {
    max-width: 55%;
    padding-right: 4rem;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 200;
    line-height: 1.2;
    margin-bottom: 3.5rem;
    color: rgba(143, 88, 73, 1);

    @media (min-width: 768px) {
      font-size: 5.6rem;
    }
  }

  form {
    width: 100%;
    max-width: none;

    @media (min-width: 768px) {
      max-width: 400px;
      font-size: 3.2rem;
    }
  }

  .input {
    width: 100%;
    margin-bottom: 1.2rem;
    position: relative;
    z-index: 1;

    input {
      display: block;
      width: 100%;
      height: 48px;
      padding: 2.2rem 01.5rem 0.4rem;
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 2px;
      font-size: 1.6rem;
      line-height: 1.8rem;
      z-index: -1;
      transition: all 200ms ease-in-out;

      &:focus {
        border: 2px solid var(--primary-color);
      }

      &:focus + label,
      &.filled + label {
        top: 1.5rem;
        font-size: 1.2rem;
      }
    }

    label {
      position: absolute;
      left: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.6rem;
      color: rgba(0, 0, 0, 0.6);
      z-index: -1;
      transition: top 200ms;
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 1.4;
    margin: 1rem 0 1.5rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    padding-right: 1rem;

    span {
      color: var(--primary-color);
      font-weight: 600;
    }
  }

  button {
    display: block;
    width: 100%;
    padding: 1.35rem 0;
    background-color: #2977c9;
    color: #fff;
    font-size: 2rem;
    border-radius: 3rem;
    cursor: pointer;
    font-family: inherit;
    transition: all 150ms;

    &:hover {
      background-color: #1b528d;
    }
  }

  button:nth-of-type(2) {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 600;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60), inset 0 0 0 2px rgb(0 0 0 / 0%),
      inset 0 0 0 2px rgb(0 0 0 / 0%);

    img {
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-right: 2%;
      vertical-align: top;
    }

    &:hover {
      background-color: rgba(207, 207, 207, 0.25);
      color: rgba(0, 0, 0, 0.75);
      box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60),
        inset 0 0 0 2px rgb(0 0 0 / 75%), inset 0 0 0 2px rgb(0 0 0 / 0%);
    }
  }

  .or {
    text-align: center;
    margin: 1.6rem 0;
    position: relative;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.6);

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 2%;
      right: 55%;
      top: 50%;
      height: 1px;

      background-color: rgba(0, 0, 0, 0.35);
    }

    &::after {
      left: 55%;
      right: 2%;
    }
  }
`;

const LoginHero = styled.div`
  position: relative;
  z-index: -1;
  padding-top: 2rem;
  flex-shrink: 1;

  img {
    width: 374px;
    height: 214px;
  }

  @media (min-width: 576px) {
    img {
      width: 500px;
      height: 314px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 700px;
      height: 560px;
    }
  }
`;

const ExploreTopicsSection = styled.section`
  width: 100%;
  padding: 5.6rem 0;
  background-color: rgb(250 249 247);

  @media (min-width: 992px) {
    & > div {
      display: flex;
      align-items: flex-start;
      flex-wrap: nowrap;
      gap: 7rem;
    }
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.9);
    margin-bottom: 2.5rem;

    @media (min-width: 768px) {
      font-size: 4.8rem;
      font-weight: 200;
    }

    @media (min-width: 992px) {
      max-width: 408px;
      flex-shrink: 0;
    }
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.25;
  }
`;

const TopicsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
  padding-right: 1rem;

  li {
    min-height: 56px;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.08);
    padding: 0.8rem 2rem;
    border-radius: 2.8rem;
    font-size: 2rem;
    line-height: 1.8;
    font-weight: 600;
    transition: all 167ms;

    &.allTopics {
      background-color: transparent;
      border: 1px solid #ccc;

      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.6);
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      text-decoration: underline;
    }

    a {
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const ShowMore = styled.a`
  width: fit-content;
  height: 40px;
  line-height: 40px;
  padding: 0 12px;
  margin-top: 2rem;
  position: relative;
  color: inherit;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(0, 0, 0, 0.6) !important;

  svg {
    width: 16px;
    height: 16px;
    margin-top: 0.3rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const FindJobsSection = styled(ExploreTopicsSection)`
  background-color: transparent;
`;

const PostJobs = styled.section`
  padding: 5.6rem 0;
  background-color: #f1ece5;

  // @media (max-width: 768px) {
  //   display: none;
  // }

  .postjobs-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }

    h4 {
      max-width: 41rem;
      font-size: 3.2rem;
      font-weight: 500;
      color: #b24020;
      line-height: 1.25;
      margin-bottom: 2.4rem;
      margin-right: 5.5rem;

      @media (min-width: 768px) {
        font-size: 4rem;
        font-weight: 400;
      }
    }

    button {
      display: inline-block;
      min-height: 48px;
      border: solid 1px rgba(0, 0, 0, 0.6);
      padding: 0.8rem 2rem;
      border-radius: 2.8rem;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.4;
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;

      @media (min-width: 768px) {
        min-height: 56px;
      }
    }
  }
`;

const Testimonials = styled.section`
  width: 100%;
  padding: 7rem 0;
  background-color: #faf9f7;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 7rem;
  }
`;

const SliderHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 3rem;

  button {
    height: 3.2rem;
    line-height: 3.2rem;
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 0 0.8rem;
    margin-right: 0.8rem;
    border-radius: 2px;
    outline-width: 2px;
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    vertical-align: middle;
    transition: all 167ms;
    vertical-align: middle;
    display: flex;
    align-items: center;

    &:disabled {
      color: rgba(0, 0, 0, 0.15);
      cursor: auto;
    }

    &:focus:not(.disabled) {
      outline: thin dotted;
    }

    &:hover:not(:disabled) {
      background-color: rgba(207, 207, 207, 0.25);
      color: rgba(0, 0, 0, 0.75);
    }
  }
`;

const SliderItem = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }

  img {
    width: 100%;

    @media (min-width: 768px) {
      order: 2;
      max-width: 35vw;
    }
  }

  & > div {
    h2 {
      font-size: 2.4rem;
      font-weight: 400;
      line-height: 1.25;
      color: var(--primary-color);

      @media (min-width: 768px) {
        font-size: 4rem;
      }
    }

    p {
      width: 90%;
      font-size: 1.8rem;
      font-weight: 200;
      line-height: 1.25;
      margin: 0.8rem 0;
      color: rgba(0, 0, 0, 0.9);

      @media (min-width: 768px) {
        font-size: 3.2rem;
      }
    }
  }
`;
