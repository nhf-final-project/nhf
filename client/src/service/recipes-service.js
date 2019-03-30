import axios from "axios";


export default class RecipeService {

    constructor(){

        this.service = axios.create({
            baseURL: "https://api.edamam.com/search?"
        })
    }

    getAllRecipes = () => {
      
        return this.service.get(`q=all&app_id=9439b5dc&app_key=b92cf85dde0b2f6b8d861a3875c6afa5&from=0&to=1`)
        .then(res => {
            console.log(res)
            return res
        })
        .catch( err => {
            console.log(err)
        })

    }
 
}


// return this.service.get(`q=all&app_id=${process.env.RECIPES_APP_ID}&app_key=${process.env.RECIPES_APP_KEYS}&from=0&to=100`)
