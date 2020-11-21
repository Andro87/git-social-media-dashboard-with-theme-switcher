import styles from './bigbox.module.css' 

export default function BigBox(props){
    const{social,children} = props
return <div className={`${styles.big} ${styles[social]}`}>{children}</div>
}