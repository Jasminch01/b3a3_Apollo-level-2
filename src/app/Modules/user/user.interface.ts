import { USER_ROLE } from "./user.constant";

export type Tuser ={
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    role: string;
}

export type TloginUser = {
    email : string;
    password : string;
}


export type TUserRole = keyof typeof USER_ROLE;

