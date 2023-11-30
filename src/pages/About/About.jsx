import styles from './index.scss?inline'
import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import { useState,useEffect } from 'react'



function About(){
    
    //Utilise le hook useState pour déclarer une variable d’état data et une fonction setData pour mettre à jour cette variable. L’état initial est un tableau vide.
    const [abouts, setAbouts] = useState([])
    // getData fonction assyncrhone qui récupere les données à partir du fichier JSON logement.json , puis stock les données dans l'état data en utilisant setData(cards)
    const getData = async () => {
        const response = await fetch("about.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        // convertir la réponse en JSON et stock le résultat dans cards
        const abouts = await response.json();
        setAbouts(abouts);
    };
    //utilisation du hook useEffect pour appeler la fonction getData après le premier rendu du composant.
    useEffect(() => {
        getData();
    }, []);




    const location = useLocation()
    console.log('page:',location)

    return (
        <>
            <div className='About'>
                <Banner page={location}/>
                <div className='collapse_container_about'>
                    {
                      abouts.map(({ title, reply }, index) => (
                        <Collapse className='collapse_unite' key={ index } content={{
                            title: title,
                            reply: reply,
                        } 
                         }
                         decoration = {styles}
                         />
                      )
                      )  
                    }
                </div>
            </div>
        </>
    )

}

export default About