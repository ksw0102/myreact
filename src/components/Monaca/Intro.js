import styled from "styled-components";
import intro from "./image/intro.png";
// const StyledBackground = styled.div`
//    background-image: url("/img/intro.png");
// `;

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: url(${intro});
   background-repeat: no-repeat;
   background-size: cover;
`;

export function Intro() {
   return <Container />;
}
