import React, { useState } from "react";
import "../styles/addProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      bedrooms: 1,
      bathrooms: 1,
      price: 0,
      type: "Detached",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (e) => {
    e.preventDefault();
  };
  const handleFieldChange = (e) => {
    e.preventDefault();
    setFields({ ...fields, [e.target.name]: e.target.value });
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

          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="London">London</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Birmingham">Birmingham</option>
            </select>
          </label>
          <label htmlFor="type">
            Type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option id="type" value="Detached">
                Detached
              </option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terrace">Terrace</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Flat">Flat</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <label htmlFor="bedrooms">
            Bedrooms
            <select
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label htmlFor="bathrooms">
            Bathrooms
            <select
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              name="email"
              value={fields.email}
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
