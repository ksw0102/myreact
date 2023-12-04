import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { purchaseDelivers } from "./api";

export function Purchase() {
   const navigate = useNavigate();
   const location = useLocation();
   const purchasedDelivers = location.state?.newList;

   useEffect(() => {
      const delay = 2000;
      if (purchasedDelivers && purchasedDelivers.length > 0) {
         purchaseDelivers(purchasedDelivers);

         setTimeout(() => {
            navigate("/dashboard");
            // dashboard로 넘어가기 잠깐 제외
         }, delay);
         // 아무것도 안들어가있으면 백을 시킨다
      } else {
         setTimeout(() => {
            navigate("/home");
         }, delay);
      }
   }, []);

   return <h1>구매 처리중...</h1>;
}
