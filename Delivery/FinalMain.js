import styled from "styled-components";
import { Header } from "./Header";
import { NavBar } from "./Navbar";
import { Main } from "./Main";
import { Footer } from "./Footer";

const Container = styled.div`
   width: calc(100vw);
`;

const StyledHeader = styled.div`
   width: 100%;
   height: 80px;
   text-align: center;
   background-color: #97bf04;
`;

const StyledNavbar = styled.div`
   width: 100%;
   height: 9%;
   background-color: #83a638;
`;

const StyledMain = styled.div`
   width: 95%;
   height: 100%;
   margin: auto;
   margin-top: 30px;
   margin-bottom: 5px;
`;

const StyledFooter = styled.div`
   width: 100%;
   height: 100px;
   background-color: #a1bf73;
`;

export function FinalMain() {
   return (
      <Container>
         <StyledHeader>
            <Header />
         </StyledHeader>
         <StyledNavbar>
            <NavBar />
         </StyledNavbar>
         <StyledMain>
            <Main />
         </StyledMain>
         <StyledFooter>
            <Footer />
         </StyledFooter>
      </Container>
   );
}
