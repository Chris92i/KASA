import './style.scss'
import { useLocation } from 'react-router-dom'
import backHome from '../../assets/homeBanner.png'

import backAbout from '../../assets/new-montagne-about.png'


function Banner(){

    const location = useLocation()

    let bannerImage
    let bannerText

    switch(location.pathname){
        case '/':
            bannerImage = backHome
            bannerText = 'Chez vous, partout et ailleurs'
        break;
        
        case '/about':
            bannerImage = backAbout
            bannerText = ''
        break;
        default:
            bannerImage = backHome
            bannerText = 'Chez vous, partout et ailleurs' 

    }
console.log ('bannerimage',bannerImage)

return(
    <div className="banner_container banner_container_about">
        <h1 className='banner_text'>{bannerText}</h1>
        <img 
            className='img-header'
            src={bannerImage} 
            alt="nature" 
        />
    </div>
)

}

export default Banner