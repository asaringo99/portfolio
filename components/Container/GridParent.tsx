import React, { FC } from 'react'
import styles from './GridParent.module.css'

interface GridParentProps {
    id?: string
    height?: string
    width?: string
    padding?: string
    children: React.ReactNode
}

const GridParent: FC<GridParentProps> = ({ id, height, width, padding, children }) => {
    const divStyle = {
        height: height,
        width: width,
        padding: padding,
    };

    return (
        <div id={`${id ? id : ''}`} style={divStyle} className={styles.container}>{ children }</div>
    )
}

export default GridParent
