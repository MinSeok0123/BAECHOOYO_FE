import styled from "styled-components";

interface ImageProps {
  src: string;
}

export const HeaderDiv = styled.div`
  width: 100%;
  top: 0;
  height: 80px;
  background-color: #d9d9d9;
  padding: 15px;
`;

export const Image = styled.img<ImageProps>`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

export const HeaderLeft = styled.div`
  width: 50%;
  height: 50px;
  background-color: black;
`;

export const HeaderLeftNav = styled.div`
  width: 40%;
  height: 50px;
  background-color: red;
`;
