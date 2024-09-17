import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #dbdbdb;
`;

const Logo = styled.div`
  background-image: url("");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 150px;
  height: 24px;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
    </HeaderWrapper>
  );
}
