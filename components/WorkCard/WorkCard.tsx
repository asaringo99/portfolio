import React, { FC } from 'react'
// import Image from 'next/image'
import {Chart, ArcElement} from 'chart.js'
import styles from './WorkCard.module.css'
import WorkCardFrame from './WorkCardFrame'

Chart.register(ArcElement);

interface WorkCardProps {
    uri: string
}

const WorkCard: FC<WorkCardProps> = ({ uri }) => {

    const preUri = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

    return (
        <WorkCardFrame>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <img src={preUri + uri} alt='' width={100} height={50} className={styles.icon}/>
                </div>
            </div>
        </WorkCardFrame>
    );
}

export default WorkCard
