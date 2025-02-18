// components/Counter.tsx
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Button, Stack, Typography } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count');
    return saved ? JSON.parse(saved) : 0;
  });

  const bgAnimation = useSpring({
    height: `${count}%`,
    config: { tension: 180, friction: 12 }
  });

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  const handleReset = () => setCount(0);

  return (
    <Box sx={{ mb: 4 }}>
      <animated.div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#2196f3',
        ...bgAnimation
      }} />
      
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="contained" onClick={() => setCount(c => c + 1)}>
          Increment
        </Button>
        <Typography variant="h6">Count: {count}</Typography>
        
        <Button variant="contained" onClick={() => setCount(c => Math.max(0, c - 1))}>
          Decrement
        </Button>
        <Button variant="contained" onClick={() => setCount(0)}>
          Reset
        </Button>
        
      </Stack>
    </Box>
  );
};

export default Counter;