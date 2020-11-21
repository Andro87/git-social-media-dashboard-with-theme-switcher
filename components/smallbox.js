import styles from './smallbox.module.css' 

export default function SmallBox(props){
    const{children} = props
return <div className={styles.small}>{children}</div>
}