import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import { NavItem } from "./Navitem";

const Container = styled.div`
   width: 100%;
   height: 50px;
   margin: 0 auto;
   padding: 3rem;
   display: flex;
`;

const Title = styled.div`
   font-size: 2rem;
`;

const Ttinner = styled.div`
   font-size: 1rem;
`;
const StyledNavLink = styled(NavLink)`
   text-decoration: none;
   color: #333;
   padding: 5px;
   background-color: lightblue;
   &.active {
      background-color: dodgerblue;
      color: white;
   }
`;

export function Page() {
   return (
      <>
         <Container>
            <Title>저기요에 어서오세요</Title>
            <Ttinner>버튼을 눌러 이동하기.</Ttinner>
            <StyledNavLink to="/">이동</StyledNavLink>
         </Container>
      </>
   );
}
