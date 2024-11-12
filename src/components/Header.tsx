"use client"
import styles from "./Header.module.scss";

import {Button} from "@ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@ui/avatar";

import {TiThMenu} from "react-icons/ti";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@ui/sheet";
import {BiHomeAlt2} from "react-icons/bi";
import {contactStyles} from "@/styles/Utils";
import {IoExitOutline, IoSearch} from "react-icons/io5";
import {VscCompass} from "react-icons/vsc";
import {BsArchive, BsGearWide} from "react-icons/bs";
import {useState} from "react";
import Link from "next/link";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden"
export default function Header() {
  const [authenticated] = useState(false);
  return(
    <div className={styles.wrapper}>
        <Sheet>

          <VisuallyHidden>
            <SheetTitle>Menu</SheetTitle>
          </VisuallyHidden>

          <SheetTrigger asChild={true}><TiThMenu className={styles.nav_trigger}/></SheetTrigger>
          <SheetContent side={"left"} className={"flex flex-col gap-8"}>
            <h5 className={styles.title}>Menu</h5>

            <nav className={"flex flex-col gap-4 flex-grow ml-4"}>
              <Link className={styles.nav_btn} href={"/"}><BiHomeAlt2 /> Home</Link>
              <Link className={styles.nav_btn} href={"/search"}><IoSearch />Search</Link>
              <Link className={styles.nav_btn} href={"/active"}><VscCompass/>Active</Link>
              <Link className={styles.nav_btn} href={"/favourite"}><BsArchive />Favourite</Link>
              <Link className={styles.nav_btn} href={"/settings"}><BsGearWide />Settings</Link>
            </nav>

            {authenticated ?

            <div className={"flex gap-4 content-center"}>
              <Avatar>
                <AvatarImage src="/White.svg"/>
                <AvatarFallback>EK</AvatarFallback>
              </Avatar>
              <div className={styles.profile_data}>
                <h6>John Doe</h6>
                <Button variant={"link"}><IoExitOutline/><small>Log out</small></Button>
              </div>
            </div>

              :

            <div className={"flex gap-4 content-center"}>
              <Link
                href={"/login"}
                className={contactStyles(styles.default_btn, styles.auth_btn)}
              >Log in</Link>

              <Link
                className={contactStyles(styles.outline_btn, styles.auth_btn)}
                href={"/signup"}
              >Sign up</Link>
            </div>}


          </SheetContent>
        </Sheet>


    </div>

  )
}