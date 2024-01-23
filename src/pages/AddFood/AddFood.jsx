import React from 'react'
import Section4 from "./Section4";
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';
import AuthforAdmin from '../../components/Layouts/AuthforAdmin'

export const AddFood = () => {
  return (
    <>
    <Header/>
    <AuthforAdmin/>
         <Section4/>
         <Footer/>
         </>
  )
}
export default AddFood
