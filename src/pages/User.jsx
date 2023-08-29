import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("id"));

  const [name, setName] = useState("");
  const [age, setAge] = useState("");


const handleSubmit = (e) => {
    e.preventDefault()
    setSearchParams({
        name: name,
        age: age
    })
}

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Find User</button>
      </form>
      <h1>user id : {searchParams.get("id")}</h1>
      <h1>user name : {searchParams.get("name")}</h1>
      <h1>user age : {searchParams.get("age")}</h1>
    </div>
  );
};

export default User;
