import HeadBody from '../components/Head'
import NavBar from '../components/Nav'
import SimpleSlider from '../components/simpleSlider'
import Slider from "react-slick";
import ActiveLink from "../components/button/link"
import MultipleItem from "../components/simpleMultiple3Elemento"
import MultipleItems from "../components/simpleMultipleElementos"
export default class extends React.Component {
  state = {
    token: null
  }
  render() {
    return (
      <div className="body-content container-fluid">
        <HeadBody
          title="Desarrollamos su página web"
          charset="utf-8"
          autor="Walter Daniel Club"
          description="El portafolios ganador de un hoscar por simplesa y utilidad"
          keywords="Desarrollo pagina Web, Wordpress, Portafolios de Walter, Nextjs"
        />
        <NavBar></NavBar>
        {/* 1er slider*/}

            <SimpleSlider></SimpleSlider>

        <br />

        {/* 1er banner Lg*/}

        <div className="d-none d-lg-block clearfix col-12 w row">
          <br />
          <img src="http://localhost:3000/logo.png" className=" m-25 mx-auto col-6 float-right clearfix" />
          <br />
          <div className="row aling-items-center col-6">
            <h3 className="col-12 ">Entorno y soporte para Wordpress</h3>
            <br />
            <div className="col-12 float-lefth">
              <p className="d-none d-sm-block col-sm-12">
                Una solucion rapida para un blog weUna solucion rapida para un blog web.
                Una solucion rapida para un blog weUna solucion rapida para un blog web.
                Una solucion rapida para un blog weUna solucion rapida para un blog web.
          <br />

                <button className="btn btn-primary rrrr btn-lg btn2 float-right  rrr active">ver mas <span className="glyphicon glyphicon-import"></span></button>
              </p>
            </div>
          </div>

        </div>
        <br />

        {/* 2er banner Lg*/}

        <div className="d-none d-lg-block clearfix col-12 w row">
          <br />
          <div className="row justify-content-center row col-12">
            <h3 className="col-7 float-lefth">Entorno y soporte para Wordpress</h3>


            <div className="col-7 float-lefth">
              <p className="d-none d-sm-block col-sm-12">
                Una solucion rapida para un blog weUna solucion rapida para un blog web.
              </p>
            </div>

            <div className="col-2 float-lefth">
              <button className="btn btn-primary btn-lg active">ver mas <span className="glyphicon glyphicon-import"></span></button>
            </div>
          </div>
          <br />
          <br />
          <div className="col-6 mx-auto justify-content-center">
            <img src="http://localhost:3000/logo.png" className="clearfix col-12" />
          </div>
        </div>
        <br />
        {/* 2er slider multiItem */}

        <div className="col-12 row justify-content-around">
          <div className="content-tarjeta clearfix col-md-12">
            <div className="col-12 d-lg-none"><MultipleItems ></MultipleItems></div>
            <div className="d-none d-lg-block"><MultipleItem  ></MultipleItem></div>

          </div>
          <h3 className="col-12 d-lg-none">Lorem Ipsum es simplemente</h3>
          <p className="col-12 d-lg-none">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
          </p>

          {/* 1er banner sm */}

          <div className="d-block d-lg-none col-12 w row">
            <br />
            <img src="http://localhost:3000/logo.png" className=" m-25 imageN d-sm-none rounded-circle  clearfix" />
            <br />
            <h3 className="col-12 ">Entorno y soporte para WordpressEntorno y soporte para Wordpress</h3>
            <div className="d-block col-5 float-right d-sm-block d-none">
              <img src="http://localhost:3000/logo.png" className=" m-25 imageN d-sm-block float-right d-none rounded clearfix" />
            </div>
            <br />
            <p className="d-none d-sm-block col-sm-7">
              Una solucion rapida para un blog web.
            </p>
            <br />

            <button className="btn btn-primary btn-lg btn2 mx-auto float-sm-right active">ver mas <span className="glyphicon glyphicon-import"></span></button>
          </div>

          {/* 2er banner sm */}

          <div className="d-block d-lg-none  col-12 w row">
            <br />
            <img src="http://localhost:3000/logo.png" className=" m-25 imageN d-sm-none rounded-circle  clearfix" />
            <br />
            <h3 className="col-12 ">Entorno y sosssssporte para Wordpress</h3>
            <div className="d-block col-5 float-left d-sm-block d-none">
              <img src="http://localhost:3000/logo.png" className=" m-25 imageN d-sm-block float-right d-none rounded clearfix" />
            </div>
            <br />
            <p className="d-none d-sm-block float-right col-sm-7 justify-content-end">
              Una solucion rapida para un blog webUna solucion rapida para un blog web.
            </p>
            <br />

            <button className="btn btn-primary btn-lg btn2 float-sm-left active">ver mas <span className="glyphicon glyphicon-import"></span></button>
          </div>

          {/* 3er banner sm */}

          <div className="d-block d-lg-none  col-12 w row">
            <br />
            <img src="http://localhost:3000/logo.png" className=" m-25 imageN d-sm-none rounded-circle  clearfix" />
            <br />
            <h3 className="col-12 ">Entorno y soporte para Wordpress</h3>
            <div className="d-block col-5 float-right d-sm-block d-none">
              <img src="http://localhost:3000/logo.png" className=" m-25 imageN d-sm-block float-right d-none rounded clearfix" />
            </div>
            <br />
            <p className="d-none d-sm-block col-sm-7">
              Una solucion rapida para un blog web.
            </p>
            <br />

            <button className="btn btn-primary btn-lg btn2 float-sm-right active">ver mas <span className="glyphicon glyphicon-import"></span></button>
          </div>
        </div>

        {/* 3er banner lg */}

        <div className="d-none d-lg-block col-12 w clearfix row">
          <br />
          <div className="col-6 justify-content-center row float-right">
            <h3 className="col-12">Entorno y soporte para Wordpress</h3>
            <p className="col-12 float-right">
              Una solucion rapida para un blog web.
              Una solucion rapida para un blog web.
              Una solucion rapida para un blog web.
              Una solucion rapida para un blog web.
              Una solucion rapida para un blog web.
          <br />
            </p>

            <button className="btn btn-primary btn-lg active">ver mas <span className="glyphicon glyphicon-import"></span></button>
          </div>
          <img src="http://localhost:3000/logo.png" className="col-6 float-left clearfix" />
        </div>
        
        <style jsx global >{`


          .w{
            margin-top: 2px;
            padding-bottom:36px;
            background-color: hsl(180deg 14% 23% / 7%);
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
          }

          p{
            font-size: 22px;
          }
          .h4{
            margin-left: 6%;
            margin-top: 25px;
          }
          .imagen{
            width:45%;
            margin: 5%;
            margin-top: 0px;
            margin-right: 0px;
            max-width: 200px;
          }
          .imageN{
            width:130px;
            height: 130px;
            margin-right: 12%;
            margin-bottom: 50px;
            margin-top:35px;
          }
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
          .row{
            margin-left: 0px;
          }
          .content-tarjeta {
            margin-top: 8px;
            margin-bottom: 25px;
            margin-left: 0px;
            color: aliceblue;
            background-color: #5e6175;
          }
          .content-tarjeta p {
            text-align: center;
            padding: 7px;
            font-size: calc(12px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
            margin-top: 15px;
          }
            *{
              margin:0;
              padding:0;
              }
            .body-content{
              margin-top: 60px;
              background-color: aliceblue;
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
