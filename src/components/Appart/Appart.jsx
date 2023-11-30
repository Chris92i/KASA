import './style.scss'


function Appart({cover, title}){

    return (
        <div className="apartmentPrev">
        <h3>{title}</h3>
        <div></div>
        <img src={cover} alt="Image de présentation de l'apparmtement" />
        </div>
    )
}

export default Appart