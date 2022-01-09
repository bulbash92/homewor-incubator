import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC,} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";



function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const themes = useSelector<AppStoreType, Array<string>>(state => state.theme.themes)
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()

    const onChangeCallback = (theme: string) => {
      dispatch(changeThemeAC(theme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <SuperSelect
                options={themes}
                onChangeOption={onChangeCallback}
            />
            <span className={s[theme + '-text']}>

                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
