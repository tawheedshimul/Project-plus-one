import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://rendertetsw.onrender.com/'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;