# Movie Search Application
 - This project is a movie search application that allows users to input a movie name and receive a list of movies related to their input. Each movie is displayed with a random dog image fetched from an API.

# Table of Contents
  - Features
  - Components
  - APIs Used
  - Usage

# Features
  - Search for movies by name.
  - Display a list of movies with details such as title, author, publication year, and ratings.
  - Fetch and display a random dog image for each movie.
  - Loader view displayed during data fetching.
  - Error message displayed when API call fails.
  - Styled using styled-components.

# Components
**Home Component**

   - Handles the main functionality of searching for movies, displaying the search form, handling user input, and managing the different states (loading, success, failure) of the API call.

**MovieCard Component**
   - Receives movie details as props and fetches a random dog image to display alongside the movie details. The movie details include title, author, publication year, and ratings.

**Styled Components**
   - Styled components are used for styling different parts of the application including HomeContainer, MainTitle, FormContainer, InputContainer, Input, Button, ErrorMsg, ListContainer, FailureImg, DogImg, Title, Para, RatingContainer, and MovieContainer.

# APIs Used

**Open Library API**
    - URL: https://openlibrary.org/dev/docs/api/search
   - Used to fetch the list of movies based on the user input.
    
**Dog CEO API**
    - URL: https://dog.ceo/api/breeds/image/random
   - Used to fetch a random dog image for each movie card.

# Usage
   - Enter the movie name in the input field.
   - Press Enter Key or Click the "Get Movie" button.
   - The app will display a list of movies related to the input name along with random dog images.
   - If the API call fails, a failure message will be displayed with a retry button.