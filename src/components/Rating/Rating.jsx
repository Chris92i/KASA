import './style.scss'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'

function Rating({ note = 0 }){

    const tabNote = []
    
    //convertir la note en entier
    const noteValeur = parseInt(note)

    // on fait une bouble for qui s'execute 5 fois
    for (let i = 1; i < 6; i++ ){

        const source = (i<= noteValeur? starActive : starInactive)
        const alt = (i<= noteValeur? 'etoile active' : 'etoile inactive')
        
            tabNote.push(
                <img key={'note-'+i} src={source} alt={alt} />
            )
    }

    return(
        <>
            <p>{tabNote}</p>
        </>
    )

}

export default Rating