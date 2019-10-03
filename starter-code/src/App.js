import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'
import Foodbox from './components/FoodBox.js'
import AddFood from './components/SingleFood.js'
class App extends Component {
  state = {
    allFoods : foods,
    filteredFoods : foods,
    todaysFood : []
  }
  addFoodHandler = (newFood) => {
    let foodCopy = [ ...this.state.allFoods ];
    foodCopy.push(newFood);
    this.setState({
      allFoods : foodCopy
    })
  }
  searchFoods = (e) => {
    let search = e.target.value
    
    let filteredFoods = this.state.allFoods.filter(entry => {
      return entry.name.toLowerCase().includes(search.toLowerCase())
    });
    this.setState({
      filteredFoods
    });    
  };
  
  addTodayHandler = (food) => {
    console.log(food.foodName, food, this)
    
    let todaysName = food.foodName
    this.state.todaysFood.push(food)
    this.setState({
        todaysFood: todaysName
    })
    console.log(this.state.todaysFood)
  }
  //
  render() {
    const getAllFoods = this.state.filteredFoods.map((eachFood,i) =>{
        return <Foodbox key={i} addToToday={this.addTodayHandler} foodName={eachFood.name} calories={eachFood.calories} image={eachFood.image}/>
      })
    return (
      <div className="App">
        <form >
          <input
            onChange={this.searchFoods}
            placeholder="Search"
            id="search"
            type="text"
          />
        </form>
        <div className='columns'>
          <div className='column is-half'>
            {getAllFoods}
          </div>
          <div className='column is-quarter'>
            <p> Today's List </p>
            <ul>
              <li>{this.state.todaysFood}</li>
            </ul>
          </div>
          <div className='column is-quarter'>
            <AddFood addFood={this.addFoodHandler}/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;