import React, { useEffect, useState } from 'react'
import {Helmet} from "react-helmet";

function Home() {
    const [aromas, setaromas] = useState([])

    function getData() {
        fetch("http://localhost:3000/aromas/")
            .then(res => res.json())
            .then(aromas => setaromas(aromas))
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>
                <div className="banner">
                    <div className="banner-left">
                        <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png" alt="" />
                    </div>
                    <div className="banner-right">
                    <div className="text">
                    <h5>Shop is fun</h5>
                        <h1>Browse Our Premium Product</h1>
                        <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                        <button>Browse Now</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="search" style={{display:'flex', justifyContent:'center', padding:'15px'}}>
            <input type="text"  />

            </div>

            <div className="row">
                {aromas.map((x) =>

                    <div className="col-3" key={x._id}>
                        <img src={x.image} alt="" />
                        <p>{x.description}</p>
                        <h2>{x.name}</h2>
                        <span>{x.price}.00$</span>
                    </div>)


                }
            </div>
        </>
    )
}

export default Home
