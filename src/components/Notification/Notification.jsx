import styles from "./style.module.css"
import PropTypes from 'prop-types';
export default function Notification({ message }) {
    return (
        <div>{message}</div>
    )
}
Notification.defaultProps = {
    message: ""
}
Notification.propTypes = {
    message: PropTypes.string.isRequired,

}