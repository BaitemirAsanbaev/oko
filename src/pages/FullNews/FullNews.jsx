import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Comment from '../../components/Comments/Comment'
import { Context } from '../../main'
import SendComment from '../../components/SendComment/SendComment'
import { observer } from 'mobx-react-lite'

export default observer(function FullNews() {
  const params = useParams()
  const {commentStore} = useContext(Context).stores
  return (
    <div className='page'>
      <h1>News #{params.id}</h1>
      <img src="https://data.kaktus.media/image/big/2023-12-03_04-22-11_378137.jpg" alt="news-image" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores architecto et sapiente aspernatur iusto quasi quam saepe nobis odio quos ipsa hic nihil animi harum dolor, cum perspiciatis magni?
      Excepturi quibusdam est molestiae praesentium sunt tempore, impedit magni deserunt rem ullam dicta, accusamus, officiis cupiditate odit explicabo provident? Veniam laborum beatae repudiandae vitae enim quo doloribus sequi molestiae maiores?
      Officiis, libero! Aliquam, quaerat? Dolores eius, cumque voluptas voluptatum consequatur, aliquid quis quo itaque reprehenderit id praesentium autem quae maxime obcaecati! Deleniti, officia? Totam beatae nam voluptatem? Sint, possimus nesciunt!
      Eos pariatur voluptas vitae numquam nam deserunt explicabo mollitia, adipisci rerum dolorem, sapiente possimus, consectetur quia quam amet quasi? Magni earum accusantium fuga rerum? Id deleniti quis aspernatur doloribus sit.
      Reiciendis minus voluptatem ipsum magni sapiente repellat deserunt ratione soluta, non dolore voluptatum vitae explicabo itaque quisquam recusandae iste, neque dolores. Totam amet soluta quasi reprehenderit consequatur, pariatur voluptates vel.
      Adipisci corrupti, magnam quo facere cum asperiores optio pariatur officia enim iste voluptates eaque eius sint laboriosam ipsa, ut expedita voluptatem dolores illo? Labore est doloribus nostrum delectus vel perferendis.
      Architecto molestiae nulla tenetur laborum illum deserunt, voluptate itaque unde ullam facilis aspernatur ducimus, labore alias eius quasi quos maiores? Nulla, perspiciatis sit eos dolorum assumenda reiciendis ullam voluptates accusamus!
      Maiores perspiciatis omnis sequi odit voluptatem impedit deleniti, molestias totam, expedita accusamus tempora cum at corporis similique ipsa eaque aperiam sit et praesentium exercitationem provident alias quisquam ea nesciunt. Unde?
      Quaerat, quo! Distinctio dignissimos sed nisi magni pariatur necessitatibus corporis deserunt tempore dolores quidem adipisci quasi, accusamus facilis molestiae ullam suscipit quos numquam illo aliquid. Inventore ab esse consectetur fuga.
      Voluptas, est! Repellat assumenda nam a, repellendus dolores autem est tempore sit iusto excepturi fugiat doloremque nulla dolore error quo optio, iure vitae, ratione id sapiente! Nobis molestiae obcaecati ipsam?
      </p>
      <section>
        <SendComment/>
        {commentStore.comments.map((item, id)=>{
          return<Comment data={item} key={id}/>
        })}
      </section>
    </div>
  )
})
