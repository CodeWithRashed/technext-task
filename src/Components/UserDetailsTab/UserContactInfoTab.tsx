import { FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail} from "react-icons/md";
import { UserDetails } from "../../Interfaces/Interfaces";
export const UserContactInfoTab = ({ data }: { data: UserDetails }) => {
    return (
      <div>
        <div>
          {/* COMPANY AND OTHER INFO */}
          <ul className="text-lg flex flex-col flex-wrap gap-2">
            <li className="flex gap-2 items-center bg-gray-100 p-2 ">
              <FaPhoneAlt /> <h3>{data.phone}</h3>
            </li>
            <li className="flex gap-2 items-center bg-gray-100 p-2">
              <FaGlobe />
              <p>{data.domain}</p>
            </li>
            <li className="flex gap-2 items-center bg-gray-100 p-2">
              <MdEmail />
              <p>{data.email}</p>
            </li>
            <li className="flex gap-2 items-center bg-gray-100 p-2">
            <IoLocation />
            <p>{data.address.address}</p>
          </li>
          </ul>
        </div>
      </div>
    );
  };
  