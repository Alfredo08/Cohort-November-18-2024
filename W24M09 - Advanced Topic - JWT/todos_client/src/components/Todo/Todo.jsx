
const Todo = (props) => {
    return(
        <>
            <p> Description: {props.description} - {props.status} </p>
        </>
    );
}

export default Todo;