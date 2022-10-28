import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  SharedBox,
  MediaCreation,
  BrowseFile,
  MediaPreview,
  MediaOpntionsList,
  EditeMediaButton,
  MediaEditControls,
  MediaEditFooter,
  EditeMediaControlsList,
  BottomMenuButton,
  DoneButton,
} from "./PostModalStyle";

const EditMediaModal = (props) => {
  const mediaFileBrowse = useRef();
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    !props.editingMedia.length > 0 && mediaFileBrowse.current.click();
  }, [props.editingMedia]);

  const mediaFileBrowse_onChangeHandler = (e) => {
    let target = e.target.files;
    props.setEditingMedia(Array.from(target));
  };

  const handleSeclectLink = (e) => {
    setActiveId(e.target.id);
  };

  return (
    <Container>
      <SharedBox>
        <MediaCreation>
          {!props.editingMedia.length > 0 ? (
            <BrowseFile>
              <input
                type="file"
                accept={
                  props.mediaType === "image"
                    ? "image/png, image/jpg, image/jpeg, image/gif"
                    : "video/mp4, video/avi, video/wmv, video/mov"
                }
                name="upload-media"
                id="uploadMedia"
                ref={mediaFileBrowse}
                style={{ display: "none" }}
                multiple={props.mediaType === "image" ? true : false}
                onChange={mediaFileBrowse_onChangeHandler}
              ></input>

              <label htmlFor="uploadMedia">
                {props.mediaType === "image"
                  ? "Select images to share"
                  : "Select video to share"}
              </label>
            </BrowseFile>
          ) : (
            <MediaPreview>
              {props.mediaType === "image" ? (
                <>
                  {props.editingMedia.map((item, index) => (
                    <img key={index} src={URL.createObjectURL(item)} alt="" />
                  ))}
                </>
              ) : (
                <>
                  {props.editingMedia.map((item, index) => (
                    <video key={index} controls>
                      <source src={URL.createObjectURL(item)} />
                    </video>
                  ))}
                </>
              )}
            </MediaPreview>
          )}
        </MediaCreation>

        <MediaEditControls>
          {props.editingMedia.length > 0 &&
            (props.mediaType === "image" ? (
              <MediaOpntionsList>
                <EditeMediaButton
                  id="1"
                  className={activeId === "1" ? "active" : ""}
                  onClick={(e) => handleSeclectLink(e)}
                >
                  Edit
                </EditeMediaButton>
                <EditeMediaButton
                  id="2"
                  className={activeId === "2" ? "active" : ""}
                  onClick={(e) => handleSeclectLink(e)}
                >
                  Tag
                </EditeMediaButton>
                <EditeMediaButton
                  id="3"
                  className={activeId === "3" ? "active" : ""}
                  onClick={(e) => handleSeclectLink(e)}
                >
                  Alt. text
                </EditeMediaButton>
              </MediaOpntionsList>
            ) : (
              ""
            ))}

          <MediaEditFooter>
            <EditeMediaControlsList>
              {!props.editingMedia.length > 0 ? (
                <>
                  {props.showCancel ? (
                    <BottomMenuButton onClick={(e) => props.resetModal(e)}>
                      cancel
                    </BottomMenuButton>
                  ) : (
                    <BottomMenuButton onClick={() => props.setMediaType("")}>
                      back
                    </BottomMenuButton>
                  )}
                </>
              ) : (
                ""
              )}
            </EditeMediaControlsList>
            <DoneButton
              disabled={!props.editingMedia.length > 0 ? true : false}
              onClick={() => {
                props.setSharedMedia(props.editingMedia);
                // resetEditMediaModal();
              }}
            >
              Done
            </DoneButton>
          </MediaEditFooter>
        </MediaEditControls>
      </SharedBox>
    </Container>
  );
};

export default EditMediaModal;
