import React from 'react'


const SearchByIngredients = (props) => {
  // console.log(props.copia)

    return (      
    
        <form>  
           <input type="search" value={props.searchValue} onChange={(e) => props.searchIngredients(e)}></input> 
        </form>
 
    )
}

export default SearchByIngredients
