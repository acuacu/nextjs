import { useRouter } from 'next/router'


function ActiveLinkIcon({ children, href, icon }) {

    const router = useRouter()
    const style = {
        fontSize: "10px",
        float: "right",
        margin: "3px",
        marginRight: "1px",
      
        color: router.pathname === href ? '#fff' : '#fff',
    }
    const styleIcon = {
        fontSize: "10px",
        float: "right",
        margin: "3px",
        color: router.pathname === href ? '#50e3c2' : '#fff',
    }
    const handleClick = (e) => {
        e.preventDefault()
        router.push(href)
    }

    return (
        <>  
            <spam  className={icon} style={styleIcon}></spam>
            
            <a href={href} onClick={handleClick} style={style}>
                {children}
            </a>
            
        </>
    )
}

export default ActiveLinkIcon