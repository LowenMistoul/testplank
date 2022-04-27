import styles from './page.module.scss'
import React from 'react'
import Card from '../components'
import axios from 'axios';


const cardsURL = "https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies";


export default function Page(props) {
  const [cards, setCards] = React.useState(null);
  React.useEffect(() => {
    axios.get(cardsURL).then((response) => {
      setCards(response.data);
    });
  }, []);
  
  if (!cards) return null;

  return (
    <>
        <div className={styles.container}>
          <Card card={cards["case-studies"][0]}/>
          {/* {props.categorie.categories[0].title} */}
        </div>
    </>
  )
}