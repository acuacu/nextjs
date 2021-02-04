// IMPORT FROM NEXT
import Link from 'next/link'

import ActiveLinkIcon from "./button/iconLink"



export default class NavBar extends React.Component {

    render() {
        const { User, UserLogout } = this.props
        const HeadClickLogout = e =>{
            e.preventDefault()
            alert("Hoola")
            UserLogout(false)
        }
        return (
            <div>
                <div className="d-fluid nav">
                    <div className="content">
                        <div className="margen col-12 col-sm-4 col-md-4 col-lg-3">
                            <Link href="/"  >
                                <a>
                                    walterdaniel.club
                                </a>
                            </Link>
                            <div className="boton-celular d-sm-none">

                            </div>
                        </div>
                        <div className="LinkTecnologias d-none d-lg-block col-lg-1 justify-content-center">
                            <Link href="/">
                                <a>
                                    WordPress <b /> <img className="col" src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" width="30" height="30" alt="" loading="lazy" />
                                </a>
                            </Link>
                        </div>
                        <div className="LinkTecnologias d-none d-lg-block col-lg-1">
                            <Link href="/">
                                <a>
                                    Django <br /> <img src="https://cdn.freebiesupply.com/logos/large/2x/django-logo-png-transparent.png" width="30" height="30" alt="" loading="lazy" />
                                </a>
                            </Link>
                        </div>
                        <div className="LinkTecnologias d-none d-lg-block col-lg-1">
                            <Link href="/">
                                <a>
                                    NextJS <br /> <img src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png" width="30" height="30" alt="" loading="lazy" />
                                </a>
                            </Link>
                        </div>

                        <div className="contenedor-buscador d-none d-sm-block col-sm-5 col-md-5 col-lg-3">
                            <div className="bucsador">  BUSCAR  </div>
                        </div>
                        <div className="contenedor-botones">
                        {User
                                ?
                                <div className="d-none d-sm-block icon-link">
                                    <button type="button" className="btn btn-danger" onClick={HeadClickLogout}>Salir</button>
                                </div> : <></>}
                            <div className="d-none d-sm-block icon-link">
                                <ActiveLinkIcon href="/soporte" icon="icon-shop" >
                                    Soporte
                                </ActiveLinkIcon>
                            </div>
                            {!User
                                ?
                                <div className="d-none d-sm-block icon-link">
                                    <ActiveLinkIcon href="/registro" icon="icon-shop" >
                                        Registro
                            </ActiveLinkIcon>
                                </div> : <></>}
                            {!User
                                ?
                                <div className="d-none d-sm-block icon-link">
                                    <ActiveLinkIcon href="/ingreso" icon="icon-shop" >
                                        Ingreso
                                </ActiveLinkIcon>
                                </div> : <></>}


                        </div>
                        <div className="button-activity d-none d-sm-block col-sm-3 col-lg-2">boton de actividad</div>

                    </div>
                </div>

                <style jsx >{`
                    .nav{
                        position: fixed;
                        z-index: 20000;
                        top: 0px;
                        left: 0px;
                        background-color: #2c3449;
                        width: 100%;
                        color: rgba(230, 230, 230, .9);
                    }
                    .contenedor-buscador{
                        height: 50px;
                        background-color: blueviolet;
                        float: left;
                    }
                    .contenedor-botones{
                        width: 60%;
                        position: absolute;
                        right: 0;
                        top: 0;
                    }
                    .button{
                        float: right;
                        margin-right: 5%;
                        margin-top: 9px;
                    }
                    .button-activity{
                        float: right;
                        margin-top: 20px;
                        height: 20px;
                        background-color: antiquewhite;
                    }
                    .boton-celular{
                        float: right;
                        background-color: aquamarine;
                        width: 10px;
                        right: 5%;
                        top: 20px;
                        height: 10px;
                        position: absolute;
                    }
                    .margen{
                        float: left;
                        margin:0;
                        padding: 0;
                        height: 50px;
                        background-color: black;
                        text-align: center;
                        padding: 10px;
                    }

                    .content{
                        height: 50px;
                        float: left;
                        width: 100%;
                    }
                    .LinkTecnologias{
                        float: left;
                        text-align: center;
                         font-size:calc(4px + 0.5vw);
                         margin-left: 5px;
                         align-content: center;
                        
                    }
                    .icon-link{
                        float: right;
                        margin-right:10px;
                    }

                `}</style>
            </div>

        )
    }
}