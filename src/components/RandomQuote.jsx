import React from 'react'
import { quotes } from '../data'
import { getQuote } from '../utils';
import { Card } from '@heroui/react';

export const RandomQuote = ({ DiceValue }) => {
    console.log("dobas: ", DiceValue);
    console.log("index: ", getQuote(DiceValue));
/*     console.log(quotes[getQuote(DiceValue)].split('-'));
 */    const [text, author] = quotes[getQuote(DiceValue)].split('-');

    console.log(text, author);

    return (
        <div className='p-5'>
            <Card className="w-[320px]" variant="default">
                <Card.Header>
                    <Card.Description>{author}</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p>{text}</p>
                </Card.Content>
            </Card>
        </div>
    );
}