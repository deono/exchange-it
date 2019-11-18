import React from "react";
import { useInputChange } from "../utilities/useInputChange";

const AddItem = () => {
  const [input, handleInputChange] = useInputChange();

  console.log("input: ", input);

  return (
    <div className="container">
      <h1 className="d-1">Add a New Item</h1>
      <form>
        <div className="form-group">
          <label htmlFor="item-name" hidden>
            Item Name
          </label>
          <input
            type="text"
            className="form-control"
            name="item-name"
            id="item-name"
            placeholder="Enter item name"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exchange-for" hidden>
            Exchange for?
          </label>
          <input
            type="text"
            className="form-control"
            name="exchange-for"
            id="exchange-for"
            placeholder="What do you want in exchange for the item?"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="condition" hidden>
            Condition
          </label>
          <select className="form-control" name="condition" id="condition">
            <option value="new">New</option>
            <option value="used-like-new">Used - Like new</option>
            <option value="used-very-good">Used - Very good</option>
            <option value="used-good">Used - Good</option>
            <option value="used-acceptable">Used - Acceptable</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description" hidden>
            Description
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            placeholder="Enter a description"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category" hidden>
            Category
          </label>
          <select className="form-control" name="category" id="category">
            <option value="sports">Sports</option>
            <option value="clothing">Clothing</option>
            <option value="music">Music</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image-url" hidden>
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            name="image-url"
            id="image-url"
            placeholder="Enter Image URL"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
