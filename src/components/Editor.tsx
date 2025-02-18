// components/Editor.tsx
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

const Editor = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setContent(JSON.stringify(JSON.parse(savedData), null, 2));
    }
  }, []);

  return (
    <Box sx={{ height: 400 }}>
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }]
          ]
        }}
        style={{ height: '300px' }}
      />
    </Box>
  );
};

export default Editor;