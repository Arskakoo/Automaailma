import React from 'react';
import Logo from './assets/img/logo.png'
import './App.css'
import autot from './assets/json/cars.json'
import './contact'



function App() {
  return (
    <>

      <header>
        <img src={Logo} class="logo react" alt="React logo" />

        <div class='navLinks'>
        <a href="">Yhteystiedot</a>
        <a href="">Autot</a>
        </div>
      </header>

      <main>


      <Cars />

      </main>

      <footer>
        <p>@Automaailma 2023</p>
      </footer>

    </>
  )
}


function Cars() {
  return (
   
      <div class="car-list">
        {autot.cars.map((car, index) => (
          <div class="car" key={index}>
            <img src={car.kuva}/>
            <h2>{car.nimi}</h2>
            <hr />
            <h6>Vuosimalli: {car.vuosimalli}</h6>
            {/* <h6>{car.merkki}</h6> */}
            {/* <h6>{car.korimalli}</h6> */}
            <h6>Hinta:  {car.hinta} €</h6>
            <h6>{car.vaihteisto}</h6>
            <h6>Mittarilukema: {car.mittarilukema} km </h6>
            {/* <h6>{car.lisätiedot}</h6> */}
          <br />
          <button class='showCarStats'>Tutustu</button>
          </div>
        ))}
      </div>
  );
}



export default App
