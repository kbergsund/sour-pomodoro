import React from 'react'
import ClickedMovie from './ClickedMovie'
import { useParams } from 'react-router-dom'

const ClickedMovieWrapper = ({ handleError }) => {
  const clickedId = useParams().id;
  return (
    <ClickedMovie clickedId={`${clickedId}`} handleError={handleError}/>
  )
}

export default ClickedMovieWrapper