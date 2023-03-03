import styled from "styled-components";

type ImageProps = {
  src: string;
};

export const HeaderDiv = styled.div`
  width: 100%;
  top: 0;
  height: 70px;
  background-color: #d9d9d9;
  padding: 10px;
  position: fixed;
  display: flex;
`;

export const Image = styled.img<ImageProps>`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-left: 20px;
  cursor: pointer;
`;

export const HeaderLeft = styled.div`
  display: flex;
  width: 50%;
  height: 50px;
  /* background-color: black; */
`;

export const HeaderLeftNav = styled.div`
  width: 50%;
  height: 50px;
  margin-left: 25px;
  /* background-color: red; */
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export const HeaderLeftNavText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`;

export const HeaderRight = styled.div`
  display: flex;
  width: 50%;
  height: 50px;
  background-color: red;
`;

export const HeaderRightNav = styled.div`

`