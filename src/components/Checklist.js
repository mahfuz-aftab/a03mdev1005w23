/*A React component that implements a checklist.*/

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checklist = () => {

  // Initialize the state for storing checklist items and input value
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handles input change events and updates the input value state
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  // Handles the add item button click event and adds a new item to the checklist
  const handleAddItem = () => {
    if (inputValue) {
      setItems([...items, { label: inputValue, isChecked: false }]);
      setInputValue('');
    }
  };

  // Handles item checkbox click events and toggles the item checked state
  const handleToggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isChecked = !updatedItems[index].isChecked;
    setItems(updatedItems);
  };
  // Handles the delete all items button click event and clears the items state
  const handleDeleteAllItems = () => {
    setItems([]);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">Checklist</h1>
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="inputItem"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleAddItem}
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
      {items.length > 0 && (
        <div className="form-group">
          <label>Items:</label>
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                key={index}
                className={`list-group-item ${item.isChecked ? 'list-group-item-success' : ''
                  }`}
              >
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={item.isChecked}
                    onChange={() => handleToggleItem(index)}
                  />
                  <label className="form-check-label">{item.label}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {items.length === 0 && <p>No items added yet.</p>}
      {items.length > 0 && (
        <div className="form-group">
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleDeleteAllItems}
          >
            Delete All Items
          </button>
        </div>
      )}
    </div>
  );
};

export default Checklist;
