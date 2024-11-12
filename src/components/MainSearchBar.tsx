import styles from "./MainSearchBar.module.scss";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@ui/accordion";
import {IoSearch} from "react-icons/io5";
import {GoGear} from "react-icons/go";
import {contactStyles} from "@/styles/Utils";
import {Separator} from "@ui/separator";
import {Button} from "@ui/button";
import Link from "next/link";
import {Badge} from "@ui/badge";

export default function MainSearchBar() {
  return(
    <div className={styles.container}>
      <div className={styles.input_group}>
        <input placeholder={"Type something"}/>
        <button><IoSearch /></button>
      </div>
      <Accordion type={"single"} collapsible className={"pl-6 pr-6"}>
        <AccordionItem value="item-1" className={"border-0"}>
          <AccordionTrigger className={styles.settings_trigger}><small className={"flex gap-1 items-baseline"}><GoGear />Optional parameters</small></AccordionTrigger>
          <AccordionContent className={contactStyles("border-0",styles.settings)}>
            <span>Types</span>
            <div className={"flex h-5 space-x-4 w-full"}>
              <Link href={"/"}>Festivals</Link>
              <Separator orientation={"vertical"}/>
              <Link href={"/"}>Bars</Link>
              <Separator orientation={"vertical"}/>
              <Link href={"/"}>Events</Link>
            </div>
            <span>Tags</span>
            <div>
              <Badge>Low</Badge>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}