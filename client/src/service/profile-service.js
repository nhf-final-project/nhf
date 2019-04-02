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
                console.log(res);
                return res.data;
            })

    }
 
}