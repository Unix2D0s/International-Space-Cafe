import NavItemCSS from './NavItem.module.css'
import PropTypes from 'prop-types'

function NavItem(props){
    return (
        <a className={NavItemCSS.navItem}>
            {props.name}
        </a>
    )
}
export default NavItem

NavItem.propTypes = {
    name: PropTypes.string
}