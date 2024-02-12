import axios from "axios";
export const getSingleUser = async (id: string) => {
  if (id == "101") {
    return {
      id: 2,
      firstName: "Rashed",
      lastName: "Ali",
      domain: "codewithrashed.github.io",
      phone: "+8801738313337",
      email: "talk.rashed@gmail.com",
      gender: "male",
      image: "https://i.ibb.co/rwS0h7G/profile-pic-7.png",
      address: {
        address: "Mirpur 10, Purbo Monipur",
        city: "Mirpur",
        coordinates: { lat: 38.1343013, lng: -85.6498512 },
        postalCode: "40219",
        state: "Mirpur",
      },
      company: {
        address: {
          address: "8821 West Myrtle Avenue",
          city: "Glendale",
          coordinates: { lat: 33.5404296, lng: -112.2488391 },
          postalCode: "85305",
          state: "AZ",
        },
        department: "Services",
        name: "Programming Hero",
        title: "Web Developer",
      },
      age: 23,
      bloodGroup: "A-",
      height: 187,
      bank: {
        cardExpire: "10/23",
        cardNumber: "5355920631952404",
        cardType: "mastercard",
        currency: "Ruble",
        iban: "MD63 L6YC 8YH4 QVQB XHIK MTML",
      },
    };
  }
  const response = await axios.get(
    `https://dummyjson.com/users/${id}?select=firstName,lastName,domain,phone,email,gender,image,address,company,age,bloodGroup,height,bank`
  );

  return response.data;
};
