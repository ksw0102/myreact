import styled from "styled-components";
const Container = styled.div`
   margin: 0 auto;
   background-color: slategray;
   width: 90vw;
   height: 75vh;
   background-image: url("/img/back.jpg");
   background-repeat: no-repeat;
   background-size: cover;
   align-items: center;
`;
const Title = styled.div`
   font-size: 2.5rem;
   color: gray;
   text-align: right;
   padding-right: 2rem;
   text-shadow: 3px 3px 3px pink;
`;
const Main = styled.div`
   align-items: center;
   justify-content: center;
   img {
      padding: 1rem;
      left: 5vw;
      position: fixed;
      animation: rotate_image 4s linear infinite;
      transform-origin: 50% 50%;
      width: 10vw;
      height: 10vw;
      @keyframes rotate_image {
         100% {
            transform: rotate(360deg);
         }
      }
   }
`;
export function Banner() {
   return (
      <>
         <Container>
            <Main>
               <img className="record" alt="record" src="img/rrr.jpg"></img>
            </Main>
            <Title>
               <h1>
                  Welcome <br />
                  To Our <br />
                  RECORD Shop
               </h1>
            </Title>
         </Container>
      </>
   );
}
