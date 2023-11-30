import './style.scss'


function Tag({ value }){
    console.log(value)
    return(
        <div className='tag_container'>
            <p className='tag_text'>{ value }</p>
        </div>
    )

}

export default Tag