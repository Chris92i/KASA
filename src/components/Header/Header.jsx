import './style.scss'
import Nav from '../Navigation/Nav'
import logo from '../../assets/LOGO-kasa-header.svg'
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header className='header_class'>
            <div className='header_container'>
                <div className='logoHeader'> 
                    <Link to='/' >
                        <img className='logo_header' src={logo}  alt='logo kasa'/> 
                    </Link>
                </div>
                <Nav className='navigation'/>
            </div>
        </header>
    )

}

export default Header