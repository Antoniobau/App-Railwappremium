import {useState} from 'react'
import {useRouter} from 'next/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Login(){
  const [email,setEmail]=useState('')
  const router = useRouter()
  function doLogin(e){
    e.preventDefault()
    if(!email) return alert('Enter an email')
    localStorage.setItem('ws100_user', email)
    router.push('/dashboard')
  }
  return (
    <div>
      <Navbar />
      <main className="container">
        <div className="card">
          <h2>Login (fake)</h2>
          <form onSubmit={doLogin}>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@domain.com" style={{padding:8,borderRadius:6,width:'100%',marginBottom:12}}/>
            <button className="btn" type="submit">Sign in</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
