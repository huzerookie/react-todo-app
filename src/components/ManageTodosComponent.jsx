export default function ManageTodosComponent() {
  const deadLineDate = new Date();
  const todosList = [
    {
      id: 1,
      course: "Learn Azure",
      candidateName: "Huzefa",
      deadline: new Date().toDateString(),
    },
    {
      id: 2,
      course: "Learn Spring Boot",
      candidateName: "Huzefa",
      deadline: new Date().toDateString(),
    },
    {
      id: 3,
      course: "Learn React",
      candidateName: "Huzefa",
      deadline: new Date().toDateString(),
    },
  ];
  return (
    <>
      <div className="manageTodosContainer container">
        <div>
          <h1>Manage Your Todos</h1>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Course Name</th>
                <th>Candidate</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {todosList.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.course}</td>
                  <td>{todo.candidateName}</td>
                  <td>{todo.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
