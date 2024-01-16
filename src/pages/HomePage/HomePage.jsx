import React from "react";
import {
  FocusedSpan,
  HomeWrapper,
  ImageWrapper,
  NotebookWrapper,
  StartedWrapper,
  StyledMacIcon,
  StyledNav,
} from "./HomePage.styled";
import AvatarDefault from "../../assets/images/default_avatar.png";
import Statistics from "../../components/Statistics/Statistics";

const HomePage = () => {
  return (
    <>
      <HomeWrapper>
        <StartedWrapper>
          <h1>
            Unlock your potential with the best{" "}
            <FocusedSpan>language</FocusedSpan> tutors
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <StyledNav to="/teachers">Get started</StyledNav>
        </StartedWrapper>
        <ImageWrapper>
          <img src={AvatarDefault} alt="avatar_default" loading="lazy" />
          <NotebookWrapper>
            <StyledMacIcon />
          </NotebookWrapper>
        </ImageWrapper>
        <Statistics />
      </HomeWrapper>
    </>
  );
};

export default HomePage;
