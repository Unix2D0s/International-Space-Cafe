import NavBarCSS from './NavBar.module.css'
import NavBarItem from './NavBarItem.jsx'

function NavBar() { 
  return (
    <>
      <div className={NavBarCSS.gradientBackground}>
        <NavBarItem itemName="About" />
        <NavBarItem itemName="Reserve" />
        <NavBarItem itemName="Menu" />
        <NavBarItem itemName="Login" />
      </div>
    </>
  );
}

export default NavBar