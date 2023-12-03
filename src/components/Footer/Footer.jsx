import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className={classes.Footer}>
      <div>
        <h3>Оценка недвижимости </h3>
        <ul>
          <li>
            <Link to={"/"}>Оценка квартиры</Link>
          </li>
          <li>
            <Link to={"/"}>Оценка жилого дома</Link>
          </li>
          <li>
            <Link to={"/"}>Оценка земельного участка</Link>
          </li>
          <li>
            <Link to={"/"}>Оценка зданий, сооружений</Link>
          </li>
          <li>
            <Link to={"/"}>Оценка нежилых помещений</Link>
          </li>
          <li>
            <Link to={"/"}>Оценка заводов, цехов</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Оценка движимого имущества </h3>
        <ul>
          <li>
            <Link to={"/"}>Оценка транспорта</Link>
          </li>
          <li>
            <Link to={"/"}>Оценка оборудования</Link>
          </li>
          <li>
            <Link to={"/"}>Оценка специальной техники</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Оценка бизнеса </h3>
        <ul>
          <li>
            <Link to={"/"}>Оценка акций и ценных бумаг  </Link>
          </li>
          <li>
            <Link to={"/"}>Оценка доли уставного капитала</Link>
          </li>
          <li>
            <Link to={"/"}>Оценка инвестиционных проектов</Link>
          </li>
          <li>
            <Link to={"/"}>Оценка прав недропользования</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
