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
      <div>
        <div>
          <div>
            <p>Languages</p>
            <p>Jane Smith</p>
          </div>
        </div>
        <div></div>
      </div>
    </StyledCardWrapper>
  );
};

export default TeacherCard;
