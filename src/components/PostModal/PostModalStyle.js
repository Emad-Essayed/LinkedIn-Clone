import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding-top: 1rem;
`;

export const SharedBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PostCreation = styled.div`
  max-height: 25rem;
  display: flex;
  flex-direction: column;
  padding: 0 2.5rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const MediaCreation = styled(PostCreation)`
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-top: -1.5rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  & > img {
    width: 4.8rem;
    height: 4.8rem;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    font-weight: 600;
    gap: 0.3rem;
  }
`;

export const ShareAudienceButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.2rem;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
  border-radius: 3rem;
  color: rgba(0, 0, 0, 0.6);
  transition: all 167ms;

  :hover {
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.6);
    background-color: rgba(0, 0, 0, 0.08);
  }

  span {
    padding: 0 0.5rem;
    font-size: 100%;
    font-weight: 600;
    line-height: 1.5;
  }
`;

export const EditorTextarea = styled.div`
  width: 100%;
  padding: 2rem 0 1rem;
  margin: 1rem auto 2rem;

  textarea {
    width: 100%;
    min-height: 100px;
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.42;
    color: rgba(0, 0, 0, 0.9);
    resize: none;
  }
`;

export const AttachedMedia = styled.div`
  width: 100%;
  & > div {
    border-radius: 0.8rem;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
    }

    video {
      width: 100%;
    }
  }
`;

export const MediaTopMenu = styled.div`
  padding: 1.5rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-left: 1.5rem;
    width: 3.2rem;
    height: 3.2rem;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    transition: color 167ms;

    &:hover {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export const ShareBoxControls = styled.div`
  padding: 1rem 2rem 0 2.5rem;
  background-color: #fff;
`;

export const MediaEditControls = styled(SharedBox)`
  padding: 0 2rem 0 2.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export const AddHashtag = styled.button`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  transition: background-color 167ms;

  &:hover {
    background-color: rgba(112, 181, 249, 0.2);
  }

  &:active {
    color: #004182;
  }
`;

export const BrowseFile = styled(AddHashtag)`
  margin: 5rem auto;

  label {
    cursor: pointer;
  }
`;

export const MediaPreview = styled.div`
  width: 100%;
  min-height: 100%;

  img {
    width: 100%;
  }

  video {
    width: 100%;
    max-height: 100%;
  }
`;

export const MediaOpntionsList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: -2.5rem;
  background-color: #fff;
`;

export const EditeMediaButton = styled.div`
  width: 10rem;
  height: 4rem;
  font-size: 1.6rem;
  font-weight: 600;
  min-height: 3.2rem;
  line-height: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.6);
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: background-color 167ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &:active,
  &:focus,
  &.active {
    border-bottom: 2px solid #057642;
  }
`;

export const ShareBoxFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.5rem 0 2rem;
  margin-left: -0.5rem;
  margin-top: 1rem;
  background-color: #fff;

  ${ShareAudienceButton} {
    box-shadow: none;
    margin-left: 0.5rem;
  }
`;

export const MediaEditFooter = styled(ShareBoxFooter)`
  margin-top: 0;
  flex-wrap: nowrap;
`;

export const ShareBoxButtonsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-right: 0.5rem;
  position: relative;
  border-right: 1px solid rgba(0, 0, 0, 0.08);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border-radius: 50%;
    position: relative;
    transition: all 167ms;

    &::before {
      content: attr(aria-label);
      position: absolute;
      top: -120%;
      left: 50%;
      /* width: 300%; */
      z-index: 3;
      display: block;
      white-space: nowrap;
      padding: 1.2rem 1.5rem;
      border-radius: 0.8rem 0 0.8rem 0.8rem;
      font-size: 1.3rem;
      line-height: 1.42rem;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 4px 4px rgba(0, 0, 0, 0.3);
      transform: scale(0);
      background-color: #fff;
      transition: all 83ms;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;

      label {
        cursor: not-allowed;
      }
    }

    &:hover:not(:disabled) {
      background-color: rgba(0, 0, 0, 0.08);

      &::before {
        transform: translateX(-50%) scale(1);
      }
    }

    label {
      display: block;
      font-size: 0;
      cursor: pointer;
    }

    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const EditeMediaControlsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: nowrap;
  gap: 0.5rem;
  width: 100%;
  border-right: 0;
`;

export const SharePostButton = styled.button`
  min-width: 60px;
  min-height: 3.2rem;
  padding: 0rem 1.6rem;
  border-radius: 1.6rem;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 600;
  margin-left: auto;
  background-color: ${(param) =>
    param.disabled ? "rgba(0,0,0,.1)" : "var(--primary-color)"};

  color: ${(param) => (param.disabled ? "rgba(0,0,0,.4)" : "#FFF")};
  line-height: 3.2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: ${(param) => (param.disabled ? "auto" : "pointer")};
  transition: all 200ms;

  &:hover:not(:disabled) {
    background-color: #004182;
  }
`;

export const DoneButton = styled(SharePostButton)``;

export const BottomMenuButton = styled(SharePostButton)`
  background-color: transparent;
  color: var(--primary-color);
  box-shadow: inset 0 0 0 1px var(--primary-color);
  margin-left: initial;
  margin: 0 1.5rem;

  &:hover {
    box-shadow: inset 0 0 0 2px var(--primary-color);
    background-color: rgba(112, 181, 249, 0.2) !important;
  }
`;
