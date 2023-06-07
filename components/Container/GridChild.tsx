import React, { FC } from 'react'
import styles from './GridChild.module.css'

interface GridChildProps {
    id?: string
    children: React.ReactNode
}

const GridChild: FC<GridChildProps> = ({ id, children }) => {
    return (
        <div id={`${id ? id : ''}`} className={styles.container}>{ children }</div>
    )
}

export default GridChild
