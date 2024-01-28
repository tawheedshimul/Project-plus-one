import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://rendertetsw.onrender.com/'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;