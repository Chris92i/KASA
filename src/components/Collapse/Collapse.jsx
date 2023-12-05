import './style.scss'
import Arrow from '../../assets/arrow_back_ios-24px 3.svg'

import { useState } from 'react'

function Collapse ({content, decoration}){
    
    //destructuration de l'objet content pour récupérer les propriétés title, reply, equipements
    const { title, reply, equipments } = content

    // etat initiale à false
    const [isClose, setIsClose] = useState(false);

    console.log( "test",content)
    console.log( "tes2", title)
    
    return(
        <>
            <div className='collapse_container'>
                {/* Toggle appel de la fonctione avec l'inverse de la valeur actuelle */}
                <button className='collapseStyle' onClick={() => setIsClose(!isClose)}>
                    <span className='title_collapse'>
                    {title}
                    </span>
                    <span className='arrow_container'>
                    <img className='arrow_Collapse' style={{transform: isClose? 'rotate(180deg)' : 'none', transition: 'transform 0.3s'}} src={Arrow} alt="chevron collapse" />
                    </span>
                </button>
                {/* Si isClose est vrai et equipments existe, alors une liste d’équipements est rendue. */}
                {isClose && equipments && (
                    <div className="about-content about-content-detail">
                    {/* Chaque équipement est rendu comme un élément de liste.*/}
                    {equipments.map((equipment, index) => {
                        return (
                            <ul className="list-equipment" key={index}>
                                <li className="list-equipment" >{equipment}</li>
                            </ul> 
                        )
                         
                    })}
                </div>
                )}
                {/* Si isClose est vrai et reply existe, alors le contenu de reply est rendu. */}
                {isClose && reply && (
                    <div className='contenuCollapse contenuCollapse-about'>
                        {reply}   
                    </div>
                )}
            </div>
            
        </>
    )

}

export default Collapse