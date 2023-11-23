import styled from "styled-components";
import { Products } from "./Products";
import { useContext, useEffect, useState } from "react";
import { DeliveryContext } from "./DeliveryShop";
import { useQuery } from "react-query";
import { NavItem } from "./Navitem";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { login } from "./api";

const Container = styled.div``;

const Section1 = styled.div`
   width: 100vw;
   height: 25vh;
   font-size: 33px;
   overflow: hidden;
`;

const StyledForm = styled.form`
   padding-left: 20px;
   padding-right: 20px;
`;

const Login = styled.div`
   width: 50%;
   height: 100%;
   border: 1px solid black;
   border-radius: 25px;
   background-color: #a1bf73;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
   text-align: center;
   & h2 {
      color: white;
      text-shadow: 4px 2px 2px gray;
      font-size: 40px;
      padding-bottom: 20px;
   }
`;

const SignIn = styled.div`
   width: 300px;
`;

const Id = styled.input`
   width: 100%;
   height: 40px;
   padding: 10px;
   outline: none;
   border: 1px solid #83a638;
   border-radius: 5%;
`;

const PassWord = styled.input`
   width: 100%;
   height: 40px;
   padding: 10px;
   outline: none;
   border: 1px solid #83a638;
   border-radius: 5%;
`;

// const Section2 = styled.div`
//    width: 80vw;
//    height: 80vh;
//    margin: auto;
//    padding-top: 10px;
//    font-size: 25px;
//    display: grid;
//    grid-template-columns: 3fr 3fr 3fr;
//    grid-column-gap: 10px;
//    grid-row-gap: 10px;
// `;

const Section3 = styled.div`
   width: 80vw;
   height: 15vh;
   margin: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

const Btn = styled.button`
   width: 20%;
   height: 30%;
   margin: 10px 0;
   font-size: 20px;
   background-color: white;
   &:hover {
      cursor: pointer;
   }
   &:active {
      background-color: #a1bf73;
   }
`;
const Button = styled.button`
   width: 300px;
   margin-top: 10px;
   background-color: white;
   &:hover {
      cursor: pointer;
   }
   &:active {
      background-color: #83a638;
   }
`;

const StyledNavLink = styled(NavLink)`
   width: 300px;
   margin-top: 10px;
   background-color: white;
   &:hover {
      cursor: pointer;
   }
   &:active {
      background-color: #83a638;
   }
`;

export function Main() {
   const [loginId, setLoginId] = useState("");
   const [password, setPassword] = useState("");
   const [userLogin, setUserLogin] = useState(null);
   const [loggingIn, setLoggingIn] = useState(false);
   const { loginState, setLoginState } = useContext(DeliveryContext);

   const { data, isLoading, refetch } = useQuery(
      "login",
      () => {
         if (userLogin) {
            setLoggingIn(true);
            return login(userLogin);
         }
      },
      { retry: 0 }
   );

   useEffect(() => {
      if (data && data.resultCode === "SUCCESS" && userLogin) {
         console.log(data);
         localStorage.setItem(
            "loginState",
            JSON.stringify({ id: userLogin.loginId })
         );
         setLoginState({ id: userLogin.loginId });
         setTimeout(() => {
            setLoggingIn(false);
         }, 1000);
      } else if (data && data.resultCode === "ERROR") {
         console.log(data);
      }
   }, [data]);

   useEffect(() => {
      refetch();
   }, [userLogin]);

   function onSubmit(e) {
      e.preventDefault();
      const user = {
         loginId: loginId,
         password: password,
      };
      setUserLogin(user);
   }
   return (
      <>
         {loggingIn ? (
            <h1>로그인중..</h1>
         ) : loginState?.id ? (
            <h1>이미 로그인이 되어있습니다. {loginState.id}</h1>
         ) : (
            <>
               <Container>
                  <Section1>
                     <Login>
                        <StyledForm onSubmit={onSubmit}>
                           <h2>저기요</h2>
                           <SignIn>
                              <Id
                                 Input
                                 id="loginId"
                                 value={loginId}
                                 onChange={(e) => setLoginId(e.target.value)}
                                 placeholder="아이디 입력(필수)"
                              />
                              <PassWord
                                 Input
                                 id="password"
                                 value={password}
                                 type="password"
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder="비밀번호 입력(필수)"
                              />
                           </SignIn>
                           <Button type="submit">로그인</Button>
                           <StyledNavLink to="/register">
                              가입하기
                           </StyledNavLink>
                           {/* 이건 useLocation? */}
                        </StyledForm>
                     </Login>
                  </Section1>
                  <Products />
                  <Section3>
                     <Btn>내 주문내역 확인</Btn>
                     <Btn>고객센터</Btn>
                  </Section3>
               </Container>
               <Outlet />
            </>
         )}
      </>
   );
}
