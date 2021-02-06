import HeadBody from '../components/Head'
import { useState } from 'react';
import NavBar from '../components/Nav'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Boxer from "../components/Box"


export default function soporte() {


    const [soporteOnline, setActivitySoportOnline] = useState(false)
    const [soporteTikets, setActivitySoportTikets] = useState(false)
    const [soporteUsurios, setActivitySoportUsuarios] = useState(false)



    return (
        <div className="container">
            <HeadBody
                title="Desarrollamos su página web"
                charset="utf-8"
                autor="Walter Daniel Club"
                description="Ingresa a tu cuenta WD club"
                keywords="Desarrollo pagina Web, Wordpress, Portafolios de Walter, Nextjs, Walter Daniel"
            />
            <NavBar></NavBar>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="col-12 row justify-content-center">
                <h1 className="col-12"> Soportte</h1>
                <p className="col-12">Bienvenido, no compartiremos tu información con nadie.</p>
                <hr />
                { !soporteOnline ?  

                <div className="col-12 col-xs-12 col-md-4 mb-3">
                    <div className="card text-white bg-success" onClick={()=>{soporteOnline?setActivitySoportOnline(false):setActivitySoportOnline(true)}} >
                        <div className="card-header justify-content-center"> 
                            <h1 className="icon-megaphone col-12 mx-auto"> </h1>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Soporte en línea</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>:
                   <div onClick={()=>{soporteOnline?setActivitySoportOnline(false):setActivitySoportOnline(true)}}> <Boxer ></Boxer> </div> }
                <div className="col-12 col-xs-12 col-md-4 mb-3">
                    <div className="card text-white bg-primary" onClick={()=>{soporteTikets?setActivitySoportTikets(false):setActivitySoportTikets(true)}}>
                        <div className="card-header">Crear un ticket a soporte</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

            </div>
            <hr />
        </div>
    )
}
export async function getServerSideProps() {
    let req = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await req.json();

    return { props: { users } };
}   