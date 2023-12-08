import React from "react";
import Card from "../../../components/Card/Card";

export default function SpisokChlenov() {
  return (
    <div className="page">
      <h1>Список членов объединения</h1>
      <ul>
        <li>
          <a href="#pochetnye">Почетные</a>
        </li>
        <li>
          <a href="#deistvitelnye">Действительные</a>
        </li>
        <li>
          <a href="#associirovanye">Ассоциированные</a>
        </li>
      </ul>
      <p id="pochetnye">
        <b>Почетные</b> ipsum dolor sit amet consectetur, adipisicing elit.
        Neque vero corrupti odit? Accusamus quisquam eaque inventore ab
        consectetur, repellendus facilis in, fugiat sed, cum dolor officia porro
        saepe eveniet corporis. Asperiores sequi omnis id sapiente hic earum.
        Iusto rerum reiciendis libero at expedita, quisquam dolor quia accusamus
        accusantium modi id illum voluptates magni, qui, eius quas possimus.
        Natus, maxime quos. Tempora facere minus laudantium aut sit nobis optio
        quidem corporis maxime quae. Aperiam harum mollitia necessitatibus alias
        sapiente natus porro quas esse, debitis doloribus iste commodi odit.
        Eveniet, exercitationem minima. Quasi libero qui, praesentium distinctio
        blanditiis animi perspiciatis molestias, enim ex officiis rerum ipsam
        optio quaerat obcaecati? Quod neque voluptas omnis facere aperiam odit a
        dolor, accusantium, error quas cumque. Enim rem vero in? A ipsum, non
        odit eos exercitationem accusantium atque ullam earum ipsa at facere,
        ipsam necessitatibus rerum officiis tenetur minima placeat, assumenda
        mollitia qui aliquam fugiat quo. Debitis facilis asperiores est quas
        eaque! In reiciendis qui ipsa unde! Eligendi iure quo iste deleniti
        sapiente, beatae dolore. Esse fuga excepturi quis distinctio cupiditate
        nemo veniam exercitationem quas deserunt.
      </p>
      <p id="deistvitelnye">
        <b>Действительные</b> ipsum dolor sit amet consectetur, adipisicing
        elit. Neque vero corrupti odit? Accusamus quisquam eaque inventore ab
        consectetur, repellendus facilis in, fugiat sed, cum dolor officia porro
        saepe eveniet corporis. Asperiores sequi omnis id sapiente hic earum.
        Iusto rerum reiciendis libero at expedita, quisquam dolor quia accusamus
        accusantium modi id illum voluptates magni, qui, eius quas possimus.
        Natus, maxime quos. Tempora facere minus laudantium aut sit nobis optio
        quidem corporis maxime quae. Aperiam harum mollitia necessitatibus alias
        sapiente natus porro quas esse, debitis doloribus iste commodi odit.
        Eveniet, exercitationem minima. Quasi libero qui, praesentium distinctio
        blanditiis animi perspiciatis molestias, enim ex officiis rerum ipsam
        optio quaerat obcaecati? Quod neque voluptas omnis facere aperiam odit a
        dolor, accusantium, error quas cumque. Enim rem vero in? A ipsum, non
        odit eos exercitationem accusantium atque ullam earum ipsa at facere,
        ipsam necessitatibus rerum officiis tenetur minima placeat, assumenda
        mollitia qui aliquam fugiat quo. Debitis facilis asperiores est quas
        eaque! In reiciendis qui ipsa unde! Eligendi iure quo iste deleniti
        sapiente, beatae dolore. Esse fuga excepturi quis distinctio cupiditate
        nemo veniam exercitationem quas deserunt.
      </p>
      <p id="associirovanye">
        <b>Ассоциированные</b> ipsum dolor sit amet consectetur, adipisicing
        elit. Neque vero corrupti odit? Accusamus quisquam eaque inventore ab
        consectetur, repellendus facilis in, fugiat sed, cum dolor officia porro
        saepe eveniet corporis. Asperiores sequi omnis id sapiente hic earum.
        Iusto rerum reiciendis libero at expedita, quisquam dolor quia accusamus
        accusantium modi id illum voluptates magni, qui, eius quas possimus.
        Natus, maxime quos. Tempora facere minus laudantium aut sit nobis optio
        quidem corporis maxime quae. Aperiam harum mollitia necessitatibus alias
        sapiente natus porro quas esse, debitis doloribus iste commodi odit.
        Eveniet, exercitationem minima. Quasi libero qui, praesentium distinctio
        blanditiis animi perspiciatis molestias, enim ex officiis rerum ipsam
        optio quaerat obcaecati? Quod neque voluptas omnis facere aperiam odit a
        dolor, accusantium, error quas cumque. Enim rem vero in? A ipsum, non
        odit eos exercitationem accusantium atque ullam earum ipsa at facere,
        ipsam necessitatibus rerum officiis tenetur minima placeat, assumenda
        mollitia qui aliquam fugiat quo. Debitis facilis asperiores est quas
        eaque! In reiciendis qui ipsa unde! Eligendi iure quo iste deleniti
        sapiente, beatae dolore. Esse fuga excepturi quis distinctio cupiditate
        nemo veniam exercitationem quas deserunt.
      </p>
      <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around"
      }}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}
