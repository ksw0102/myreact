import { Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { DeliveryContext } from "./DeliveryShop";
import { Navbar } from "./Navbar";

const Container = styled.div`
   width: 600px;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
`;
const Card = styled.div`
   width: 180px;
   border: 2px solid dodgerblue;
   margin-bottom: 20px;
   font-size: 0.8rem;
   cursor: pointer;
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
         <h3>Menus List</h3>
         <Container>
            {menus.map((menu, i) => (
               <Card key={menu.id}>
                  <div onClick={() => onClick(menu.id)}>
                     <Img src={menu.image} />
                     <Text>메뉴명 : {menu.title}</Text>
                     <Text>분류 : {menu.genre}</Text>
                     <Text>가격 : {menu.price}</Text>
                  </div>
                  <input
                     type="checkbox"
                     id={menu.id}
                     onChange={onChange}
                     checked={checkList[i].checked}
                  />
               </Card>
            ))}
         </Container>
      </>
   );
}
