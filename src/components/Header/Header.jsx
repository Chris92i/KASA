import './style.scss'
import Nav from '../Navigation/Nav'
import logo from '../../assets/LOGO-kasa-header.svg'

function Header(){
    return (
        <header>
            <div className='header_container'>
                <div className='logoHeader'> <img src={logo}  alt='logo kasa'/> </div>
                <Nav className='navigation'/>
            </div>
        </header>
    )

}

export default Header