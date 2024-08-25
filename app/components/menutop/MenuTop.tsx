import Link from 'next/link'
import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { LuLinkedin } from 'react-icons/lu'


export const MenuTop = () => {
  return (

       <div className="bg-background text-foreground font-inter flex flex-col">
      <header className="bg-card px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <img
            src="image.png"
            alt="Avatar"
            width={64}
            height={64}
            className="rounded-full"
            style={{ aspectRatio: "64/64", objectFit: "cover" }}
          />
          <div>
            <h1 className="text-2xl font-bold">Jose Armando Salazar Moreno</h1>
            <p className="text-sm text-muted-foreground">Software Engineer</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link target="_blank"  href="mailto:samja1701ap@gmail.com" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
            <HiOutlineMail  className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link  target="_blank" href="https://www.linkedin.com/in/jos%C3%A9-armando-salazar-moreno-8ab50a30a/" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
            <LuLinkedin  className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link target="_blank" href="https://github.com/JoseArmandoSalaM" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
            <FiGithub  className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </header>
      </div>

  )
}
