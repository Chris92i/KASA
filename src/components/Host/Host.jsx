import './style.scss'

function Host({ host }){

    return(
        <>
        <p className='nomHost'>{ host?.name }</p>
        <img className='photo' src={ host?.picture } alt="" />
        </>
    )

}

export default Host