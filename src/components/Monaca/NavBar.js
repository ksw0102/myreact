import styled from "styled-components";
import CTextLogo from "./image/CTextLogo.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const Other = styled.div`
   display: grid;
   grid-template-columns: 2.5fr 1.5fr 2.5fr;
   grid-gap: 2rem;
   height: 10vh;
   width: 70vw;
   align-items: center;
   text-align: center;
   justify-content: center;
   margin: 0 auto;
   font-family: "GmarketSansMedium";
   & a {
      text-decoration: none;
      color: black;
   }
   & input {
      /* border-radius: 20px; */
      border: 1px solid black;
      box-shadow: 5px 5px 5px gray;
      width: 100%;
      align-items: center;
      font-size: 1rem;
      height: 3.5vh;
      margin: 0 auto;
      padding: 10px;
      outline: none;
   }
`;

const Logo = styled.div`
   margin-left: 3vw;
   background-image: url(${CTextLogo});
   background-repeat: no-repeat;
   background-size: contain;
   width: 15vw; /* Adjust the width as needed */
   height: 5vh;
   display: flex;
   justify-content: center;
   align-items: center;
   &:hover {
      cursor: pointer;
   }
`;

const StyledNavLink = styled(NavLink)`
   font-weight: bold;
`;

const Button = styled.div`
   display: grid;
   grid-gap: 1.5rem;
   align-items: center;
   justify-content: center;
   width: 98%;
   height: 100%;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   font-size: 1.2rem;
`;
export function NavBar() {
   const [inputValue, setInputValue] = useState("");
   const navigate = useNavigate();
   return (
      <Other>
         <Logo title="누르면 메인으로 돌아가요" />
         <input
            placeholder="배우고 싶은 강의를 검색해주세요."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
         />
         <Button>
            <StyledNavLink to="/announcement">공지사항</StyledNavLink>
            <StyledNavLink to="/student-register">회원가입</StyledNavLink>
            <StyledNavLink to="/my-room">나의 방</StyledNavLink>
            <StyledNavLink to="/cs-center">고객센터</StyledNavLink>
            <StyledNavLink to="/message">쪽지</StyledNavLink>
         </Button>
      </Other>
   );
}
