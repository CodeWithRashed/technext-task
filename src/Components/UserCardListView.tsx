import { IoLocation } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { UserCardProps } from "../Interfaces/Interfaces";

const UserCardListView = ({ user }: UserCardProps) => {
  return (
    <div className="bg-white p-5 shadow-lg border border-gray-100 rounded gap-5 overflow-hidden">
      {/* CARD LEFT */}
      <div className="lg:grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 image-title-container text-center">
          {/* AVATAR || IMAGE */}
          <div className="flex justify-center items-center">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-32 h-32 rounded-full shadow-md"
            />
          </div>

          {/* USER DETAILS INFO */}
          <div className="text-center">
            <Link to={`/user/${user.id}`}>
              <h1 className="text-center text-3xl">{`${user.firstName} ${user.lastName}`}</h1>
            </Link>
            <h3 className="text-base text-gray-400">{user.company.title}</h3>
          </div>
        </div>
        {/* CARD Footer */}
        <div className="lg:border-l-2 col-span-3 lg:border-gray-900 text-lg lg:text-2xl lg:pl-3 flex flex-col justify-between my-3 lg:my-0">
          {/* COMPANY AND OTHER INFO */}
          <ul>
            <li className="flex gap-2 items-center">
              <CgOrganisation /> <h3>{user.company.name}</h3>
            </li>
            <li className="flex gap-2 items-center">
              <IoLocation />
              <p className="truncate">{`${user.address.address}, ${user.address.city}`}</p>
            </li>
            <li className="flex gap-2 items-center">
              <MdEmail />
              <p>{user.email}</p>
            </li>
          </ul>
          <div className="mt-2 lg:mt-0 flex justify-center items-center lg:justify-start">
            <Link
              to={`/user/${user.id}`}
              className="w-44 bg-gray-900 text-white px-3 py-2 flex justify-center items-center rounded text-lg"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCardListView;
