import React, { FC } from 'react'
import styles from './Skill.module.css'
import SkillCard from '../../../components/SkillCard/SkillCard'
import CardContainer from '../../../components/SkillCard/CardContainer'

interface SkillProps {
    title: string
}

const Skill: FC<SkillProps> = ({ title }) => (
    <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>全般的に知識がまだまだ浅いです...。</div>
        <div className={styles.content}>ですが少しずつ理解を深めていき、</div>
        <div className={styles.content}>強いエンジニアになってみせます！！</div>
        <div className={styles.cardContainer}>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/node.png' percent={50}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/ts.png' percent={60}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/flutter.png' percent={20}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/go.png' percent={55}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/C++.png' percent={60}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/java.png' percent={15}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/python.png' percent={60}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/nextjs.png' percent={30}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/React.png' percent={40}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/echo.png' percent={30}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/Gin.png' percent={20}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/Django.png' percent={15}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/linux.png' percent={30}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/Docker.png' percent={50}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/k8s.png' percent={30}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/atcoder.png' percent={60}/>
            </CardContainer>
            <CardContainer config={{'aspect-ratio': '1/1'}} padding='2%'>
                <SkillCard title='' uri='/codeforces.png' percent={50}/>
            </CardContainer>
        </div>
    </div>
)

export default Skill
