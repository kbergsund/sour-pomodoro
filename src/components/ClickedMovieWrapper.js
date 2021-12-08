import React from 'react'
import ClickedMovie from './ClickedMovie'
import { useParams } from 'react-router-dom'

const ClickedMovieWrapper = () => {
  const clickedId = useParams().id;
  console.log(clickedId)
  return (
    <ClickedMovie clickedId={`${clickedId}`} />
  )
}

export default ClickedMovieWrapper