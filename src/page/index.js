import styles from './page.module.scss'
import React from 'react'
import Card from '../components'
import axios from 'axios';
import 'typeface-roboto';
import { ReactComponent as Circles } from '../assets/asset1.svg';
import { ReactComponent as Green } from '../assets/asset2.svg';
import { ReactComponent as Red } from '../assets/asset3.svg';


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
          <p className={styles.title}>Work</p>
          <div className={styles.nav}>
            <div className={styles.box}>
              <p className={styles.all}>All</p>
            </div>
            <p >{props.categorie.categories[0].title}</p>
            <p>{props.categorie.categories[1].title}</p>
            <p>{props.categorie.categories[2].title}</p>
            <p>{props.categorie.categories[4].title}</p>
            <p>{props.categorie.categories[3].title}</p>
            
          </div>
          <div className={styles.line} />
          <div className={styles.lilcontainer}>
            <Card card={cards["case-studies"][0]}/>
            <Card card={cards["case-studies"][1]}/>
            <Card card={cards["case-studies"][2]}/>
            <Card card={cards["case-studies"][3]}/>
            <Card card={cards["case-studies"][4]}/>
            <Card card={cards["case-studies"][5]}/>
            <Card card={cards["case-studies"][6]}/>
          </div>
        </div>
    </>
  )
}