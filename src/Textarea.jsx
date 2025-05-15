import { useState } from 'react';

const Textarea = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  console.log(text.length);
  return (
    <textarea
      onChange={handleChange}
      value={text}
      placeholder='Enter your text...'
      className='textarea'
      spellCheck='false'
    />
  );
};

export default Textarea;
