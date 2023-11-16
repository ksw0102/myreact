import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { DeliveryContext } from "./DeliveryShop";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
   position: relative;
`;
const Card = styled.div`
   width: 400px;
   height: 100px;
   display: flex;
   border: 1px solid dodgerblue;
   margin: 10px 0;
   position: relative;
`;
const Img = styled.img`
   height: calc(100%-2);
   margin: 1px;
`;
const Text = styled.p`
   margin-left: 10px;
   font-size: 0.5rem;
`;
const DeleteBtn = styled.button`
   width: 30px;
   height: 100%;
   background-color: teal;
   position: absolute;
   right: 0;
   text-align: center;
   line-height: 100px;
   border: none;
   cursor: pointer;
`;

export function Cart() {
   const { checkList, setCheckList, menus } = useContext(DeliveryContext);
   const [totalPrice, setTotalPrice] = useState(0);
   // 가격의 초기값을 0으로 설정
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
      navigate("/purchase", { state: { newList } });
   }

   useEffect(() => {
      setNewList(menus.filter((g, i) => checkList[i].checked));
   }, [checkList, menus]);

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
            {newList.map((menu) => (
               <Card key={menu.id}>
                  <img src={menu.image} />
                  <div>
                     <Text>메뉴명 : {menu.title}</Text>
                     <Text>분류 : {menu.genre}</Text>
                     <Text>가격 : {menu.price}</Text>
                  </div>
                  <DeleteBtn id={menu.id} onClick={onClick}>
                     X
                  </DeleteBtn>
               </Card>
            ))}
         </Container>
         <h3>최종 결제금액 : {totalPrice}원</h3>
         <button onClick={onClickBtn}>결제버튼</button>
      </>
   );
}
