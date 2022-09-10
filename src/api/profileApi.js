import axios from "./axiosConfig";
import { formatError } from "../utils/formatErrors";
import { getCookie } from "../utils/cookie";

export const getUserProfile = (email) => {
  return new Promise((resolve, reject) => {
    const token = getCookie('accessToken');
    axios
      .get(`/profile/getUserProfile?email=${email}`,{headers: { 'Authorization': `Bearer ${token}`} } )
      .then((response) => {
        resolve(response.data.result);
      })
      .catch((err) => {
        reject(formatError(err));
      });
  });
};

export const saveUserProfile = (requestBody) => {
    return new Promise((resolve, reject) => {
        const token = getCookie('accessToken');
        axios
          .post(`/profile/editProfile`, requestBody,{headers: { 'Authorization': `Bearer ${token}`} } )
          .then(() => {
            resolve();
          })
          .catch((err) => {
            reject(formatError(err));
          });
      });
}