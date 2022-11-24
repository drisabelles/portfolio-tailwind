import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-white to-gray-300 via-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'
      >
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold  text-black'>
            Olá! Eu sou uma Desenvolvedora Full-Stack.
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            Meu nome é Isabelle Ribeiro e possuo 6 anos de experiência e estudos em desenvolvimento e design de softwares.
          </p>
          <div>
            <Link 
              to='portfólio' 
              smooth
              duration={500}        
              className='group text-white w-fit px-6 py-3 y-2 flex items-center rounded-md bg-gradient-to-r from-red-400 to-rose-300 cursor-pointer'
            >
              Portfólio
              <span 
                className='group-hover:rotate-90 duration-300'>
              <MdOutlineKeyboardArrowRight 
                size={25} 
                className=''/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img 
            src={HeroImage} 
            alt='foto da autora branca, de cabelos castanhos escuros e olhos também castanhos escuro na frente de um fundo bege'
            className='rounded-2xl mx-auto w-2/3 md:w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Home