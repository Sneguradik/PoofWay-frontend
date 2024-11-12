import Image from "next/image";
import styles from "./ActivityCard.module.scss";
import {Badge} from "@ui/badge";
import {AiOutlineDollar} from "react-icons/ai";

export default function ActivityCard() {
  return(
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={"/rest.jpg"} alt={"img"} objectFit={"cover"} fill />
      </div>

      <div className={styles.content}>
        <h5>Pottery classes</h5>
        <span >Pottery classes offer a hands-on experience in creating unique ceramic pieces, from shaping clay to glazing your finished work.</span>
        <div>
          <Badge><AiOutlineDollar/></Badge>
        </div>
      </div>
    </div>
  )
}