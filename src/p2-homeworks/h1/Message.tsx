import React from 'react'
import classes from "./Message.module.css";

type MessageTypes = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageTypes) {
    return (
        <div className={classes.messages}>
            <div className={classes.avatar}>
                <img src={props.avatar}/>
            </div>

            <div className={classes.message_wrapper}>
                <div>
                    <p className={classes.name}>{props.name}</p>
                    <p className={classes.message}>{props.message}</p>
                </div>
                <p className={classes.time}>{props.time}</p>
            </div>


        </div>
    )
}

export default Message
