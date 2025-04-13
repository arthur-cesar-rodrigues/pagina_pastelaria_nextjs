import style from "./style.module.css"
import Linha from "./Linha";

export default function Section_Venda(){
    return(
        <>
            <div className={style.section_venda}>
                <Linha/>
            </div>
        </>
    )
}