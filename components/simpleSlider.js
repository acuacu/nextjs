import Slider from "react-slick";

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 10,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="uno">
          <main className="justify-content-center">
          <div className="head col-12 col-sm-12 col-md-12 col-lg-12">
            <h3 className="d-1">Implementación y desarrollo Web .</h3>
            <p> 
               Estamos trabajando para mejorar el desarrollo de software y su imlementacion.
            </p>
          </div>
        </main>
          </div>
          <div className="dos">
            <h3>2</h3>
          </div>
          <div className="tres">
            <h3>3</h3>
          </div>
          <div className="cuatro">
            <h3>4</h3>
          </div>
          <div className="cinco">
            <h3>5</h3>
          </div>
          <div className="seis">
            <h3>6</h3>
          </div>
        </Slider>
        <style jsx global >{`
          .uno{
              width: 100%;
              height: 450px;
              background-color: blueviolet;
          }
        .dos{
            background-color: brown;
            width: 100%;
              height: 450px;
        }
        .tres{
            background-color: brown;
            width: 100%;
              height: 450px;
        }
        .cuatro{
            background-color: brown;
            width: 100%;
              height: 450px;
        }
        .cinco{
            background-color: brown;
            width: 100%;
              height: 450px;
        }
        .seis{
            background-color: brown;
            width: 100%;
              height: 450px;
        }
          `}</style>
      </div>
    );
  }
}