import { useContext } from "react";
import styled from "styled-components";
import { DeliveryContext } from "./DeliveryShop";
import { Link, NavLink, useParams } from "react-router-dom";

const StyledBackground = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   overflow: hidden;
   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg);
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.7; /* Adjust the transparency for the background */
      z-index: -1; /* Ensure it's positioned behind other content */
   }
`;

const Container = styled.div`
   width: 50vw;
   display: flex;
   flex-direction: column;
   margin: 20px auto;
   text-align: center;
   align-items: center;
   padding: 1rem;
   & p {
      font-size: 2rem;
      padding: 10px;
   }
`;

const Img = styled.img`
   width: 70%;
   height: 50%;
   box-shadow: 5px 5px 5px 5px gray;
`;

const Content = styled.div`
   font-size: 0.8rem;
   padding: 1rem;
`;

const StyledNavLink = styled(NavLink)`
   font-size: 2rem;
   text-decoration: none;
   border: 1px solid black;
   padding: 10px;
   margin-top: 15px;
   color: black;
   background-color: white;
`;
const Inner = styled.div`
   padding: 2rem;
`;
export function SingleProduct() {
   const { foods } = useContext(DeliveryContext);
   const { id } = useParams();
   console.log("foods", foods);
   const food = foods.find((f) => f.id === +id);
   const { title, price, category, image, text } = food;
   return (
      <>
         <>
            <StyledBackground>
               <Container>
                  <h1>{title}</h1>
                  <Img src={image} />
                  <Content>
                     <p> 메뉴명: {title}</p>
                     <p> 카테고리 : {category}</p>
                     <p>가격 : {price}원</p>
                     <p>{text}</p>
                     <Inner>
                        <StyledNavLink to="/home">
                           목록으로 돌아가기
                        </StyledNavLink>
                     </Inner>
                  </Content>
               </Container>
            </StyledBackground>
         </>
      </>
   );
}
