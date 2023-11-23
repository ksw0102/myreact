import { useContext } from "react";
import styled from "styled-components";
import { DeliveryContext } from "./DeliveryShop";
import { Link, useParams } from "react-router-dom";

const Container = styled.div`
   width: 600px;
   display: flex;
   flex-direction: column;
`;

const Img = styled.img`
   width: 100%;
`;

const Content = styled.div`
   font-size: 1rem;
`;

export function SingleProduct() {
   const { menus } = useContext(DeliveryContext);
   const { id } = useParams();
   const menu = menus.find((g) => g.id === +id);
   const { title, genre, image, price, text } = menu;
   return (
      <>
         <h3>{title}</h3>
         <Container>
            <Img src={image} />
            <Content>
               <p>메뉴명 : {title}</p>
               <p>분류 : {genre}</p>
               <p>가격 : {price}원 입니다.</p>
               <p>{text}</p>
               <Link to="/products">목록으로 돌아가기</Link>
            </Content>
         </Container>
      </>
   );
}
