import axios from "axios";

export default class ProfileService {

    constructor(){

        this.service = axios.create({
            baseURL: "http://localhost:5000/api/",
            withCredentials: true
        })
    }

    getSavedRecipes = () => {
        return this.service.post(`profile`)
            .then(res => {
                return res.data;
            })

    }

    updateProfile = (id, edit) => {
        return this.service.post(`profile/edit`, {id, edit})
            .then(res => {
                console.log(res);
                return res.data;
            })

    }


    addToCalendar = (userId, recipe, meals, days)=> {
        console.log(userId, recipe)
        return this.service.post("profile/addRecipe", {userId, recipe, meals, days} )
            .then(res => {
                console.log(res);
                return res.data;
            })

    }



 
}