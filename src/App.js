// import section
import { Session } from "./components/20230912/Session";
import { Tab } from "./components/20230911/Tab";
import { List } from "./components/20230911/List";
import { Avatar } from "./components/230912/Avatar";
import { AvatarList } from "./components/230912/AvatarList";
import { PropsTest } from "./components/230912/PropsTest";
import { CounterState } from "./components/230912/CounterState";
import { Menu } from "./components/230913/Menu";
import { Home } from "./components/230913/Home";
import { createGlobalStyle } from "styled-components";
import { Button } from "./components/230913/Button";
import { ItemList } from "./components/230913/ItemList";
import { Project } from "./components/20230913/Project";
import { Gallery } from "./components/20230914/Gallery";
import { OpenWeather } from "./components/20230914/OpenWeather";
import { MyRef } from "./components/230915/MyRef";
import { Navbar } from "./components/230915/Navbar";
// import { Home } from "./components/230915/Home";
import { About } from "./components/230915/About";
import { Contact } from "./components/230915/Contact";
import { MyRouter } from "./components/230915/MyRouter";

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

// // export default function App() {
// //    return (
// //       <>
// //          <Avatar
// //             bgcolor="lightpink"
// //             person={{ name: "Rudy", job: "Programmer", country: "KR" }}
// //             // person 안에 객체를 넣을 땐 {{}} 로 넣음 / 변수 안에 객체 {{}}
// //             // css 태그 넣는 방식이랑 비슷한 느낌?
// //          />
// //          <Avatar
// //             bgcolor="snow"
// //             person={{ name: "Nick", job: "Docter", country: "US" }}
// //          />
// //          <Avatar
// //             bgcolor="purple"
// //             b
// //             person={{ name: "Rachel", job: "Engineer", country: "CN" }}
// //          />
// //          <Avatar
// //             bgcolor="lightblue"
// //             person={{ name: "Bill", job: "Soldier", country: "US" }}
// //          />
// //       </>
// //    );
// // }

// // export default function App() {
// //    return (
// //       <>
// //          <AvatarList />
// //       </>
// //    );
// // }

// // export default function App() {
// //    return (
// //       <>
// //          <PropsTest
// //             firstName={"철수"}
// //             score={{ math: "83", english: "91", history: "89" }}
// //          />
// //       </>
// //    );
// // }

// // export default function App() {
// //    return (
// //       <>
// //          <CounterState />
// //       </>
// //    );
// // }

// // export default function App() {
// //    return (
// //       <>
// //          <Menu />
// //       </>
// //    );
// // }

// export default function App() {
//    return (
//       <>
//          <GlobalStyle />
//          <Home />
//       </>
//    );
// }

// export default function App() {
//    return (
//       <>
//          <Home />
//       </>
//    );
// }

// // // export default function App() {
// // //    return (
// // //       <>
// // //          <Gallery />
// // //       </>
// // //    );
// // // }

// export default function App() {
//    return (
//       <>
//          <GlobalStyle />
//          <OpenWeather cityName="Miami" />
//       </>
//    );
// }

// export default function App() {
//    return (
//       <>
//          <MyRef />
//       </>
//    );
// }

// export default function App() {
//    return (
//       <>
//          <Project />
//       </>
//    );
// }

export default function App() {
   return (
      <>
         <MyRouter />
      </>
   );
}
