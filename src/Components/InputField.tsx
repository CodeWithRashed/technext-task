import { InputFieldData } from "../Interfaces/Interfaces";

export const InputField = ({ label, name, type, placeholder, required }:InputFieldData) => (
    <div className="input-group">
      <label htmlFor={name} className="block mb-2">
        {label}:
      </label>
      <input
        required={required}
        type={type}
        name={name}
        className="w-full bg-gray-100 py-2 px-3 rounded outline-none focus:outline-1 focus:outline-black"
        placeholder={placeholder}
      />
    </div>
  );