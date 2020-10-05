import HeadBody from '../components/Head'

export default class Ingreso extends React.Component {
    render() {
        let Text = [1, 2, 3, 4, 5, 6, 7]
        if (Text.includes(1)) {
            console.log("existe")
        } else ("No existe el numero")
        function Zorro(params) {
            console.log("Hwwwwee")
        }
        console.log(this.props)
        return (
            <div className="body-content container-fluid">
                <HeadBody title="Desarrollamos su página web" />

                <div className="content">
                    <label >correo eléctronico</label>
                    <input tipe="text" className="email" />
                    <label >contraseña</label>
                    <input tipe="password" className="email" />
                    <button className="btn btn-primary" onClick={Zorro}>ingesar</button>
                </div>


            </div>
        )
    }
}
export async function getServerSideProps() {
    let req = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await req.json();

    return { props: { users } };
}