import './style.scss'
import Nav from '../Navigation/Nav'
import logo from '../../assets/LOGO-kasa-header.svg'
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header>
            <div className='header_container'>
                <div className='logoHeader'> 
                    <Link to='/' >
                        <img src={logo}  alt='logo kasa'/> 
                    </Link>
                </div>
                <Nav className='navigation'/>
            </div>
        </header>
    )

}

export default Header