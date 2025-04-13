import style from "./style.module.css"
import Pastel from "./Pastel";

export default function Linha(){
    return (
        <>
            <div className={style.linha}>
                {
                    Array.from({length: 8}).map((_,i) => (
                        <Pastel key={i} estoque={i} preco={8.00}/>
                    ))
                }
            </div>
        </>
    )
}