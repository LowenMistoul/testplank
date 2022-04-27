import styles from './card.module.scss';
import React, { useState } from 'react';
import 'typeface-roboto';
import { ReactComponent as Arrow } from '../assets/arrow-icon.svg';


export default function Card(props) {

  return (
    <>
        <div className={styles.container}>
            <img src={props.card.thumbnail} className={styles.img}/>
            <div className={styles.div}>
                <p className={styles.category}>{props.card.categories[0].title}</p>
                <div className={styles.line}/>
                <p className={ JSON.stringify(props.card.title).length > 21 ? styles.titlemarg:styles.title}>{props.card.title}</p>
                <p  className={styles.excerpt}>{props.card.excerpt} </p>
                <a>
                    <p className={styles.button}>
                        View Case Studies 
                        <Arrow  className={styles.arrow}/>  
                    </p>
                </a>
            </div>   
        </div>
    </>
  )
}
