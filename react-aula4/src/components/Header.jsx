import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: blueviolet;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Header = () => {
  return ( 
    <HeaderContainer>
            <h1>Logo</h1>
            <nav>
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/produtos"}>Produtos</Link></li>
              </ul>
            </nav>
    </HeaderContainer>
   );
}
 
export default Header;