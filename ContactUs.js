import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [mailId, setMailId] = useState("");
  const [phone, setPhone] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setMailId(e.target.value);
  };

  const phoneNumChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const querySubmitHandler = async (e) => {
    e.preventDefault();
    const query = { name: name, phone: phone, mailId: mailId };
    const resp = await fetch(
      "https://starwar-movies-db-default-rtdb.firebaseio.com/queries.json",
      {
        method: "POST",
        body: JSON.stringify(query),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(resp);
  };

  return (
    <>
      <form onSubmit={querySubmitHandler}>
        <label>Name: </label>
        <input type="text" onChange={nameChangeHandler} value={name}></input>
        <label> E-mail ID: </label>
        <input
          type="email"
          onChange={emailChangeHandler}
          value={mailId}
        ></input>
        <label> Phone Number: </label>
        <input
          type="tel"
          onChange={phoneNumChangeHandler}
          value={phone}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ContactUs;
