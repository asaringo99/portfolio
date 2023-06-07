import React, { FC } from 'react'
import styles from './CardContainer.module.css'

interface CardContainerProps {
    id?: string
    height?: string
    padding?: string
    config?: any
    children: React.ReactNode
}

const CardContainer: FC<CardContainerProps> = ({ id, height, padding, config, children }) => {
    const divStyle = {
        height: height,
        padding: padding,
        ...config,
    };

    return (
        <div id={`${id ? id : ''}`} style={divStyle} className={styles.container}>{ children }</div>
    )
}


export default CardContainer
