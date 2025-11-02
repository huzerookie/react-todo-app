import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoService from "../services/TodoService";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function UpdateTodoComponent() {
  const { id } = useParams();
  const [todo, setTodo] = useState({});
  const navigate = useNavigate();
  const validateTodo = Yup.object({
    course: Yup.string().min("Minimum 6 Characters required").required("Required")
  })

  const submitTodo = async (todo) =>{
    try{
     if(id!=-1){ 
      await TodoService.updateCourse(todo);
      alert(`Course Updated successfully!!`)
     } else{
      await TodoService.addCourse(todo);
      alert(`Course Added successfully!!`)
     }
    navigate("/manageTodos")
    } catch(e){
      alert(`Failed: Internal Server Error`)
      console.log(e)
    }
    
  }
  useEffect(() => {
    const setCourse = async () => {
      if(id==-1) return;
      const { data } = await TodoService.getSingleCourse(id);
      setTodo(data);
      console.log(data);
    };
    setCourse();
  }, []);



  return (
    <Formik
      initialValues={todo}
      enableReinitialize={true}
      onSubmit={submitTodo}
    >
      {() => (
        <Form className="container form-group">
       
          <fieldset className="form-control">
            <label>Course</label>
            <Field name="course" type="text"/>
          </fieldset>

          <fieldset className="form-control">
            <label>Candidate Name</label>
            <Field name="candidateName" type="text"/>
          </fieldset>

          <fieldset className="form-control">
            <label>Deadline</label>
            <Field name="deadline" type="date"/>
          </fieldset>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
