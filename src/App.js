import React from "react";
import useSWR from "swr";
import { Todos } from "./components/Todos";

const url = "https://jsonplaceholder.typicode.com/todos";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { data: result, error } = useSWR(url, fetcher);

  if (error) return <h1>Something went wrong!</h1>;
  if (!result) return <h1>Loading ...</h1>;

  return (
    <main className="App">
      <h1>Todos</h1>
      <div>
        {result.map((todo) => (
          <Todos key={todo.id} todo={todo} />
        ))}
      </div>
    </main>
  );
}
export default App;
