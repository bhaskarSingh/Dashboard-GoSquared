import React from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  height: 160px;
  background: #fff;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  background-color: #2fcf8f;
`;

const Data = styled.div`
  font-size: 46px;
  padding-top: 30px;
  color: #fff;
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #1f3443;
`;

const Card = ({ title, data }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Data>{data}</Data>
    </CardContainer>
  );
};

export default Card;
