import { useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";


const articleService = ()=> {
    const newArticles = axiosWithAuth()
    .get('http://localhost:5000/api/articles')
    .then(resp => {
        // console.log('resp.data', resp.data)
        return (resp.data);
    })
    .catch(err => {
        console.log('get article error: ', err);
    });
    // console.log('newArticles', newArticles);
    return newArticles
}
// console.log('articleService', articleService());
export default articleService;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.