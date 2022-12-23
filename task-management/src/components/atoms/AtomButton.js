import PropTypes from "prop-types"


export default function AtomButton( { className, text  , onClick} ){

    return (
        <button
            className = {className}
            onClick = {onClick}
        >
        {text}    
        </button>
    );
}

AtomButton.defaultProps = {

}

AtomButton.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func
}