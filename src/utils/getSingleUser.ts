import axios from "axios";
export const getSingleUser = async (id:string) => {
  const response = await axios.get(`https://dummyjson.com/users/${id}?select=firstName,lastName,email,image,address,company`);

  return response.data
};