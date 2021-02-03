import Link from 'next/link'
import Slider from "react-slick";

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="posit col-12">
        <Slider {...settings}>

          <div className="uno mains1" >
            <Link href="/"  >
              <img src="http://localhost:3000/logo.png" className="LOGO" />
            </Link>
            <h1>Almost before we knew it, we had left the</h1>
            <p className="d-none d-md-block">El Lorem Ipsum fue concebido como un texto de relleno. <br />formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia</p>
          </div>

          <div className="dos mains1" >
            <Link href="/"  >
              <img src="http://localhost:3000/logo.png" className="LOGO" />
            </Link>
            <h1>Almost before we knew it, we had left the gro</h1>
            <p className="d-none d-md-block">El Lorem Ipsum fue concebido como un texto de relleno. <br />formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia</p>
          </div>






        </Slider>
        <style jsx  >{`
          .tres{
            background-color: brown;
            width: 100%;
            height: 400px;
          }
          .LOGO{
            margin: 0 auto;
            margin-top: 15px;
          }
          .mains1{
            padding-top: 60px;
            background-size: 100% 100%;
            font-family: 'Dosis', sans-serif;
            align-content: center;
          }
          .mains1>h1{
            width: 100%;
            text-align: center;
            margin-top: 30px;
            margin-bottom:30px;
            float: left;
            top: 550px;
            color: #fff;
          }
          .mains1>p{
            width: 100%;
            text-align: center;
            float: left;
            top: 550px;
            color: #fff;
          }
          .uno{
              width: 100%;
              height: 400px;
              background-color: blueviolet;
          }

        .dos{
            background-color: brown;
            width: 100%;
            height: 400px;
        }
          `}</style>
      </div>
    );
  }
}