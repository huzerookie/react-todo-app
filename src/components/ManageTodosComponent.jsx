import { useEffect, useState } from "react";
import TodoService from "../services/TodoService";
import { useNavigate } from "react-router-dom";

export default function ManageTodosComponent() {
  const [todosList, setTodoList] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchAllCourses = async () =>{
      const response =await TodoService.getAllCourses();      
      console.log(response.data)
      setTodoList(response.data)
    }
    fetchAllCourses();
  },[])

  const deleteTodo = async (id)=>{
    await TodoService.deleteCourse(id);
    const {data} = await TodoService.getAllCourses();
    setTodoList(data)
  }

  const updateTodo = (id) =>{
    navigate(`/updateTodo/${id}`)
  }

  return (
    <>
      <div className="manageTodosContainer container">
        <div>
          <h1>Manage Your Todos</h1>
        </div>
        <div>
          <table  className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Course Name</th>
                <th>Candidate</th>
                <th>Deadline</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {todosList.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.course}</td>
                  <td>{todo.candidateName}</td>
                  <td>{todo.deadline}</td>
                  <td><button className="btn btn-warning" onClick={()=>{updateTodo(todo.id)}}>Update</button></td>
                  <td><button className="btn btn-danger" onClick={()=>{deleteTodo(todo.id)}}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success">Add New Todo</button>
        </div>
      </div>
    </>
  );
}
