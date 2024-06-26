import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FormControl, FormHelperText, Typography } from '@mui/material';

interface RichTextEditorProps {
  placeholder?: string;
  label?: string;
  helperText?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ placeholder, label, helperText }) => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  const handleEditorChange = (content: string) => {
    setValue(content);
  };

  return (
    <FormControl fullWidth margin="normal">
      {label && <Typography variant="subtitle1" gutterBottom>{label}</Typography>}
      <ReactQuill
        value={value}
        modules={modules}
        formats={formats}
        onChange={handleEditorChange}
        placeholder={placeholder}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default RichTextEditor;
