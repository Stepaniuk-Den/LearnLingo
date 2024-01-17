import React from "react";
import {
  ImageWrapper,
  NotebookWrapper,
  StyledMacIcon,
} from "./AvatarDefault.styled";
import AvatarImg from "../../assets/images/default_avatar.png";

const AvatarDefault = () => {
  return (
    <ImageWrapper>
      <img src={AvatarImg} alt="avatar_default" loading="lazy" />
      <NotebookWrapper>
        <StyledMacIcon />
      </NotebookWrapper>
    </ImageWrapper>
  );
};

export default AvatarDefault;
