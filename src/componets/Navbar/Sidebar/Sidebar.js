import BarItem from "./BarItem/BarItem";
import s from './../Navbar.module.css'

const Sidebar = (props) => {
let barElements = props.state.map(item => <BarItem img= {item.img} name= {item.name}/> )

    return (
        <div className={s.sidebar}>
            <h1>Friends</h1>
         <div className={s.baritems}>
             {barElements}
         </div>
          
        </div>
    )
}


export default Sidebar;