import styled from "@emotion/styled";
import React from "react";
import Navigation from "../shared/components/Navigation";

const HomeWrapper = styled.div`
  /* width: 600px; */
  height: 400px;
  /* background-color: black; */
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Navigation />
    </HomeWrapper>
  );
}

export default Home;
