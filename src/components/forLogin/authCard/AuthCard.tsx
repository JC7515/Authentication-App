"use client"
import Link from 'next/link'
import { logoForLogin } from '@/components/logo/Logo.data'
import { iconsAuth0, iconsWithFrom } from './AuthCard.data'


const AuthCard = () => {
  return (
    <div className="w-72 flex flex-col items-center gap-8 md:w-96 md:border-slate-400 md:border-2 md:rounded-3xl md:p-8">
      <div className='flex flex-col items-center gap-2 '>
        {logoForLogin.icon}
        <h1>DevPros</h1>
      </div>

      <form action="" className="w-full flex flex-col gap-4">
        <div className="flex gap-2 border-zinc-300 border-2 rounded-md px-3 py-3" >
          {iconsWithFrom[0].icon}
          <input className='outline-none' type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="flex gap-2 border-zinc-300 border-2 rounded-md px-3 py-3">
          {iconsWithFrom[1].icon}
          <input className='outline-none' type="password" name="password" id="password" placeholder="Password" />
        </div>
        <button className="w-full h-9 bg-blue-500 rounded-md text-white">Start coding now</button>
      </form>
      <div className="w-full flex flex-col gap-7 items-center">
        <p className="border-zinc-400 text-sm">or continue with these social profile</p>
        <ul className='w-full flex flex-row justify-around'>
          {iconsAuth0.map(({ id, icon }) => {
            return <li className=' hover:border-black border-zinc-400 border-2 rounded-full p-2' key={id}>{icon}</li>
          })}
        </ul>
        <p>Adready a member?<Link className='ml-1 text-sky-500' href="/singUp">Login</Link></p>
      </div>

    </div>
  )
}

export default AuthCard