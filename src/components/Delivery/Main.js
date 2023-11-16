import {
   BrowserRouter,
   Navigate,
   Route,
   Routes,
   useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import { Cart } from "./Cart";

const Container = styled.div``;

const Section1 = styled.div`
   width: 80vw;
   height: 30vh;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-column-gap: 10px;
`;

const Login = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const Whole = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const OnePs = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const Fchs = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const Section2 = styled.div`
   width: 80vw;
   height: 80vh;
   margin: auto;
   padding-top: 10px;
   display: grid;
   grid-template-columns: 3fr 3fr 3fr;
   grid-column-gap: 10px;
   grid-row-gap: 10px;
`;

const Chicken = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const KrFood = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const Snack = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const WsFood = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const CnFood = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const JpFood = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const AsFood = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const NtMeal = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const Dessert = styled.div`
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
`;

const Section3 = styled.div`
   width: 80vw;
   height: 15vh;
   margin: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

const Btn = styled.button`
   width: 20%;
   height: 30%;
   margin: 10px;
   font-size: 20px;
   &:hover {
      cursor: pointer;
   }
`;

export function Main() {
   const navigate = useNavigate();

   const navigateToPurchase = () => {
      navigate("/purchase");
   };

   const navigateToLogin = () => {
      navigate("/login");
   };
   return (
      <>
         <Container>
            <Section1>
               <Login onClick={navigateToLogin}>로그인창</Login>
               <Whole>전체보기</Whole>
               <OnePs>1인 주문</OnePs>
               <Fchs>프렌차이즈</Fchs>
            </Section1>
            <Section2>
               <Chicken>치킨</Chicken>
               <KrFood>한식</KrFood>
               <Snack>분식</Snack>
               <WsFood>피자/양식</WsFood>
               <CnFood>중식</CnFood>
               <JpFood>일식/돈까스</JpFood>
               <AsFood>아시아</AsFood>
               <NtMeal>야식</NtMeal>
               <Dessert>카페/디저트</Dessert>
            </Section2>
            <Section3>
               <Btn onClick={navigateToPurchase}>내 주문내역 확인</Btn>
               <Btn>고객센터</Btn>
            </Section3>
         </Container>
      </>
   );
}
