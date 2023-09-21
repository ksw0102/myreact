import { GameShop } from "./components/20230918/GameShop";
import { Project } from "./components/20230913/Project";
import { createGlobalStyle } from "styled-components";
import { Products } from "./components/20230918/Products";
import { UseContext } from "./components/20230919/UseContext";
import { Main } from "./components/20230913/Main";
import { SlideBox } from "./components/utils/SlideBox";
import { Grid } from "./components/utils/Grid";
import { Frame } from "./components/utils/Frame";
import { MouseEnter } from "./components/utils/MouseEvent";
import { Modal } from "./components/230915/Modal";
import { MyRouter } from "./components/230915/MyRouter";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');

  }
  * {

    font-family: Poppins, GmarketSansMedium;
  }
`;

// export default function App() {
//    return (
//       <>
//          <GlobalStyle />
//          <MyRouter />
//          <Modal />
//       </>
//    );
// }
export default function App() {
   return (
      <>
         <GlobalStyle />
         <Main />
      </>
   );
}

// export default function App() {
//    return (
//       <>
//          <Main />
//       </>
//    );
// }
