// App.tsx (Main Component)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Counter from './components/Counter.tsx';
import UserForm from './components/UserForm.tsx';
import Editor from './components/Editor.tsx';

function App() {
  return (
      <Router basename="/assessmentapp">
      <CssBaseline />
      <Box sx={{ padding: 4 }}>
        <Routes>
          <Route path="/" element={
            <>
              <Counter />
              <UserForm />
              <Editor />
            </>
          } />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
