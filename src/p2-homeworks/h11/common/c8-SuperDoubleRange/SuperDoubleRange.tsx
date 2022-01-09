
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import "antd/dist/antd.css";
import Slider from "antd/lib/slider";


// type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType =  {
    onChangeRange?: (value: [number, number]) => void

    value?: [number, number]
    min: number
    max: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max,

        ...restProps
        // min, max, step, disable, ...
    }
) => {

    const onChangeCallback = ( value: [number, number]) => {

        onChangeRange && onChangeRange(value)
    }
    // сделать самому, можно подключать библиотеки

    return (
        <div>
            <Slider
                style={{width: '200px'}}
                onChange={onChangeCallback}
                value={value}
                range={{ draggableTrack: true }}
                defaultValue={[min, max]} />
            DoubleRange
        </div>
    )
}

export default SuperDoubleRange
