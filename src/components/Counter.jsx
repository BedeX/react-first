import React from 'react'
import { useState } from 'react'
import { CiCircleMinus } from 'react-icons/ci'
import { CiCirclePlus } from 'react-icons/ci'
import { RiResetLeftLine } from "react-icons/ri";
import { Button } from '@heroui/react';
import { MyImage } from './MyImage';



export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const h2Style = {
        textAlign: 'center',
        color: 'blue'
    }

    const btnMinusStyle = {
        opacity: counter < -5 ? 0.4 : 1,
        cursor: counter <= -5 ? 'not-allowed' : 'pointer',
        background: 'transparent'
    }

    const numColor = {
        color: counter < 0 ? 'red' : 'green',
    }

    return (
        <div>
            <h2 style={h2Style}>My counter component</h2>
            <div className="counter">
                <button onClick={() => setCounter(prev => prev - 1)} disabled={counter <= -5} style={btnMinusStyle}>
                    <CiCircleMinus size={48} color="#431cceff" />
                </button>

                <div className="nr" style={numColor}>{counter}</div>

                <button onClick={() => setCounter(prev => prev + 1)} disabled={counter >= 5}>
                    <CiCirclePlus size={48} color="#431cceff" />
                </button>
                <Button onClick={() => setCounter(0)}>Reset</Button>
            </div>
            {counter>0 && <MyImage counter={counter} maiNap='szerda'/>}
        </div>
    )
}