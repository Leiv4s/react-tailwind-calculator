import "./Button.css"
import P from 'prop-types';

// function Button({value, className, onClick, children}) {
function Button(props) {

    return (
        <button className={props.className} onClick={props.onClick}>{props.children}</button>
    )
}

    Button.propTypes = {
        className:P.string,
        onClick: P.func,
        children: P.string
    }

export default Button