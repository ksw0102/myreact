import styled from "styled-components";

const Container = styled.div`
   width: 200px;
   height: 100vh;
   background-color: lightpink;
   font-size: 1.5rem;
   padding: 50px 10px;
`;
const Li = styled.li`
   list-style-type: none;
`;
const Link = styled.a`
   text-decoration: none;
`;

export function Navbar() {
   return (
      <>
         <Container>
            <ul>
               <Li>
                  <Link href="#">Home</Link>
               </Li>
               <Li>
                  <Link href="#">Contact</Link>
               </Li>
               <Li>
                  <Link href="#">About</Link>
               </Li>
            </ul>
         </Container>
      </>
   );
}
