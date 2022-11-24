import React from 'react'
import conveccao from '../assets/portfolio/conveccao.jpg'
import goodTicket from '../assets/portfolio/goodTicket.png'
import personalPage from '../assets/portfolio/personalPage.png'
import spaceTourism from '../assets/portfolio/spaceTourism.png'
import sirius from '../assets/portfolio/sirius.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: conveccao,
      hrefdemo: 'https://conveccao-jsh8286qk-conveccaofatec.vercel.app/',
      hrefcode: 'https://github.com/Conveccao/conveccao-frontend'
    },
    {
      id: 2,
      src: goodTicket,
      hrefcode: 'https://github.com/Grupo2-DSM/Api-3dsm-2022'
    },
    {
      id: 3,
      src: personalPage,
      hrefdemo: 'https://drisabelles.github.io/udemy-personal-page/',
      hrefcode: 'https://github.com/drisabelles/udemy-personal-page'
    },
    {
      id: 4,
      src: spaceTourism,
      hrefdemo: 'https://frontmentor-space-tourism.netlify.app/',
      hrefcode: 'https://github.com/drisabelles/frontmentor-space-tourism'
    },
    {
      id: 5,
      src: sirius,
      hrefcode: 'https://github.com/grupo-3dsm/Sirius-repoP.I'
    },
  ]

  return (
    <div 
      name='portfólio' 
      className='bg-gradient-to-b from-white to-gray-300 w-full text-black md:h-screen'
    >
      <div 
        className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
      >
        <div className='pb-8'>
          <p 
            className='text-4xl font-bold inline border-b-4 border-gray-500'
          >
            Portfólio
          </p>
          <p className='py-6'>
            Dê uma olhada em alguns dos meus projetos
          </p>
        </div>

        <div className='items-center grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {portfolios.map(({id, src, hrefdemo, hrefcode}) => (
            <div 
              key={id} 
              className='shadow-md shadow-gray-600 rounded-lg'
            >
              <img 
                src={src} 
                alt='' 
                className='rounded-md duration-200 hover:scale-105'
              />
              <div 
                className='flex items-center justify-center'
              >
                <a href={hrefdemo}>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Visualizar</button>
                </a>
                <a href={hrefcode}>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Código</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio