import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <span className={s.affairItem}>{props.affair.name}</span>
            <span className={s.priority}>{props.affair.priority}</span>
            <button className={s.buttonDel} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
