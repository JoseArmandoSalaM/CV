import Link from 'next/link'
import React from 'react'
import { BsDiagram2 } from 'react-icons/bs'
import { DiPostgresql } from 'react-icons/di'
import { FaLaravel, FaRegFilePdf, FaVuejs } from 'react-icons/fa'
import { RiNextjsLine } from 'react-icons/ri'
import { SiMysql, SiPrisma } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'

export const Proyects = () => {
  return (
    <div>
        <div className='p-10'>
            <h2 className="text-lg font-bold mb-2">Proyectos destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className='bg-div px-6 py-4 items-center justify-between shadow-lg rounded'>
                <div>
                  <div className='text-base font-bold'>Ecommerce</div>
                  <div>Aplicacion de ecommerce para la venta de productos.</div>
                </div>
                <div>
                  <div className="flex items-center mt-4">
                    <RiNextjsLine  className="w-5 h-5" />
                    <SiPrisma  className="w-5 h-5" />
                    <TbBrandTypescript  className="w-5 h-5" />
                    <DiPostgresql className="w-5 h-5" />
                  </div>
                </div>
                <div className='mt-4'>
                  <Link target="_blank" href="https://novedadesluzma.vercel.app/" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
                    View Project
                  </Link>
                </div>
              </div>
              <div className='bg-div  px-6 py-4 items-center justify-between shadow-lg rounded'>
                <div>
                  <div className='text-base font-bold'>Cotizador</div>
                  <div>Una aplicacion web para realizar cotizaciones y generar pdf.</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-4">
                    <FaLaravel  className="w-5 h-5" />
                    <SiMysql  className="w-5 h-5" />
                    <FaRegFilePdf className="w-5 h-5" />
                  </div>
                </div>
                 <div className='mt-4'>
                  <Link target="_blank" href="https://github.com/JoseArmandoSalaM/RM" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
                    View Project
                  </Link>
                </div> 
              </div>
              <div className='bg-div px-6 py-4 items-center justify-between shadow-lg rounded'>
                <div>
                  <div className='text-base font-bold '>Cotizador automatizado</div>
                  <div>Una aplicacion web que genera cotizacion en base a los datos que tiene en las base de datos.</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-4">
                    <FaLaravel  className="w-5 h-5" />
                    <SiMysql  className="w-5 h-5" />
                    <FaRegFilePdf  className="w-5 h-5" />
                  </div>
                </div>
                {/* <div className='mt-4'>
                  <Link target="_blank" href="#" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
                    View Project
                  </Link>
                </div> */}
              </div>
               <div className='bg-div px-6 py-4 items-center justify-between shadow-lg rounded'>
                <div>
                  <div className='text-base font-bold'>Seguimiento de status</div>
                  <div>Aplicacion web y movil que muestra el estado en el que se encuentra su equipo que se esta arreglando.</div>
                </div>
                <div> 
                  <div className="flex items-center gap-2 mt-4">
                    <FaLaravel className="w-5 h-5" />
                    <SiMysql className="w-5 h-5" />
                    <FaVuejs className="w-5 h-5" />
                  </div>
                </div>
                 <div className='mt-4'>
                  <Link target="_blank" href="https://github.com/JoseArmandoSalaM/CompuActual" className="text-sm text-muted-foreground hover:text-foreground" prefetch={false}>
                    View Project
                  </Link>
                </div> 
              </div>
            </div>
        </div>
      
      </div>
  )
}
