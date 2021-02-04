import HeadBody from '../components/Head'
import { useState } from 'react';
import NavBar from '../components/Nav'




export default function Ingreso() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${email}, ${password}`)
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
                <h5> Formulario de ingreso</h5>
                <p>Que grato verte en nuestro entorno de trabajo nuevamente.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}

                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Ingresar</button>

                </form>
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