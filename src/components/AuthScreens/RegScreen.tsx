import styles from "@app/(auth)/Auth.module.scss";
import {Checkbox} from "@ui/checkbox";
import {Button} from "@ui/button";
import {Input} from "@ui/input";


export interface IRegScreenProps {
  action:()=>void;
}

export default function RegScreen({action}:IRegScreenProps) {
  return (
    <main className={styles.main}>
      <h3>Sign up</h3>

      <div className={styles.input_box}>
        <label>Login</label>
        <Input type="text"/>
      </div>
      <div className={styles.two_inp}>
        <div className={styles.input_box}>
          <label>Name</label>
          <Input type="text"/>
        </div>
        <div className={styles.input_box}>
          <label>Surname</label>
          <Input type="text"/>
        </div>
      </div>
      <div className={styles.input_box}>
        <label>Email</label>
        <Input type="email"/>
      </div>
      <div className={styles.input_box}>
        <label>Password</label>
        <Input type="password"/>
      </div>
      <div className={styles.input_box}>
        <label>Confirm password</label>
        <Input type="password"/>
      </div>
      <div className={styles.forgot_signed}>
        <div className={styles.check}>
          <Checkbox className={styles.checkbox}/>
          <Button variant={"link"} className={styles.pass_forgot}>Agree with terms</Button>
        </div>
      </div>
      <Button className={styles.default_btn} onClick={action}>Sign up</Button>


    </main>
  )
}