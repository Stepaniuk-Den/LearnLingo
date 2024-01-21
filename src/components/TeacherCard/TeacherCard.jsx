import React from "react";
import {
  ImageTeacherWrapper,
  StyledCardWrapper,
  StyledIsOnline,
} from "./TeacherCard.styled";
import AvatarImg from "../../assets/images/default_avatar.png";

const TeacherCard = ({ teacher }) => {
  return (
    <StyledCardWrapper>
      <ImageTeacherWrapper>
        <img src={AvatarImg} alt="avatar_default" loading="lazy" />
        <StyledIsOnline />
      </ImageTeacherWrapper>
    </StyledCardWrapper>
  );
};

export default TeacherCard;
