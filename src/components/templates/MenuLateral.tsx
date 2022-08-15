import { IconeAjustes, IconeHome, IconeSino } from "../icons/index";
import { Logo } from "./Logo";
import MenuItem from "./MenuItem";


export default function MenuLateral() {

    return (
        <aside>
            <div className={`
                flex flex-col items-center justify-center 
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20 
            `}>
                <Logo />
            </div>
            <ul>
                <MenuItem url ="/"  texto="Home" icone = {IconeHome}/>
                <MenuItem url ="/adjust"  texto="Adjust" icone = {IconeAjustes}/>
                <MenuItem url ="/notifications"  texto="News" icone = {IconeSino}/>
                
            </ul>
        </aside>
    )

}