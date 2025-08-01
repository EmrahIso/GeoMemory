type HowToPlayGeoMemoryProps = {
  backToHomeHandler: React.MouseEventHandler<HTMLButtonElement>;
};

const HowToPlayGeoMemory = ({ backToHomeHandler }: HowToPlayGeoMemoryProps) => {
  return (
    <article className='text-gray-800 dark:text-gray-200 flex justify-center flex-col container min-h-[800px] md:max-w-[768px] mx-auto px-4 py-4'>
      <h2 className='sm:text-2xl text-xl sm:mt-8 mt-2 font-bold text-gray-900 dark:text-gray-50'>
        🧠 How to Play the 'GeoMemory' Memory Card Game?
      </h2>
      <p className='text-lg mt-10'>
        Memory Card is a game of memory and focus. You'll be shown{' '}
        <strong>6 cards</strong> with flags of different countries. Your goal is
        to <strong>click each flag only once per round</strong>.
      </p>
      <ul className='list-disc pl-6 mt-4'>
        <li className='mt-1.5 text-base'>
          <strong>Each correct click</strong> increases your current{' '}
          <strong>score</strong>.
        </li>
        <li className='mt-1.5 text-base'>
          If you click the same flag again in the same round, the game resets
          and your current score is lost.
        </li>
      </ul>
      <h3 className='font-bold text-lg mt-13 text-gray-900 dark:text-gray-50'>
        🔁 What happens after 6 moves?
      </h3>
      <p className='text-lg mt-9'>
        After you successfully click all 6 different cards:
      </p>
      <ul className='list-disc pl-6 mt-4'>
        <li className='mt-1.5 text-base'>
          The game will automatically load{' '}
          <strong>a new set of 6 random cards.</strong>
        </li>
        <li className='mt-1.5 text-base'>
          Your <strong>current score is preserved</strong> and continues to
          increase.
        </li>
        <li className='mt-1.5 text-base'>
          This way, if you play carefully and remember well, you can play
          infinitely and chase a new <strong>best score</strong>.
        </li>
      </ul>
      <h3 className='font-bold text-lg mt-13 text-gray-900 dark:text-gray-50'>
        🏆 Best Score
      </h3>
      <p className='text-lg mt-9'>
        Your <strong>best score</strong> shows your highest achievement so far.
        Try to beat it in your next attempts!
      </p>
      <p className='text-lg mt-5'>
        To <strong>restart</strong> the game just{' '}
        <strong>reload the page</strong>.
      </p>
      <div className='mt-13 flex justify-center'>
        <button
          className='font-semibold text-md inline-block text-gray-800 dark:text-gray-50 cursor-pointer bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 rounded-2xl py-2 px-4 mb-8 transition-colors'
          onClick={backToHomeHandler}
          aria-label='Return to main screen'
        >
          Back to main screen
        </button>
      </div>
    </article>
  );
};

export default HowToPlayGeoMemory;
