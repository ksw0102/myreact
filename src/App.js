import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { DeliveryShop } from "./components/Delivery/DeliveryShop";
import { MonacaLMS } from "./components/Monaca/MonacaLMS";
import { Intro } from "./components/Monaca/Intro";
import { Main } from "./components/Monaca/Main";
import { NavBar } from "./components/Monaca/NavBar";
import { Login } from "./components/Monaca/Login";
import { StudentRegister } from "./components/Monaca/StudentRegister";
import { ProfessorRegister } from "./components/Monaca/ProfessorRegister";
import { Attendance } from "./components/Monaca/Attendance";
import { Opencourseinformation } from "./components/Monaca/OpencourseInformation";
import { MainLecture } from "./components/Monaca/MainLecture";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'TmonMonsori';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/TmonMonsori.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
   *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
   }
`;

// const client = new QueryClient();

// export default function App() {
//    return (
//       <>
//          <QueryClientProvider client={client}>
//             <GlobalStyle />
//             <DeliveryShop />
//          </QueryClientProvider>
//          {/* <GlobalStyle /> */}
//       </>
//    );
// }

const client = new QueryClient();
export default function App() {
   return (
      <>
         <QueryClientProvider client={client}>
            <GlobalStyle />
            <MonacaLMS />
            {/* <NavBar /> */}
         </QueryClientProvider>
      </>
   );
}
