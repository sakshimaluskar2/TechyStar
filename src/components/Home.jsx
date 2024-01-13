import React from 'react'
import vg from "../assets/2.webp"
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";  

const Home =() => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problem you face
                        every day. We leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo cumque, minima quam quis quibusdam saepe at tenetur nesciunt error incidunt nihil aut corporis ea, mollitia commodi, sint deleniti hic id. Ad, id odio laudantium similique, omnis doloribus, saepe possimus natus vitae voluptatibus numquam illo eaque aspernatur aliquam! Assumenda voluptate illo consectetur dolorum soluta reiciendis, dicta necessitatibus nam saepe debitis odit sint deleniti hic id. Ad, id odio laudantium similique, omnis doloribus, saepe possimus natus vitae voluptatibus numquam illo eaque aspernatur aliquam! Assumenda voluptate illo consectetur dolorum soluta reiciendis, dicta necessitatibus nam saepe debitis odit</p>
                </div>
            </div>

            <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
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