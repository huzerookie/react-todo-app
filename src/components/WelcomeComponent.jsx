import { Link, useParams, useSearchParams } from "react-router-dom";
export default function WelcomeComponent() {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user");
  return (
    <div className="welcomeContainer container">
      <div>
        <h1>Welcome to Todo Application {user}</h1>
      </div>
      <div>
        <Link to="/manageTodos">Manage Your Todos</Link>
      </div>
    </div>
  );
}
