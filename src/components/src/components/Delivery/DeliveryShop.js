import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home2 } from "./Home2";
import { getAllMenus } from "./api";
import { Navbar } from "./Navbar";
import { ProductWrapper2 } from "./ProductWrapper2";
import { Products } from "./Products";
import { SingleProduct } from "./SingleProducts";
import { ProtectedRoute } from "./ProtectedRoute";
import { Dashboard } from "./Dashboad";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Register } from "./Register";
import { Purchase } from "./Purchase";
import { Cart } from "./Cart";
import { Error } from "./Error";

const client = new QueryClient();
export const DeliveryContext = createContext();

export function DeliveryShop() {
   const { data = [], isLoading } = useQuery("menus", getAllMenus);
   console.log(data);
   return (
      <>
         <QueryClientProvider client={client}>
            {!isLoading && data && (
               <DeliveryShopLoader
                  menus={data}
                  menusCheckList={
                     data && Array.isArray(data)
                        ? data.map((g) => ({
                             id: g.id,
                             checked: false,
                          }))
                        : []
                  }
               />
            )}
         </QueryClientProvider>
      </>
   );
}
function DeliveryShopLoader({ menus, menusCheckList }) {
   const [checkList, setCheckList] = useState(menusCheckList);
   const [loginState, setLoginState] = useState(
      JSON.parse(localStorage.getItem("loginState"))
   );
   return (
      <>
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
                  {/* <Route path="/" element={<Navbar />}> */}
                  <Route path="/" element={<Home2 />}>
                     <Route path="products" element={<ProductWrapper2 />}>
                        <Route index element={<Products />} />
                        <Route path=":id" element={<SingleProduct />} />
                     </Route>
                     <Route
                        path="dashboard"
                        element={
                           <ProtectedRoute>
                              <Dashboard />
                           </ProtectedRoute>
                        }
                     ></Route>
                     <Route path="login" element={<Login />} />
                     <Route path="logout" element={<Logout />} />
                     <Route path="register" element={<Register />} />
                     <Route path="purchase" element={<Purchase />} />
                     <Route path="cart" element={<Cart />} />
                     <Route path="*" element={<Error />} />
                  </Route>
               </Routes>
            </BrowserRouter>
         </DeliveryContext.Provider>
      </>
   );
}
