import styled, { createGlobalStyle } from "styled-components";
import ClassMotto from "./image/ClassMotto.png";
import LoginBoard from "./image/MainBoard.png";
import CandyLogo from "./image/CandyLogo.png";
import Folder from "./image/Folder.png";
import { Opencourseinformation } from "./OpencourseInformation";
import { MainLecture } from "./MainLecture";
import { NavBar } from "./NavBar";
import { MonacaInfo } from "./MonacaInfo";

const Par = styled.div`
   height: 190vh;
`;

const Sect1 = styled.div`
   height: 100vh;
   width: 100vw;
   font-family: "TmonMonsori";
`;

const Header = styled.div`
   display: flex;
   height: 7vh;
   width: 100%;
   align-items: center;
   text-align: center;
   justify-content: center;
   margin: 0 auto;
   & input {
      border: 0.5px solid black;
      box-shadow: 5px 5px 5px gray;
      width: 30%;
      outline: none;
      text-align: start;
      font-size: 1rem;
      height: 3.5vh;
      padding: 1rem;
   }
   & ul {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
   }
   & li {
      width: 15rem;
      margin-right: 5rem;
      font-size: 1.5rem;
   }
   & a {
      text-decoration: none;
      color: black;
   }
`;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 100%;
   background-image: url(${LoginBoard});
   background-repeat: no-repeat;
   background-size: contain;
`;

const Text1 = styled.div`
   width: 70%;
   margin: 10px;
   font-size: 3.5rem;
   color: white;
   text-align: center;
   letter-spacing: 5px;
`;

const Logo = styled.div`
   background-image: url(${CandyLogo});
   background-repeat: no-repeat;
   background-size: contain;
   width: 400px;
   height: 400px;
`;

const Text2 = styled.div`
   width: 50%;
   margin: 10px;
   font-size: 3.5rem;
   color: white;
   text-align: center;
   letter-spacing: 5px;
`;

const Section = styled.div`
   align-items: center;
   justify-content: center;
   display: flex;
   width: 90%;
   margin: 1rem;
   & form {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      text-align: center;
      justify-content: center;
   }
   @media screen and (min-width: 768px) {
      & form {
         grid-template-columns: 1fr 1fr 1fr;
      }
   }
`;

const SecLog = styled.div`
   color: white;
   font-size: 3rem;
   width: 200px;
   text-align: center;
`;

const Id = styled.div`
   color: white;
   font-size: 1.8rem;
   letter-spacing: 5px;
   display: flex;
   padding: 1rem;
   margin: 0 auto;
   align-items: center;
   & label {
      margin-right: 1rem;
   }
   & input {
      outline: none;
      box-shadow: 5px 5px 5px #04291f;
      width: 100%;
      max-width: 280px;
      padding: 5px;
      font-size: 1.8rem;
      &:focus {
         border: 1px solid white;
      }
   }
`;

const Pw = styled.div`
   color: white;
   font-size: 1.8rem;
   letter-spacing: 5px;
   display: flex;
   padding: 1rem;
   margin: 0 auto;
   align-items: center;
   & label {
      margin-right: 1rem;
   }
   & input {
      outline: none;
      box-shadow: 5px 5px 5px #04291f;
      width: 100%;
      max-width: 280px;
      padding: 5px;
      font-size: 1.8rem;
      &:focus {
         border: 1px solid white;
      }
   }
`;

const Reg = styled.div`
   display: flex;
   color: white;
   padding: 1rem;
   margin: 0 auto;
   & button {
      height: 100%;
      box-shadow: 5px 5px 5px #04291f;
      font-size: 1.8rem;
      margin-right: 1rem;
      width: 200px;
      font-family: "TmonMonsori";
   }
`;
const Sect2 = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 200vh;
   width: 100vw;
   font-family: "GmarketSansMedium";
`;
const Sect3 = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100vw;
   font-family: "TmonMonsori";
`;

const Container2 = styled.div`
   position: relative;
   width: 70%;
   max-width: 1280px;
   height: 80vh;
   background-image: url(${ClassMotto});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   letter-spacing: 4px;
`;

const Title2 = styled.div`
   font-size: 4rem;
   line-height: 5rem;
   margin: 20px;
   letter-spacing: 1rem;
`;

const Text3 = styled.div`
   text-align: center;
   line-height: 11vh;
   & h2 {
      font-size: 2.5rem;
   }
`;

const Sect4 = styled.div``;

const Sect5 = styled.div`
   width: 100vw;
   height: 40vh;
   background-color: #f6c383;
   display: flex;
   margin-top: 10rem;
`;

const FolderWrapper = styled.div`
   width: 65%;
   height: 60%;
   margin: auto;
   display: grid;
   grid-gap: 8rem;
   grid-template-columns: 1fr 1fr 1fr;
`;

const Folder1 = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background-image: url(${Folder});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   font-family: "TmonMonsori";
   &:hover {
      cursor: pointer;
   }
   & h2 {
      font-size: 1.8rem;
      text-align: center;
      margin-top: 4rem;
   }
`;

const Folder2 = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background-image: url(${Folder});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   font-family: "TmonMonsori";
   &:hover {
      cursor: pointer;
   }
   & h2 {
      font-size: 1.8rem;
      text-align: center;
      margin-top: 4rem;
   }
`;

const Folder3 = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   background-image: url(${Folder});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   font-family: "TmonMonsori";
   &:hover {
      cursor: pointer;
   }
   & h2 {
      font-size: 1.8rem;
      text-align: center;
      margin-top: 4rem;
   }
`;

export function Main() {
   return (
      <>
         <Par>
            <Sect1>
               <NavBar />
               <Container>
                  <Text1>
                     <p>모든 시니어분들의 디지털 세상 첫 출발을</p>
                  </Text1>
                  <Logo />
                  <Text2>
                     <p>모나카가 함께 합니다.</p>
                  </Text2>
                  <Section>
                     <SecLog>로그인</SecLog>
                     <form>
                        <Id>
                           <label>아이디</label>
                           <input />
                        </Id>
                        <Pw>
                           <label>비밀번호</label>
                           <input />
                        </Pw>
                        <Reg>
                           <button>로그인</button>

                           <button>가입하기</button>
                        </Reg>
                     </form>
                  </Section>
               </Container>
            </Sect1>
            <Sect2>
               <Opencourseinformation />
            </Sect2>
            <Sect3>
               <Container2 data-aos="flip-up" data-aos-duration="2000">
                  <Title2>
                     <p>&#60;급훈&#62;</p>
                  </Title2>
                  <Text3>
                     <h2>왜 모나카를 선택해야 할까?</h2>
                     <h2>첫 번째. 쉽고 간편하니까!</h2>
                     <h2>두 번째. 재밌는 요소들로 학습욕구가 솟아나니까!</h2>
                     <h2>세 번째. 필요한 양질의 강의가 여기 모였으니까!</h2>
                  </Text3>
               </Container2>
            </Sect3>
            <Sect4>
               <MainLecture />
            </Sect4>
            <Sect5>
               <FolderWrapper>
                  <Folder1>
                     <h2>회원 등급 안내도</h2>
                  </Folder1>
                  <Folder2>
                     <h2>강의목록</h2>
                  </Folder2>
                  <Folder3>
                     <h2>교수님 목록</h2>
                  </Folder3>
               </FolderWrapper>
            </Sect5>
            <MonacaInfo />
         </Par>
      </>
   );
}
