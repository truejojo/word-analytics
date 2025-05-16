import { useState } from 'react';
import Textarea from './Textarea';
import Stats from './Stats';
import {
  MAX_INSTAGRAM_CHARACTERS,
  MAX_FACEBOOK_CHARACTERS,
} from '../lib/constants';

const Content = () => {
  const [text, setText] = useState('');

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
