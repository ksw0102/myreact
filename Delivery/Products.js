import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
   width: 80vw;
   height: 80vh;
   margin: auto;
   padding-top: 10px;
   font-size: 25px;
   display: grid;
   grid-template-columns: 3fr 3fr 3fr;
   grid-column-gap: 10px;
   grid-row-gap: 10px;
`;
const Whole = styled.div`
   background-image: url(./assets/img/krfood.png);
   background-repeat: no-repeat;
   background-position: 200px 62px;
   background-size: 320px;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;
const Chicken = styled(NavLink)`
   background: url(./assets/img/Chicken.png);
   background-repeat: no-repeat;
   background-position: 184px 62px;
   background-size: 340px;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;
const KrFood = styled.div`
   background-image: url(./assets/img/krfood.png);
   background-repeat: no-repeat;
   background-position: 200px 62px;
   background-size: 320px;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const Snack = styled.div`
   background-image: url(./assets/img/snack.png);
   background-repeat: no-repeat;
   background-position: 200px 62px;
   background-size: 320px;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const WsFood = styled.div`
   background-image: url(./assets/img/pizza.png);
   background-repeat: no-repeat;
   background-position: 170px 30px;
   background-size: 380px;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const CnFood = styled.div`
   background-image: url(./assets/img/chn.png);
   background-repeat: no-repeat;
   background-position: 200px 60px;
   background-size: 310px;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const JpFood = styled.div`
   background-image: url(./assets/img/jpfood.png);
   background-repeat: no-repeat;
   background-position: 210px 90px;
   background-size: 320px;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const AsFood = styled.div`
   background-image: url(./assets/img/asia.png);
   background-repeat: no-repeat;
   background-position: 190px 70px;
   background-size: 340px;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const NtMeal = styled.div`
   background-image: url(./assets/img/night.png);
   background-repeat: no-repeat;
   background-position: 180px 70px;
   background-size: 340px;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const Dessert = styled.div`
   background-image: url(./assets/img/dessert.png);
   background-repeat: no-repeat;
   background-position: 190px 80px;
   background-size: 320px;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

export function Products() {
   return (
      <>
         <Container>
            <Whole>
               <h2>전체보기</h2>
            </Whole>
            <Chicken to={"/singleproducts"}>
               <h2>치킨</h2>
            </Chicken>
            <KrFood>
               <h2>한식</h2>
            </KrFood>
            <Snack>
               <h2>분식</h2>
            </Snack>
            <WsFood>
               <h2>피자/양식</h2>
            </WsFood>
            <CnFood>
               <h2>중식</h2>
            </CnFood>
            <JpFood>
               <h2>일식/돈까스</h2>
            </JpFood>
            <NtMeal>
               <h2>야식</h2>
            </NtMeal>
            <Dessert>
               <h2>카페/디저트</h2>
            </Dessert>
         </Container>
      </>
   );
}
