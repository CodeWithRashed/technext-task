import { MdAutoGraph, MdBloodtype } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GiBodyHeight } from "react-icons/gi";
import { UserDetails } from "../../Interfaces/Interfaces";
export const UserPersonalInfoTab = ({ data }: { data: UserDetails }) => {
    return <div><ul className="text-lg flex flex-col flex-wrap gap-2">
    <li className="flex gap-2 items-center bg-gray-100 p-2 ">
      <MdAutoGraph /> <h3>{data.age} Years</h3>
    </li>
    <li className="flex gap-2 items-center bg-gray-100 p-2">
      <CiUser />
      <p className="uppercase">{data.gender}</p>
    </li>
    <li className="flex gap-2 items-center bg-gray-100 p-2">
      <MdBloodtype />
      <p>{data.bloodGroup}</p>
    </li>
    <li className="flex gap-2 items-center bg-gray-100 p-2">
    <GiBodyHeight />
    <p>{data.height} CM</p>
  </li>
  </ul></div>;
  };