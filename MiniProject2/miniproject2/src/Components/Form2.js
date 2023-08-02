import React, { useState, useReducer } from "react";
import "./Form2.css";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      spirits: "",
      name: "",
      method: "",
      "mint": false,
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function Form2() {
  const [formData, setFormData] = useReducer(formReducer, { count: 100 });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true
      })
    }, 10000);
  };

  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  };

  return (
    <div className="wrapper">
      <h3>Fill in this Form and Submit</h3>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => {
              console.log(name, value);
              return (
                <li key={name}>
                  <strong>{name}</strong>:{value.toString()}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Recipe Name</p>
            <input
              name="name"
              onChange={handleChange}
              value={formData.name || ""}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Ingredients</p>
            <select
              name="spirits"
              onChange={handleChange}
              value={formData.spirits || ""}
            >
              <option value="">--Please choose an option--</option>
              <option value="Vodka">Vodka</option>
              <option value="Gin">Gin</option>
              <option value="Rum">Rum</option>
            </select>
          </label>
          <label>
            <p>Mint</p>
            <input
              type="checkbox"
              name="mint"
              onChange={handleChange}
              value={formData.mint || ""}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Method</p>
            <input
              name="method"
              onChange={handleChange}
              value={formData.method || ""}
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form2;
