import React from "react";
import useSWR from "swr";
import styles from "../styles.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const Todos = ({ todo }) => {
  const { id, title, userId } = todo;
  const url = "https://jsonplaceholder.typicode.com/todos" + id;

  const { data, error } = useSWR(url, fetcher);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;
  {
    console.log(data);
  }
  return (
    <div className="Card">
      <span className="Card--id">{id}</span>
      <br></br>
      <h1 className="Card--name">Title - {title}</h1>
      <h2 className="Card--details">User Id - {userId}</h2>
    </div>
  );
};

export default Todos;
