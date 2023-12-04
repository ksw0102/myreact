import { useContext, useEffect } from "react";
import { DeliveryContext } from "./DeliveryShop";
import { useQuery } from "react-query";
import { getAllPurchasedDelivers } from "./api";

export function Dashboard() {
   const { loginState } = useContext(DeliveryContext);
   const { data, isLoading } = useQuery(
      "getAllPurchase",
      getAllPurchasedDelivers,
      {
         retry: 0,
      }
   );
   console.log("dashboard", data);

   return (
      <>
         <h1>DB</h1>
         <h3>{loginState?.id}의 장바구니</h3>
         {!isLoading && Array.isArray(data) && data.length > 0 ? (
            data.map((d, i) => (
               <p key={i}>
                  메뉴명 : {d.food.title}, 수량 : {d.quantity}
               </p>
            ))
         ) : (
            <p>데이터가 없습니다</p>
         )}
      </>
   );
}
