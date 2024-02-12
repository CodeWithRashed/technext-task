interface Coordinates {
    lat: number;
    lng: number;
}

interface Address {
    address: string;
    city: string;
    coordinates: Coordinates;
    postalCode: string;
    state: string;
}

interface CompanyAddress {
    address: string;
    coordinates: Coordinates;
    postalCode: string;
    state: string;
}

interface Company {
    address: CompanyAddress;
    department: string;
    name: string;
    title: string;
}

interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

//ModalProps
export interface ModalProps {
    isShowModal: boolean;
    onClose: () => void;
  }
  

export interface UserDetails {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: Address;
    company: Company;
    bank: Bank;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    gender: string;
    phone: string;
    age: number;
    domain: string
}


export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    company: {
      address: {
        address: string;
        city: string;
        coordinates: {
          lat: number;
          lng: number;
        };
        postalCode: string;
        state: string;
      };
      department: string;
      name: string;
      title: string;
    };
  }
  

//UserCardProps
export interface UserCardProps {
    user: User;
  }
  


  //ModalButtonProps
  export interface ModalProps {
    isShowModal: boolean;
    sortedData: User[];
    setSortedData: React.Dispatch<React.SetStateAction<User[]>>;
    onClose: () => void;
}

export interface SearchButtonProps {
    setSearchData: (searchData: string) => void;
}


// FileInputFieldData
export interface FileInputFieldData {
  label: string
  name: string
  required: boolean
}


// InputFieldData
export interface InputFieldData {
  label: string
  name: string
  type: string
  placeholder: string
  required: boolean
}
// NewCreatedUser
export interface NewCreatedUser {
  firstName: string
  lastName: string
  email: string
  image: string
  company: string
  address : {
      address: string
      city: string
  }
}
