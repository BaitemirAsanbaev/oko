import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './Members.module.scss';
import Card from '../../components/Card/Card';
export default function Members() {
  const params = useParams();
  return (
    <div className={`page ${classes.Members}`}>
      <h1>Members {params.id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quam enim sunt numquam quos
        quisquam commodi aperiam reiciendis explicabo temporibus voluptatum, maiores nobis quis in
        deserunt reprehenderit minus! Nobis, vitae! Molestias, eius quae itaque ducimus quam
        quisquam repellendus ut quaerat eveniet. Architecto assumenda aperiam laudantium minus
        molestiae, soluta saepe autem iste sunt. Nobis corrupti veniam distinctio, quae sint porro
        ipsam. Ipsa nemo vitae quo dolorum a consequatur illum harum corporis ratione natus! Dolore,
        odio. Eos illo est unde reiciendis. Tempore, corporis. Vitae iusto aperiam praesentium dicta
        reprehenderit qui quidem ex. Totam facere ut excepturi vel accusamus recusandae aliquam
        quam, natus veritatis voluptatibus repudiandae officiis delectus similique eius et deserunt,
        nihil in molestiae harum aspernatur facilis autem ratione voluptates. Illo, tempore. Quis
        deleniti quam dolores magnam repellat, fugiat nisi voluptatibus distinctio minus
        repellendus. Velit dolor eum quod veritatis animi incidunt hic reiciendis, deserunt minus
        aspernatur? Cum explicabo officia sit earum aliquam. Laboriosam consequuntur suscipit iste
        consectetur quasi odit, porro delectus accusantium unde consequatur voluptas quo cumque?
        Totam aspernatur ab et blanditiis perferendis magnam porro ipsa nam maxime illo! Nemo, iusto
        totam. Esse, ad quod odio voluptatibus quia quos! Neque labore voluptatum quidem ratione,
        vel molestiae ex quibusdam magnam praesentium in, numquam esse unde aut sint totam,
        perspiciatis beatae ipsum eius ea! Aliquid rerum possimus quo provident maiores fuga quam
        eveniet, numquam incidunt labore, facere, aspernatur porro quia! Corrupti ullam repudiandae
        nam praesentium quod itaque ipsum libero, possimus mollitia, vitae velit voluptatibus.
        Dolore sequi qui voluptates accusantium nostrum eos. Dolorum suscipit debitis explicabo
        dolor, eos accusamus quis facere qui? Nostrum ipsa odio voluptates cumque ipsam repellat sed
        molestiae officiis, aspernatur quae quod. Laboriosam iste molestiae quibusdam rem modi est
        corrupti nisi reprehenderit. Rem earum quaerat dolor vero repudiandae repellat debitis quos
        voluptate tempora eius, sunt minus reiciendis, deleniti ex quisquam accusamus laborum.
      </p>
      <div className={classes.cards}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
