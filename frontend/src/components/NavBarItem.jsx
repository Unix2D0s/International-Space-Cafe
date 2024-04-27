import NavBarItemCSS from './NavBarItem.module.css'

function NavBarItem(props) { 
  return (
    <a className={NavBarItemCSS.item}>{props.itemName}</a>
  );
}

export default NavBarItem