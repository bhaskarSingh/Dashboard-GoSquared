import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";
import PropTypes from "prop-types";
const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-areas: "aside main";
`;
const MainContainer = styled.div`
  grid-area: main;
`;

const Items = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const Header = styled.h1`
  margin: 20px;
  font-size: 30px;
`;

const ListItem = styled.li`
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #1f3443;
  border-radius: 10px;
`;
const Dashboard = ({ items }) => {
  return (
    <DashboardContainer>
      <aside
        style={{
          gridArea: "aside",
          height: "100vh",
          backgroundColor: "#fff",
          marginTop: "5px"
        }}
      >
        <ul style={{ listStyle: "none", padding: 20 }}>
          <ListItem style={{ backgroundColor: "#2fcf8f" }}>Dashboard</ListItem>
          <ListItem>Favorites</ListItem>
          <ListItem>Inbox</ListItem>
          <ListItem>Team</ListItem>
          <ListItem>Calender</ListItem>
        </ul>
      </aside>
      <MainContainer>
        <Header>Dashboard</Header>
        <Items>
          {items.length > 1 &&
            items.map((item, index) => {
              return <Card key={index} title={item.title} data={item.data} />;
            })}
        </Items>
      </MainContainer>
    </DashboardContainer>
  );
};

Dashboard.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      data: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Dashboard;
