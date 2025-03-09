import axios from 'axios';



// const axiosInstance = axios.create({
//     baseURL: `http://localhost:3000`,
//     withCredentials: true
// })

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    withCredentials: true
});

const useAxiosSecure = () => {
    return axiosInstance;
};

export default useAxiosSecure;