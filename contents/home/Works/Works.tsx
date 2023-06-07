import React, { FC } from 'react'
import Container from '../../../components/Container/Container'
import PopUp from '../../../components/PopUp/PopUp'
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
            <Container config={{'aspect-ratio': '2/1'}} width='40%' padding='2%'>
                <PortfolioWork2/>
            </Container>
            <Container config={{'aspect-ratio': '2/1'}} width='40%' padding='2%'>
                <PortfolioWork/>
            </Container>
            <Container config={{'aspect-ratio': '2/1'}} width='40%' padding='2%'>
                <KanbanWork/>
            </Container>
            <Container config={{'aspect-ratio': '2/1'}} width='40%' padding='2%'>
                <AuthWork/>
            </Container>
        </div>
    </div>
)

export default Works
