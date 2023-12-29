import React from 'react';
import classes from './About.module.scss';
import Card from '../../components/Card/Card';
export default function About() {
  return (
    <div className={classes.About}>
      <section>
        <h1>Цель Объединения</h1>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, autem?</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, autem?</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, autem?</li>
        </ul>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus accusamus eius maxime
          quos enim sit porro consequuntur ipsam neque fugit quo ut recusandae consequatur, quisquam
          nulla temporibus? Cum, itaque culpa! Corporis voluptates expedita, quaerat at placeat
          veritatis eos nulla aperiam velit excepturi ea ad, qui quo ullam iste. Laudantium, in?
          Tempore quos error nobis fugiat voluptas, nisi qui eveniet ullam! Esse exercitationem cum
          obcaecati laboriosam quod, sed ea et, vel deleniti minus porro cupiditate labore sapiente
          architecto a dolores repellendus neque nisi laborum, fugiat placeat earum libero. Est,
          ipsam magni. Eaque eius voluptates nam quibusdam porro quos. Quod quo nulla officia id rem
          minima porro voluptatum perspiciatis culpa, nesciunt pariatur officiis quibusdam? Quasi,
          assumenda asperiores. Veniam praesentium officiis dolores hic! Odit nihil accusamus
          officia nulla blanditiis distinctio quaerat deleniti consequuntur in, cumque vel minus
          fugiat! Dolor at accusantium tenetur. Asperiores corrupti harum velit. Sed asperiores
          veniam nobis praesentium natus ea? Beatae vitae illum, blanditiis, maxime non nam,
          consequuntur aut dicta minus quasi neque ducimus sequi corporis similique itaque quam
          earum provident voluptatum ipsam. Cupiditate, quis consectetur ex quod accusamus facilis?
          Minima libero cupiditate repellat ullam, maiores ipsum recusandae voluptatum animi quam
          consequuntur saepe possimus nihil, modi distinctio! Ipsam eligendi a deleniti labore,
          vitae officiis odio quas nam incidunt maiores sit!
        </p>
      </section>
      <section>
        <h1>История компании</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus accusamus eius maxime
          quos enim sit porro consequuntur ipsam neque fugit quo ut recusandae consequatur, quisquam
          nulla temporibus? Cum, itaque culpa! Corporis voluptates expedita, quaerat at placeat
          veritatis eos nulla aperiam velit excepturi ea ad, qui quo ullam iste. Laudantium, in?
          Tempore quos error nobis fugiat voluptas, nisi qui eveniet ullam! Esse exercitationem cum
          obcaecati laboriosam quod, sed ea et, vel deleniti minus porro cupiditate labore sapiente
          architecto a dolores repellendus neque nisi laborum, fugiat placeat earum libero. Est,
          ipsam magni. Eaque eius voluptates nam quibusdam porro quos. Quod quo nulla officia id rem
          minima porro voluptatum perspiciatis culpa, nesciunt pariatur officiis quibusdam? Quasi,
          assumenda asperiores. Veniam praesentium officiis dolores hic! Odit nihil accusamus
          officia nulla blanditiis distinctio quaerat deleniti consequuntur in, cumque vel minus
          fugiat! Dolor at accusantium tenetur. Asperiores corrupti harum velit. Sed asperiores
          veniam nobis praesentium natus ea? Beatae vitae illum, blanditiis, maxime non nam,
          consequuntur aut dicta minus quasi neque ducimus sequi corporis similique itaque quam
          earum provident voluptatum ipsam. Cupiditate, quis consectetur ex quod accusamus facilis?
          Minima libero cupiditate repellat ullam, maiores ipsum recusandae voluptatum animi quam
          consequuntur saepe possimus nihil, modi distinctio! Ipsam eligendi a deleniti labore,
          vitae officiis odio quas nam incidunt maiores sit!
        </p>
        <ul>
          <li>
            2001 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consequatur.
          </li>
          <li>
            2001 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consequatur.
          </li>
          <li>
            2001 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, consequatur.
          </li>
        </ul>
      </section>
      <section>
        <h1>Должности</h1>
        <div className={classes.cards}>
          <Card to={'/news/1'} />
          <Card to={'/news/2'} />
          <Card to={'/news/3'} />
        </div>
      </section>
    </div>
  );
}
