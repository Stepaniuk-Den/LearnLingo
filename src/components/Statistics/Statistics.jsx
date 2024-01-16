import React from "react";
import {
  StyledCount,
  StyledDescription,
  StyledItem,
  StyledList,
} from "./Statistics.styled";

const Statistics = () => {
  return (
    <div>
      <StyledList>
        <StyledItem>
          <StyledCount>32,000 +</StyledCount>
          <StyledDescription>Experienced tutors</StyledDescription>
        </StyledItem>
        <StyledItem>
          <StyledCount>300,000 +</StyledCount>
          <StyledDescription>5-star tutor reviews</StyledDescription>
        </StyledItem>
        <StyledItem>
          <StyledCount>120 +</StyledCount>
          <StyledDescription>Subjects taught</StyledDescription>
        </StyledItem>
        <StyledItem>
          <StyledCount>200 +</StyledCount>
          <StyledDescription>Tutor nationalities</StyledDescription>
        </StyledItem>
      </StyledList>
    </div>
  );
};

export default Statistics;
