import styled from "@emotion/styled";

const NavWrapper = styled.nav`
  background-color: #16b9b3;
  display: flex;
  justify-content:space-between;
  white-space:nowrap;

  .nav-img {
    padding:20px;
  }
  .nav-content{
    display:flex;
    justify-content:space-around;
    padding:20px;
  }
  .nav-a{
    display:flex;
    align-items:center;
  }
  .nav-a a{
    display:bolck;
    font-size:30px;
    color:white;
    text-decoration:none;
    padding-left:10px;
    padding-right:10px;
  }
  .nav-h2{
    font-size:30px;
    display:flex;
    align-items:center;
    padding:20px;
  }
`;

const Navigation = () => {
  console.log('Navigation');
  
  return (
    <NavWrapper>
      <div className="nav-content">
        <div className="nav-img">
          <img src="https://i.imgur.com/YNPpAgW.png" alt="logo" />
        </div>
        <div className="nav-a">
          <a href="/">新增資源</a>
          <a href="/">已新增資源</a>
        </div>
      </div>
     <div className="nav-h2">
       <h2>使用者：c8lawma</h2>
     </div>
    </NavWrapper>
  );
}

export default Navigation;
