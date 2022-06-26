import React, { useState, useEffect } from "react";
import "../styles/addProperty.css";

const AddProperty = () => {
  const initialState = {
    title: "",
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (e) => {
    e.preventDefault();
    console.log(e);
  };
  const handleFieldChange = (e) => {
    e.preventDefault();
    setFields({ ...fields, [e.target.name]: e.target.value });
    console.log(e);
  };

  return (
    <div className="add-property">
      <h1>Add Property</h1>
      <form className="property-form" onSubmit={handleAddProperty}>
        <div className="form-group">
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <button className="add-button" type="submit">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
