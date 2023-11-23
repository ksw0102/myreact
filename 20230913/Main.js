import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Rock } from "./Rock";
import { HipHop } from "./HipHop";
import { Project } from "./Project";
import { Bar } from "./Bar";
import { Banner } from "./Banner";

export function Main() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Bar />}>
                  <Route path="banner" element={<Banner />} />
                  <Route path="project" element={<Project />} />
                  <Route path="rock" element={<Rock />} />
                  <Route path="hiphop" element={<HipHop />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}
