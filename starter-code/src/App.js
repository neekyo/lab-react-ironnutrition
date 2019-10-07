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

  addFood = (name, calories, image) => {
    let newFood = {
      name: name,
      calories: calories,
      image: image,
    }
    let newList = this.state.foodList.slice()
    newList.unshift(newFood)
    this.setState({
      foodList: newList
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
    let todaysName = food.foodName
    this.state.todaysFood.push(food)
    this.setState({
        todaysFood: todaysName
    })
    console.log(this.state.todaysFood)
  }
  
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
            <p><b> Today's List: </b></p>
            <ul>
              <li>{this.state.todaysFood}</li>
            </ul>
          </div>
          <div className='column is-quarter'>
            <AddFood addFood={this.addFoodHandler}/>
          </div>
        </div>

        <div>
        <button onClick={this.showForm} className="button is-primary">Add new food</button>
        <div className = "form">
          {this.state.displayForm ? <div className="control"><input className="input" value={this.state.foodName} onChange={(e) =>this.newFoodHandler(e)}  type="text" name = "name" placeholder="Name" /></div> : <br />}
          {this.state.displayForm ? <div className="control"><input className="input" value={this.state.foodCalories} onChange={(e) =>this.newFoodHandler(e)}  type="text" name="calories" placeholder="Calories" /></div> : <br />}
          {this.state.displayForm ? <div className="control"><input className="input" value={this.state.foodImage} onChange={(e) =>this.newFoodHandler(e)}  type="text" name= "image" placeholder="Image url" /></div> : <br />}
          {this.state.displayForm ? <button onClick={()=>this.addFood(...this.state.newFood)} className="button is-primary">Upload food data</button> : <br/>}
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;