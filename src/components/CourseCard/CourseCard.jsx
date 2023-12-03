import React from 'react'
import { Link } from 'react-router-dom'
import classes from './CourseCard.module.scss'
export default function CourseCard() {
  return (
    <div className={classes.CourseCard}>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
      <span>Манаса 152 / Офлайн</span>
      <hr />
      <h2>Для кого подходит:</h2>
      <ul>
        <li>Студенты</li>
        <li>Школьники</li>
        <li>Бомжи</li>
      </ul>
      <Link to={'/course/1'}>Узнгать больше</Link>
    </div>
  )
}
