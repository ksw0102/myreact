import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DeliveryContext } from "./DeliveryShop";

const Container = styled.div`
   width: 600px;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
`;
const Card = styled.div`
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
const Img = styled.img`
   width: 100%;
`;
const Text = styled.p`
   margin-left: 10px;
`;
export function Products() {
   const navigate = useNavigate();
   const { checkList, setCheckList, menus } = useContext(DeliveryContext);

   function onClick(id) {
      navigate(`${id}`);
   }
   function onChange(e) {
      const temp = checkList.map((item) => {
         if (item.id === +e.target.id) {
            return { ...item, checked: e.target.checked };
         } else {
            return item;
         }
      });
      setCheckList(temp);
   }
   return (
      <>
         {menus.map((menu, i) => (
            <Card key={menu.id}>
               <div onClick={() => onclick(menu.id)}>
                  <Img src={menu.image} />
                  <Text> 음식명 : {menu.title}</Text>
                  <Text> 카테고리 : {menu.genre}</Text>
                  <Text> 가격 : {menu.price}</Text>
               </div>
               <input
                  type="checkbox"
                  id={menu.id}
                  onChange={onChange}
                  checked={checkList[i].checked}
               />
            </Card>
         ))}
      </>
   );
}
