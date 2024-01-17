import React from "react";
import { FocusedSpan, StartedWrapper, StyledNav } from "./Hero.styled";

const Hero = () => {
  return (
    <div>
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
    </div>
  );
};

export default Hero;
