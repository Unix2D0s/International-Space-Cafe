import NavBarCSS from './NavBar.module.css'
import NavBarItem from './NavBarItem.jsx'
import ISCLogo from './ISCLogo.jsx'

function NavBar() { 
  return (
    <>
      <div className={NavBarCSS.gradientBackground}>
        <ISCLogo/>
        <NavBarItem itemName="ABOUT" />
        <NavBarItem itemName="RESERVE" />
        <NavBarItem itemName="MENU" />
        <NavBarItem itemName="LOGIN" />
      </div>
    </>
  );
}

export default NavBar