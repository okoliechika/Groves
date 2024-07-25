import React from 'react'
import "../Styles/Home.css"
import Navbar from '../Components/Navbar'
import BlueBtn from '../Components/BlueBtn'
import PlantContainer from '../Components/PlantContainer'
import { section_one, section_three, section_two } from '../data'

const Home = () => {

  
  return (
    <>
      <section className="landing-page">
        <div className="contents">
          <Navbar />

          <div className="textarea">
            <h1>Transform Your Small Space <br /> into a Green Oasis</h1>
            <div>
              <p>Discover the joy of gerdening with a green goeves. Whether you have a balcony, terrace, or cozy corner corner at home, our resources and guides will hekp you cultivate a thriving garden with confident and ease, join community enthusiasts and start your green journey today</p>
            </div>
            <BlueBtn label="Get Started" />
          </div>
        </div>
      </section>
      <PlantContainer data={section_one}/>
      <PlantContainer data={section_two}/>
      <PlantContainer data={section_three}/>
    </>
  )
}

export default Home