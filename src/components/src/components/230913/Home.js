import styled from "styled-components";
import { Menu } from "./Menu";
import { Button } from "./Button";
import { ItemList } from "./ItemList";

const Container = styled.div`
   width: 250px;
   height: 100vh;
   position: absolute;
   top: 0;
   left: 0;
   margin: 0 auto;
   text-align: center;
`;

// Content는 Menu와 띄어줘야 하기때문에 Width를 설정해줌
const Content = styled.div`
   position: absolute;
   top: 0;
   left: 300px;
   background-color: aliceblue;
   width: ${() => window.innerWidth - 150}px;
   height: 100vh;
`;

const XLARGE = "3rem";
const LARGE = "2rem";
const MEDIUM = "1.5rem";
const SMALL = "1rem";
const XSMALL = "0.7rem";

export function Home() {
   return (
      <>
         <Container>
            <Menu fontSize={LARGE} />
         </Container>
         <Content>
            <div>
               <Button color="white" bgcolor="plum" />
               <Button color="black" bgcolor="yellow" />
               <Button color="magenta" bgcolor="black" />
            </div>
            <div>
               <ItemList />
            </div>
         </Content>
      </>
   );
}
