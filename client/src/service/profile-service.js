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
        return this.service.post(`profile/edit`, {edit, id})
            .then(res => {
                console.log(res);
                return res.data;
            })

    }
 
}