import axios from "axios";
import { useState } from "react";
import { ModalProps } from "../Interfaces/Interfaces";
import { UploadImage } from "../utils/UploadImage";
import { InputField } from "./InputField";
import { FileInputField } from "./FileInputField";

const Modal = ({ isShowModal, onClose }: ModalProps) => {
  const [isUserLoading, setIsUserLoading] = useState(false)
  const [createdUser, setCreatedUser] = useState({})

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUserLoading(true);
    const form = event.target as HTMLFormElement;
    console.log(form)
    try {
      const imageUploadResponse = await UploadImage(form.image.files[0]);
      const userImage = imageUploadResponse.data.data.url;
      const user = {
        firstName: form.firstName.value || "Rashed",
        lastName: form.lastName.value || "Ali",
        email: form.email.value || "talk.rashed@gmail.com",
        image: userImage,
        company: form.company.value || "TechNext",
        address: {
          address: form.street.value || "Mirpur 10, Purbo Monipur, House 1176",
          city: form.city.value || "Mirpur",
        },
      };
      const response = await axios.post("https://dummyjson.com/users/add", user);
      console.log("res", response);
      if(response.status === 200){
        setCreatedUser(response.data)
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsUserLoading(false); // Set loading state to false after async operations complete
    }
  };
  
  
  return (
    <div className={`backdrop-blur absolute top-0 left-0 h-full w-full flex justify-center items-center p-10 transition-all ease-in-out ${isShowModal ? '' : 'hidden'}`}>
      <div className="bg-white rounded lg:w-[50%] shadow-lg">
        <div className="modal-content">
          <div className="bg-gray-900 text-white p-3 rounded-t">
            <h3 className="font-bold text-center">Add New User</h3>
          </div>
          <div className="input-form w-full p-4 ">
            <form onSubmit={handleFormSubmit}>
              <div className={`${isUserLoading ? "flex" : "hidden"}`}>Adding...</div>
              <div className="created-user">
                
              </div>
              <div className={`${!isUserLoading || !createdUser ? "all-input-groups block" : "hidden"}`}>
                <div className="input-group lg:grid lg:grid-cols-2 gap-2 items-center w-full">
                  <InputField label="First Name" name="firstName" type="text" placeholder="Enter your first name.." required />
                  <InputField label="Last Name" name="lastName" type="text" placeholder="Enter your last name.." required />
                </div>
                <InputField label="Email" name="email" type="email" placeholder="Enter your email.." required />
                <div className="input-group lg:grid lg:grid-cols-2 gap-2 w-full mt-2">
                  <FileInputField label="Profile Picture" name="image" required />          
                  <InputField label="Company" name="company" type="text" placeholder="Enter your company.." required />
                </div>
                <div>
                  <div className="input-group-address lg:grid lg:grid-cols-2 gap-2 w-full">
                    <InputField label="Street" name="street" type="text" placeholder="Enter your street.." required />
                    <InputField label="City" name="city" type="text" placeholder="Enter your city.." required />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 justify-center items-center mt-3">
                <button className="w-full bg-gray-900 text-white px-5 py-2 border-2 rounded border-gray-900" type="submit">Add User</button>
                <button className="w-full bg-transparent px-5 py-2 border-2 rounded border-gray-900" type="button" onClick={onClose}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
