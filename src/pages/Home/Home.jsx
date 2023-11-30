import {useState, useEffect} from "react"
import Banner from "../../components/Banner/Banner"
import Appart from "../../components/Appart/Appart"
import { Link } from "react-router-dom";
import './style.scss'
import { useLocation } from "react-router-dom";


function Home(){
    const location = useLocation()

    //Utilise le hook useState pour déclarer une variable d’état data et une fonction setData pour mettre à jour cette variable. L’état initial est un tableau vide.
    const [data, setData] = useState([])
    // getData fonction assyncrhone qui récupere les données à partir du fichier JSON logement.json , puis stock les données dans l'état data en utilisant setData(cards)
    const getData = async () => {
        const response = await fetch("logements.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        // convertir la réponse en JSON et stock le résultat dans cards
        const cards = await response.json();
        setData(cards);
    };
    //utilisation du hook useEffect pour appeler la fonction getData après le premier rendu du composant.
    useEffect(() => {
        getData();
    }, []);

    
    console.log('page:',location)

    return (
        <div className="home">
        <Banner page={location}/>
        <article>
				{data.map((apartment) => {
					return (
						<Link key={apartment.id} to={`/appart/${apartment.id}`}>
							<Appart cover={apartment.cover} title={apartment.title} />
						</Link>
					);
				})}
		</article>
        </div>    
    )
} 
export default Home