const AlertSegment = (props) => {
    return (
        <div className={`ui inverted ${props.color} segment`}>
            <p>{props.children}</p>
        </div>
    )
}

export default AlertSegment;