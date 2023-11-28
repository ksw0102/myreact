import styled from "styled-components";
import { Products } from "./Products";
import { useContext, useEffect, useState } from "react";
import { DeliveryContext } from "./DeliveryShop";
import { useQuery } from "react-query";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { login } from "./api";
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
      background-image: url(https://cdn.pixabay.com/photo/2017/10/22/21/02/food-2879265_1280.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.7; /* Adjust the transparency for the background */
      z-index: -1; /* Ensure it's positioned behind other content */
   }
`;
const Container = styled.div``;

// const Section1 = styled.div`
//    width: 100vw;
//    height: 25vh;
//    font-size: 33px;
//    overflow: hidden;
// `;

// const StyledForm = styled.form`
//    padding-left: 20px;
//    padding-right: 20px;
//    display: flex;
// `;

// const Login = styled.div`
//    width: 50%;
//    height: 100%;
//    border: 1px solid black;
//    border-radius: 25px;
//    background-color: #a1bf73;
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    justify-content: center;
//    margin: 0 auto;
//    text-align: center;
//    & h2 {
//       color: white;
//       text-shadow: 4px 2px 2px gray;
//       font-size: 40px;
//       padding-bottom: 20px;
//    }
// `;

// const Logo = styled.div`
//    font-size: 1rem;
//    display: flex;
// `;

// const SignIn = styled.div`
//    width: 300px;
//    display: flex;
// `;

// const Id = styled.input`
//    width: 100%;
//    height: 40px;
//    padding: 10px;
//    outline: none;
//    border: 1px solid #83a638;
//    border-radius: 5%;
// `;

// const PassWord = styled.input`
//    width: 100%;
//    height: 40px;
//    padding: 10px;
//    outline: none;
//    border: 1px solid #83a638;
//    border-radius: 5%;
// `;

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

const Section1 = styled.div`
   width: 60vw;
   border-radius: 20px;
   box-shadow: 3px 3px 3px gray;
   margin: 20px auto;
   background-color: #a1bf73;
   padding: 1.5rem;
`;

const Login = styled.div``;

const StyledForm = styled.form`
   text-align: center;
   align-items: center;
`;

const SignIn = styled.div`
   display: flex;
   gap: 3rem;
   margin: 0 auto;
   justify-content: center;
   padding-bottom: 1rem;
`;

const Id = styled.input`
   width: 23vw;
   padding: 10px;
   text-align: center;
   font-size: 1.3rem;
`;

const PassWord = styled.input`
   width: 23vw;
   padding: 10px;
   text-align: center;
   font-size: 1.3rem;
`;

const Button = styled.button`
   width: 23vw;
   padding: 2px;
   text-align: center;
   font-size: 1.3rem;
   color: black;
   background-color: white;
   &:hover {
      cursor: pointer;
   }
`;

const Logo = styled.div`
   margin: 0 auto;
   width: 20vw;
   text-align: center;
   font-size: 2rem;
   & h2 {
      color: white;
      text-shadow: 4px 2px 2px gray;
      padding-bottom: 20px;
   }
`;

const Sub = styled.div`
   display: flex;
   gap: 3rem;
   margin: 0 auto;
   justify-content: center;
`;

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
// const Button = styled.button`
//    width: 300px;
//    margin-top: 10px;
//    background-color: white;
//    &:hover {
//       cursor: pointer;
//    }
//    &:active {
//       background-color: #83a638;
//    }
// `;

const StyledNavLink = styled(NavLink)`
   width: 23vw;
   padding: 2px;
   text-align: center;
   font-size: 1.3rem;
   border: 2px solid black;
   background-color: white;
   text-decoration-line: none;
   color: black;
`;

const Info = styled.div`
   background-color: #a1bf73;
   text-align: center;
   align-items: center;
   margin: 20px auto;
   padding: 20px;
   width: 30vw;
   border-radius: 20px;
   box-shadow: 3px 3px 3px gray;
`;

const LgButton = styled.button`
   border: 1px solid black;
   width: 150px;
   height: 2rem;
   font-size: 1.5rem;
   background-color: white;
   letter-spacing: 3px;
   margin-top: 1rem;
`;

export function Main() {
   const [loginId, setLoginId] = useState("");
   const [password, setPassword] = useState("");
   const [userLogin, setUserLogin] = useState(null);
   const [loggingIn, setLoggingIn] = useState(false);
   const { loginState, setLoginState } = useContext(DeliveryContext);
   const navigate = useNavigate();

   const navigateToLogout = () => {
      navigate("logout");
   };

   const navigateToCart = () => {
      navigate("cart");
   };

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
            navigate("/");
            setLoggingIn(false);
         }, 1000);
      } else if (data && data.resultCode === "ERROR") {
         console.log(data);
         navigate("/error");
      }
   }, [data]);

   useEffect(() => {
      refetch();
   }, [userLogin]);

   function onSubmit(e) {
      e.preventDefault();
      console.log("등록");
      const user = {
         loginId: loginId,
         password: password,
      };
      setUserLogin(user);
   }
   return (
      <>
         <StyledBackground>
            {loggingIn ? (
               <h1>로그인중..</h1>
            ) : loginState?.id ? (
               <>
                  {/* 로그인 상태 */}
                  <Info>
                     <h1>
                        환영합니다. <br />
                        로그인 유저 : {loginState.id} 님.
                        <br />
                        <LgButton onClick={navigateToLogout}>로그아웃</LgButton>
                     </h1>
                  </Info>
                  <>
                     <Container>
                        <Products />
                        <Section3>
                           <Btn onClick={navigateToCart}>내 주문내역 확인</Btn>
                           <Btn>고객센터</Btn>
                        </Section3>
                     </Container>
                  </>
               </>
            ) : (
               <>
                  {/* 로그아웃 상태 */}
                  <Container>
                     <Section1>
                        <Login>
                           <Logo>
                              <h2>저기요</h2>
                           </Logo>
                           <StyledForm onSubmit={onSubmit}>
                              <SignIn>
                                 <Id
                                    input
                                    id="loginId"
                                    value={loginId}
                                    onChange={(e) => setLoginId(e.target.value)}
                                    placeholder="아이디 입력(필수)"
                                 />
                                 <PassWord
                                    input
                                    id="password"
                                    value={password}
                                    type="password"
                                    onChange={(e) =>
                                       setPassword(e.target.value)
                                    }
                                    placeholder="비밀번호 입력(필수)"
                                 />
                              </SignIn>
                              <Sub>
                                 <Button type="submit">로그인</Button>
                                 <StyledNavLink to="/register">
                                    가입하기
                                 </StyledNavLink>
                                 {/* 이건 useLocation? */}
                              </Sub>
                           </StyledForm>
                        </Login>
                     </Section1>
                     <Products />
                     <Section3>
                        <Btn onClick={() => alert("로그인 후 이용 바랍니다")}>
                           내 주문내역 확인
                        </Btn>
                        <Btn>고객센터</Btn>
                     </Section3>
                  </Container>
                  <Outlet />
               </>
            )}
         </StyledBackground>
      </>
   );
}
