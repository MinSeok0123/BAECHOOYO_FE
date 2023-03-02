import styled from "styled-components";
import { HeaderDiv, HeaderLeft, Image, HeaderLeftNav } from "../styles/Header";

export default function Header() {
  return (
    <>
      <HeaderDiv>
        <HeaderLeft>
          <Image src="https://img.etnews.com/photonews/1910/1232755_20191014163048_800_0001.jpg" />
          <HeaderLeftNav />
        </HeaderLeft>
      </HeaderDiv>
    </>
  );
}
