import axios from "axios";
export const getSingleUser = async (id:string) => {
  const response = await axios.get(`https://dummyjson.com/users/${id}?select=firstName,lastName,domain,phone,email,gender,image,address,company,age,bloodGroup,height,bank`);

  return response.data
};