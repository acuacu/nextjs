import HeadBody from '../components/Head'
import { useState } from 'react';
import NavBar from '../components/Nav'
import Link from 'next/link'
import { useRouter } from 'next/router'



export default function Ingreso() {
    const router = useRouter()
    

    const [userName, setUserName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${userName}, ${firstName}, ${lastName}, ${email}, ${password}`)
        // ruta actual
        console.log(router.pathname)
        // redireccion a el Home
        router.push("/")
    }

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
            <div className="w-50 mx-auto">
                <h1> Soportte</h1>
                <p>Bienvenido, no compartiremos tu información con nadie.</p>
                <hr />
                <h5>csdcsdcsd</h5>
                <small id="emailHelp" className="form-text text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</small>
            
                <h5>csdcsdcsd</h5>
                <small id="emailHelp" className="form-text text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</small>
            
                <h5>csdcsdcsd</h5>
                <small id="emailHelp" className="form-text text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</small>
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