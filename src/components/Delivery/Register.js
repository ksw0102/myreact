import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DeliveryContext } from "./DeliveryShop";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { signUp } from "./api";

const Container = styled.div`
   width: 300px;
   background-color: #eee;
   box-shadow: 2px 2px 5px grey;
   padding: 20px;
   border-radius: 20px;
   margin: 50px;
`;
const Header = styled.div`
   font-size: 1.5rem;
   text-align: center;
`;
const Button = styled.button`
   width: 100%;
   height: 25px;
   margin-top: 20px;
   background-color: lightblue;
   border-radius: 5px;
   text-align: center;
   cursor: pointer;
   font-weight: bold;
   color: white;
   border: 1px solid blue;
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
   const [email, setEmail] = useState("");

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
         // 가입 완료된 이후 자동 로그인
         localStorage.setItem(
            "loginState",
            JSON.stringify({ id: userRegister.loginId })
         );
         setLoginId({ id: userRegister.loginId });
         setTimeout(() => {
            navigate("dashboard");
            setRegistering(false);
         }, 1000);
      } else if (data && data.resultCode === "ERROR") {
         console.log(data);
         navigate("/login");
         // 에러가 날 경우 콘솔로그에 data를 출력 후 로그인 창으로 이동시킴
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
         email: email,
      };
      setUserRegister(user);
   }

   return (
      <>
         {registering ? (
            <h1>로그인 중...</h1>
         ) : registerComplete ? (
            // 가입이 완료된 경우
            <h1>가입이 완료 되었습니다. 감사합니다.</h1>
         ) : loginState?.id ? (
            // 입력한 Id와 회원 정보와 일치할 떄
            <>
               <h1>이미 로그인 되어있습니다. ({loginState.id})</h1>
               <h1>로그아웃을 진행 하신 후 가입해주세요.</h1>
            </>
         ) : (
            <Container>
               <form onSubmit={onSubmit}>
                  <Header>가입하기</Header>
                  <div>
                     <label>로그인 ID</label>
                     <br />
                     <input
                        id="loginId"
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                     />
                  </div>
                  <div>
                     <label>닉네임</label>
                     <br />
                     <input
                        id="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </div>
                  <div>
                     <label>비밀번호</label>
                     <br />
                     <input
                        id="password"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
                  <div>
                     <label>생년월일 (YYYY-MM-DD)</label>
                     <br />
                     <input
                        id="birthDate"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                     />
                  </div>
                  <div>
                     <label>성별 (남 / 여)</label>
                     <br />
                     <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                     >
                        {options.map((option) => (
                           <option key={option.value} value={option.value}>
                              {option.label}
                           </option>
                        ))}
                     </select>
                  </div>
                  <div>
                     <label>이메일</label>
                     <br />
                     <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <Button type="submit">제출</Button>
               </form>
            </Container>
         )}
      </>
   );
}
