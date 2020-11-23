import styles from './smallbox.module.css'
import React from "react";
import Change from '../components/change'
import getNumberDisplay from '../util/getNumberDisplay'

export default function SmallBox(props) {
    const { title, number, percent, icon, negative } = props
    return (
        <div className={styles.small}>
            <div className={styles.display}>
                <p>{title}</p>
                {icon}
            </div>

            <div className={styles.display}>
                <p className={styles.number}>
                    {getNumberDisplay(number)}
                </p>
                
                <Change negative={negative}>
                    {percent}%
                </Change>

            </div>
        </div>
    )
}