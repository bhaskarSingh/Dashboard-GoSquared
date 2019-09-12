import React from "react";
import styled from "@emotion/styled";
import { MdAccountCircle } from "react-icons/md";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #fff;
  padding: 10px 70px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div style={{ display: "flex" }}>
        <span style={{ color: "#0095FF", marginLeft: "10px" }}>GoSquared</span>
      </div>

      <div style={{ display: "flex" }}>
        <span style={{ marginRight: 5 }}>
          <MdAccountCircle size="30" />
        </span>
        <div>
          <div style={{ fontSize: 14 }}>Bhaskar</div>
          <div style={{ fontSize: 10 }}>admin</div>
        </div>
      </div>
    </HeaderContainer>
  );
};
export default Header;
