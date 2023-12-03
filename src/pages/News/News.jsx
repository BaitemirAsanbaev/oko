import React from 'react'
import Card from '../../components/Card/Card'
import classes from './News.module.scss'
export default function News() {
  return (
    <div className={`page ${classes.News}`}>
      <h1>Последние новости</h1>
      <div>
        <Card to={"/news/1"}/>
        <Card to={"/news/2"}/>
        <Card to={"/news/3"}/>
        <Card to={"/news/4"}/>
        <Card to={"/news/5"}/>
        <Card to={"/news/6"}/>
      </div>
    </div>
  )
}
