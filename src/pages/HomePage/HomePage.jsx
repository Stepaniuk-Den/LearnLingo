import React from "react";
import { HomeWrapper } from "./HomePage.styled";

import Statistics from "../../components/Statistics/Statistics";
import Hero from "../../components/Hero/Hero";
import AvatarDefault from "../../components/AvatarDefault/AvatarDefault";

const HomePage = () => {
  return (
    <HomeWrapper>
      <Hero />
      <AvatarDefault />
      <Statistics />
    </HomeWrapper>
  );
};

export default HomePage;
