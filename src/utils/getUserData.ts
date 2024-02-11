import axios from "axios";

export const getUserData = async ({ skip = 0 }: { skip?: number } = {}) => {
  console.log(skip)
  try {
    const response = await axios.get(`https://dummyjson.com/users?limit=6&skip=${skip}&select=firstName,lastName,email,image,address,company`);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return []; // Return empty array in case of error
  }
};
