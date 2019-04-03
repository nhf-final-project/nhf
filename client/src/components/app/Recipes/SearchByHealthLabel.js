import React from 'react'
import { MDBFormInline, MDBInput } from 'mdbreact';
import './SearchByHealthLabel.css'

const SearchByHealthLabel = (props) => {
    return (      
      <div className="px-3">
        {/* <form> 
            <h3>Calories:</h3>             
            <label><input type="checkbox" name="filtered" id="500" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>0-500</label>  
            <label><input type="checkbox" name="filtered" id="1000" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>500-1000</label>
            <label><input type="checkbox" name="filtered" id="1500" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>1000-1500</label>  
            <label><input type="checkbox" name="filtered" id="2000" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>1500-2000</label>        
        </form> */}
        <MDBFormInline className="filter-labels">
          <MDBInput type="checkbox" label="Vegetarian"  id="Vegetarian" value={props.searchValue} onChange={e => {props.filterRecipe(e)}} />
          <MDBInput type="checkbox" label="Vegan"  id="Vegan" value={props.searchValue} onChange={e => {props.filterRecipe(e)}} />
          <MDBInput type="checkbox" label="Peanut Free"  id="Peanut-Free" value={props.searchValue} onChange={e => {props.filterRecipe(e)}} />
          <MDBInput type="checkbox" label="Sugar Conscious"  id="Sugar-Conscious" value={props.searchValue} onChange={e => {props.filterRecipe(e)}} />
          <MDBInput type="checkbox" label="Tree Nut Free"  id="Tree-Nut-Free" value={props.searchValue} onChange={e => {props.filterRecipe(e)}} />
          <MDBInput type="checkbox" label="Alcohol Free"  id="Alcohol-Free" value={props.searchValue} onChange={e => {props.filterRecipe(e)}} />        
        </MDBFormInline>
      </div>
    )
}

export default SearchByHealthLabel
