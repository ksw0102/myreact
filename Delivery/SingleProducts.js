import { useContext } from "react";
import styled from "styled-components";
import { DeliveryContext } from "./DeliveryShop";
import { useParams } from "react-router-dom";

const Container = styled.div`
   width: 600px;
   display: flex;
   flex-direction: column;
`;

const Img = styled.img`
   width: 100%;
`;

const Content = styled.div`
   font-size: 0.8rem;
`;

export function SingleProduct() {
   const { menus } = useContext(DeliveryContext);
   const { id } = useParams();
   const menu = menus.find((g) => g.id === +id);
   const { title, price, category, image, text } = menu;
   return (
      <>
         <h3>{title}</h3>
         <Container>
            <Img src={image} />
            <Content>
               <p>타이틀 : {title}</p>
               <p>분류 : {category}</p>
               <p>가격 : {price}</p>
               <p>{text}</p>
               <Link to="/finalmain">목록으로 돌아가기</Link>
            </Content>
         </Container>
      </>
   );
}
