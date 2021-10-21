import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './pages/pages.module.css'
import {BurgerMenu} from "./pages/BurgerMenu";

type PropsType= {

}


function Header({ ...props}: PropsType) {

    const [menuActive, setMenuActive] = useState<boolean>(false)
    const navClassName = `${menuActive ? s.navActive : s.nav}`
    const onBlurCallBack = (e: React.FocusEvent) => {
        setMenuActive(false)

    }
    return (

        <div className={s.headerWrapper}>
            <BurgerMenu active={menuActive}

                        setActive={setMenuActive}/>

            <div className={navClassName}>
                <div className={s.link}>
                    <NavLink to='/pre-junior' activeClassName={s.active}>PRE_JUNIOR</NavLink>
                </div>
                <div className={s.link}>
                    <NavLink to='/junior' activeClassName={s.active}>JUNIOR</NavLink>
                </div>
                <div className={s.link}>
                    <NavLink to='/junior-plus' activeClassName={s.active}>JUNIOR+</NavLink>
                </div>
            </div>
        </div>
    )
}


export default Header
