import styled from "styled-components";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

const Container = styled.div`
   width: calc(100vw);
`;

const StyledHeader = styled.div`
   width: 100%;
   height: 90px;
   text-align: center;
   background-color: #97bf04;
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
   background-color: lightgreen;
`;

export function Home2() {
   return (
      <>
         <Container>
            <StyledHeader>
               <Header />
            </StyledHeader>
            <StyledMain>
               <Main />
            </StyledMain>
            <StyledFooter>
               <Footer />
            </StyledFooter>
         </Container>
      </>
   );
}
