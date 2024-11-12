import styles from "@app/(auth)/Auth.module.scss";
import {Button} from "@ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {useState} from "react";



export interface IVerificationCodeScreenProps {
  action: (code: string) => void;
}

export default function VerificationCodeScreen({action}: IVerificationCodeScreenProps) {


  const [code, setCode] = useState("");

  return (

    <main className={styles.main}>
      <h3>Verify email</h3>
      <p>Create new password. It must be 8 symbols at least</p>

      <InputOTP
        maxLength={6}
        className={styles.otp_box}
        onComplete={e => setCode(e)}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup className={styles.otp}>
          <InputOTPSlot index={0}/>
          <InputOTPSlot index={1}/>
          <InputOTPSlot index={2}/>
          <InputOTPSlot index={3}/>
          <InputOTPSlot index={4}/>
          <InputOTPSlot index={5}/>
        </InputOTPGroup>
      </InputOTP>
      <Button className={styles.default_btn} onClick={() => action(code)}>Reset</Button>
    </main>
  )
}