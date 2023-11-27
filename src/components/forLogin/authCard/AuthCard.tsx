"use client"
import Link from 'next/link'
import { iconsAuth0 } from './AuthCard.data'

const AuthCard = () => {
  return (
    <div className="w-72 h-80 flex flex-col gap-5 border-slate-400 border border-2 rounded-3xl p-8">

      <form action="">
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="password" id="password" placeholder="Password" />
        <button>Start coding now</button>
      </form>
      <div>
        <p>or continue with these social profile</p>
        <ul>
          {iconsAuth0.map(({id,icon}) => {
            return <li key={id}>{icon}</li>
          })}
        </ul>
        <p>Adready a member?<Link href="/singUp">Login</Link></p>
      </div>

    </div>
  )
}

export default AuthCard