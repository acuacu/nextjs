import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
    
    
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll:1
    };
    return (
      <div className="d-md-block col-12">
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div className="">
            <img src="http://localhost:3000/logo.png" className="d-none mx-auto d-md-block imageN" />
            <h4 className="h4">Lorem ipsum</h4>
            <img src="http://localhost:3000/logo.png" className="float-right imagen d-md-none" />
            <p className="col-md-9 col-sm-9 col-6 col-md-12">
              <div className="d-block ">de borradores de diseño para probar el
              diseño visual antes de insertar el texto
              <div className="d-none d-sm-block">de borradores de diseño para probar el
                diseño visual antes de insertar
              </div>
              </div>
            </p>
          </div>
          <div>
          <img src="http://localhost:3000/logo.png" className="d-none mx-auto d-md-block imageN" />
            <h4 className="h4">Lorem ipsum</h4>
            <img src="http://localhost:3000/logo.png" className="float-right imagen d-md-none" />
            <p className="col-md-9 col-sm-9 col-6 col-md-12">
              <div className="d-block ">de borradores de diseño para probar el
              diseño visual antes de insertar el texto
              <div className="d-none d-sm-block">de borradores de diseño para probar el
                diseño visual antes de insertar
              </div>
              </div>
            </p>
          </div>
          <div>
          <img src="http://localhost:3000/logo.png" className="d-none mx-auto d-md-block imageN" />
            <h4 className="h4">Lorem ipsum</h4>
            <img src="http://localhost:3000/logo.png" className="float-right imagen d-md-none" />
            <p className="col-md-9 col-sm-9 col-6 col-md-12">
              <div className="d-block ">de borradores de diseño para probar el
              diseño visual antes de insertar el texto
              <div className="d-none d-sm-block">de borradores de diseño para probar el
                diseño visual antes de insertar
              </div>
              </div>
            </p>
          </div>
          <div>
          <img src="http://localhost:3000/logo.png" className="d-none mx-auto d-md-block imageN" />
            <h4 className="h4">Lorem ipsum</h4>
            <img src="http://localhost:3000/logo.png" className="float-right imagen d-md-none" />
            <p className="col-md-9 col-sm-9 col-6 col-md-12">
              <div className="d-block ">de borradores de diseño para probar el
              diseño visual antes de insertar el texto
              <div className="d-none d-sm-block">de borradores de diseño para probar el
                diseño visual antes de insertar
              </div>
              </div>
            </p>
          </div>
          <div>
          <img src="http://localhost:3000/logo.png" className="d-none mx-auto d-md-block imageN" />
            <h4 className="h4">Lorem ipsum</h4>
            <img src="http://localhost:3000/logo.png" className="float-right imagen d-md-none" />
            <p className="col-md-9 col-sm-9 col-6 col-md-12">
              <div className="d-block ">de borradores de diseño para probar el
              diseño visual antes de insertar el texto
              <div className="d-none d-sm-block">de borradores de diseño para probar el
                diseño visual antes de insertar
              </div>
              </div>
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}