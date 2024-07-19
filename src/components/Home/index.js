import {Component} from 'react'
import {ThreeDots} from 'react-loader-spinner'
import {IoSearch} from 'react-icons/io5'

import MovieCard from '../MovieCard'
import {
  HomeContainer,
  MainTitle,
  FormContainer,
  InputContainer,
  Input,
  Button,
  ErrorMsg,
  ListContainer,
  FailureImg,
} from '../StyledComponents'

const statusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  loading: 'LOADING',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    userInput: '',
    moviesList: [],
    isEmpty: false,
    status: statusConstants.initial,
  }

  getMoviesList = async () => {
    this.setState({status: statusConstants.loading})
    const {userInput} = this.state
    const url = `https://openlibrary.org/search.json?q=${userInput}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      const fetchedData = data.docs.map(each => ({
        id: each.key,
        authorName: each.author_name,
        ratings: each.ratings_average,
        publishedAt: each.first_publish_year,
        title: each.title,
      }))
      this.setState({moviesList: fetchedData, status: statusConstants.success})
    } else {
      this.setState({
        status: statusConstants.failure,
        isEmpty: false,
      })
    }
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value, isEmpty: false})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput.length === 0) {
      this.setState({isEmpty: true})
    } else {
      this.getMoviesList()
      this.setState({userInput: ''})
    }
  }
  onRetry = () => {
    this.getMoviesList()
  }

  loadingView = () => (
    <div>
      <ThreeDots color="#551e53" height={50} width={50} />
    </div>
  )

  successView = () => {
    const {moviesList} = this.state
    console.log(moviesList)
    return (
      <ListContainer>
        {moviesList.map(movie => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </ListContainer>
    )
  }

  failureView = () => {
    return (
      <>
        <FailureImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure"
        />
        <p>Sorry, We are unable to fetch your data.</p>
        <Button bgcolor={'#0000ff'} type="button" onClick={this.onRetry}>
          Retry
        </Button>
      </>
    )
  }

  getMoviesViews = () => {
    const {status} = this.state
    switch (status) {
      case statusConstants.loading:
        return this.loadingView()
      case statusConstants.success:
        return this.successView()
      case statusConstants.failure:
        return this.failureView()
      case statusConstants.initial:
        return null
      default:
        return null
    }
  }
  render() {
    const {userInput, isEmpty} = this.state
    return (
      <HomeContainer>
        <MainTitle>GET THE MOVIES YOU WANT BY SEARCHING HERE!</MainTitle>
        <FormContainer onSubmit={this.onSubmitForm}>
          <InputContainer>
            <Input
              type="text"
              placeholder="Enter the Movie Name"
              id="movie"
              value={userInput}
              onChange={this.onChangeInput}
            />
            <IoSearch />
          </InputContainer>
          {isEmpty && <ErrorMsg>*Movie name cannot be empty</ErrorMsg>}
          <Button type="submit" bgcolor={'#551e53'}>
            Get Movie
          </Button>
        </FormContainer>
        {this.getMoviesViews()}
      </HomeContainer>
    )
  }
}

export default Home
