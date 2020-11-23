import styles from './bigbox.module.css'
import React from "react";
import Change from '../components/change'
import getNumberDisplay from '../util/getNumberDisplay'




export default function BigBox(props){
    const{social,icon,name,number,change,negative} = props
    return (
    
        <div className={`${styles.big} ${styles[social]}`}>

            <div className={styles.details}>
                {icon}
                <p>{name}</p>
            </div>

            <p className={styles.number}>{getNumberDisplay(number)}</p>
            <p className={styles.followers}>FOLLOWERS</p>


           <Change negative={negative}>
                {change} Today
           </Change>

        </div>
    )    
}