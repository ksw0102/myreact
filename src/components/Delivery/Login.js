import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { login } from "./api";
import { useContext, useEffect, useState } from "react";
import { DeliveryContext } from "./DeliveryShop";

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
const StyledNavLink = styled(NavLink)`
   text-decoration: none;
   color: #333;
   margin-left: 60px;
   &.active {
      background-color: dodgerblue;
      color: white;
   }
`;

export function Login() {
   const [loginId, setLoginId] = useState("");
   const [password, setPassword] = useState("");
   const [userLogin, setUserLogin] = useState(null);
   const [loggingIn, setLoggingIn] = useState(false);
   const { loginState, setLoginState } = useContext(DeliveryContext);
   const navigate = useNavigate();

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
            navigate("/dashboad");
            setLoggingIn(false);
         }, 1000);
      } else if (data && data.resultCode === "ERROR") {
         console.log(data);
         navigate("/login");
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
            <h1>로그인 중입니다...</h1>
         ) : loginState?.id ? (
            <h1>로그인이 되어있습니다. {loginState.id}</h1>
         ) : (
            <>
               <Container>
                  <form onSubmit={onSubmit}>
                     <Header>Login</Header>
                     <div>
                        <label>LOGIN ID</label>
                        <br />
                        <input
                           id="loginId"
                           value={loginId}
                           onChange={(e) => setLoginId(e.target.value)}
                        />
                     </div>
                     <div>
                        <label>PASSWORD</label>
                        <br />
                        <input
                           id="password"
                           value={password}
                           type="password"
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>
                     <Button type="submit">제출</Button>
                  </form>
               </Container>
               <StyledNavLink to="/register">가입하기</StyledNavLink>
            </>
         )}
      </>
   );
}
