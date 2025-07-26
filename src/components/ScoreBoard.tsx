const ScoreBoard = () => {
  return (
    <div className=' bg-white dark:bg-silver inline-block py-3 px-6 rounded-sm shadow-sm dark:shadow-md '>
      <p className='text-md text-gray-600 dark:text-gray-300 font-regular flex gap-2'>
        <span>Score:</span>
        <span>0</span>
      </p>
    </div>
  );
};

export default ScoreBoard;
