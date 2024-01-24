import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboard";
import { Other } from "./Other";
import { Error } from "./Error";
import { Login } from "./Login";
import { SingleProduct } from "./SingleProduct";
import { ProductWrapper } from "./ProductWrapper";
import { createContext } from "react";
import { useState } from "react";
import games from "./db/Data";
import { ProtectedRoute } from "./ProtectedRoute";

export const GameContext = createContext();
const defaultCheckList = games.map((g) => {
   // 12개의 객체가 담겨있는 배열
   return { id: g.id, checked: false };
});

export function GameShop() {
   const [checkList, setCheckList] = useState(defaultCheckList);
   const [user, setUser] = useState({});

   console.log(checkList);
   return (
      <>
         <GameContext.Provider
            value={{ checkList, setCheckList, user, setUser }}
         >
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<NavBar />}>
                     <Route index element={<Home />} />
                     <Route path="home" element={<Home />} />
                     <Route path="products" element={<ProductWrapper />}>
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
                     <Route path="cart" element={<Other />} />
                     <Route path="*" element={<Error />} />
                  </Route>
               </Routes>
            </BrowserRouter>
         </GameContext.Provider>
      </>
   );
}

// www.gameshorp.com/product  여기 써잇는 것이 id로 인식됨
// 단, / (슬래시) 가 붙으면 id의 자식으로 판단하므로 error
// ex) www.gameshop.com/products/10002
// id = 10002
//www.gameshop.com/products/10002/12 = error
