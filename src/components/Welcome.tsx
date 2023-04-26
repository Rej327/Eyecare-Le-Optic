import Image from "next/image";
<<<<<<< HEAD
import profile from "@/assets/profile.jpeg";
import variable from "@/styles/variables.module.scss";
import { STRING } from "../constant/String";

const { welcomeContent } = STRING;

export default function Welcome() {
  return (
    <div className={variable.welcomeSection}>
      <div className={variable.imgContainer}>
        <Image
          src={profile}
          alt="Doc. Chadilyn"
          height={350}
          width={350}
          className={variable.img}
        />
      </div>

      {welcomeContent.map((data) => (
        <div className={variable.context}>
          <p className={variable.head}>{data.head}</p>
          <p className={variable.desc}>{data.desc}</p>
          <p className={variable.name}>{data.name}</p>
          <p className={variable.title}>{data.title}</p>
        </div>
      ))}
    </div>
  );
}
=======
import profile from '@/assets/profile.jpeg'
import variable from '@/styles/variables.module.scss'

export default function Welcome() {
    return (
        <div className={variable.welcomeSection}>
                <Image src={profile} alt="Doc. Chadilyn" height={500} width={500}
                />
           
            <div className={variable.context}>
                <p className={variable.head}>Welcome to Eyecare Le Optique</p>
                <p className={variable.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quo ex neque ut mollitia nisi magni rerum ratione nostrum aliquam?</p>
                <p className={variable.name}>Doc. Name name</p>
                <p className={variable.title}>Title</p>
            </div>
        </div>
    )
}
>>>>>>> d33e9704ab5f3becede01989aa20b4759c693aa4
