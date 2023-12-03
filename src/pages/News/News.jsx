import React from 'react'
import Card from '../../components/Card/Card'
import classes from './News.module.scss'
export default function News() {
  return (
    <div className={`page ${classes.News}`}>
      <h1>Последние новости</h1>
      <div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
