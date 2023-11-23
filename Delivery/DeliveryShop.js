import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { createContext, useContext, useState } from "react";
import { getAllDeliverys } from "./api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FinalMain } from "./FinalMain";

const client = new QueryClient();
export const DeliveryContext = createContext();

export function DeliveryShop() {
   const { data, isLoading } = useQuery("menus", getAllDeliverys);
   return (
      <>
         <QueryClientProvider client={client}>
            {!isLoading && data && (
               <DeliveryShopLoader
                  menus={data}
                  menusCheckList={data.map((g) => {
                     return { id: g.id, checked: false };
                  })}
               />
            )}
         </QueryClientProvider>
      </>
   );
}

function DeliveryShopLoader({ menus, menusCheckList }) {
   const [checkList, setCheckList] = useState(menusCheckList);
   const [loginState, setLoginState] = useState(
      JSON.parse(localStorage.getItem("lognState"))
   );
   return (
      <DeliveryContext.Provider
         value={{
            checkList,
            setCheckList,
            loginState,
            setLoginState,
            menus,
         }}
      >
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<FinalMain />}></Route>
            </Routes>
         </BrowserRouter>
      </DeliveryContext.Provider>
   );
}
