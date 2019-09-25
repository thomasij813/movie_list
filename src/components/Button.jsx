const Button = (props) => (
    <button className={`ui button ${props.additionalUiClasses}`}
        onClick={props.handleClick}
    >
        {props.children}
    </button>
);

export default Button;