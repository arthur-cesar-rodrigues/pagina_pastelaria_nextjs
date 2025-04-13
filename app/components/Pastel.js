import style from "@/app/components/style.module.css"
import Image from "next/image"
import pastel from "@/public/pastel.png"
import pastel_0 from "@/public/pastel_0.png"


export default function Pastel(props) {
    const img = props.estoque % 2 === 0 ? pastel : pastel_0;
    const sabor = props.estoque % 2 === 0 ? "Carne" : <s>Pizza</s>;

    return (
        <>
            <div className={style.pastel}>
                <p className={style.sabor}>{sabor}</p>
                
                <Image src={img} className={style.img}/>

                <p className={style.preco}>R$ {props.preco.toFixed(2).replace(".", ",")}</p>
            </div>
        </>
    )
}