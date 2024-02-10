interface ModalProps {
  isShowModal: boolean;
  onClose: () => void;
}

const Modal = ({ isShowModal, onClose }: ModalProps) => {
  if (!isShowModal) return null;
  const handleFromSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement

    //FORM DATA 
    const firstName = form.first_name.value
    const lastName = form.last_name.value
    const email = form.email.value
    const image = form.image.value
    const company = form.company.value
    const address = form.street.value
    const city = form.city.value
    // USER OBJECT
    const user = {
        firstName,
        lastName,
        email,
        image,
        company,
        address: {
            address: address,
            city: city
        }
    }
    console.log(user)
  }

  return (
    <div className="backdrop-blur absolute top-5 left-0 h-full w-full flex justify-center items-center p-10 transition-all ease-in-out">
      <div className="bg-white rounded lg:w-[50%] shadow-lg">
        <div className="bg-gray-900 text-white p-3 rounded-t">
          <h3 className="font-bold text-center">Add New User</h3>
        </div>
        {/* INPUT FORM */}
        <div className="input-form w-full p-4 ">
          <form onSubmit={handleFromSubmit}>
            <div className="input-group lg:grid lg:grid-cols-2 gap-2 items-center w-full">
              <div>
                <label htmlFor="first_name" className="block mb-2">
                  First Name:
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="w-full bg-gray-100 py-2 px-3 rounded outline-none focus:outline-1 focus:outline-black"
                  placeholder="Enter your first name.."
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-2">
                  Last Name:
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="w-full bg-gray-100 py-2 px-3 rounded outline-none focus:outline-1 focus:outline-black"
                  placeholder="Enter your last name.."
                />
              </div>
            </div>
            <div className="input-group w-full">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                className="w-full bg-gray-100 py-2 px-3 rounded outline-none focus:outline-1 focus:outline-black"
                placeholder="Enter your email.."
              />
            </div>
            <div className="input-group lg:grid lg:grid-cols-3 gap-2 w-full mt-2">
              
              <div className="input-group col-span-2">
                <label className="block mb-2" htmlFor="image">
                  Profile Picture:
                </label>
                <input
                name="image"
                  className="border p-1.5 rounded file:border-0 
                          !file:bg-gray-100 file:rounded"
                  type="file"
                />
              </div>
              <div className="lg:-ml-6">
                <label htmlFor="company" className="block mb-2">
                  Company:
                </label>
                <input
                  name="company"
                  type="text"
                  className="bg-gray-100 py-2 px-3 rounded outline-none focus:outline-1 focus:outline-black"
                  placeholder="Enter your email.."
                />
              </div>
            </div>

            {/* ADDRESS INPUT GROUP */}
            <div>
             
              {/* STREET ADDRESS */}
              <div className="input-group-address lg:grid lg:grid-cols-2 gap-2 w-full">
                <div className="col-span-2">
                  <label htmlFor="street" className="block mb-2">
                    Street:
                  </label>
                  <input
                    name="street"
                    type="text"
                    className="w-full bg-gray-100 py-2 px-3 rounded outline-none focus:outline-1 focus:outline-black"
                    placeholder="Enter your email.."
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block mb-2">
                    City:
                  </label>
                  <input
                    name="city"
                    type="text"
                    className="w-full bg-gray-100 py-2 px-3 rounded outline-none focus:outline-1 focus:outline-black"
                    placeholder="Enter your email.."
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block mb-2">
                    State:
                  </label>
                  <input
                    type="state"
                    className="w-full bg-gray-100 py-2 px-3 rounded outline-none focus:outline-1 focus:outline-black"
                    placeholder="Enter your email.."
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 justify-center items-center mt-3">
              <button
                className="w-full bg-gray-900 text-white px-5 py-2 border-2 rounded border-gray-900"
                type="submit"
              >
                Add User
              </button>
              <button
                className=" w-full bg-transparent px-5 py-2 border-2 rounded border-gray-900"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
