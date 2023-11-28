import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DeliveryContext } from "./DeliveryShop";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
   width: 100vw;
   height: 100vh;
`;

const Card = styled.div`
   border: 1px solid black;
   background-color: gold;
   height: 500px;
   width: 500px;
`;

const Img = styled.img``;

const Text = styled.p``;

const DeleteBtn = styled.button``;

export function Cart() {
   const { checkList, setCheckList, foods } = useContext(DeliveryContext);
   const [totalPrice, setTotalPrice] = useState(0);
   const [newList, setNewList] = useState([]);
   const navigate = useNavigate();

   function onClick(e) {
      const temp = checkList.map((item) => {
         if (item.id === +e.target.id) {
            return { ...item, checked: false };
         } else {
            return item;
         }
      });
      setCheckList(temp);
   }

   function onClickBtn() {
      const temp = checkList.map((item) => {
         return { ...item, checked: false };
      });
      setCheckList(temp);
      navigate("/dashboard", { state: { newList } });
   }
   useEffect(() => {
      setNewList(foods.filter((f, i) => checkList[i].checked));
   }, [checkList, foods]);

   useEffect(() => {
      let price = 0;
      for (let i = 0; i < newList.length; i++) {
         price = price + newList[i].price;
      }
      setTotalPrice(price);
   }, [newList]);

   return (
      <>
         <Container>
            {newList.map((food) => {
               <Card key={food.id}>
                  <Img src={food.image} />
                  <div>
                     <Text>타이틀: {food.title}</Text>
                     <Text>장르 : {food.genre}</Text>
                     <Text>가격 : {food.price}원</Text>
                  </div>
                  <DeleteBtn id={food.id} onClick={onClick}>
                     X
                  </DeleteBtn>
               </Card>;
            })}
            <h2>총 결제금액 : {totalPrice}원</h2>
            <button onClick={onClickBtn}>결제</button>
         </Container>
      </>
   );
}
