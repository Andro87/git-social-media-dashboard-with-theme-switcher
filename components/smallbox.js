import styles from './smallbox.module.css'
import React from "react";

// We want to turn any number with more than 5 digits to 3 digits and a K.
const getNumberDisplay = number => {
    if (number > 9999) {
        return (number / 1000).toString() + "k"
    }

    return number.toString();
}

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
                <p className={styles[negative ? "red" : "green"]}>
                    {negative ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                            <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                            <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z"/>
                        </svg>
                    )}
                    {percent}%
                </p>
            </div>
        </div>
    )
}