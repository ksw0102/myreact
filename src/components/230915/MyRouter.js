import styled from "styled-components";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";

const Container = styled.div`
   width: 80%;
   height: 100vh;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 30% 70%;
`;

const Content = styled.div``;
export function MyRouter() {
   const [page, setPage] = useState(Home);
   return (
      <>
         <Container>
            <Navbar />
            <Content></Content>
         </Container>
      </>
   );
}
