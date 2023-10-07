import React, { useEffect, useState } from 'react'
import ActualBar from './component/ActualBar'
let interval = undefined;
const ProgressBar = () => {
    const [running, setrunning] = useState(false)
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (running) {
            interval = setInterval(function () {
                setProgress(pre => pre + .1)
            }, 10)
        } else {
            clearInterval(interval)
        }
    }, [running])

    useEffect(() => {
        if (progress > 100) {
            setrunning(false)
            clearInterval(interval)
        }
    }, [progress])


    return (
        <div className='display' >
            <ActualBar progessDone={progress} />
            <button
                onClick={() => {
                    setrunning(prev => !prev)
                }} >{running ? "Stop" : "Start"}
            </button>
            <button
                onClick={() => {
                    setProgress(0)
                }}
            >Clear</button>
        </div>
    )
}

export default ProgressBar