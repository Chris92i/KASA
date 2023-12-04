import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Tag from "../../components/Tag/Tag";
import "./style.scss";
import Carousel from "../../components/Caroussel/Carousel";
import Error from "../Error/Error";
import Title from "../../components/Title/Title";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";

function Detail() {
  // pour récupérer l'identifiant dans l'url il faut utiliser use params
  const { id } = useParams();
  console.log(id);

  // utilisation du hook useState pour créer une variable d’état data qui stocke les détails du logement.
  const [data, setData] = useState([0]);

  // Utilisation d'une fonction asynchrone pour récupérer les données du logement à partir d’un fichier JSON local.
  const getData = async () => {
    const response = await fetch("../logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const cards = await response.json();
    console.log(cards);
    const apartment = cards.find((apartment) => apartment.id === id);
    setData(apartment);
  };
  
  // Uitilisation du hook useEffect pour appeler la fonction getData qui récupère les données du logement à partir d’un fichier JSON local.
  useEffect(() => {
    getData();
  });

  //}, []);


  // Rendu Conditionnel Si data est nul, le composant Error est rendu.
  if (!data) return <Error />;
  console.log(data);


  //Sinon, un ensemble de composants est rendu avec les détails du logement.
  return (
    <>
      <div className="page_logement">
        <Carousel slides={data?.pictures} />
        <div className="sousCarousel_container">
          <div className="bloc1">
            <div className="nomLocalisation">
              <Title titre={data?.title} />
              <p className="localisation_container">{data?.location}</p>
            </div>

            <div className="tags_container">
              {data?.tags?.map((tag, index) => {
                return <Tag value={tag} key={index} />;
              })}
            </div>
          </div>

          <div className="bloc2">
            <div className="host_container">
              <Host host={data?.host} />
            </div>
            <div className="rating_container">
              <Rating className="rating" note={data?.rating} />
            </div>
          </div>
        </div>
        <div className="collapse_container_detail">
          <div className="collapse_unite_A ">
            <div className="collapse_unite_1">
              <Collapse
                content={{
                  title: "Description",
                  reply: data?.description,
                }}
              />
            </div>
          </div>
          <div className="collapse_unite_B">
            <div className="collapse_unite_2">
            <Collapse
              content={{
                title: "Équipements",
                equipments: data?.equipments,
              }}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
