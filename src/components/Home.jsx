import React from 'react'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'
import vg from '../assets/2.webp'

import "../styles/home.scss"

const Home = () => {
  return (
    <>
    <div className='Home' id='home'>
        <main>
        <h1>TechServe</h1>
        <p>Ready To Serve you Technology...</p>
        </main>
    </div>
    <div className='Home2'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a quod temporibus sint! Vel, alias quibusdam aut aspernatur minima eos reiciendis officia vitae veniam a odio dicta iusto delectus nemo facilis natus illum blanditiis laudantium repudiandae.
                Quasi deserunt aspernatur adipisci quia ad? Alias vitae soluta autem exercitationem. Sed explicabo dolor ratione harum rem dolores, neque corrupti nemo omnis tempora facere blanditiis optio asperiores saepe?
                Modi vel, dignissimos sed, pariatur quos fugiat ex repellat officia similique laboriosam tenetur rerum amet dolore quae beatae. Ad officia omnis exercitationem delectus adipisci. Est nesciunt obcaecati expedita iusto repellendus quae, corrupti corporis fugit illo ad.
            </p>
        </div>
    </div>
    <div className="Home3" id='about'>
        <div>
            <h1>
                Who We Are?
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti voluptatum, mollitia magnam quisquam vitae, corrupti expedita rerum ratione sint ducimus reiciendis ipsa tempore repellendus veniam. Aperiam perspiciatis saepe veniam id in numquam sed eius, obcaecati hic, autem neque laudantium aspernatur temporibus magnam magni totam excepturi. Quo iusto harum, dignissimos officiis eos aut labore ipsum asperiores, eius ad nisi pariatur laudantium maxime voluptatem aliquid consequuntur excepturi voluptas vel deleniti, quos voluptate natus corrupti perspiciatis. Sapiente minus recusandae tempore quod quidem, labore, repellendus, placeat eligendi facere perferendis est nam officiis commodi! </p>
        </div>
    </div>
    <div className="Home4" id='brands'>
        <div>
        <h1>Brands</h1>
        <article>
            <div style={{animationDelay:"0.3s"}}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>
            <div style={{animationDelay:"0.6s"}}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.9s"}}>
                <AiFillYoutube />
                <p>Youtube</p>
            </div>
            <div style={{
                anomationDelay:"0.12s"
            }}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
        </article>
        </div>
    </div>
    </>
  )
}

export default Home