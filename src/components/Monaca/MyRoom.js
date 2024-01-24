import styled from "styled-components";
import { NavBar } from "./NavBar";

const Box = styled.div`
   width: 500px;
   height: 500px;
   background-color: aqua;
`;

export function MyRoom() {
   return (
      <>
         <NavBar />
         <h1>나의 방</h1>
         <Box>This is MyRoom Test</Box>
      </>
   );
}
