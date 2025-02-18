import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [editorContent, setEditorContent] = useState("");

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      setEditorContent(JSON.stringify(JSON.parse(savedData), null, 2));
    }
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission and save data to localStorage
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(userData));
    setEditorContent(JSON.stringify(userData, null, 2)); // Update editor
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", padding: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          name="address"
          value={userData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Save
        </Button>
      </form>

      {/* Editor to display saved JSON data */}
      <Box sx={{ mt: 3 }}>
        <h3>Saved Data:</h3>
        <textarea
          value={editorContent}
          readOnly
          style={{ width: "100%", height: "150px", fontFamily: "monospace" }}
        />
      </Box>
    </Box>
  );
};

export default UserForm;
