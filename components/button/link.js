import { useRouter } from 'next/router'


function ActiveLink({ children, href }) {
    const router = useRouter()
    const style = {
        color: "#fff",
        fontSize:"10px",
        float: "right",
        margin: "3px",
        marginRight:"15px",
        marginRight: 10,
      color: router.pathname === href ? 'red' : 'black',
    }
  
    const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
    }
  
    return (
      <a href={href} onClick={handleClick} style={style}>
        {children}
      </a>
    )
  }
  
  export default ActiveLink