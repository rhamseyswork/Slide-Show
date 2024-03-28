//By: Rhamseys Garcia
//Date: 2021-04-07
//Purpose: Main App component that will render the Slide_Show component
//App component will be rendered by the main.jsx file
//App component will render the Slide_Show component
//Slide_Show component will render the rightArrow and leftArrow icons
//Slide_Show component will render the slides
//Slides will be imported from the Slide_Show_Index file
//Slide_Show_Index file will export the slides
//Slide_Show_Index file will export the rightArrow and leftArrow icons
//Slide_Show component will render the currentSlide
//Slide_Show component will render the arrow function
//Arrow function will be used to change the currentSlide
//Arrow function will be used to change the currentSlide to the next slide
//Arrow function will be used to change the currentSlide to the previous slide
//Arrow function will be used to loop the slides
//Slide_Show component will render the Slide_Show_Module
//Slide_Show_Module will render the Slide_Show_Movement
//Slide_Show_Module will render the Slide_Show_Image
//Slide_Show_Module will render the Slide_Show_Curr_Mod
//Slide_Show_Module will render the Slide_Show_Curr_Sl
//Slide_Show_Curr_Mod will render the rightArrow icon
//Slide_Show_Curr_Mod will render the leftArrow icon
//Slide_Show_Image will render the currentSlide
//Slide_Show_Curr_Sl will render the currentSlide feature


import React, { useEffect } from 'react'
import Slide_Show from './components/Slide_Show/Slide_Show'
import {rightArrow, leftArrow, currIcon, nonCurrIcon}  from './components/Slide_Show/Slide_Show_Index'


function App() {
  useEffect(() => {
      console.log('App component mounted');
  }, [])
  
  return (
    <>
      <h2>Slide-Show Module</h2>
      <Slide_Show rightArrowIcon={rightArrow} leftArrowIcon={leftArrow} currIcon={currIcon} non_currIcon={nonCurrIcon}/>
    </>
  )
}

export default App
