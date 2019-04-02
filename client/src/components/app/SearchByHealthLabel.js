import React from 'react'

const SearchByHealthLabel = (props) => {
    return (      
      <div className="mt-5 pt-5 px-3">
        {/* <form> 
            <h3>Calories:</h3>             
            <label><input type="checkbox" name="filtered" id="500" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>0-500</label>  
            <label><input type="checkbox" name="filtered" id="1000" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>500-1000</label>
            <label><input type="checkbox" name="filtered" id="1500" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>1000-1500</label>  
            <label><input type="checkbox" name="filtered" id="2000" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>1500-2000</label>        
        </form> */}
        <form>  
           <h3>Health label:</h3> 
           <div className="custom-control custom-checkbox custom-control-inline">           
                <label><input type="checkbox"  classname="custom-control-input" name="filtered" id="Vegetarian" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>Vegetarian</label>  
           </div> 
           <div className="custom-control custom-checkbox custom-control-inline">           
               <label><input type="checkbox" className="form-check-input" name="filtered" id="Vegan" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>Vegan</label>
           </div> 

           <div className="custom-control custom-checkbox custom-control-inline">           
               <label><input type="checkbox" classname="custom-control-input" name="filtered" id="Peanut-Free" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>Peanut Free</label> 
           </div> 

           <div className="custom-control custom-checkbox custom-control-inline">           
                <label><input type="checkbox" classname="custom-control-input" name="filtered" id="Sugar-Conscious" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>Sugar Conscious</label>   
           </div> 

           <div className="custom-control custom-checkbox custom-control-inline">           
                <label><input type="checkbox" classname="custom-control-input" name="filtered" id="Tree-Nut-Free" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>Tree-Nut-Free</label> 
           </div> 

           <div className="custom-control custom-checkbox custom-control-inline">           
               <label><input type="checkbox" classname="custom-control-input" name="filtered" id="Alcohol-Free" value={props.searchValue} onChange={(e) => {props.filterRecipe(e)}}/>Alcohol Free</label> 
           </div> 

        </form>
      </div>
    )
}

export default SearchByHealthLabel
