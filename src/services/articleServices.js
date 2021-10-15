import { useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";


const articleService = ()=> {
    axiosWithAuth()
    .get('http://localhost:5000/api/articles')
    .then(resp => {
        // console.log(resp.data)
        return resp.data;
    })
    .catch(err => {
        console.log('get article error: ', err);
    })
}

export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.