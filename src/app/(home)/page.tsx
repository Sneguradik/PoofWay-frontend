import {contactStyles} from "@/styles/Utils";
import styles from "./Home.module.scss";


import MainSearchBar from "@components/MainSearchBar";
import {Button} from "@ui/button";
import Image from "next/image";
import ActivityCard from "@components/ActivityCard";
import {Input} from "@ui/input";

export default function Home() {
  return (
    <div className={contactStyles("w-full flex flex-col gap-10 items-center flex-wrap overflow-x-hidden", styles.content)}>
      <div className={contactStyles("rest-w", styles.intro)}>
        <div className={styles.intro_box}>
          <Image src={"/PoofWay.svg"} alt={"Poof Way"} width={400} height={64} style={{width:'90%', height:"auto"}} />
          <h6>Rediscover your city with curated adventures.</h6>
          <Button className={"w-1/3"}>Explore</Button>
        </div>
        <div className={contactStyles(styles.intro_box,"items-end")}>
          <div className={styles.city_img}>
            <Image src={"/isometric_city.svg"} alt={"city"} objectFit={"cover"} fill/>
          </div>

        </div>
      </div>

      <div className={contactStyles("rest-w grid grid-cols-2")}>
        <div className={styles.about}>
          <h3>Who are we?</h3>
          <p>PoofWay is an innovative service designed to transform your city exploration into a seamless and exciting experience. Whether you're a local resident looking to discover hidden gems or a tourist eager to uncover the best spots, PoofWay curates personalized walking routes based on your preferences. From trendy restaurants and lively bars to unique activities and events, we provide handpicked itineraries that save you time and introduce you to new, exciting places.</p>
        </div>
        <div className={"grid grid-cols-2 grid-rows-2 gap-4 w-full"}>

        </div>
      </div>

      <div className={contactStyles("w-full flex justify-center", styles.primary_bg)}>
        <div className={"rest-w flex flex-col gap-4"}>
          <h3>Most popular this week</h3>
          <div className={"w-full flex gap-4 justify-center"}>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
          </div>
        </div>
      </div>

      <div className={contactStyles("rest-w flex items-center flex-col")}>
        <h3>Notify me when service will be released</h3>
        <div className={"flex max-w-xl w-full flex-col gap-2"}>
          <Input placeholder={"Email"}/>
          <div className={"w-full flex gap-2"}>
            <Input placeholder={"Name"}/>
            <Input placeholder={"Surname"}/>
          </div>

          <Button>Notify me!</Button>
        </div>
      </div>

      <div></div>

    </div>
  );
}
