import React, { FC } from 'react'
import CardContainer from '../../../components/WorkCard/CardContainer'
import AuthWork from './mywork/auth'
import KanbanWork from './mywork/kanban'
import PortfolioWork from './mywork/portfolio'
import PortfolioWork2 from './mywork/portfolio2'
import styles from './Works.module.css'

interface WorksProps {
    title: string
}

const Works: FC<WorksProps> = ({ title }) => (
    <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>成果物について以下にまとめました！</div>
        <div className={styles.cardContainer}>
            <CardContainer config={{'aspect-ratio': '2/1'}} padding='2%'>
                <PortfolioWork2/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '2/1'}} padding='2%'>
                <PortfolioWork/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '2/1'}} padding='2%'>
                <KanbanWork/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '2/1'}} padding='2%'>
                <AuthWork/>
            </CardContainer>
        </div>
    </div>
)

export default Works
