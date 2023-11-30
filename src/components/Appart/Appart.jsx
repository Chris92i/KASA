import './style.scss'


function Appart({cover, title}){

    return (
        <div className="apartmentPrev">
        <h3>{title}</h3>
        <div></div>
        <img src={cover} alt="présentation de l'appartement" />
        </div>
    )
}

export default Appart