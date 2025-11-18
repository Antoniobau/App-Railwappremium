import Link from 'next/link'
export default function Navbar({user}) {
  return (
    <nav className="nav container">
      <div><strong>WebSite100</strong></div>
      <div>
        <Link href="/"><a style={{marginRight:12}}>Home</a></Link>
        <Link href="/dashboard"><a style={{marginRight:12}}>Dashboard</a></Link>
        {user ? <span>Hi, {user}</span> : <Link href="/login"><a>Login</a></Link>}
      </div>
    </nav>
  )
}
