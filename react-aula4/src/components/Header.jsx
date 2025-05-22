import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: blueviolet;
  padding: 10px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  & h1 {
    color: #FFF;
  }
  & nav ul {
    display: flex;
    gap: 36px;
    list-style: none;
    & li a {
      color: #FFFFFF80;
      text-decoration: none;
      font-size: 18px;
      &:hover, &.active {
        color: #fff;
      }
    }
  }

`
const Header = () => {
  return ( 
    <HeaderContainer>
            <h1>Logo</h1>
            <nav>
              <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/produtos"}>Produtos</NavLink></li>
              </ul>
            </nav>
    </HeaderContainer>
   );
}
 
export default Header;