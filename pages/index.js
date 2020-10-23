import HeadBody from '../components/Head'
import Nav from '../components/Nav'
import SimpleSlider from '../components/simpleSlider'
import Slider from "react-slick";

export default class extends React.Component {
  state = {
    token: null
  }
  render() {
    return (
      <div className="body-content container-fluid">

        <HeadBody title="Desarrollamos su página web" />
        <Nav />

        <div className="col-12">
          <div className="x">
            <SimpleSlider></SimpleSlider>

          </div>
        </div>

        <div className="content-1 col-12 row justify-content-between">
          <div className="content-tarjeta col-12 col-sm-6 col-md-5 col-lg-5">
            <h4>Lorem ipsum</h4>
            <p>
              Ir a la navegaciónIr a la búsqueda

              Ejemplo de Lorem ipsum
              Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
            </p>
          </div>

          <div className="content-tarjeta col-6 d-none d-sm-block">
            <h4>Lorem ipsum</h4>

          </div>
        </div>
        <style jsx global >{`

          .x{
            float: left;
            width: 100%;
            height: 500px;
          }
          .bienvenido{
            color: #DA7655;
            padding: 18px;
            background-color: #55da76;
          }
          .head{
            background-color: aqua;

          }
          main{
            margin-top: 25px;
            -webkit-border-radius: 30px;
            -moz-border-radius: 30px;
            border-radius: 30px;

          }
          .content-tarjeta{}
            *{
              margin:0;
              padding:0;
              }
            .body-content{
              margin-top: 50px;
              background-color: #cee6f2;
              width: 100%;
              position: absolute;
            }
          `}</style>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.3/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
      </div>
    )
  }

}
