
export default function NavBar() {

    return (
        <div className="drop_down d-none">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src="http://localhost:3000/logo.png" width={56} height={31} className="d-inline-block align-top" alt="" />
          Walter Daniel Acuña
        </a>
            </nav>
            <style jsx >{`
                    .drop_down{
                        height: 100px;
                        width: 50%;
                        background-color: blueviolet;
                        float: right;
                    }
                `}</style>
        </div>
    )
}