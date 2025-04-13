import style from "./style.module.css"
import Image from "next/image"
import logo from "@/public/logo.png"

export default function Header() {
    return(
        <>
            <div className={style.header}>
                <div className={style.header_back}>
                    <h1 className={style.text_logo}>Pastelaria do Seu Zé</h1>
                    <Image className={style.logo} src={logo} quality={100}/>
                </div>
            </div>
        </>
    )
}
// northwolf