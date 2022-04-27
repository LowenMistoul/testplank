import styles from './card.module.scss';
import React, { useState } from 'react';
import 'typeface-roboto';
import  Arrow  from '../assets/arrow-icon.js';


export default function Card(props) {
    const[color ,setColor]=useState("#EEECEC")
    console.log(props);
  return (
    <>
        <div className={styles.container}>
            <img src={props.card.thumbnail} className={styles.img}/>
            <div className={styles.div}>
                <p className={styles.category}>{props.card.categories[0].title}</p>
                <div className={styles.line}/>
                <p style={{marginBottom:JSON.stringify(props.card.title).length > 21 ?"3rem":"1rem"}} 
                   className={styles.title}>
                       {props.card.title}
                </p>
                <p className={styles.excerpt}>{props.card.excerpt} </p>
                <a href={props.card.link}>
                    <p onMouseEnter={() => setColor("#000000")}
                       onMouseLeave={() => setColor("#EEECEC")}
                       style={{marginTop:JSON.stringify(props.card.title).length > 21 ?"20px":"60px"}}
                       className={styles.button}>
                        View Case Studies 
                        <Arrow color={color}  className={styles.arrow}/> 
                    </p>
                </a> 
               
            </div>   
        </div>
    </>
  )
}
