const ProgressBar = ({ progressPercentage }) => {
  return (
    <div
      title={`Progress : ${Math.round(progressPercentage * 10) / 10}%`}
      className='my-auto mx-1 h-3 w-[100px] rounded bg-gray-300'
    >
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full bg-secondary-color  ${
          progressPercentage === 100 ? 'rounded' : 'rounded-l'
        }`}
      ></div>
    </div>
  )
}
export default ProgressBar
