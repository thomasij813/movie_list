const Button = (props) => (
    <button className="ui button"
        onClick={props.handleClick}
    >
        {props.children}
    </button>
);

export default Button;