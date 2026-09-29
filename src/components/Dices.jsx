import React from 'react'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa6";
import { Button } from '@heroui/react';
import { useState } from 'react';
import { generateRandNr } from '../utils';

export const Dices = () => {
    const [nr, setnr] = useState(1)

    const diceComponents = {
        1: <FaDiceOne size={100}/>,
        2: <FaDiceTwo size={100}/>,
        3: <FaDiceThree size={100}/>,
        4: <FaDiceFour size={100}/>,
        5: <FaDiceFive size={100}/>,
        6: <FaDiceSix size={100}/>,

    }

    return (
        <div className='flex items-center flex-col bg-amber-50 p-3 max-w-fit m-auto shadow-lg rounded-3xl'>
            <h2>Dice roller</h2>
            <div>{diceComponents[nr]}</div>
            <Button onClick={() => setnr(generateRandNr(1,6))}>Roll Dice</Button>
        </div>
    )
}
