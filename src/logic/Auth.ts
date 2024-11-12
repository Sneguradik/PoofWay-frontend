import {toast} from "react-toastify";
import {ENDPOINTS} from "@/Const";

export function EmailValidator(email:string) : boolean {
  let regexp =
    new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return regexp.test(email);
}

export interface ILoginCredentials {
  username: string,
  password: string
}

export interface IRegisterCredentials {

}

export interface IAuthData {
  id : number,
  email : string,
  username : string,
  token : string,
  refreshToken : string,
}





export async function login(data:ILoginCredentials) : Promise<boolean> {
  const resp = await fetch(ENDPOINTS.auth+"/Auth/login",{
    method: "POST",
    credentials:"include",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!resp.ok) {
    toast.error(resp.statusText);
    return false;
  }

  const authData = await resp.json();
  console.log(authData);



  toast.success("Logged in successfully");

  return true;
}