import styled from "styled-components";
import {
  HeaderDiv,
  HeaderLeft,
  Image,
  HeaderLeftNav,
  HeaderLeftNavText,
  HeaderRight,
  HeaderRightNav,
} from "../styles/Header";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <HeaderDiv>
        <HeaderLeft>
          <Link href="/">
            <Image src="https://img.etnews.com/photonews/1910/1232755_20191014163048_800_0001.jpg" />
          </Link>
          <HeaderLeftNav>
            <HeaderLeftNavText>대행추천요기</HeaderLeftNavText>
            <HeaderLeftNavText>커뮤니티</HeaderLeftNavText>
            <HeaderLeftNavText>사업패키지</HeaderLeftNavText>
          </HeaderLeftNav>
        </HeaderLeft>
        <HeaderRight>
          <HeaderRightNav />
        </HeaderRight>
      </HeaderDiv>
    </>
  );
}
