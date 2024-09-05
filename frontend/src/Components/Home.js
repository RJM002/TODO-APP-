import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './home.css'
import TodoWrapper from "../ToDoComponents/TodoWrapper";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);


  return (
    <>
      <TodoWrapper />
      <ToastContainer />
    </>
  );
}

export default Home;
