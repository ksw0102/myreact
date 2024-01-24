import styled from "styled-components";
import { NavBar } from "./NavBar";
import { MonacaInfo } from "./MonacaInfo";

import ATM from "./image/Kiosk/ATM1.png";
import Kiosk1 from "./image/Kiosk/Kiosk1.png";
import Kiosk2 from "./image/Kiosk/Kiosk2.png";
import Kiosk3 from "./image/Kiosk/Kiosk3.png";
import Kiosk4 from "./image/Kiosk/Kiosk4.png";

import Mobile1 from "./image/Mobile/Mobile1.png";
import Mobile2 from "./image/Mobile/Mobile2.png";
import Mobile3 from "./image/Mobile/Mobile3.png";
import Mobile4 from "./image/Mobile/Mobile4.jpg";
import Mobile5 from "./image/Mobile/Mobile5.jpg";

import Web1 from "./image/Web/Web1.png";
import Web2 from "./image/Web/Web2.png";
import Web3 from "./image/Web/Web3.png";
import Web4 from "./image/Web/Web4.png";
import Web5 from "./image/Web/Web5.png";

import Wel1 from "./image/Welfare/Wel1.jpg";
import Wel2 from "./image/Welfare/Wel2.png";
import Wel3 from "./image/Welfare/Wel3.png";
import Wel4 from "./image/Welfare/Wel4.png";
import Wel5 from "./image/Welfare/Wel5.png";

import FireEmoji from "./image/FireEmoji.png";
import Fav from "./image/Fav.png";
import FreeLec from "./image/Free.png";
import Newbie from "./image/Newbie.png";

const Wrapper = styled.div`
   width: 100vw;
   height: 230vh;
`;

const SubWrap = styled.div`
   width: 80%;
   height: 100%;
   margin: 4rem auto;
`;

const Container = styled.div`
   height: 230vh;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;
   font-family: "GmarketSansMedium";
`;

const Header = styled.div`
   width: 100%;
   height: 12vh;
   background-color: #0b4434;
   display: flex;
   align-items: center;
   justify-content: center;
   & h1 {
      color: white;
      font-size: 2rem;
   }
`;
const Kiosk = styled.div`
   width: 90%;
   height: 600px;
   margin: 1rem auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const KioskHeader = styled.div`
   display: flex;
   flex-direction: column;
   height: 20%;
   width: 98%;
   margin: 0 auto;
`;

const KioskTitle = styled.div`
   height: 50%;
   font-size: 2rem;
   display: flex;
`;

const Info = styled.div`
   height: 50%;
   font-size: 1.5rem;
`;

const KioskWrap = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   align-items: center;
   margin: 0 auto;
`;

const KioskIn1 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const KioskPic1 = styled.div`
   background-image: url(${Kiosk1});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;
const KioskIn2 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const KioskPic2 = styled.div`
   background-image: url(${Kiosk3});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const KioskIn3 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const KioskPic3 = styled.div`
   background-image: url(${Kiosk2});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const KioskIn4 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const KioskPic4 = styled.div`
   background-image: url(${Kiosk4});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const KioskIn5 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const KioskPic5 = styled.div`
   background-image: url(${ATM});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const LectureInfo = styled.div`
   height: 50%;
   background-color: lightgrey;
   width: 100%;
   border-radius: 1rem;
   margin: 1rem;
   align-items: center;
   justify-content: center;
   display: flex;
   flex-direction: column;
   line-height: 4rem;
`;
//웹사이트
const Web = styled.div`
   width: 90%;
   height: 600px;
   margin: 1rem auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const WebHeader = styled.div`
   display: flex;
   flex-direction: column;
   height: 20%;
   width: 98%;
   margin: 0 auto;
`;

const WebTitle = styled.div`
   height: 50%;
   font-size: 2rem;
   display: flex;
`;

const WebWrap = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   align-items: center;
   margin: 0 auto;
`;

const WebIn1 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const WebPic1 = styled.div`
   background-image: url(${Web1});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;
const WebIn2 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const WebPic2 = styled.div`
   background-image: url(${Web2});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const WebIn3 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const WebPic3 = styled.div`
   background-image: url(${Web3});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const WebIn4 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const WebPic4 = styled.div`
   background-image: url(${Web4});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const WebIn5 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const WebPic5 = styled.div`
   background-image: url(${Web5});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;
// 모바일
const Mobile = styled.div`
   width: 90%;
   height: 600px;
   margin: 1rem auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const MobileHeader = styled.div`
   display: flex;
   flex-direction: column;
   height: 20%;
   width: 98%;
   margin: 0 auto;
`;

const MobileTitle = styled.div`
   height: 50%;
   font-size: 2rem;
   display: flex;
`;

const MobileWrap = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   align-items: center;
   margin: 0 auto;
`;

const MobileIn1 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const MobilePic1 = styled.div`
   background-image: url(${Mobile1});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;
const MobileIn2 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const MobilePic2 = styled.div`
   background-image: url(${Mobile2});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const MobileIn3 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const MobilePic3 = styled.div`
   background-image: url(${Mobile3});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const MobileIn4 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const MobilePic4 = styled.div`
   background-image: url(${Mobile4});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const MobileIn5 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const MobilePic5 = styled.div`
   background-image: url(${Mobile5});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

//복지
const Welfare = styled.div`
   width: 90%;
   height: 600px;
   margin: 1rem auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const WelfareHeader = styled.div`
   display: flex;
   flex-direction: column;
   height: 20%;
   width: 98%;
   margin: 0 auto;
`;

const WelfareTitle = styled.div`
   height: 50%;
   font-size: 2rem;
   display: flex;
`;

const WelfareWrap = styled.div`
   display: flex;
   height: 100%;
   width: 100%;
   align-items: center;
   margin: 0 auto;
`;

const WelfareIn1 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const WelfarePic1 = styled.div`
   background-image: url(${Wel1});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;
const WelfareIn2 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const WelfarePic2 = styled.div`
   background-image: url(${Wel2});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const WelfareIn3 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const WelfarePic3 = styled.div`
   background-image: url(${Wel3});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const WelfareIn4 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const WelfarePic4 = styled.div`
   background-image: url(${Wel4});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

const WelfareIn5 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const WelfarePic5 = styled.div`
   background-image: url(${Wel5});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
`;

// 강의 한 눈에 보기
export function LectureList() {
   return (
      <>
         <NavBar />
         <Wrapper>
            <Header>
               <h1>모나카에 있는 강의 한눈에 보기</h1>
            </Header>
            <SubWrap>
               <Container>
                  <Kiosk>
                     <KioskHeader>
                        <KioskTitle title="아래의 사진을 누르면 해당 강의 상세 페이지로 이동해요.">
                           이제는 없는 곳이 없는 키오스크 🏧
                        </KioskTitle>
                        <Info>더 이상 키오스크 앞에서 힘들고 싶지 않다면</Info>
                        <p></p>
                     </KioskHeader>
                     <KioskWrap>
                        <KioskIn1>
                           <KioskPic1 />
                           <LectureInfo>
                              <p>&#60;키오스크 초급 1-1&#62;</p>
                              <p>키오스크 전반적 이해와 구성</p>
                           </LectureInfo>
                        </KioskIn1>
                        <KioskIn2>
                           <KioskPic2 />
                           <LectureInfo>
                              <p>&#60;키오스크 초급 1-2&#62;</p>
                              <p>초보자를 위한 쉬운 사용법</p>
                           </LectureInfo>
                        </KioskIn2>
                        <KioskIn3>
                           <KioskPic3 />
                           <LectureInfo>
                              <p>&#60;스마트한 대기&#62;</p>
                              <p>키오스크를 활용한 시간절약</p>
                           </LectureInfo>
                        </KioskIn3>
                        <KioskIn4>
                           <KioskPic4 />
                           <LectureInfo>
                              <p>&#60;키오스크 마스터&#62;</p>
                              <p>쉽고 빠른 디지털 자동화</p>
                           </LectureInfo>
                        </KioskIn4>
                        <KioskIn5>
                           <KioskPic5 />
                           <LectureInfo>
                              <p>&#60;ATM사용방법&#62;</p>
                              <p>은행원보다 ATM을 더 자주 봐요</p>
                           </LectureInfo>
                        </KioskIn5>
                     </KioskWrap>
                  </Kiosk>
                  <Web>
                     <WebHeader>
                        <WebTitle title="아래의 사진을 누르면 해당 강의 상세 페이지로 이동해요.">
                           정보화시대에 발맞춤 할 수 있는 강의 💻
                        </WebTitle>
                        <Info>
                           인터넷으로 누리고 싶은 혜택이 많지만 잘 모르겠다면
                        </Info>
                     </WebHeader>
                     <WebWrap>
                        <WebIn1>
                           <WebPic1 />
                           <LectureInfo>
                              <p>&#60;웹사이트의 생활의 즐거움&#62;</p>
                              <p>두통유발 인터넷은 이제 안녕</p>
                           </LectureInfo>
                        </WebIn1>
                        <WebIn2>
                           <WebPic2 />
                           <LectureInfo>
                              <p>&#60;인터넷 생활 해킹&#62;</p>
                              <p>웹사이트 활용의 비밀</p>
                           </LectureInfo>
                        </WebIn2>
                        <WebIn3>
                           <WebPic3 />
                           <LectureInfo>
                              <p>&#60;웹사이트 전문가 되기&#62;</p>
                              <p>효과적으로 빠르게 요령 익히기</p>
                           </LectureInfo>
                        </WebIn3>
                        <WebIn4>
                           <WebPic4 />
                           <LectureInfo>
                              <p>&#60;디지털 네비게이터&#62;</p>
                              <p>웹사이트 세계로의 안내서</p>
                           </LectureInfo>
                        </WebIn4>
                        <WebIn5>
                           <WebPic5 />
                           <LectureInfo>
                              <p>&#60;웹사이트 기초부터 고급까지&#62;</p>
                              <p>웹사이트 실전 활용법</p>
                           </LectureInfo>
                        </WebIn5>
                     </WebWrap>
                  </Web>
                  <Mobile>
                     <MobileHeader>
                        <MobileTitle title="아래의 사진을 누르면 해당 강의 상세 페이지로 이동해요.">
                           비싼 핸드폰 기왕 쓸 거 다 알고 쓰자 📱
                        </MobileTitle>
                        <Info>핸드폰 사용하면서 내 자신이 답답해질 때</Info>
                     </MobileHeader>
                     <MobileWrap>
                        <MobileIn1>
                           <MobilePic1 />
                           <LectureInfo>
                              <p>&#60;편리한 모바일 라이프&#62;</p>
                              <p>삶의 질을 향상시켜주는 강의</p>
                           </LectureInfo>
                        </MobileIn1>
                        <MobileIn2>
                           <MobilePic2 />
                           <LectureInfo>
                              <p>&#60;모바일 업그레이드&#62;</p>
                              <p>초보자들의 모바일 기초사용법</p>
                           </LectureInfo>
                        </MobileIn2>
                        <MobileIn3>
                           <MobilePic3 />
                           <LectureInfo>
                              <p>&#60;스마트폰 마법사&#62;</p>
                              <p>마법처럼 쉬워지는 스마트폰</p>
                           </LectureInfo>
                        </MobileIn3>
                        <MobileIn4>
                           <MobilePic4 />
                           <LectureInfo>
                              <p>&#60;모바일 생활 혁명&#62;</p>
                              <p>더 나은 사용법으로 일으킨 혁명</p>
                           </LectureInfo>
                        </MobileIn4>
                        <MobileIn5>
                           <MobilePic5 />
                           <LectureInfo>
                              <p>&#60;스마트폰 경험 디자인&#62;</p>
                              <p>함께 경험을 그려나가 봐요</p>
                           </LectureInfo>
                        </MobileIn5>
                     </MobileWrap>
                  </Mobile>
                  <Welfare>
                     <WelfareHeader>
                        <WelfareTitle title="아래의 사진을 누르면 해당 강의 상세 페이지로 이동해요.">
                           해당되는 국가복지를 놓치고 있다면 ❤️
                        </WelfareTitle>
                        <Info>받을 수 있는 복지를 모르거나 놓칠 때</Info>
                     </WelfareHeader>
                     <WelfareWrap>
                        <WelfareIn1>
                           <WelfarePic1 />
                           <LectureInfo>
                              <p>&#60;키오스크 초급 1-1&#62;</p>
                              <p>키오스크 전반적 이해와 구성</p>
                           </LectureInfo>
                        </WelfareIn1>
                        <WelfareIn2>
                           <WelfarePic2 />
                           <LectureInfo>
                              <p>&#60;키오스크 초급 1-2&#62;</p>
                              <p>초보자를 위한 쉬운 사용법</p>
                           </LectureInfo>
                        </WelfareIn2>
                        <WelfareIn3>
                           <WelfarePic3 />
                           <LectureInfo>
                              <p>&#60;집에서 민원넣기&#62;</p>
                              <p>웹사이트로 민원넣기 기초강의</p>
                           </LectureInfo>
                        </WelfareIn3>
                        <WelfareIn4>
                           <WelfarePic4 />
                           <LectureInfo>
                              <p>&#60;모바일 업그레이드&#62;</p>
                              <p>초보자들의 모바일 기초사용법</p>
                           </LectureInfo>
                        </WelfareIn4>
                        <WelfareIn5>
                           <WelfarePic5 />
                           <LectureInfo>
                              <p>&#60;웹사이트 생활의 즐거움&#62;</p>
                              <p>두통유발 인터넷은 이제 안녕</p>
                           </LectureInfo>
                        </WelfareIn5>
                     </WelfareWrap>
                  </Welfare>
               </Container>
            </SubWrap>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
