const Stats = ({ stats }) => {
  const {
    numberOfCharacters,
    numberOfWords,
    instagrammCharactersLeft,
    facebookCharactersLeft,
  } = stats;

  return (
    <section className='stats'>
      <Stat number={numberOfWords} label='Words' />
      <Stat number={numberOfCharacters} label='Characters' />
      <Stat number={instagrammCharactersLeft} label='Instagramm' />
      <Stat number={facebookCharactersLeft} label='Facebook' />
    </section>
  );
};

export default Stats;

const Stat = ({ number, label }) => {
  return (
    <section className='stat'>
      <span
        className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}
      >
        {number}
      </span>
      <h2 className='second-heading'>{label}</h2>
    </section>
  );
};
