import NavBarCSS from './NavBar.module.css'
import NavItem from './NavItem.jsx'

function NavBar(){
    return (
        <header>
            <h3 className={NavBarCSS.logo}>ISC</h3>
            <nav>
                <NavItem name="ABOUT"></NavItem>
                <NavItem name="RESERVE"></NavItem>
                <NavItem name="MENU"></NavItem>
                <NavItem name="LOGIN"></NavItem>
            </nav>
        </header>
        
    )
}
export default NavBar