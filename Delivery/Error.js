import styled from "styled-components";

const Container = styled.div`
   height: 500px;
   width: 500px;
   margin: 0 auto;
`;

export function Error() {
   return (
      <>
         {" "}
         <Container>
            <Error>Error</Error>
         </Container>
      </>
   );
}
