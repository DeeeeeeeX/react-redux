import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '505d27c5-b806-468a-a714-53215666c843'
    }
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}


export const followAPI = {

    deleteFollow(id) {
        return instance.delete(`follow/${id} `)
            .then(response => {
                return response.data;
            });
    },

    getFollow(id) {
        return instance.post(`follow/${id} `)
            .then(response => {
                return response.data;
            });
    }
}

export const profileAPI = {

    getProfile () {
        return instance.get(`profile/2`)
            .then(response => {
                return response.data;
            });
    }
}

export const authAPI = {

    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
}