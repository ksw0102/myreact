import styled from "styled-components";

const Container = styled.div`
   width: 70px;
   text-align: center;
   display: flex;
   flex-direction: column;
   & i {
      font-size: 2.3rem;
      margin-bottom: 3px;
   }
   & span {
      font-size: 1.2rem;
      font-weight: bold;
   }
`;
export function NavItem({ icon, name }) {
   return (
      <>
         <Container>
            <i className={icon}></i>
            <span>{name}</span>
         </Container>
      </>
   );
}
