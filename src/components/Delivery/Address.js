import styled from "styled-components";

const Container = styled.div`
   width: 100px;
   height: 300px;
   background-color: grey;
   border: 2px solid black;
`;

export function Address() {
   return (
      <>
         <Container>
            <h2>주소창</h2>
            <h2>{loginState?.id} 님 반갑습니다.</h2>
         </Container>
      </>
   );
}
