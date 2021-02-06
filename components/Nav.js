// IMPORT FROM NEXT
import Link from 'next/link'
import { useState } from 'react';

import ActiveLinkIcon from "./button/iconLink"



export default function NavBar(props) {
    const [activity, setActivity] = useState(false)


    const { User, UserLogout } = props
    const HeadClickLogout = e => {
        e.preventDefault()
        alert("Hoola")
        UserLogout(false)
    }
    return (
        <div>
            <div className="d-fluid nav">
                <div className="content">

                    {/* LOGO Y NAVBAR CELULARES */}

                    <div className="margen col-12 col-sm-4 col-md-4 col-lg-3">
                        <Link href="/"  >
                            <a>
                                walterdaniel.club
                                </a>
                        </Link>
                        <div className="boton-celular d-sm-none" onClick={() => { activity ? setActivity(false) : setActivity(true) }} >
                            <div type="button" className="btn" style={{ "height": "22px", "padding": "0px", "margin-top": "-15px", "outline": "none", "border": "0px", }}>
                                <span className="badge-light icon-params" style={{"padding": "4px","paddingTop": "7px", "borderRadius": ".25rem"}}></span>
                            </div>

                        </div>
                    </div>

                    {/* FILTRO POR TECNOLOGIAS */}

                    <div className="LinkTecnologias d-none d-lg-block col-lg-1 justify-content-center">
                        <Link href="/registro" prefetch={true}>
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


                    {/* BUSCADOR */}

                    <div className="contenedor-buscador d-none d-md-block col-md-9 col-lg-10">

                        <form className="form-inline justify-content-center">
                            <input className="form-control mr-sm-2" type="search" placeholder="Potafolios" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Potafolios</button>
                        </form>

                    </div>

                    {/* BOTONES DEL NAVBAR Y LOGICA DE INGRESO*/}

                    <div className="contenedor-botones">
                        {User
                            ?
                            <div className="d-none d-sm-block icon-link">
                                <div href="/salir" onClick={HeadClickLogout} icon="icon-shop" >
                                    <div className="d-none d-sm-block icon-link">
                                        <ActiveLinkIcon href="/ingreso" icon="icon-shop" >
                                            salir
                                        </ActiveLinkIcon>
                                    </div>
                                </div>

                            </div> : <></>}
                        <div className="d-none d-sm-block icon-link">
                            <ActiveLinkIcon href="/soporte" icon="icon-shop" >
                                Soporte
                                </ActiveLinkIcon>
                        </div>
                        {!User
                            ?
                            <div className="d-none d-sm-block icon-link">
                                <ActiveLinkIcon href="/registro" icon="icon-shop" prefetch={true}>
                                    Registro
                            </ActiveLinkIcon>
                            </div> :
                            <div className="d-none d-sm-block icon-link">
                                <ActiveLinkIcon href="/ingreso" icon="icon-shop" >
                                    Perfil
                             </ActiveLinkIcon>
                            </div>
                        }
                        {!User
                            ?
                            <div className="d-none d-sm-block icon-link">
                                <ActiveLinkIcon href="/ingreso" icon="icon-shop" >
                                    Ingreso
                                </ActiveLinkIcon>
                            </div> : <></>}
                        <br />

                        <div className="d-none d-sm-block col-sm-12 col-lg-12" onClick={() => { activity ? setActivity(false) : setActivity(true) }} >
                            <div type="button" className="btn" style={{ "height": "22px", "padding": "0px", "margin-top": "-15px", "outline": "none", "border": "0px", }}>
                                <span className="badge badge-light icon-params"> Parametros</span>
                                <span className="sr-only">unread messages</span>
                            </div>

                        </div>


                    </div>


                </div>
                {/* BOTONES DEL NAVBAR Y LOGICA DE INGRESO*/}
                {activity
                    ? <div className="col-12 s">
                        <div >


                            {User
                                ? <div>
                                    <button type="button" className="btn btn-primary btn-sm">
                                        Profile <span className="badge badge-light">9</span>
                                        <span className="sr-only">unread messages</span>
                                    </button>

                                </div>
                                : <></>}
                        </div>
                    </div> : <></>
                }

            </div>



            <style jsx >{`
                    .s{
                        background: #352;
                        height:200px;
                        width:35px;
                        z-index: 999;
                    }
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
                        padding-top: 6px;
                        margin: 0px;
                    }
                    .contenedor-botones{
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
                        background-color: black;
                        
                        float: right;
                        font-size:12px;
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
                        z-index:2;
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
                        z-index:2;
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