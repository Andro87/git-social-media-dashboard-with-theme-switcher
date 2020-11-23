import styles from './change.module.css'
import React from "react"

export default function Change(props){
    const{negative,children}=props
    return (

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
        {children}
        </p>
    )
}