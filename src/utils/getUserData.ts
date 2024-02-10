
import axios from "axios";

export const getUserData = async () => {
  const response = await axios.get(`https://dummyjson.com/users?limit=5&skip=10&select=firstName,lastName,email,image,address,company`);

  return response.data.users
};