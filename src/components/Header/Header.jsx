import './style.scss'
import Nav from '../Navigation/Nav'

function Header(){
    return (
        <header>
            <div className='header_container'>
                <div className='logoHeader'> <img src="/src/assets/LOGO-kasa-header.svg" alt="Logo agence Kasa" /> </div>
                <Nav className='navigation'/>
            </div>
        </header>
    )

}

export default Header