import { NewCreatedUser } from "../Interfaces/Interfaces";

const DisplayAddedUser = ({ createdUser }: { createdUser?: NewCreatedUser }) => {
    console.log(createdUser)
    if (!createdUser || Object.keys(createdUser).length === 0) {
        return <div>No user data available</div>;
      }
    
  return (
    <div>
      <div className="banner w-full h-[20vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5"
            alt="banner-bg"
          />
        </div>
        {/* AVATAR || IMAGE */}
        <div className="flex justify-center items-center -mt-16 bg-white">
          <img
            src={createdUser.image}
            alt={createdUser.firstName}
            className="w-32 h-32 rounded-full shadow-md bg-white p-2"
          />
        </div>

        {/* USER DETAILS INFO */}
        <div className="text-center">
          <h1 className="text-center text-3xl">{`${createdUser.firstName} ${createdUser.lastName}`}</h1>
          <h3 className="text-base text-gray-400">{createdUser.company}</h3>
        </div>

    </div>
  )
}

export default DisplayAddedUser
