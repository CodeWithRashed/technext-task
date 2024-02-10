import { FaInfoCircle } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { TbListDetails } from "react-icons/tb";
import { IoLocation } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { MdEmail, MdPayment } from "react-icons/md";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { UserDetails } from "../Interfaces/Interfaces";
const UserDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("details");
  const data = useLoaderData() as UserDetails
  
  if(!data){
    return <div className="w-screen h-screen flex justify-center items-center">Loading...</div>
  }


  return (
    <div>
      <div className="bg-white shadow-lg border border-gray-100 rounded gap-5 overflow-hidden">
        {/* BANNER */}
        <div className="banner w-full h-[20vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5"
            alt="banner-bg"
          />
        </div>
        {/* AVATAR || IMAGE */}
        <div className="flex justify-center items-center -mt-16 bg-white">
          <img
            src={data.image}
            alt={data.firstName}
            className="w-32 h-32 rounded-full shadow-md bg-white p-2"
          />
        </div>

        {/* USER DETAILS INFO */}
        <div className="text-center">
          <h1 className="text-center text-3xl">{`${data.firstName} ${data.lastName}`}</h1>
          <h3 className="text-base text-gray-400">{data.company.title}</h3>
        </div>

        {/* CARD Footer */}
        <div className="mt-5 p-5">
          {/* TABS */}
          <div className="tabs text-gray-500 p-1 grid grid-cols-4 gap-2 justify-between items-center border border-gray-100 rounded bg-gray-200">
            <button
              className={`${
                activeTab == "details"
                  ? "bg-white text-black rounded flex justify-center items-center p-2 gap-2"
                  : "bg-transparent rounded flex justify-center items-center p-2 gap-2"
              }`}
              onClick={() => {
                setActiveTab("details");
              }}
            >
              <TbListDetails />
              <span className="hidden lg:inline-block">Details</span>
            </button>
            <button
              className={`${
                activeTab == "contact"
                  ? "bg-white text-black rounded flex justify-center items-center p-2 gap-2"
                  : "bg-transparent rounded flex justify-center items-center p-2 gap-2"
              }`}
              onClick={() => {
                setActiveTab("contact");
              }}
            >
              <GrContactInfo />
              <span className="hidden lg:inline-block">Contact</span>
            </button>
            <button
              className={`${
                activeTab == "personal_profile"
                  ? "bg-white text-black rounded flex justify-center items-center p-2 gap-2"
                  : "bg-transparent rounded flex justify-center items-center p-2 gap-2"
              }`}
              onClick={() => {
                setActiveTab("personal_profile");
              }}
            >
              <FaInfoCircle />
              <span className="hidden lg:inline-block">Personal Information</span>
            </button>
            <button
              className={`${
                activeTab == "payment_profile"
                  ? "bg-white text-black rounded flex justify-center items-center p-2 gap-2"
                  : "bg-transparent rounded flex justify-center items-center p-2 gap-2"
              }`}
              onClick={() => {
                setActiveTab("payment_profile");
              }}
            >
              <MdPayment />
              <span className="hidden lg:inline-block">Payment Profile</span>
            </button>
          </div>

          {/* TABS INFO */}
          <div className="mt-3">
            {activeTab === "details" && <UserDetailsTab />}
            {activeTab === "contact" && <UserContactInfoTab />}
            {activeTab === "personal_profile" && <UserPersonalInfoTab />}
            {activeTab === "payment_profile" && <UserPaymentProfileTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

//TABS COMPONENTS
const UserDetailsTab = () => {
  return (
    <div>
      {" "}
      {/* COMPANY AND OTHER INFO */}
      <ul>
        <li className="flex gap-2 items-center">
          <CgOrganisation /> <h3>compnay</h3>
        </li>
        <li className="flex gap-2 items-center">
          <IoLocation />
          <p>629 Debbie Drive, Nashville</p>
        </li>
        <li className="flex gap-2 items-center">
          <MdEmail />
          <p>atuny0@sohu.com</p>
        </li>
      </ul>
    </div>
  );
};

const UserContactInfoTab = () => {
  return <div>contact info</div>;
};

const UserPersonalInfoTab = () => {
  return <div>personalInfoTab</div>;
};

const UserPaymentProfileTab = () => {
  return <div>UserPaymentProfileTab</div>;
};

export default UserDetailsPage;
