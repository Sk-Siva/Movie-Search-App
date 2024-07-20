import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height:100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  border: 4px solid #551e53;
  border-radius: 12px;
  margin:20px;
  font-family:Roboto;
  text-align:center;
`
export const MainTitle = styled.h1`
font-size:30px;

@media (max-width:767px){
  font-size:20px;
}
`

export const FormContainer = styled.form`
display:flex;
flex-direction:column;
align-items:center;
`
export const InputContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:300px;
border:1px solid;
border-radius:10px;
padding:5px;
@media (max-width:767px){
  width:250px;
}
`
export const Input = styled.input`
background:none;
border:none;
outline:none;
padding:10px;
background-color:transparent;
width:250px;
@media (max-width:767px){
  width:200px;
}
`
export const Button = styled.button`
background-color:${props => props.bgcolor};
color:#ffffff;
border-width:0px;
border-radius:10px;
padding:10px;
margin:10px;
`
export const ErrorMsg = styled.p`
color:#ff0000;
font-size:15px;
`
export const ListContainer = styled.ul`
list-style-type:none;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
`
export const FailureImg = styled.img`
height:200px;
width:200px;
`
export const DogImg = styled.img`
height:200px;
width:300px;
border-radius:5px;
`
export const Title = styled.h1`
font-size:15px;
`
export const Para = styled.p`
font-size:10px;
`
export const RatingContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
export const MovieContainer = styled.div`
margin:10px;
width:300px;
text-align:left;
`
