import styled from "styled-components";
import CTextLogo from "./image/CTextLogo.png";
import EmptyBack from "./image/EmptyBack.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
const MainWrap = styled.div`
   display: flex;
   width: 70%;
   height: 70%;
`;

const SecWrap = styled.div`
   background-image: url(${EmptyBack});
   width: 100%;
   height: 100%;
`;

const Title = styled.div`
   width: 100%;
   height: 10vh;
   padding: 20px;
   display: flex;
   align-items: center;
   justify-content: center;
`;
const Blank = styled.div`
   width: 35%;
   height: 100%;
`;
const Reg = styled.div`
   width: 30%;
   height: 100%;
   font-size: 2rem;
   display: flex;
   justify-content: center;
   align-items: center;
   color: white;
   letter-spacing: 5px;
   margin: -1rem;
`;
const Info = styled.div`
   width: 40%;
   font-size: 1rem;
   margin: -2.5rem;
   height: 100%;
   display: flex;
   justify-content: center;
   color: white;
   line-height: 20px;
   align-items: center;
`;

const InnerWrapper = styled.div`
   display: flex;
   height: 70%;
`;

const Section1 = styled.div`
   width: 50%;
   height: 90vh;
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
   & form {
      width: 90%;
      height: 95%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
   }
`;
const Id = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const UserName = styled.div`
   margin: 1rem;
   display: flex;
   width: 80%;
   align-items: center;
   justify-content: center;
`;

const Name = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-right: 15px;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 180px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;
const NickName = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-left: 15px;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 180px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;
const Gender = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const PhoneNum = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const Professor = styled.div`
   margin: 1rem;
   display: flex;
   width: 80%;
   align-items: center;
   justify-content: center;
`;

const Picture = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-right: 15px;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 150px;
      height: 150px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const ProInfo = styled.div`
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-left: 15px;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 210px;
      height: 150px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;
const Category = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   color: white;
   width: 380px;
   margin: 0.5rem;
   & select {
      display: flex;
      text-align: center;
      align-items: center;
      font-size: 1rem;
      width: 380px;
      height: 40px;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const Section2 = styled.div`
   width: 50%;
   height: 90vh;
   display: flex;
   align-items: center;
   text-align: center;
   justify-content: center;
   & form {
      width: 90%;
      height: 95%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
   }
`;

const Pw = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const BirthDate = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const Email = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
   }
`;

const Introduce = styled.div`
   margin: 1rem;
   width: 80%;
   color: white;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & input {
      padding: 10px;
      margin: 10px auto;
      width: 80%;
      border: 0;
      box-shadow: 5px 5px 5px #04291f;
      height: 275px;
   }
`;

const Button = styled.div`
   width: 80%;
   font-size: 1.5rem;
   display: flex;
   flex-direction: column;
   text-align: left;
   justify-content: center;
   align-items: center;
   & button {
      width: 80%;
      color: black;
      font-size: 1.5rem;
      height: 40px;
      background-color: white;
   }
`;

const Switch = styled.div`
   width: 60px;
   height: 300px;
   display: flex;
   flex-direction: column;
`;

const Button1 = styled.button`
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
const Button2 = styled.button`
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
   border: 0;
   cursor: pointer;
   &:active {
      background-color: #05261d;
   }
`;

const Rotate = styled.div`
   transform: rotate(90deg);
   width: 80px;
`;
// 학생용 로그인 화면
export function ProfessorRegister() {
   const [selectedOption, setSelectedOption] = useState("");
   const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
   };
   const navigate = useNavigate();
   const navigateToStudentRegister = () => {
      navigate("/student-register");
   };

   return (
      <Wrapper>
         <Header />
         <MainWrap>
            <SecWrap>
               <Title>
                  <Blank />
                  <Reg>교수 회원가입</Reg>
                  <Info>
                     이력서 제출 후 허가를 받은 사람만 회원가입 하시길 바랍니다.{" "}
                     <br />* 이 외의 유저는 확인 후 탈퇴 조치 *
                  </Info>
               </Title>
               <InnerWrapper>
                  <Section1>
                     <form>
                        <Id>
                           <label> * 아이디</label>
                           <input />
                        </Id>
                        <UserName>
                           <Name>
                              <label>* 이름</label>
                              <input />
                           </Name>
                           <NickName>
                              <label>* 닉네임</label>
                              <input />
                           </NickName>
                        </UserName>
                        <Gender>
                           <label>* 성별</label>
                           <input />
                        </Gender>
                        <PhoneNum>
                           <label>* 전화번호</label>
                           <input />
                        </PhoneNum>
                        <Professor>
                           <Picture>
                              <label>* 프로필 사진</label>
                              <input />
                           </Picture>
                           <ProInfo>
                              <label>* 경력사항</label>
                              <input />
                           </ProInfo>
                        </Professor>
                        <Category>
                           <div>
                              <select
                                 id="subjectCategory"
                                 value={selectedOption}
                                 onChange={handleSelectChange}
                              >
                                 <option value="">
                                    원하는 과목 카테고리를 선택해주세요
                                 </option>
                                 <option value="option1">Option 1</option>
                                 <option value="option2">Option 2</option>
                                 <option value="option3">Option 3</option>
                                 <option value="option4">Option 4</option>
                              </select>
                              {selectedOption && (
                                 <p>You selected: {selectedOption}</p>
                              )}
                           </div>
                        </Category>
                     </form>
                  </Section1>
                  <Section2>
                     <form>
                        <Pw>
                           <label>* 비밀번호</label>
                           <input />
                        </Pw>
                        <BirthDate>
                           <label>* 생년월일</label>
                           <input />
                        </BirthDate>
                        <Email>
                           <label>* 이메일</label>
                           <input />
                        </Email>
                        <Introduce>
                           <label>* 50자 이내에 간단한 소개</label>
                           <input />
                        </Introduce>
                        <Button>
                           <button>가입하기</button>
                        </Button>
                     </form>
                  </Section2>{" "}
               </InnerWrapper>{" "}
            </SecWrap>
            <Switch>
               <Button1 onClick={navigateToStudentRegister}>
                  <Rotate>
                     학생 <br />
                     회원가입
                  </Rotate>
               </Button1>
               <Button2>
                  <Rotate>
                     교수 <br />
                     회원가입
                  </Rotate>
               </Button2>
            </Switch>
         </MainWrap>
      </Wrapper>
   );
}
