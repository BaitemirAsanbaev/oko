import React from "react";
import classes from "./VacancyInfo.module.scss";
import { Link } from "react-router-dom";
export default function VacancyInfo() {
  return (
    <div className="page">
      <div className={classes.VacancyInfo}>
      <div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <span>Манаса 152 / Офлайн</span>
        <Link to={"/vacancy/form"}>Присоединиться</Link>
      </div>
      <div>
        <h2>Минимальные квалификации:</h2>
        <ul>
          <li>Студенты</li>
          <li>Школьники</li>
          <li>Бомжи</li>
        </ul>
        <h2>Желаемые квалификации:</h2>
        <ul>
          <li>Студенты</li>
          <li>Школьники</li>
          <li>Бомжи</li>
        </ul>
      </div>
      <div>
        <h2>О работе</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quibusdam alias dignissimos nam commodi quos incidunt, deleniti eveniet nemo optio sunt, officia ipsum blanditiis magnam culpa hic animi. Quia, reprehenderit?
        Asperiores id quasi eius modi deleniti? Soluta ea dicta explicabo! Vitae dignissimos mollitia facilis saepe. Facilis numquam ut debitis eum, magnam porro at, repellat enim sed libero autem nobis modi!
        Error laudantium perferendis animi officiis ea eum consectetur ab ducimus a exercitationem consequatur deserunt, accusantium dolor obcaecati ratione incidunt minima veritatis adipisci, ipsum perspiciatis quam velit. Quam hic velit error.
        Et, tempora veniam. Excepturi eligendi consectetur neque, accusantium voluptatem libero, facere culpa porro saepe totam voluptate enim animi, illum officiis similique. Nisi in rerum obcaecati tenetur nihil molestias, commodi ad.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quibusdam alias dignissimos nam commodi quos incidunt, deleniti eveniet nemo optio sunt, officia ipsum blanditiis magnam culpa hic animi. Quia, reprehenderit?
        Asperiores id quasi eius modi deleniti? Soluta ea dicta explicabo! Vitae dignissimos mollitia facilis saepe. Facilis numquam ut debitis eum, magnam porro at, repellat enim sed libero autem nobis modi!
        Error laudantium perferendis animi officiis ea eum consectetur ab ducimus a exercitationem consequatur deserunt, accusantium dolor obcaecati ratione incidunt minima veritatis adipisci, ipsum perspiciatis quam velit. Quam hic velit error.
        Et, tempora veniam. Excepturi eligendi consectetur neque, accusantium voluptatem libero, facere culpa porro saepe totam voluptate enim animi, illum officiis similique. Nisi in rerum obcaecati tenetur nihil molestias, commodi ad.
        </p>
      </div>
    </div>
    </div>
  );
}
