"use client"
import styles from "../Auth.module.scss";
import {Tabs, TabsContent} from "@components/ui/tabs";
import VerificationCodeScreen from "@components/AuthScreens/VerificationCodeScreen";
import RegScreen from "@components/AuthScreens/RegScreen";
import {useState} from "react";

export default function SignUpPage() {

  const [page, setPage] = useState("reg");

  return(
    <Tabs value={page} className={styles.tbs_container}>
      <TabsContent value={"reg"} className={styles.tbs}>
        <RegScreen action={()=>setPage("verify")}/>
      </TabsContent>
      <TabsContent value={"verify"} className={styles.tbs}>
        <VerificationCodeScreen action={()=>setPage("reg")}/>
      </TabsContent>
    </Tabs>
  )
}