import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : '6f302069-c08a-44d1-8177-63c18fc33b5c'
    }
});

export const getUsers = (currentPage,pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then (response => {
        return response.data;
    });
}


export const getUsers2 = (currentPage,pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
       ).then (response => {
        return response.data;
    });
}