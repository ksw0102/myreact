import { GameShop } from "./components/20230918/GameShop";
import { Project } from "./components/20230913/Project";
import { createGlobalStyle } from "styled-components";
import { Products } from "./components/20230918/Products";
import { UseContext } from "./components/20230919/UseContext";
import { Main } from "./components/20230913/Main";

// const GlobalStyle = createGlobalStyle`  // react에서 *(asterik) 사용법
// @font-face {
//     font-family: 'GangwonState';
//     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/GangwonState.woff2') format('woff2');
//     font-weight: normal;
//     font-style: normal;
// }

//  *{   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: Poppins, GangwonState
//  }`;

// export default function App() {
//    return <GameShop />;
//    <Products />;
// }

export default function App() {
   return (
      <>
         <Main />
      </>
   );
}

// export default function App() {
//    return (
//       <>
//          <UseContext />
//       </>
//    );
// }
