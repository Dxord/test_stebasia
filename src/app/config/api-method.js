import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from '@react-native-firebase/messaging';
import axios from "axios";
import moment from "moment";
import { btoa } from 'react-native-quick-base64';
import { BASE_URL_API } from "./api";
export const GET = async (endpoint, token) => {

    try {
        const date = moment().format("YYYY-MM-DD")
        const user = 'IMF';
        const pass = btoa(date + "|" + btoa(user));
        // const pass = "MjAyMi0xMC0wNXxTVTFH"
        const REG_ID = "dev";
        const basicAuth = btoa(user + `:` + pass)
        //   const  REG_ID = await messaging().getToken();
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Basic " + basicAuth,
                regid: REG_ID,
            },
        };
        // console.log("regId", REG_ID)
        return axios.get(BASE_URL_API + endpoint, requestOptions)

    } catch (error) {
        console.log('error', error)
    }

}

export const POST = async (endpoint, body, token) => {

    try {
        const date = moment().format("YYYY-MM-DD")
        const user = 'IMF';
        const pass = btoa(date + "|" + btoa(user));
        // const pass = "MjAyMi0xMC0wNXxTVTFH"
        // const REG_ID = "dev";
        const basicAuth = btoa(user + `:` + pass)
        const REG_ID = await messaging().getToken();
        console.log("basicAuth", basicAuth)
        // console.log("REGID", REG_ID)
        // console.log("pass", pass)
        const requestOptions = {
            headers: {
                'Content-Type': 'application',
                Authorization: "Basic " + basicAuth,
                regid: REG_ID,
            },
        };
        return axios.post(BASE_URL_API + endpoint, body, requestOptions)
    } catch (error) {
        console.log('error POST', error)
    }

}
export const GETBearer = async (endpoint, token) => {

    try {
        const REG_ID = await messaging().getToken();
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token,
                regid: REG_ID,
            },
        };
        // console.log('REG_ID', REG_ID)
        return axios.get(BASE_URL_API + endpoint, requestOptions)
    } catch (error) {
        console.log('error POST Bearer', error)
    }

}
export const POSTBearer = async (endpoint, body, token) => {

    try {
        const REG_ID = await messaging().getToken();
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token,
                regid: REG_ID,
            },
        };
        return axios.post(BASE_URL_API + endpoint, body, requestOptions)
    } catch (error) {
        console.log('error POST Bearer', error)
    }
}

export const POST_AVATAR = async (photo) => {

    try {
        const token = await AsyncStorage.getItem('token');
        let bodyFormData = new FormData();
        bodyFormData.append("photo", photo);
        console.log(JSON.stringify(bodyFormData))
        const REG_ID = await messaging().getToken();

        return axios({
            method: "post",
            url: BASE_URL_API + '/user/edit-photo',
            data: bodyFormData,
            headers: {
                Authorization: "Bearer " + token,
                regid: REG_ID,
                "Content-Type": "multipart/form-data"
            }
        })
    } catch (error) {
        console.log('error POST', error)
    }
}
export const REGISTER = async (endpoint, body, token) => {

    try {
        const date = moment().format("YYYY-MM-DD")
        const user = 'IMF';
        const pass = btoa(date + "|" + btoa(user));
        // const pass = "MjAyMi0xMC0wNXxTVTFH"
        // const REG_ID = "dev";
        const basicAuth = btoa(user + `:` + pass)
        const REG_ID = await messaging().getToken();
        // console.log("basicAuth", basicAuth)
        // console.log("REGID", REG_ID)
        // console.log("pass", pass)
        const requestOptions = {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: "Basic " + basicAuth,
                regid: REG_ID,
            },
        };
        return axios.post(BASE_URL_API + endpoint, body, requestOptions)
    } catch (error) {
        console.log('error POST', error)
    }

}
export const POST_FILE = async (file, type) => {

    try {
        const token = await AsyncStorage.getItem('token');
        let bodyFormData = new FormData();
        bodyFormData.append("file", file);
        console.log(JSON.stringify(bodyFormData))
        const REG_ID = await messaging().getToken();

        return axios({
            method: "post",
            url: BASE_URL_API + '/upload-attachment',
            data: bodyFormData,
            headers: {
                Authorization: "Bearer " + token,
                regid: REG_ID,
                "Content-Type": "multipart/form-data"
            }
        })
    } catch (error) {
        console.log('error POST', error)
    }

}

export const POST_AVATAR_REGISTER = async (file, type) => {

    try {
        const date = moment().format("YYYY-MM-DD")
        const user = 'IMF';
        const pass = btoa(date + "|" + btoa(user));
        // const pass = "MjAyMi0xMC0wNXxTVTFH"
        // const REG_ID = "dev";
        const basicAuth = btoa(user + `:` + pass)
        console.log("basicAuth", basicAuth)
        // console.log("REGID", REG_ID)
        console.log("pass", pass)

        let bodyFormData = new FormData();
        bodyFormData.append("file", file);
        console.log(JSON.stringify(bodyFormData))
        const REG_ID = await messaging().getToken();

        return axios({
            method: "post",
            url: BASE_URL_API + '/upload-photo',
            data: bodyFormData,
            headers: {
                Authorization: "Basic " + basicAuth,
                regid: REG_ID,
                "Content-Type": "multipart/form-data"
            }
        })
    } catch (error) {
        console.log('error POST', error)
    }

}