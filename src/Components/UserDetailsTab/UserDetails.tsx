import { FaMapMarked } from "react-icons/fa";

import { IoLocation } from "react-icons/io5";
import { CgOrganisation } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { UserDetails } from "../../Interfaces/Interfaces";


export const UserDetailsTab = ({ data }: { data: UserDetails }) => {
  console.log(data)
    return (
      <div>
        {/* COMPANY AND OTHER INFO */}
        <ul className="text-lg flex flex-col flex-wrap gap-2">
          <li className="flex gap-2 items-center bg-gray-100 p-2 ">
            <CgOrganisation /> <h3>{data.company.name}</h3>
          </li>
          <li className="flex gap-2 items-center bg-gray-100 p-2">
            <IoLocation />
            <p>{data.address.address}</p>
          </li>
          <li className="flex gap-2 items-center bg-gray-100 p-2">
            <MdEmail />
            <p>{data.email}</p>
          </li>
          <li className="flex gap-2 items-center justify-start bg-gray-100 p-2">
            <FaMapMarked />
            <a
              className="text-blue-500"
              href={`https://www.google.com/maps/@${data.address.coordinates.lat},${data.address.coordinates.lng}`}
            >
              View On Map
            </a>
          </li>
        </ul>
      </div>
    );
  };