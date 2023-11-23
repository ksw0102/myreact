import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { purchaseMenus } from "./api";

export function Purchase() {
   const navigate = useNavigate();
   const location = useLocation();
   const purchasedDeliverys = location.state?.newList;

   useEffect(() => {
      const delay = 500;

      if (purchaseMenus && purchaseMenus.length > 0) {
         purchaseMenus(purchaseMenus);

         setTimeout(() => {
            navigate("/dashboad");
         }, delay);
      } else {
         navigate("/cart");
      }
   }, []);
   return <h1> 구매 처리중.. 잠시만 기다려주세요</h1>;
}
