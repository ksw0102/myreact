import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import { NavItem } from "./Navitem";

const Container = styled.div`
   display: flex;
`;

const StyledNavLink = styled(NavLink)`
   padding: 1rem;
   padding-bottom: 1.5rem;
   margin: 5px;
   text-decoration-line: none;
   width: 75px;
   height: 50px;
   align-items: center;
   border-radius: 25%;
   &:visited {
      color: black;
   }
   &:hover {
      color: pink;
   }
   &.active {
      color: gray;
   }
`;

// const Main = styled.div`
//    width: 80vw;
//    height: 100vh;
//    background-color: wheat;
//    margin: 0 auto;
//    align-items: center;
//    display: flex;
//    flex-direction: column;
// `;

// const Title = styled.div`
//    width: 60vw;
//    height: 50vh;
//    margin: 0 auto;
//    img {
//       width: 30vw;
//       height: 30vh;
//    }
// `;
export function Bar() {
   return (
      <>
         <Container>
            <StyledNavLink to="/banner">
               <NavItem icon="ti ti-home" name="Home" />
            </StyledNavLink>
            <StyledNavLink to="/project">
               <NavItem icon="ti ti-disc" name="Main" />
            </StyledNavLink>
            <StyledNavLink to="/rock">
               <NavItem icon="ti ti-music" name="Rock" />
            </StyledNavLink>
            <StyledNavLink to="/hiphop">
               <NavItem icon="ti ti-headphones-filled" name="HipHop" />
            </StyledNavLink>
            {/* <Main>
               <Title>
                  <h1>V 4 U </h1>
                  <img src="https://images.pexels.com/photos/2746823/pexels-photo-2746823.jpeg?cs=srgb&dl=pexels-brett-jordan-2746823.jpg&fm=jpg" />
               </Title>
            </Main> */}
         </Container>
         <Outlet />
      </>
   );
}
