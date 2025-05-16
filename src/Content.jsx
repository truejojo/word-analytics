import { useState } from 'react';
import Textarea from './Textarea';
import Stats from './Stats';

const Content = () => {
  const [text, setText] = useState('');

  const MAX_INSTAGRAM_CHARACTERS = 280;
  const MAX_FACEBOOK_CHARACTERS = 2200;

  const numberOfCharacters = text.length;
  const numberOfWords = text.split(' ').filter((word) => word !== '').length;
  const instagrammCharactersLeft =
    MAX_INSTAGRAM_CHARACTERS - numberOfCharacters;
  const facebookCharactersLeft = MAX_FACEBOOK_CHARACTERS - numberOfCharacters;

  const stats = {
    numberOfCharacters,
    numberOfWords,
    instagrammCharactersLeft,
    facebookCharactersLeft,
  };

  return (
    <main className='container'>
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Content;
