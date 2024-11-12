import styles from "@app/(auth)/Auth.module.scss";
import {Checkbox} from "@ui/checkbox";
import {Button} from "@ui/button";

import {ILoginCredentials, login} from "@logic/Auth";
import {Input} from "@components/ui/input";
import {useState} from "react";


export interface ILoginScreenProps {
  passForgotAction: ()=>void;
}

export default function LoginScreen({passForgotAction}:ILoginScreenProps) {

  const [credentials, setCredentials] =
    useState<ILoginCredentials>({username:"", password:""});

  return (
    <main className={styles.main}>
      <h3>Login</h3>

      <div className={styles.input_box}>
        <label>Login</label>
        <Input type="text" onInput={e=>setCredentials({...credentials,username:e.currentTarget.value})}/>
      </div>
      <div className={styles.input_box}>
        <label>Password</label>
        <Input type="password" onInput={e=>setCredentials({...credentials,password:e.currentTarget.value})}/>
      </div>
      <div className={styles.forgot_signed}>
        <div className={styles.check}>
          <Checkbox className={styles.checkbox}/>
          <p>Stay signed</p>
        </div>

        <Button variant={"link"} className={styles.pass_forgot} onClick={passForgotAction}>Forgot password?</Button>
      </div>
      <Button className={styles.default_btn} onClick={()=>login(credentials)}>Login</Button>


    </main>
  )
}