import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DeliveryContext } from "./DeliveryShop";

const Container = styled.div`
   width: 80vw;
   height: 80vh;
   margin: auto;
   padding-top: 10px;
   font-size: 25px;
   display: grid;
   grid-template-columns: 3fr 3fr 3fr;
   grid-column-gap: 25px;
   grid-row-gap: 25px;
`;

const Whole = styled(NavLink)`
   position: relative;
   background-color: #d2b48c;
   border-radius: 10px;
   box-shadow: 3px 3px 3px 3px #c18a5d;
   text-decoration: none;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding-top: 10px;
      padding-left: 10px;
      font-size: 35px;
      color: black;
   }
`;

const Icon = styled.div`
   position: absolute;
   right: 30px;
   bottom: 20px;
   display: grid;
   gap: 10px;
   grid-template-columns: 3fr 3fr 3fr;
   font-size: 3rem;
   color: black;
`;
const Chicken = styled(NavLink)`
   background: url(./assets/img/Chicken.png);
   background-repeat: no-repeat;
   background-position: 184px 62px;
   background-size: 340px;
   text-decoration: none;
   background-color: #d2b48c;
   border-radius: 10px;
   box-shadow: 3px 3px 3px 3px #c18a5d;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;
const KrFood = styled(NavLink)`
   background-image: url(./assets/img/krfood.png);
   background-repeat: no-repeat;
   background-position: 200px 62px;
   background-size: 320px;
   box-shadow: 3px 3px 3px 3px #c18a5d;
   text-decoration: none;
   background-color: #d2b48c;
   border-radius: 10px;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const Snack = styled(NavLink)`
   background-image: url(./assets/img/snack.png);
   background-repeat: no-repeat;
   background-position: 200px 62px;
   background-size: 320px;
   box-shadow: 3px 3px 3px 3px #c18a5d;
   text-decoration: none;
   background-color: #d2b48c;
   border-radius: 10px;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const WsFood = styled(NavLink)`
   background-image: url(./assets/img/pizza.png);
   background-repeat: no-repeat;
   background-position: 170px 30px;
   background-size: 380px;
   box-shadow: 3px 3px 3px 3px #c18a5d;
   text-decoration: none;
   background-color: #d2b48c;
   border-radius: 10px;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const CnFood = styled(NavLink)`
   background-image: url(./assets/img/chn.png);
   background-repeat: no-repeat;
   background-position: 200px 60px;
   background-size: 310px;
   box-shadow: 3px 3px 3px 3px #c18a5d;
   text-decoration: none;
   background-color: #d2b48c;
   border-radius: 10px;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const JpFood = styled(NavLink)`
   background-image: url(./assets/img/jpfood.png);
   background-repeat: no-repeat;
   background-position: 210px 90px;
   background-size: 320px;
   box-shadow: 3px 3px 3px 3px #c18a5d;
   text-decoration: none;
   background-color: #d2b48c;
   border-radius: 10px;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const NtMeal = styled(NavLink)`
   background-image: url(./assets/img/night.png);
   background-repeat: no-repeat;
   background-position: 180px 70px;
   background-size: 340px;
   box-shadow: 3px 3px 3px 3px #c18a5d;
   text-decoration: none;
   background-color: #d2b48c;
   border-radius: 10px;
   &:hover {
      cursor: pointer;
   }
   & h2 {
      padding: 10px;
      color: black;
   }
`;

const Dessert = styled(NavLink)`
   background-image: url(./assets/img/dessert.png);
   background-repeat: no-repeat;
   background-position: 190px 80px;
   background-size: 320px;
   box-shadow: 3px 3px 3px 3px #c18a5d;
   text-decoration: none;
   background-color: #d2b48c;
   border-radius: 10px;
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
               <Icon>
                  <i className="ti ti-meat" />
                  <i className="ti ti-soup" />
                  <i className="ti ti-bread" />
                  <i className="ti ti-pizza" />
                  <i className="ti ti-salad" />
                  <i className="ti ti-fish" />
                  <i className="ti ti-torii" />
                  <i className="ti ti-moon" />
                  <i className="ti ti-coffee" />
               </Icon>
            </Whole>
            <Chicken to="/products/3">
               <h2>치킨</h2>
            </Chicken>
            <KrFood to="/products/5">
               <h2>한식</h2>
            </KrFood>
            <Snack to="/products/6">
               <h2>분식</h2>
            </Snack>
            <WsFood to="/products/7">
               <h2>피자/양식</h2>
            </WsFood>
            <CnFood to="/products/8">
               <h2>중식</h2>
            </CnFood>
            <JpFood to="/products/9">
               <h2>일식/돈까스</h2>
            </JpFood>
            <NtMeal to="/products/10">
               <h2>야식</h2>
            </NtMeal>
            <Dessert to="/products/11">
               <h2>카페/디저트</h2>
            </Dessert>
         </Container>
      </>
   );
}
