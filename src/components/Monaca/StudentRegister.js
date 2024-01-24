import styled from "styled-components";
import CTextLogo from "./image/CTextLogo.png";
import LoginLogin from "./image/LoginLogin.png";
import LoginGrade from "./image/LoginGrade.png";
import { Navigate, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
   height: 150vh;
   width: 100vw;
   align-items: center;
   display: flex;
   flex-direction: column;
   margin: auto;
   font-family: GmarketSansMedium;
`;
const Header = styled.div`
   width: 450px;
   height: 100px;
   background-image: url(${CTextLogo});
   background-repeat: no-repeat;
   background-size: contain;
   margin-top: 3rem;
   margin-bottom: 2rem;
`;
const SecWrap = styled.div`
   display: flex;
   width: 70%;
   height: 70%; /* Set the height to 100% */
   margin: 0 auto;
   overflow: hidden;
`;

const Section1 = styled.div`
   width: 50%;
   height: 100%;
   background-image: url(${LoginGrade});
   background-repeat: no-repeat;
   background-size: contain;
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   justify-content: center;
`;

const Grade = styled.div`
   font-size: 3rem;
   padding: 20px;
   color: white;
`;

const Text = styled.div`
   display: grid;
   grid-template-rows: 1fr 1fr 1fr 1fr;
   align-items: center;

   & p {
      font-size: 1.2rem;
      padding: 10px;
      color: white;
      text-align: left;
      letter-spacing: 2px;
   }
`;
const Rc = styled.div`
   display: flex;
   align-items: center;
   margin: 20px auto;
   width: 100%;
   & p {
   }
`;
const Red = styled.div`
   width: 50px;
   height: 50px;
   background-color: red;
`;

const Oc = styled.div`
   display: flex;
   align-items: center;
   margin: 20px auto;
   width: 100%;
`;
const Org = styled.div`
   width: 50px;
   height: 50px;
   background-color: orange;
`;

const Yc = styled.div`
   display: flex;
   align-items: center;
   margin: 20px auto;
   width: 100%;
`;
const Yel = styled.div`
   width: 50px;
   height: 50px;
   background-color: yellow;
`;

const Gc = styled.div`
   display: flex;
   align-items: center;
   margin: 20px auto;
   width: 100%;
`;
const Grn = styled.div`
   width: 50px;
   height: 50px;
   background-color: green;
`;

const Section2 = styled.div`
   width: 50%;
   height: 100%;
   background-image: url(${LoginLogin});
   background-repeat: no-repeat;
   background-size: contain;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

///////////////////////
// 회원가입 양식란
const Head = styled.div`
   margin-top: -4rem;
   font-size: 1.5rem;
   padding: 10px;
   font-weight: lighter;
   color: white;
   letter-spacing: 10px;
`;
const Id = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 350px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const Pw = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 350px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const Name = styled.div`
   color: white;
   display: flex;
`;

const Fn = styled.div`
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin: 10px;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 165px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;
const Nn = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin: 10px;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 165px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;
const Bd = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 350px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;
const Gd = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 350px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;
const Email = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 350px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;
const Pn = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 350px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const SignUp = styled.div`
   color: white;
   color: white;
   margin: 10px;
   padding: 20px;
   & button {
      width: 350px;
      height: 40px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const Switch = styled.div`
   width: 60px;
   height: 300px;
   display: flex;
   flex-direction: column;
`;

const Button2 = styled.button`
   height: 150px;
   border-top-right-radius: 30px;
   border-bottom-right-radius: 30px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: white;
   font-size: 1rem;
   cursor: pointer;
   background-color: #05261d;
   border: 0;
`;
const Button1 = styled.button`
   height: 150px;
   border-top-right-radius: 30px;
   border-bottom-right-radius: 30px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #0b4434;
   color: white;
   font-size: 1rem;
   cursor: pointer;
   border: 0;
   &:active {
      background-color: #05261d;
   }
`;

const Rotate = styled.div`
   transform: rotate(90deg);
   width: 80px;
`;
// 학생용 로그인 화면
export function StudentRegister() {
   const navigate = useNavigate();
   const navigateToProfessorRegister = () => {
      navigate("/professor-register");
   };
   return (
      <Wrapper>
         <Header />
         <SecWrap>
            <Section1>
               <Grade>회원등급 안내</Grade>
               <Text>
                  <Rc>
                     <Red />
                     <p>기본 네 가지 무료강의 / 기본 캐릭터 세트 제공</p>
                  </Rc>
                  <Oc>
                     <Org />
                     <p>
                        기본 네 가지 무료강의 + 유료강의 한 가지 / <br /> 출석
                        스티커 열 네개 모으면 하나 더 제공
                     </p>
                  </Oc>
                  <Yc>
                     <Yel />
                     <p>
                        기본 네 가지 무료강의 + 유료강의 두 가지 / <br /> 유료
                        캐릭터 꾸미기 재료 한 가지 제공
                     </p>
                  </Yc>
                  <Gc>
                     <Grn />
                     <p>
                        전 강의 무료 / <br />
                        유료 캐릭터 꾸미기 재료 두 가지 제공
                     </p>
                  </Gc>
               </Text>
            </Section1>
            <Section2>
               <Head>
                  <h1>학생 회원가입</h1>
               </Head>
               <form>
                  <Id>
                     <label>* 아이디</label>
                     <input />
                  </Id>
                  <Pw>
                     <label>* 비밀번호</label>
                     <input />
                  </Pw>
                  <Name>
                     <Fn>
                        <label>* 이름</label> <input />
                     </Fn>
                     <Nn>
                        <label>* 닉네임</label> <input />
                     </Nn>
                  </Name>
                  <Bd>
                     <label>* 생년월일</label>
                     <input />
                  </Bd>
                  <Gd>
                     <label>* 성별</label>
                     <input />
                  </Gd>
                  <Email>
                     <label>이메일</label>
                     <input />
                  </Email>
                  <Pn>
                     <label>* 전화번호</label>
                     <input />
                  </Pn>
               </form>
               <SignUp>
                  <button>가입하기</button>
               </SignUp>
            </Section2>{" "}
            <Switch>
               <Button1>
                  <Rotate>
                     학생 <br />
                     회원가입
                  </Rotate>
               </Button1>
               <Button2 onClick={navigateToProfessorRegister}>
                  <Rotate>
                     교수 <br />
                     회원가입
                  </Rotate>
               </Button2>
            </Switch>
         </SecWrap>
      </Wrapper>
   );
}
