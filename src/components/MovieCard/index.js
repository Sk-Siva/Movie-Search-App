import {useState, useEffect} from 'react'
import {FaStar} from 'react-icons/fa'

import {
  MovieContainer,
  DogImg,
  Title,
  Para,
  RatingContainer,
} from '../StyledComponents'

const MovieCard = props => {
  const [imageUrl, setImageUrl] = useState('')
  const {movieDetails} = props
  const {title, authorName, publishedAt, ratings} = movieDetails
  const showRating = ratings !== undefined ? true : false

  useEffect(() => {
    const getImageUrl = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json()
      setImageUrl(data.message)
    }
    getImageUrl()
  }, [])

  return (
    <li>
      <MovieContainer>
        <DogImg src={imageUrl} alt="dog" />
        <Title>{title}</Title>
        <Para>Directed By:{authorName}</Para>
        <RatingContainer>
          <Para>Released In: {publishedAt}</Para>
          <div>
            {showRating && (
              <RatingContainer>
                <FaStar color="ffdf00" />
                <Para>{ratings}</Para>
              </RatingContainer>
            )}
          </div>
        </RatingContainer>
      </MovieContainer>
    </li>
  )
}

export default MovieCard