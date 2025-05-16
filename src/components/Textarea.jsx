import { useState } from 'react';
import Warning from './Warning';

const Textarea = ({ text, setText }) => {
  const [warningText, setWarningText] = useState('');

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes('<script>')) {
      setWarningText('No script tag allowed');
      newText = newText.replace('<script>', '');
    } else if (newText.includes('@')) {
      setWarningText('No @ symbol allowed');
      newText = newText.replace('@', '');
    } else {
      setWarningText('');
    }

    setText(newText);
  };

  return (
    <div className='textarea'>
      <textarea
        onChange={handleChange}
        value={text}
        placeholder='Enter your text...'
        spellCheck='false'
      />
      {warningText && <Warning>{warningText}</Warning>}
    </div>
  );
};

export default Textarea;
