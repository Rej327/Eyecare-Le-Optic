import Image from "next/image";
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