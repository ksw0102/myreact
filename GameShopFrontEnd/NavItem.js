import styled from "styled-components";

const Container = styled.div`
   width: 70px;
   text-align: center;
   display: flex;
   flex-direction: column;
   & i {
      font-size: 3rem;
      margin-bottom: 3px;
   }
`;
export function NavItem({ icon }) {
   return (
      <>
         <Container>
            <i className={icon}></i>
         </Container>
      </>
   );
}
