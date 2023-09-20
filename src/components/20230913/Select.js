import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Bar } from "./Bar";
import { Rock } from "./Rock";
import { HipHop } from "./HipHop";

export function Select() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Bar />}>
                  <Route path="rock" element={<Rock />} />
                  <Route path="hiphop" element={<HipHop />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}
