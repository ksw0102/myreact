import styled from "styled-components";

const Container = styled.div`
   width: 100vw;
   position: absolute;
`;

const Search = styled.div`
   width: 100vw;
   position: absolute;
`;

const Input = styled.input`
   border: 1px solid black;
   width: 55%;
   height: 35px;
   position: relative;
   bottom: 27px;
`;

const Logo = styled.div`
   color: white;
   font-weight: 900;
   font-size: 40px;
   position: relative;
   right: 40%;
   top: 19px;
`;

export function Header() {
   return (
      <>
         <Container>
            <Logo>저기요</Logo>
            <Search>
               <Input type="text" placeholder="원하는 음식을 입력하세요." />
            </Search>
         </Container>
      </>
   );
}
