import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const Editor = () => {
  const [content, setContent] = useState("");

  // Sync Editor with Local Storage
  useEffect(() => {
    const updateEditorContent = () => {
      const savedData = localStorage.getItem("userData");
      setContent(savedData ? JSON.stringify(JSON.parse(savedData), null, 2) : "");
    };

    // Load saved content on mount
    updateEditorContent();

    // Listen for storage changes
    window.addEventListener("storage", updateEditorContent);

    return () => window.removeEventListener("storage", updateEditorContent);
  }, []);

  return (
    <Box sx={{ height: 400 }}>
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={{
          toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
        style={{ height: "300px" }}
      />
    </Box>
  );
};

export default Editor;
