declare module 'react-quill' {
  import React from 'react';
  interface ReactQuillProps {
    value?: string;
    onChange?: (content: string) => void;
    modules?: object;
    style?: React.CSSProperties;
  }
  const ReactQuill: React.ComponentType<ReactQuillProps>;
  export default ReactQuill;
}