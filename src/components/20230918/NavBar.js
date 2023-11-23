import { Outlet, NavLink } from "react-router-dom";
import { NavItem } from "./NavItem";
import styled from "styled-components";
const Container = styled.div`
   display: flex;
`;

const StyledNavLink = styled(NavLink)`
   text-decoration: none;
   color: #333;
   padding: 5px;
   background-color: lightblue;
   &.active {
      color: white;
      background-color: midnightblue;
   }
`;
export function NavBar() {
   return (
      <>
         <Container>
            <StyledNavLink to="/home">
               <NavItem icon="ti ti-home-2" name="HOME" />
            </StyledNavLink>
            <StyledNavLink to="/products">
               <NavItem icon="ti ti-building-store" name="SHOP" />
            </StyledNavLink>
            <StyledNavLink to="/dashboard">
               <NavItem icon="ti ti-user" name="My Page" />
            </StyledNavLink>
            <StyledNavLink to="/login">
               <NavItem icon="ti ti-login" name="LOGIN" />
            </StyledNavLink>
            <StyledNavLink to="/cart">
               <NavItem icon="ti ti-shopping-cart" name="CART" />
            </StyledNavLink>
         </Container>
         <Outlet />
      </>
   );
}
