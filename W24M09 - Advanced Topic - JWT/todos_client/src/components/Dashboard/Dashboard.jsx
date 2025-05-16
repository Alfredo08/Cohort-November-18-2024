import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "../Todo/Todo";

const Dashboard = () => {
   
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTodosOfCurrentUser = async () => {
            const URL = "http://localhost:8080/todosByUser";
            const settings = {
                method: 'GET',
                headers: {
                    usertoken: localStorage.getItem("token")
                }
            }

            const response = await fetch(URL, settings);
            const data = await response.json();

            if(! response.ok){
                navigate("/login");
            }
            else{
                setTodos(data.todos);
            }
        }
        fetchTodosOfCurrentUser();
    }, []);

    return(
        <>
            {(todos.length !== 0) ? 
                <>
                    <h2> Your list of todos </h2>
                    {
                        todos.map((todo, index) => {
                            return <Todo key={index}
                                        status={todo.status}
                                        description={todo.description}/>
                        })
                    }
                </>
            :
            ""    
            }
            
        </>
    );
}

export default Dashboard;