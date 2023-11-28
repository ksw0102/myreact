import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DeliveryContext } from "./DeliveryShop";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { signUp } from "./api";

const StyledBackground = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   overflow: hidden;
   &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg);
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.7; /* Adjust the transparency for the background */
      z-index: -1; /* Ensure it's positioned behind other content */
   }
`;
const Container = styled.div`
   width: 35vw;
   height: 70vh;
   background-color: #eee;
   box-shadow: 2px 2px 5px grey;
   border-radius: 20px;
   overflow: hidden;
   margin: 70px auto;
   text-align: center;
`;

const StyledForm = styled.form`
   background-color: #a1bf73;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   gap: 20px;
   padding: 1rem;
`;

const Id = styled.input`
   width: 23vw;
   padding: 5px;
   text-align: center;
   font-size: 1.3rem;
`;

const Pw = styled.input`
   width: 23vw;
   padding: 5px;
   text-align: center;
   font-size: 1.3rem;
`;

const Nick = styled.input`
   width: 23vw;
   padding: 5px;
   text-align: center;
   font-size: 1.3rem;
`;

const Bd = styled.input`
   width: 23vw;
   padding: 5px;
   text-align: center;
   font-size: 1.3rem;
`;
const Gd = styled.select`
   width: 23vw;
   padding: 5px;
   text-align: center;
   font-size: 1.3rem;
`;

const SignUp = styled.div`
   width: 100%;
   height: 100%;
`;
const Header = styled.div`
   display: flex;
   margin: 0 auto;
   text-align: center;
   font-size: 1.5rem;
   padding: 1rem;
   align-items: center;
   & h2 {
      color: white;
      text-shadow: 4px 2px 2px gray;
   }
`;
const Button = styled.button`
   width: 23vw;
   text-align: center;
   font-size: 1.3rem;
   margin: 10px auto;
`;

const options = [
   { value: "MAN", label: "MAN" },
   { value: "WOMAN", label: "WOMAN" },
];

export function Register() {
   const [loginId, setLoginId] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [birthDate, setBirthDate] = useState("");
   const [gender, setGender] = useState("MAN");

   const [userRegister, setUserRegister] = useState(null);
   const [registering, setRegistering] = useState(false);
   const [registerComplete, setRegisteringComplete] = useState(false);
   const { loginState, setLoginState } = useContext(DeliveryContext);
   const navigate = useNavigate();

   const { data, isLoading, refetch } = useQuery("register", () => {
      if (userRegister) {
         setRegistering(true);
         return signUp(userRegister);
      }
   });

   useEffect(() => {
      if (data && data.resultCode === "SUCCESS" && userRegister) {
         console.log(data);
         localStorage.setItem(
            "loginState",
            JSON.stringify({ id: userRegister.loginId })
         );
         setLoginState({ id: userRegister.loginId });
         setTimeout(() => {
            navigate("/products");
            setRegistering(false);
            setRegisteringComplete(true);
         });
      } else if (data && data.resultCode === "ERROR") {
         console.log(data);
         navigate("/error");
      }
   }, [data]);

   useEffect(() => {
      refetch();
   }, [userRegister]);

   function onSubmit(e) {
      e.preventDefault();
      const user = {
         loginId: loginId,
         password: password,
         name: username,
         birthDate: birthDate,
         gender: gender,
      };
      setUserRegister(user);
   }

   return (
      <>
         {registering ? (
            <h1>로그인 중...</h1>
         ) : registerComplete ? (
            <h1>가입이 완료되었습니다.</h1>
         ) : loginState?.id ? (
            <>
               <h1>test({loginState.id})</h1>
               <h1>로그아웃 후 가입해주세요.</h1>
            </>
         ) : (
            <StyledBackground>
               <Container>
                  <SignUp>
                     <StyledForm onSubmit={onSubmit}>
                        <Header>
                           <h2>회원가입</h2>
                        </Header>
                        <div>
                           <h2>아이디</h2>
                           <Id
                              Input
                              id="loginId"
                              value={loginId}
                              onChange={(e) => setLoginId(e.target.value)}
                              placeholder="아이디 입력(필수)"
                           />
                        </div>
                        <div>
                           <h2>닉네임</h2>
                           <Nick
                              Input
                              id="name"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              placeholder="닉네임 입력(필수)"
                           />
                        </div>
                        <div>
                           <h2>비밀번호</h2>
                           <Pw
                              Input
                              id="password"
                              value={password}
                              type="password"
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="비밀번호 입력(필수)"
                           />
                        </div>
                        <div>
                           <h2>생년월일</h2>
                           <Bd
                              Input
                              id="birthdate"
                              value={birthDate}
                              onChange={(e) => setBirthDate(e.target.value)}
                              placeholder="생년월일 입력 (YYYY-MM-DD)"
                           />
                        </div>
                        <div>
                           <h2>성별</h2>
                           <Gd
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                           >
                              {options.map((option) => (
                                 <option
                                    key={option.value}
                                    value={option.value}
                                 >
                                    {option.label}
                                 </option>
                              ))}
                           </Gd>
                        </div>
                        {/* <Email
                        Input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     /> */}
                        <Button type="submit">제출</Button>
                     </StyledForm>
                  </SignUp>
               </Container>
            </StyledBackground>
         )}
      </>
   );
}
