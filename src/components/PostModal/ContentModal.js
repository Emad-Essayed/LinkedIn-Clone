import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import {
  Container,
  SharedBox,
  PostCreation,
  UserInfo,
  ShareAudienceButton,
  EditorTextarea,
  AttachedMedia,
  MediaTopMenu,
  ShareBoxControls,
  AddHashtag,
  ShareBoxFooter,
  ShareBoxButtonsList,
  SharePostButton,
} from "./PostModalStyle";

const ContentModal = (props) => {
  const [showPlayer, setShowPlayer] = useState(false);
  const txtarea = useRef();

  const addHashtag = () => {
    props.setTextEditor(props.textEditor + " #");
    txtarea.current.focus();
  };

  const textEditor_onChangeHandler = function (e) {
    const target = e.target;
    target.style.height = `${target.scrollHeight}px`;
    props.setTextEditor(target.value);
    setShowPlayer(ReactPlayer.canPlay(target.value));
  };

  const editSharedMediaBtn_onClickHandler = () => {
    props.setEditingMedia(props.sharedMedia);
    props.setSharedMedia([]);
  };

  const deleteSharedMediaBtn_onClickHandler = () => {
    props.setMediaType("");
    props.setSharedMedia([]);
    props.setEditingMedia([]);
  };

  return (
    <Container>
      <SharedBox>
        <PostCreation>
          <UserInfo>
            <img
              src={
                props.user.photoURL ? props.user.photoURL : "/images/user.svg"
              }
              alt=""
            />
            <div>
              <span>{props.user ? props.user.displayName : ""}</span>
              <ShareAudienceButton>
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
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                </svg>
                <span>Anyone</span>
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
              </ShareAudienceButton>
            </div>
          </UserInfo>

          <EditorTextarea>
            <textarea
              placeholder="What do you want to talk about"
              value={props.textEditor}
              onChange={textEditor_onChangeHandler}
              autoFocus={true}
              ref={txtarea}
            ></textarea>
          </EditorTextarea>

          {props.sharedMedia.length > 0 ? (
            <AttachedMedia>
              <div>
                <MediaTopMenu>
                  <button
                    aria-label="Edit shared media"
                    onClick={editSharedMediaBtn_onClickHandler}
                  >
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
                      <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
                    </svg>
                  </button>

                  <button
                    aria-label="delete shared media"
                    onClick={deleteSharedMediaBtn_onClickHandler}
                  >
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
                      <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                    </svg>
                  </button>
                </MediaTopMenu>

                {props.mediaType === "image" ? (
                  <>
                    {props.sharedMedia.map((item, index) => (
                      <img key={index} src={URL.createObjectURL(item)} alt="" />
                    ))}
                  </>
                ) : props.mediaType === "video" ? (
                  <>
                    {props.sharedMedia.map((item, index) => (
                      <video key={index} controls>
                        <source src={URL.createObjectURL(item)} />
                      </video>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            </AttachedMedia>
          ) : (
            <>
              {showPlayer && (
                <ReactPlayer url={props.textEditor} width={"100%"} />
              )}
            </>
          )}
        </PostCreation>

        <ShareBoxControls>
          <AddHashtag onClick={() => addHashtag()}>Add hashtag</AddHashtag>
          <ShareBoxFooter>
            <ShareBoxButtonsList>
              <li>
                <button
                  aria-label="Add a photo"
                  disabled={props.sharedMedia.length > 0 ? true : false}
                  onClick={() => props.setMediaType("image")}
                >
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
                </button>
              </li>
              <li>
                <button
                  aria-label="Add a video"
                  disabled={props.sharedMedia.length > 0 ? true : false}
                  onClick={() => props.setMediaType("video")}
                >
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
                </button>
              </li>
              <li>
                <button
                  aria-label="Add a document"
                  disabled={props.sharedMedia.length > 0 ? true : false}
                >
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
                    <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
                  </svg>
                </button>
              </li>
              <li>
                <button
                  aria-label="Share that you'r hiring"
                  disabled={props.sharedMedia.length > 0 ? true : false}
                >
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
                    <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                  </svg>
                </button>
              </li>
              <li>
                <button
                  aria-label="Celebrate an occasion"
                  disabled={props.sharedMedia.length > 0 ? true : false}
                >
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
                    <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
                  </svg>
                </button>
              </li>
              <li>
                <button
                  aria-label="Create a poll"
                  disabled={props.sharedMedia.length > 0 ? true : false}
                >
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
                    <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                  </svg>
                </button>
              </li>
              <li>
                <button
                  aria-label="Add to your post"
                  disabled={props.sharedMedia.length > 0 ? true : false}
                >
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
                    <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                  </svg>
                </button>
              </li>
            </ShareBoxButtonsList>
            <ShareAudienceButton>
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
                <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
              </svg>
              <span>Anyone</span>
            </ShareAudienceButton>
            <SharePostButton
              disabled={
                !props.textEditor && !props.sharedMedia.length > 0
                  ? true
                  : false
              }
              onClick={(e) => props.postArticle(e)}
            >
              Post
            </SharePostButton>
          </ShareBoxFooter>
        </ShareBoxControls>
      </SharedBox>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(ContentModal);
