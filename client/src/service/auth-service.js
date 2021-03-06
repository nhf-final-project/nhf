import axios from "axios";

export default class authService {

    constructor() {

        this.service = axios.create({
            baseURL: process.env.REACT_APP_URL,
            withCredentials: true
        })
    }


    signup = (username, email, password, gender, height, weight, age, waist, hip, neck,
        bodyFat, bodyMusscle, tmb, trainingDays, indexWH, activityLevel, goal, weightGoal, calendar) => {
        return this.service.post('/signup', { username, email, password, gender, height, weight, age, waist, hip, neck,
            bodyFat, bodyMusscle, tmb, trainingDays, indexWH, activityLevel, goal, weightGoal, calendar })
            .then(response => response.data)
    }

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }

    login = (username, password) => {
        return this.service.post('/login', { username, password })
            .then(response => response.data)
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }

    handleUpload = theFile => {

        console.log('file in service: ', theFile)

        return this.service.post('/upload', theFile)
            .then(res => res.data)
            .catch(err => console.log(err));
    }


}