import styled from "styled-components";

const StyleButton = styled.button`
   width: 150px;
   height: 40px;
   padding: 10px 20px;
   font-size: 1.2rem;
   color: ${(props) => props.color};
   line-height: 7px;
   background-color: ${(props) => props.bgcolor};
   border-radius: 15px;
`;
export function Button({ color, bgcolor }) {
   return (
      <>
         <StyleButton color={color} bgcolor={bgcolor}>
            버튼
         </StyleButton>
      </>
   );
}
