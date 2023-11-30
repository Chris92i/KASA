import './style.scss'

function Title({titre}) {
    console.log(titre)

    return(
        <div className='title_container'>
            <p className='title_text'>{ titre }</p>
        </div>
    )
}

export default Title