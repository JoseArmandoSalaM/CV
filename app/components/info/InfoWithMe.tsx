import React from 'react'
import { FaGitAlt, FaLaravel, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa'
import { RiNextjsLine } from 'react-icons/ri'
import { SiMysql, SiNestjs, SiPostgresql, SiPrisma } from 'react-icons/si'

export const InfoWithMe = () => {
  return (
    <div className="flex-1 grid grid-cols-1 p-10 min-w-full">
        <div className="space-y-8">
          <section>
            <h2 className="text-lg font-bold mb-2">Acerca de mi</h2>
            <p className="text-muted-foreground">
            Soy desarrollador back-end con experiencia en frameworks como NestJS, Laravel (mi principal herramienta en los últimos años), Yii y por el lado del Front-end Next.js, Vue. Mi pasión por el desarrollo del lado del servidor me impulsa a buscar nuevos desafíos y oportunidades de crecimiento en equipos dinámicos. Estoy siempre dispuesto a aprender nuevas tecnologías y colaborar en proyectos que me permitan aportar mis conocimientos y habilidades.

           </p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2">Experiencia</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold">Software en REMEM</h3>
                <p className="text-sm text-muted-foreground">REMEM. | 16/01/2024 - 20/05/2024</p>
                <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground">
                  <li>Desarrollo y mantenimiento de aplicacion web usando Laravel, Mysql.</li>
                  <li>Se implementaron interfaces de usuario intuitivas.</li>
                  <li>
                    Participe en la creacion de la cotizacion permitiendo agregar multiples filas para agregar todos los productos y en la parte de generar un pdf apartir de la cotizacion
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold">Desarrollo de eccomerce</h3>
                <p className="text-sm text-muted-foreground">Novedadez Luzma. | 20/05/2024 - Actualidad.</p>
                <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                   Sigo en desarrollo de la tienda online en base a las necesidades del cliente
                  </li>
                  <li>Tienda online totalmente funcional permitiendo realizar pedidos</li>
                  <li>Participé en el desarrollo de toda la web.</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2">Skills</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-card rounded-md px-3 py-2 text-sm">
                <FaNodeJs className="w-5 h-5 mr-2 inline-block" />
                Node.js(Basico)
              </div>
              <div className="bg-card rounded-md px-3 py-2 text-sm">
                <RiNextjsLine className="w-5 h-5 mr-2 inline-block" />
                Nextjs(Basico)
              </div>
              <div className="bg-card rounded-md px-3 py-2 text-sm">
                <SiMysql className="w-5 h-5 mr-2 inline-block" />
                Mysql(Intermedio)
              </div>
              <div className="bg-card rounded-md px-3 py-2 text-sm">
                <SiNestjs className="w-5 h-5 mr-2 inline-block" />
                Nestjs(Basico)
              </div>
              <div className="bg-card rounded-md px-3 py-2 text-sm">
                <FaGitAlt className="w-5 h-5 mr-2 inline-block" />
                Git(Basico)
              </div>
              <div className="bg-card rounded-md px-3 py-2 text-sm">
                <FaLaravel className="w-5 h-5 mr-2 inline-block" />
                Laravel(Intermedio)
              </div>
              <div className="bg-card rounded-md px-3 py-2 text-sm">
                <SiPostgresql className="w-5 h-5 mr-2 inline-block" />
                PostgreSQL(Basico)
              </div>
              <div className="bg-card rounded-md px-3 py-2 text-sm">
                <FaVuejs className="w-5 h-5 mr-2 inline-block" />
                Vue(Basico)
              </div>
              <div className="bg-card rounded-md px-3 py-2 text-sm">
                <SiPrisma className="w-5 h-5 mr-2 inline-block" />
                Prisma(Basico)
              </div>
              <div className="bg-card rounded-md px-3 py-2 text-sm">
                <FaReact className="w-5 h-5 mr-2 inline-block" />
                React(Basico)
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2">Educación</h2>
            <div>
              <h3 className="text-base font-bold">Programacion</h3>
              <p className="text-sm text-muted-foreground">Bachillerato CBTIS 252 | 2018 - 2021</p>
            </div>
            <div>
              <h3 className="text-base font-bold">Ing. desarrollo y gestion de software</h3>
              <p className="text-sm text-muted-foreground">Universidad UTH | 2021 - 2024</p>
            </div>
          </section>
        </div>
        </div>
  )
}
