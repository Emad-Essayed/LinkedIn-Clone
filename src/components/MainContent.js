import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { getArticlesAPI } from "../actions";
import HomeModal from "./PostModal/HomeModal";
import ReactPlayer from "react-player";

const MainContent = (props) => {
  const [showModal, setShowModal] = useState("close");
  const [mediaType, setMediaType] = useState("");
  const [showCancel, setShowCancel] = useState(true);

  const handelShowModalClick = (e, mediaType) => {
    e.preventDefault();

    if (e.target !== e.currentTarget) {
      return;
    }

    switch (mediaType) {
      case "image":
        setMediaType("image");
        break;
      case "video":
        setMediaType("video");
        break;

      default:
        setMediaType("");
        break;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;

      default:
        setShowModal("close");
        break;
    }
  };
  const { getArticles } = props;
  useEffect(() => {
    getArticles();
  }, [getArticles]);

  function isValidURL(string) {
    var res = string.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    return res !== null;
  }

  return (
    <Container>
      <CreatePost>
        <div>
          <Link to="">
            <UserImage
              src={props.user ? props.user.photoURL : "/images/user.svg"}
              alt=""
            />
          </Link>
          <button
            onClick={(e) => {
              handelShowModalClick(e);
              setShowCancel(false);
            }}
            disabled={props.loading ? true : false}
          >
            Start a post
          </button>
        </div>
        <PostType>
          <UserActionButton
            onClick={(e) => handelShowModalClick(e, "image")}
            disabled={props.loading ? true : false}
          >
            <div className="photo">
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
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
            </div>
            <span>Photo</span>
          </UserActionButton>
          <UserActionButton
            onClick={(e) => handelShowModalClick(e, "video")}
            disabled={props.loading ? true : false}
          >
            <div className="video">
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
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
              </svg>
            </div>
            <span>Video</span>
          </UserActionButton>
          <UserActionButton disabled={props.loading ? true : false}>
            <div className="event">
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
                <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
              </svg>
            </div>
            <span>Event</span>
          </UserActionButton>
          <UserActionButton disabled={props.loading ? true : false}>
            <div className="article">
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
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
            </div>
            <span>Write article</span>
          </UserActionButton>
        </PostType>
      </CreatePost>

      <Content>
        {props.loading && (
          <LoadingImg src="/images/loading-buffering.gif" alt="" />
        )}

        {props.articles.length > 0 && (
          <SortBy>
            <button>
              <hr />
              Sort by: <span> Top</span>
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
                <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
              </svg>
            </button>
          </SortBy>
        )}

        <PostsList>
          {props.articles.length > 0 ? (
            props.articles.map((article, index) => (
              <Post key={index}>
                <PostHeader>
                  <Link to="">
                    <UserImage src={article.actor.image} alt="" />
                    <div>
                      <h5>{article.actor.title}</h5>
                      <p>{article.actor.description}</p>
                      <p>{article.actor.date.toDate().toLocaleDateString()}</p>
                    </div>
                  </Link>
                  <button>...</button>
                </PostHeader>
                <PostContent>
                  <div>
                    {article.description.split("\n").map((string, key) => {
                      return (
                        <div key={key}>
                          {string.split(" ").map((item, index) => {
                            return isValidURL(item) ? (
                              <Link
                                key={index}
                                to={item}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {item}
                              </Link>
                            ) : (
                              ` ${item}`
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                  <PostContentMediaPreview>
                    <Link to="">
                      {article.sharedImage !== "" ? (
                        <img src={article.sharedImage} alt="" />
                      ) : article.video !== "" ? (
                        <video width="100%" controls>
                          <source src={article.video} />
                        </video>
                      ) : ReactPlayer.canPlay(article.description) ? (
                        <ReactPlayer
                          url={article.description}
                          width={"100%"}
                          controls
                        />
                      ) : (
                        ""
                      )}
                    </Link>
                  </PostContentMediaPreview>
                </PostContent>
                <PostStatistics>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      id="like-consumption-small"
                      data-supported-dps="16x16"
                    >
                      <g>
                        <path
                          d="M8 0a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z"
                          fill="none"
                        />
                        <circle cx="8" cy="8" r="7" fill="#378fe9" />
                        <path
                          d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.13 7.13 0 01-1.73-2.24c-.24-.51-.26-.74-.75-.74a.78.78 0 00-.67.81c0 .14.07.63.1.8a7.54 7.54 0 001 2.2H4.12a.88.88 0 00-.65.28.84.84 0 00-.23.66.91.91 0 00.93.85h.16a.82.82 0 00-.55.24.77.77 0 00-.21.54.81.81 0 00.74.8.8.8 0 00.33 1.42.76.76 0 00-.09.55.87.87 0 00.85.63h2.29a3.8 3.8 0 00.89-.11l1.42-.4h1.9c1.02-.04 1.29-4.64.03-4.64z"
                          fill="#d0e8ff"
                          fillRule="evenodd"
                        />
                        <path
                          d="M7.43 6.43H4.11a.88.88 0 00-.88 1 .92.92 0 00.93.84h.16a.82.82 0 00-.55.24.77.77 0 00-.21.56.83.83 0 00.74.81.81.81 0 00-.31.63.81.81 0 00.65.8.78.78 0 00-.09.56.86.86 0 00.85.62h2.29a3.8 3.8 0 00.89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 01-.55 0s-.15-.19-.4-.46h0c-.37-.4-.78-.91-1.07-1.19a7.08 7.08 0 01-1.7-2.25 2.14 2.14 0 00-.32-.52.83.83 0 00-1.16.09 1.39 1.39 0 00-.25.38 1.71 1.71 0 00-.09.3 2.38 2.38 0 00.07.84 4.12 4.12 0 00.27.84 6.65 6.65 0 00.66 1 .18.18 0 01.07.08"
                          fill="none"
                          stroke="#004182"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                    <span>6</span>
                  </button>

                  <button>
                    <span>2 comments</span>
                  </button>
                </PostStatistics>
                <PostInteractions>
                  <UserActionButton>
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
                      <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                    </svg>
                    <span>Like</span>
                  </UserActionButton>
                  <UserActionButton>
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
                      <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                    </svg>
                    <span>Comment</span>
                  </UserActionButton>
                  <UserActionButton>
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
                      <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                    </svg>
                    <span>Share</span>
                  </UserActionButton>
                  <UserActionButton>
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
                      <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                    </svg>
                    <span>Send</span>
                  </UserActionButton>
                </PostInteractions>
              </Post>
            ))
          ) : (
            <>
              {!props.loading && (
                <p className="no-posts">There are no posts yet</p>
              )}
            </>
          )}
        </PostsList>
      </Content>

      <HomeModal
        showModal={showModal}
        handelShowModalClick={handelShowModalClick}
        mediaType={mediaType}
        setMediaType={setMediaType}
        showCancel={showCancel}
        setShowCancel={setShowCancel}
      />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.articleState.loading,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => dispatch(getArticlesAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);

const Container = styled.div`
  grid-area: main;
`;

const CreatePost = styled.div`
  width: 100%;
  padding: 1rem 1.5rem 0.5rem;
  background-color: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 0 0 rgb(0 0 0 / 20%);
  overflow: hidden;
  border-radius: 0.8rem;
  /* margin-bottom: 1rem; */

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      display: inline-block;
      width: 100%;
      min-height: 4.8rem;
      text-align: left;
      font-family: inherit;
      font-size: 1.4rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.6);
      padding: 1.3rem 1.5rem;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 3.5rem;
      cursor: pointer;
      transition: background-color 167ms;

      &:disabled {
        cursor: not-allowed;
      }

      &:hover,
      &:focus {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const SortBy = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  & > button {
    width: 100%;
    display: block;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.6);
    font-family: inherit;

    hr {
      flex-grow: 1;
      border: 0;
      display: block;
      height: 1px;
      margin-right: 1rem;
      background-color: rgba(0, 0, 0, 0.08);
      border-color: rgba(0, 0, 0, 0.15);
      border-top: 1px solid rgba(0, 0, 0, 0.15);
    }

    span {
      color: var(--text-color);
      font-weight: 600;
      margin: 0 0.5rem;
    }
    svg {
      color: var(--text-color);
    }
  }
`;

const UserImage = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  object-fit: cover;
  border-radius: 50%;
`;

const PostType = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const UserActionButton = styled.button`
  // width: 100%;
  max-width: 480px;
  min-height: 4.8rem;
  padding: 1rem 1.5rem;
  display: inline-flex;
  align-items: center;
  // justify-content: space-around;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2.8rem;
  background-color: hsla(0, 0%, 100%, 0);
  color: rgba(0, 0, 0, 0.6);
  border-radius: 0.4rem;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 167ms;

  &:disabled {
    cursor: not-allowed;
  }

  & > * {
    pointer-events: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  div {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: -2px;

    &.photo {
      color: #70b5f9;
    }

    &.video {
      color: #7fc15e;
    }

    &.event {
      color: #e7a33e;
    }

    &.article {
      color: #fc9295;
    }
  }

  span {
    white-space: nowrap;
    margin-left: 5px;
  }
`;

const Content = styled.div`
  text-align: center;

  & > img {
    width: 30px;
  }

  .no-posts {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
  }
`;

const LoadingImg = styled.img`
  margin-top: 2rem;
`;

const PostsList = styled.div`
  width: 100%;
`;

const Post = styled.article`
  padding: 1rem 0;
  background-color: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 0 0 rgb(0 0 0 / 20%);
  overflow: hidden;
  border-radius: 0.8rem;
  margin-bottom: 1rem;
  text-align: left;
  margin-bottom: 1rem;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 2rem 0 2rem;

  & > a {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    color: #000;

    h5 {
      font-size: 1.4rem;
      color: var(--text-color);
      opacity: 0.9;
      transition: all 167ms;

      &:hover {
        color: var(--primary-color);
        text-decoration: underline;
      }
    }

    p {
      font-size: 1.15rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  button {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1rem;
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
    /* margin-top: -1rem; */

    transition: all 167ms;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

const PostContent = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  & > div {
    font-size: 1.4rem;
    font-weight: 400;
    padding: 0 1.5rem 1rem;
    color: rgba(0, 0, 0, 0.9);
    overflow-wrap: break-word;
    word-break: break-word;
  }
`;

const PostContentMediaPreview = styled.div`
  width: 100%;
  position: relative;
  background-color: #f9fafb;
  padding: 0 !important;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const PostStatistics = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;

  & > button {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    line-height: 1.5;
    cursor: pointer;
    transition: all 167ms;

    &:hover span {
      text-decoration: underline;
      color: var(--primary-color);
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
    }

    span {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const PostInteractions = styled(PostType)`
  justify-content: space-around;
  margin-top: 0.5rem;
  padding-left: 2.5rem;
  padding-right: 2rem;

  svg {
    display: block;
    width: 2.4rem;
    height: 2.4rem;
  }
`;
