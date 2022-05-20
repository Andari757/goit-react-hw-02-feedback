import styles from "./style.module.css"
export default function FeedbackOptions({ data, onLeaveFeedback }) {
    return (
        <div>
            <button className={styles.button} name="good" onClick={onLeaveFeedback} >{data[0]}</button>
            <button className={styles.button} name="neutral" onClick={onLeaveFeedback}>{data[1]}</button>
            <button className={styles.button} name="bad" onClick={onLeaveFeedback}>{data[2]}</button>
        </div>)
}