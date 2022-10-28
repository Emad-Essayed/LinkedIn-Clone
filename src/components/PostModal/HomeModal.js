import React, { useState } from "react";
import styled from "styled-components";
import HeaderModal from "./HeaderModal";
import ContentModal from "./ContentModal";
import EditMediaModal from "./EditMediaModal";
import firebase from "firebase/compat/app";
import { postArticleApi } from "../../actions";
import { connect } from "react-redux";

const HomeModal = (props) => {
  const [textEditor, setTextEditor] = useState("");
  const [sharedMedia, setSharedMedia] = useState([]);
  const [editingMedia, setEditingMedia] = useState([]);

  const resetModal = (e) => {
    setTextEditor("");
    setSharedMedia([]);
    setEditingMedia([]);
    props.setMediaType("");
    props.setShowCancel(true);

    props.handelShowModalClick(e);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: props.mediaType === "image" ? sharedMedia : "",
      video: props.mediaType === "video" ? sharedMedia : "",
      user: props.user,
      description: textEditor,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    if (sharedMedia.length > 0 || textEditor.trim() !== "") {
      // console.log(sharedMedia);
      props.postArticle(payload);
      resetModal(e);
    }
  };

  return (
    props.showModal === "open" && (
      <Container>
        <Layout>
          {props.mediaType === "" || sharedMedia.length > 0 ? (
            <>
              <HeaderModal title="Create a post" resetModal={resetModal} />

              <ContentModal
                textEditor={textEditor}
                setTextEditor={setTextEditor}
                sharedMedia={sharedMedia}
                setSharedMedia={setSharedMedia}
                mediaType={props.mediaType}
                setMediaType={props.setMediaType}
                setEditingMedia={setEditingMedia}
                editingMedia={editingMedia}
                postArticle={postArticle}
              />
            </>
          ) : (
            <>
              <HeaderModal
                title={
                  props.mediaType === "image"
                    ? "Edit your photo"
                    : props.mediaType === "video"
                    ? "Select/Edit your video"
                    : "Create a post"
                }
                resetModal={resetModal}
              />

              <EditMediaModal
                editingMedia={editingMedia}
                setEditingMedia={setEditingMedia}
                mediaType={props.mediaType}
                setMediaType={props.setMediaType}
                setSharedMedia={setSharedMedia}
                showCancel={props.showCancel}
                setShowCancel={props.setShowCancel}
                resetModal={resetModal}
              />
            </>
          )}
        </Layout>
      </Container>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postArticle: (payload) => dispatch(postArticleApi(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeModal);

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  animation: fadeIn 300ms;
  overflow: hidden;
`;

const Layout = styled.div`
  width: 100%;
  max-width: 552px;
  max-height: 70%;
  background-color: white;
  margin: 6rem auto 0;
  border-radius: 0.8rem;
  background-color: white;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 0 0 rgb(0 0 0 / 20%);
  position: relative;
  overflow: auto;
`;
