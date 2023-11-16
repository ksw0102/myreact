import { useQuery } from "react-query";
import { useContext } from "react";
import { DeliveryContext } from "./DeliveryShop";
import { getAllPurchasedMenus } from "./api";

export function Dashboard() {
   const { loginState } = useContext(DeliveryContext);
   const { data, isLoading } = useQuery("getAllPurchase", getAllPurchasedMenus);
   return (
      <>
         <h1>Dashboard</h1>
         <h3>{loginState?.id} 의 구매목록</h3>
         {!isLoading
            ? data.map((d, i) => (
                 <p key={i}>
                    타이틀 : {d.menu.title}, 수량 : {d.quantity}
                 </p>
              ))
            : null}
      </>
   );
}
