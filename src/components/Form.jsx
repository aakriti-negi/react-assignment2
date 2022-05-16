import React, { useState } from "react";
import "./Form_style.css";

function Form() {
  const [details, setDetails] = useState({
    name: "",
    dept: "",
    rate: "",
  });

  const [records, setRecords] = useState([]); //array of records(whatever is input by user)

  const handleInput = (event) => {
    // event handles whatever is done on page
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);

    setDetails({ ...details, [name]: value }); // dynamic data
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //to prevent refreshing

    const newRecords = { ...details, id: new Date().getTime().toString() }; //whatever is submitted, is added here
    console.log(records);
    setRecords([...records, newRecords]);
    console.log(records);

    setDetails({ name: "", dept: "", rate: "" }); //empty fields after clicking submit
  };

  return (
    <>
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Name: </label>
          <input
            htmlFor="name"
            type="text"
            name="name"
            autoComplete="off"
            value={details.name}
            onChange={handleInput}
            id="name"
          />
        </p>
        <p>
          <label>Department: </label>
          <input
            type="text"
            name="dept"
            htmlFor="dept"
            autoComplete="off"
            value={details.dept}
            onChange={handleInput}
            id="dept"
          />
        </p>
        <p>
          <label>Rating: </label>
          <input
            type="number"
            name="rate"
            htmlFor="rate"
            autoComplete="off"
            value={details.rate}
            onChange={handleInput}
            id="rate"
          />
        </p>
        <button type="submit" id="submit">
          Submit
        </button>
      </form>

      <center>
        {records.length ? (
          <div className="footer ">
            {records.map((currentElement) => {
              const { id, name, dept, rate } = currentElement;
              return (
                <center>
                  <div key={id}>
                    <p className="data">
                      Name: {name} | Department: {dept} | Rating: {rate}
                    </p>
                  </div>
                </center>
              );
            })}
          </div>
        ) 
        : null}
      </center>
    </>
  );
}

export default Form;
