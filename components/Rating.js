const getRating = average => {
  let rating = (
    <React.Fragment>
      no comment{' '}
      <span role="img" aria-label="Face without mouth">
        😶
      </span>
    </React.Fragment>
  )

  switch (Math.floor(average)) {
    case 9:
      rating = (
        <React.Fragment>
          love it.{' '}
          <span role="img" aria-label="Face with heart-shaped eyes">
            😍
          </span>
        </React.Fragment>
      )
      break
    case 8:
      rating = (
        <React.Fragment>
          p good show.{' '}
          <span role="img" aria-label="Grinning face with smiling eyes">
            😁
          </span>
        </React.Fragment>
      )
      break
    case 7:
      rating = (
        <React.Fragment>
          fine, i guess.{' '}
          <span role="img" aria-label="Neutral face">
            😐
          </span>
        </React.Fragment>
      )
      break

    case 6:
      rating = (
        <React.Fragment>
          not ideal.{' '}
          <span role="img" aria-label="Grimacing face">
            😬
          </span>
        </React.Fragment>
      )
      break

    case 0:
      break

    default:
      rating = (
        <React.Fragment>
          please just turn it off.{' '}
          <span role="img" aria-label="Cat screaming in fear">
            🙀
          </span>
        </React.Fragment>
      )
  }
  return rating
}

const Rating = ({ average }) => <p>Rating: {getRating(average)}</p>

export default Rating
