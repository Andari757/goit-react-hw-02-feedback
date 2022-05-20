import styles from "./style.module.css"
import PropTypes from 'prop-types';
export default function Statistics({ data }) {
    const total = data.good + data.bad + data.neutral
    const percentage = data.good / total * 100
    return (<ul className={styles.statistics}>
        <li>Good:{data.good}</li>
        <li>Neutral:{data.neutral}</li>
        <li>Bad:{data.bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback: {percentage.toFixed(2)}%</li>
    </ul>)
}
Statistics.defaultProps = {
    data: {}
}
Statistics.propTypes = {
    data: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired
    })
}