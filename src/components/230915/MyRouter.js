import styled from "styled-components";
import { Navbar } from "./Navbar";

const Container = styled.div`
   width: 80%;
   height: 100vh;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 30% 70%;
`;

const Content = styled.div``;
export function MyRouter() {
   return (
      <>
         <Container>
            <Navbar />
            <Content></Content>
         </Container>
      </>
   );
}
