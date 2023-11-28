import { useContext } from "react";
import { DeliveryContext } from "./DeliveryShop";
import { useQuery } from "react-query";
import { getAllPurchasedDelivers } from "./api";

export function Dashboard() {
   const { loginState } = useContext(DeliveryContext);
   const { data, isLoading } = useQuery(
      "getAllPurchase",
      getAllPurchasedDelivers
   );
   return (
      <>
         <h1>DB</h1>
         <h3>{loginState?.id}의 장바구니</h3>
         {!isLoading
            ? data.map((d, i) => (
                 <p key={i}>
                    타이틀 : {d.food.title}, 수량 : {d.quantity}
                 </p>
              ))
            : null}
      </>
   );
}
