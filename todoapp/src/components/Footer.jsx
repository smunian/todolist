import styles from './footer.module.css'
export default  function Footer({completTodos,totalTodos})
{
    return <div  className={styles.footer}>
        <span className={styles.item}>Completed Todos:{completTodos}</span>
        <span className={styles.item}>TotalTodos Todos:{totalTodos}</span>
    </div>
}