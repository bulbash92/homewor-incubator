import s from "./pages.module.css";
import React from "react";

type BurgerMenuType = {
    active: boolean
    setActive: (active: boolean) => void
}

export function BurgerMenu(props: BurgerMenuType) {
    return (
        <div>
            <div className={s.burger}
                 onClick={() => props.setActive(!props.active)}>
                <span></span>
            </div>
        </div>
    )
}