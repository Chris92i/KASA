import './style.scss'
import { useLocation } from 'react-router-dom'
//import '../../assets/homeBanner.png'
//import '../../assets/montagne.png'
import backHome from '../../assets/homeBanner.png'
import backAbout from '../../assets/aboutBanner.png'


function Banner(){

    const location = useLocation()
    //const montagne = '../../assets/montagne.png'
    //const falaise = '../../assets/falaise.png'
    let bannerImage
    let bannerText

    switch(location.pathname){
        case '/':
            bannerImage = backHome
            //bannerImage = '/src/assets/homeBanner.png'
            bannerText = 'Chez vous, partout et ailleurs'
        break;
        
        case '/about':
            bannerImage = backAbout
            //bannerImage = '/src/assets/montagne.png'
            bannerText = ''
        break;
        default:
            bannerImage = backHome
            //bannerImage = '/src/assets/homeBanner.png'
            bannerText = 'Chez vous, partout et ailleurs' 

    }
console.log ('bannerimage',bannerImage)

return(
    <div className="banner_container" style={{ backgroundImage: `url(${bannerImage})`}}>
        <div className="banner_container_text">
            <div className="banner_text">{bannerText}</div>
        </div>
    </div>
)

}

export default Banner