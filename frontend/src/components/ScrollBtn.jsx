import ScrollBtnCSS from './ScrollBtn.module.css'

function ScrollBtn(){
    return (
        <button className={ScrollBtnCSS.scrollBtn}>
            <span className={ScrollBtnCSS.arrow}>&#8595;</span>
        </button>
    )
}
export default ScrollBtn