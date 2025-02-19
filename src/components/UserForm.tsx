import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid"; // Import UUID

// Define TypeScript Interface for User Data
interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const UserForm: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [editorContent, setEditorContent] = useState("");

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("userData");
    if (savedData) {
      const parsedData: UserData = JSON.parse(savedData);
      setUserData(parsedData);
      setEditorContent(JSON.stringify(parsedData, null, 2));
    }
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission and save data
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation
    if (!userData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simple phone validation (only numbers, min 10 digits)
    if (!userData.phone.match(/^\d{10,}$/)) {
      alert("Please enter a valid phone number with at least 10 digits.");
      return;
    }

    // Assign a new ID if it's empty (first-time save)
    const newUser = userData.id ? userData : { ...userData, id: uuidv4() };

    localStorage.setItem("userData", JSON.stringify(newUser));
    setUserData(newUser);
    setEditorContent(JSON.stringify(newUser, null, 2));
  };

  // Clear form fields
  const handleClear = () => {
    setUserData({
      id: uuidv4(), // Assign new ID on clear
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    setEditorContent(""); // Clear the displayed JSON data
  
    localStorage.removeItem("userData"); // Remove from storage
  
    // Notify Editor component to clear itself
    window.dispatchEvent(new Event("storage"));
  };
  

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        User Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={userData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Address"
          name="address"
          value={userData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />

        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Box>
      </form>

      {/* Display Saved JSON Data */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Saved Data:</Typography>
        <textarea
          value={editorContent}
          readOnly
          style={{
            width: "100%",
            height: "150px",
            fontFamily: "monospace",
            background: "#f4f4f4",
            padding: "8px",
            whiteSpace: "pre-wrap", // Better formatting
            border: "1px solid #ddd",
          }}
        />
      </Box>
    </Box>
  );
};

export default UserForm;
