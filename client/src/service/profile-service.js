import axios from "axios";
const _ = require('lodash');

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
                // console.log(res);
                return res.data;
            })

    }
    

    addToCalendar = (user, recipe, calendar)=> {
        console.log(user, recipe, calendar)
        return this.service.post("profile/addRecipe", {user, recipe, calendar} )
            .then(res => {
                console.log(res.data)
                let result = _.groupBy(res.data.user.calendars, "day")
                return result;
            })

    }

    getCalendarPrograms = ()=> {
 
        return this.service.post("profile/getCalendarPrograms")
            .then(res => {
                // console.log(res.data)
                let result = _.groupBy(res.data.user.calendars, "day")
                return result;
            })

    }

 
}