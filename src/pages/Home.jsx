import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../components/customHooks/useLocalStorage';
import Input from "../components/input/Input";
import Users from "../components/userItem/Users";
import { fetchUsers } from "../store/usersSlice";

const Home = () => {
	const [input, setInput] = useLocalStorage("input", "");
  const dispatch = useDispatch();

  const handleChange = (text) => setInput(text);

  const handleSubmit = (e) => {
    e.preventDefault();
    //  setInput('');
    dispatch(fetchUsers({ inputValue: input }));
  };

 
  return (
	<>
	 <Link className="title" to="/">
        <h1 className="home__title">Find a GitHub repository</h1>
      </Link>
	  <Input
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Users input={input} />
	</>
  )
}

export default Home