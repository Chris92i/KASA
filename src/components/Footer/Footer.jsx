import './style.scss'
import Logo from '../../assets/LOGO_footer_last.png'

function Footer(){
    return (
        <footer className="footer">
            <img src={Logo} alt="logo_kasa" />
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </footer>
        
    )

}

export default Footer