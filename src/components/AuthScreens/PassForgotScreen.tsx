import styles from "@app/(auth)/Auth.module.scss";
import {Button} from "@ui/button";
import {useState} from "react";
import {Input} from "@ui/input";



export interface IPassForgotScreenProps {
  action : (password: string) => void;
}

export default function PassForgotScreen({action}:IPassForgotScreenProps) {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validate = () => {
    if (password == confirmPassword && password!="") action(password)
  }

  return (
    <main className={styles.main}>
      <h3>Password restore</h3>
      <p>Create new password. It must be 8 symbols at least</p>

      <div className={styles.input_box}>
        <label>New password</label>
        <Input id="email" type="password" onInput={e=>setPassword(e.currentTarget.value)} />
      </div>

      <div className={styles.input_box}>
        <label>Confirm password</label>
        <Input id="email" type="password" onInput={e=>setConfirmPassword(e.currentTarget.value)} />
      </div>

      <Button className={styles.default_btn} onClick={validate}>Reset</Button>


    </main>
  )
}