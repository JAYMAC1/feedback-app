function FeedbackItem({ item }) {
  const handleClick = (e) => {
    e.preventDefault()
    setRating((prev) => {
      return prev + 1
    })
  }
  return (
    <div className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </div>
  )
}

export default FeedbackItem
