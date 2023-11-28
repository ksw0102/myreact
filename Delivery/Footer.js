import styled from "styled-components";

const StyledFooter = styled.div`
   width: 100%;
   height: 100px;
   background-color: #a1bf73;
`;

export function Footer() {
   return (
      <>
         <StyledFooter>
            <h1>Footer</h1>
         </StyledFooter>
      </>
   );
}
