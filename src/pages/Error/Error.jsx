import './index.scss'
import { Link } from 'react-router-dom'

function Error(){
    return (
        <>
            <div className='erreur_container'>
            <p className='erreur'>404</p>
            <p className='erreur_oups'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='erreur_oups_back' to="/">Retourner sur la page d’accueil</Link>
            </div>
        </>
    )

}

export default Error