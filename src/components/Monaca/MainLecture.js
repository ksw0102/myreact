import styled from "styled-components";

import ATM from "./image/Kiosk/ATM1.png";
import Kiosk1 from "./image/Kiosk/Kiosk1.png";
import Kiosk2 from "./image/Kiosk/Kiosk2.png";
import Kiosk3 from "./image/Kiosk/Kiosk3.png";
import Kiosk4 from "./image/Kiosk/Kiosk4.png";

import Moblie1 from "./image/Mobile/Mobile1.png";
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

const Container = styled.div`
   height: 200vh;
   width: 100vw;
   display: grid;
   grid-template-rows: 1fr 1fr 1fr;
   align-items: center;
   margin: 0 auto;
   font-family: "GmarketSansMedium";
`;

// 무료강의

const Free = styled.div`
   justify-content: center;
   align-items: center;
   width: 90%;
   height: 80%;
   margin: 1rem auto;
`;

const FreeIn1 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const FreePic1 = styled.div`
   background-image: url(${Kiosk1});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;
const FreeIn2 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const FreePic2 = styled.div`
   background-image: url(${Kiosk3});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const FreeIn3 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const FreePic3 = styled.div`
   background-image: url(${Wel4});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const FreeIn4 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const FreePic4 = styled.div`
   background-image: url(${Mobile2});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const FreeIn5 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const FreePic5 = styled.div`
   background-image: url(${Web1});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

// 유료강의

const MasterSec = styled.div`
   justify-content: center;
   align-items: center;
   width: 90%;
   height: 80%;
   margin: 1rem auto;
`;
const MasterIn1 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const MtPic1 = styled.div`
   background-image: url(${Kiosk1});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const MasterIn2 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const MtPic2 = styled.div`
   background-image: url(${Kiosk3});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const MasterIn3 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const MtPic3 = styled.div`
   background-image: url(${Wel3});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const MasterIn4 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const MtPic4 = styled.div`
   background-image: url(${Web5});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const MasterIn5 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const MbPic5 = styled.div`
   background-image: url(${Moblie1});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

// 추천 강의
const FavSec = styled.div`
   justify-content: center;
   align-items: center;
   width: 90%;
   height: 80%;
   margin: 0 auto;
`;
const FavIn1 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const FavPic1 = styled.div`
   background-image: url(${Kiosk4});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const FavIn2 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const FavPic2 = styled.div`
   background-image: url(${Mobile4});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const FavIn3 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const FavPic3 = styled.div`
   background-image: url(${Wel1});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const FavIn4 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;

const FavPic4 = styled.div`
   background-image: url(${Web4});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
`;

const FavIn5 = styled.div`
   display: flex;
   flex-direction: column;
   width: 20%;
   height: 90%;
   margin: 1rem;
   justify-content: center;
   align-items: center;
`;
const FavPic5 = styled.div`
   background-image: url(${Kiosk2});
   background-size: cover;
   background-repeat: no-repeat;
   border-radius: 1rem;
   height: 50%;
   width: 100%;
   display: flex;
   &:hover {
      cursor: pointer;
   }
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

const Header = styled.div`
   display: flex;
   flex-direction: column;
   height: 20%;
   width: 78%;
   margin: 0 auto;
   justify-content: center;
   & p {
      font-size: 1rem;
   }
`;

const Title = styled.div`
   height: 50%;
   font-size: 2rem;
   display: flex;
`;

const Info = styled.div`
   height: 50%;
   font-size: 1.5rem;
`;

const FreeWrap = styled.div`
   display: flex;
   height: 90%;
   width: 80%;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
`;
const MasterWrap = styled.div`
   display: flex;
   height: 90%;
   width: 80%;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
`;
const FavWrap = styled.div`
   display: flex;
   height: 90%;
   width: 80%;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
`;

const FreeEmoji = styled.div`
   display: flex;
   height: 100%;
   width: 3%;
   background-image: url(${FreeLec});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   margin-left: 1rem;
`;
const NewbieEmoji = styled.div`
   display: flex;
   height: 100%;
   width: 3%;
   background-image: url(${Newbie});
   background-repeat: no-repeat;
   background-position: center;
   background-size: contain;
   margin-left: 1rem;
`;

const FavEmoji = styled.div`
   display: flex;
   height: 100%;
   width: 3%;
   background-image: url(${Fav});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   margin-left: 1rem;
`;

export function MainLecture() {
   return (
      <>
         <Container>
            <Free>
               <Header>
                  <Title>
                     부담 없이 들을 수 있는 무료 강의 <FreeEmoji />
                  </Title>
                  <Info>유료 강의가 부담이 될 때 무료 강의로 시작해 봐요.</Info>
                  <p>아래의 사진을 누르면 해당 강의 상세 페이지로 이동해요.</p>
               </Header>
               <FreeWrap>
                  <FreeIn1>
                     <FreePic1 />
                     <LectureInfo>
                        <p>&#60;키오스크 초급 1-1&#62;</p>
                        <p>키오스크 전반적 이해와 구성</p>
                     </LectureInfo>
                  </FreeIn1>
                  <FreeIn2>
                     <FreePic2 />
                     <LectureInfo>
                        <p>&#60;키오스크 초급 1-2&#62;</p>
                        <p>초보자를 위한 쉬운 사용법</p>
                     </LectureInfo>
                  </FreeIn2>
                  <FreeIn3>
                     <FreePic3 />
                     <LectureInfo>
                        <p>&#60;집에서 민원넣기&#62;</p>
                        <p>웹사이트로 민원넣기 기초강의</p>
                     </LectureInfo>
                  </FreeIn3>
                  <FreeIn4>
                     <FreePic4 />
                     <LectureInfo>
                        <p>&#60;모바일 업그레이드&#62;</p>
                        <p>초보자들의 모바일 기초사용법</p>
                     </LectureInfo>
                  </FreeIn4>
                  <FreeIn5>
                     <FreePic5 />
                     <LectureInfo>
                        <p>&#60;웹사이트 생활의 즐거움&#62;</p>
                        <p>두통유발 인터넷은 이제 안녕</p>
                     </LectureInfo>
                  </FreeIn5>
               </FreeWrap>
            </Free>
            <MasterSec>
               <Header>
                  <Title>
                     초보도 고수가 되는강의 <NewbieEmoji />
                  </Title>
                  <Info>시작이 어렵다면 쉬운 강의와 함께 시작해 봐요.</Info>{" "}
                  <p>아래의 사진을 누르면 해당 강의 상세 페이지로 이동해요.</p>
               </Header>
               <MasterWrap>
                  <MasterIn1>
                     <MtPic1 />
                     <LectureInfo>
                        <p>&#60;키오스크 초급 1-1&#62;</p>
                        <p>키오스크 전반적 이해와 구성</p>
                     </LectureInfo>
                  </MasterIn1>
                  <MasterIn2>
                     <MtPic2 />
                     <LectureInfo>
                        <p>&#60;키오스크 초급 1-2&#62;</p>
                        <p> 초보자를 위한 쉬운 사용법</p>
                     </LectureInfo>
                  </MasterIn2>
                  <MasterIn3>
                     <MtPic3 />
                     <LectureInfo>
                        <p>&#60;시민참여의 시작&#62;</p>
                        <p>국가 복지와 민원절차</p>
                     </LectureInfo>
                  </MasterIn3>
                  <MasterIn4>
                     <MtPic4 />
                     <LectureInfo>
                        <p>&#60;웹사이트 기초부터 고급까지&#62;</p>
                        <p>웹사이트 실전 활용법</p>
                     </LectureInfo>
                  </MasterIn4>
                  <MasterIn5>
                     <MbPic5 />
                     <LectureInfo>
                        <p>&#60;편리한 모바일 라이프&#62;</p>
                        <p>삶의 질을 향상시켜주는 강의</p>
                     </LectureInfo>
                  </MasterIn5>
               </MasterWrap>
            </MasterSec>
            <FavSec>
               <Header>
                  <Title>
                     모나카 회원이 많이 선택한 강의 <FavEmoji />
                  </Title>
                  <Info>인기 있는 강의별로 골라봐요.</Info>{" "}
                  <p>아래의 사진을 누르면 해당 강의 상세 페이지로 이동해요.</p>
               </Header>
               <FavWrap>
                  <FavIn1>
                     <FavPic1 />
                     <LectureInfo>
                        <p>&#60;키오스크 마스터&#62;</p>
                        <p>쉽고 빠른 디지털 자동화</p>
                     </LectureInfo>
                  </FavIn1>
                  <FavIn2>
                     <FavPic2 />
                     <LectureInfo>
                        <p>&#60;모바일 생활 혁명&#62;</p>
                        <p>더 나은 사용법으로 일으킨 혁명</p>
                     </LectureInfo>
                  </FavIn2>
                  <FavIn3>
                     <FavPic3 />
                     <LectureInfo>
                        <p>&#60;국가 복지 체계 이해하기&#62;</p>
                        <p>시민과 민원의 소통</p>
                     </LectureInfo>
                  </FavIn3>
                  <FavIn4>
                     <FavPic4 />
                     <LectureInfo>
                        <p>&#60;디지털 네비게이터&#62;</p>
                        <p>웹사이트 세계로의 안내서</p>
                     </LectureInfo>
                  </FavIn4>
                  <FavIn5>
                     <FavPic5 />
                     <LectureInfo>
                        <p>&#60;스마트한 대기&#62;</p>
                        <p>키오스크를 활용한 시간절약</p>
                     </LectureInfo>
                  </FavIn5>
               </FavWrap>
            </FavSec>
         </Container>
      </>
   );
}
