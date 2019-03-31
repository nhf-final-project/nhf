import axios from "axios";

export default class RecipeService {

    constructor(){

        this.service = axios.create({
            baseURL: "http://localhost:5000/api/",
            withCredentials: true
        })
    }

    getAllRecipes = () => {
        return this.service.get("recipes")
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    }

    getOneRecipe = id => {
        return this.service.get(`recipes/${id}`)
            .then(res => {
                console.log(res);
                return res.data;
            })

    }

 
}

