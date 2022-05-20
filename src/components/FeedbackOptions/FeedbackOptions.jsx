import styles from "./style.module.css"
import PropTypes from 'prop-types';
export default function FeedbackOptions({ data, onLeaveFeedback }) {
    return (
        <div className={styles['button-wraper']}>
            <button className={styles.button} name="good" onClick={onLeaveFeedback} >{data[0]}</button>
            <button className={styles.button} name="neutral" onClick={onLeaveFeedback}>{data[1]}</button>
            <button className={styles.button} name="bad" onClick={onLeaveFeedback}>{data[2]}</button>
        </div>)
}
FeedbackOptions.defaultProps = {
    data: {},
    onLeaveFeedback: () => { }
}
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.string)
}