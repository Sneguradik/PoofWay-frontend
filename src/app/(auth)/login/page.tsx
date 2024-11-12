"use client"
import styles from "@app/(auth)/Auth.module.scss";
import {useState} from "react";
import {Tabs, TabsContent} from "@components/ui/tabs";
import VerificationCodeScreen from "@components/AuthScreens/VerificationCodeScreen";
import LoginScreen from "@components/AuthScreens/LoginScreen";
import PassForgotScreen from "@components/AuthScreens/PassForgotScreen";

export default function LoginPage() {

  const [page, setPage] = useState("login");

  return(
    <Tabs value={page} className={styles.tbs_container}>
      <TabsContent value={"login"} className={styles.tbs}>
        <LoginScreen passForgotAction={()=>setPage("verify")} />
      </TabsContent>
      <TabsContent value={"pass_forgot"} className={styles.tbs}>
        <PassForgotScreen action={()=>{}}/>
      </TabsContent>
      <TabsContent value={"verify"} className={styles.tbs}>
        <VerificationCodeScreen action={()=>setPage("pass_forgot")}/>
      </TabsContent>
    </Tabs>
  )
}