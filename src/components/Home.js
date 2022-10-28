import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import AsideContent from "./AsideContent";
import MainContent from "./MainContent";
import SidebarContent from "./SidebarContent";

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Navigate to="/" />}
      <Layout>
        <SidebarContent />
        <MainContent />
        <AsideContent />
      </Layout>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(Home);

const Container = styled.main`
  width: 100%;
  height: 100%;
  background-color: #f3f2ef;
  padding: 5rem 2.4rem;
`;

const Layout = styled.section`
  display: grid;
  grid-template-areas:
    "sidebar"
    "main"
    "aside";
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto;
  grid-gap: 1.2rem;
  width: 100%;
  max-width: 576px;
  margin: 2.4rem auto;
  // padding: 0 2.4rem;

  @media (min-width: 768px) {
    grid-template-areas:
      "sidebar main"
      "sidebar aside";
    grid-template-columns: minmax(0, 7fr) minmax(300px, 17fr);
    max-width: unset;
    width: 720px;
  }

  @media (min-width: 992px) {
    grid-template-areas: "sidebar main aside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
    grid-gap: 2.4rem;
    width: 100%;
    max-width: 1128px;
  }

  @media (min-width: 1128px) {
    max-width: 1128px;
  }
`;
