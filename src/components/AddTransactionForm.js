import React, { useState } from "react";
import { Form, Button, Segment } from 'semantic-ui-react';

function AddTransactionForm({ addTransaction }) {
  // State to manage form data
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(" http://localhost:8001/transactions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(newTransaction => {
        addTransaction(newTransaction);
        // Clear form after submission
        setFormData({
          date: "",
          description: "",
          category: "",
          amount: ""
        });
      })
      .catch(error => console.error("Error:", error));
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          {/* Input fields using Semantic UI Form components */}
          <Form.Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            fluid
          />
          <Form.Input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            fluid
          />
          <Form.Input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            fluid
          />
          <Form.Input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
            fluid
          />
        </Form.Group>
        <Button type="submit" primary>Add Transaction</Button>
      </Form>
    </Segment>
  );
}

export default AddTransactionForm;
