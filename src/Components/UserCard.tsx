import { IoLocation } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const UserCard = () => {
  const userData = {
    name: "Rashed",
    image: "https://robohash.org/Terry.png?set=set5",
    title: "Web Developer",
    email: "talk.rashed@gmail.com",
    companyName: "TechNext Ltd",
  };
  return (
    <div className="bg-white p-5 shadow-lg border border-gray-100 rounded gap-5">
      {/* AVATAR || IMAGE */}
      <div className="flex justify-center items-center">
        <img
          src={userData.image}
          alt={userData.name}
          className="w-32 h-32 rounded-full shadow-md"
        />
      </div>

      {/* USER DETAILS INFO */}
      <div className="text-center">
        <Link to={`/user/id`}>
        <h1 className="text-center text-3xl">{userData.name}</h1></Link>
        <h3 className="text-base text-gray-400">{userData.title}</h3>
       
      </div>

      {/* CARD Footer */}
      <div className="mt-5">
        {/* COMPANY AND OTHER INFO */}
        <ul> 
            <li className="flex gap-2 items-center"><CgOrganisation/> <h3>{userData.companyName}</h3></li>
            <li className="flex gap-2 items-center"><IoLocation/><p>629 Debbie Drive, Nashville</p></li>
            <li className="flex gap-2 items-center"><MdEmail/><p>atuny0@sohu.com</p></li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
