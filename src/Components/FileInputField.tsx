import { FileInputFieldData } from "../Interfaces/Interfaces";

export const FileInputField = ({ label, name, required }:FileInputFieldData) => (
    <div className="input-group">
      <label className="block mb-2" htmlFor={name}>
        {label}:
      </label>
      <input
        required={required}
        name={name}
        className="border lg:w-[100%] p-1.5 rounded file:border-0 !file:bg-gray-100 file:rounded"
        type="file"
      />
    </div>
  );
  