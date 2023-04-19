import React, { useState } from 'react';

import { Image } from 'react-bootstrap';


const Home = () => {
    const [bigImageSrc, setBigImageSrc] = useState(
        require("../images/shoe2.png")
    );

    const onImageHover = (src) => {
        setBigImageSrc(src);
    };


    return (
        <div>
            <div className="container-fluid position-relative">
                <div className="position-relative">
                    <div className="row row1" onMouseOver={() =>
                        onImageHover(require("../images/shoe2.png"))
                    }>
                        <div className="col-md-6 p-0 left-side" style={{ height: "70vh" }}>
                            <div className="row">
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-4 text-center" style={{ paddingTop: '50px' }}>
                                    <div className="header-text">Product Information</div>
                                    <div className="padding-top">Introducing the Nike Air Max 270 React, featuring a stylish Black/Anthracite/White colorway.</div>
                                    <div className="padding-top">This shoe was first released in 2020 and features a lightweight textile upper with a comfortable and responsive rubber sole.</div>
                                    <div className="padding-top">With a unique design and premium materials, the Air Max 270 React is the perfect shoe for anyone looking for both style and comfort.</div>
                                    <div className="padding-top">Get your pair today and step up your sneaker game!</div>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                        <div className="col-md-6 p-0 right-side" style={{ height: "70vh" }}>
                            <div className="row">
                                <div className="col-md-4">
                                </div>
                                <div className="col-md-4 text-center" style={{ paddingTop: '50px' }}>
                                    <div className="header-text">Schoen specificaties</div>
                                    <ul className="padding-top" style={{ listStyleType: 'none' }}>
                                        <li>Brand: Nike</li>
                                        <li className="padding-top">Model: Air Max 270 React</li>
                                        <li className="padding-top">Colorway: Black/Anthracite/White</li>
                                        <li className="padding-top">Release Date: 2020</li>
                                        <li className="padding-top">Style Code: CD0113-001</li>
                                        <li className="padding-top">Price: $160</li>
                                        <li className="padding-top">Upper Material: Textile</li>
                                        <li className="padding-top">Sole Material: Rubber</li>
                                    </ul>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute top-50 start-50 translate-middle">
                        {/* Container for the image */}
                        <Image
                            src={bigImageSrc}
                            width="600"
                            height="600"
                            className="rounded mx-auto d-block big-image"
                            alt="Alternative Text"
                        />
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="col-md-6 p-0 left-side">
                    <div className="d-flex flex-wrap">
                        <div className="col-md-4 text-center">
                            <div className="header-text">Schoen 1</div>
                            <Image
                                src={require("../images/kleineschoen1.png")}
                                width="200"
                                height="200"
                                alt="Image 1"
                                className="img-fluid"
                                onMouseOver={() =>
                                    onImageHover(require("../images/kleineschoen1.png"))
                                }
                            />
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="header-text">Schoen 2</div>
                            <Image
                                src={require("../images/kleineschoen2.png")}
                                width="200"
                                height="200"
                                alt="Image 2"
                                className="img-fluid"
                                onMouseOver={() =>
                                    onImageHover(require("../images/kleineschoen2.png"))
                                }
                            />
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="header-text">Schoen 3</div>
                            <Image
                                src={require("../images/kleineschoen3.png")}
                                width="200"
                                height="200"
                                alt="Image 3"
                                className="img-fluid"
                                onMouseOver={() =>
                                    onImageHover(require("../images/kleineschoen3.png"))
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-0 right-side">
                    <div className="d-flex flex-wrap">
                        <div className="col-md-4 text-center">
                            <div className="header-text">Schoen 4</div>
                            <Image src={require('../images/logo1.png')} width="200" height="200" alt="Image 1" className="img-fluid" />
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="header-text">Schoen 5</div>
                            <Image src={require('../images/logo1.png')} width="200" height="200" alt="Image 2" className="img-fluid" />
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="header-text">Schoen 6</div>
                            <Image src={require('../images/logo1.png')} width="200" height="200" alt="Image 3" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>


        </div>




    );
};

export default Home;
