import React, {ChangeEvent, useState} from 'react';
import {requestApi} from "./api/RequestApi";

const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    const onSubmit = () => {
        requestApi.postReq(checked)
            .then(data => setMessage(data.errorText))
            .catch((error) => {
                setMessage(error.response.data.errorText)
            })

    }

    return (
        <div>
            ответ сервака:<p>{message}</p>
            <button onClick={onSubmit} type={"submit"}>post</button>
            <input onChange={onChangeCheckbox} type="checkbox" placeholder={'me'}/>
        </div>
    );
};

export default Request;