import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Dashboard(){
  const [user,setUser]=useState(null)
  const router=useRouter()
  useEffect(()=>{
    const u = localStorage.getItem('ws100_user')
    if(!u) router.replace('/login')
    else setUser(u)
  },[])
  if(!user) return <div className="container">Checking...</div>
  return (
    <div>
      <Navbar user={user}/>
      <main className="container">
        <div className="card">
          <h2>Dashboard</h2>
          <p>Welcome, {user}. This is a protected example page (client-side guard).</p>
          <p>Integrar pagos, suscripciones o sistema de créditos desde aquí.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
