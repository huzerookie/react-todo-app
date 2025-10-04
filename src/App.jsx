import "./App.css";
import TodoComponent from "./components/TodoComponent";
import AuthProvider from "./security/AuthProvider";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
    <AuthProvider>
      <TodoComponent></TodoComponent>
    </AuthProvider>
    </>
  );
}

export default App;
