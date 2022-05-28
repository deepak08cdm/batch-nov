import React, {useState, useEffect} from 'react'
import { Card as Card2, CardContent, CardHeader  } from '@mui/material'
import './Card.css'

function Card(props) {
    return (
        <div className='cardContainer'>
            <Card2 className='h-400'>
                <CardHeader title={props.title}>
                    {props.title}
                </CardHeader>
                <CardContent >
                    {props.children}
                </CardContent>
            </Card2>
        </div>
    )
}

export default Card
