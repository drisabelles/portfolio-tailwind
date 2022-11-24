import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import python from '../assets/python.png'
import styledcomponents from '../assets/styledcomponents.png'

const Experience = () => {

  const technologies = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-600'
    },
    {
      id: 6,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-500'
    },
    {
      id: 7,
      src: styledcomponents,
      title: 'Styled Components',
      style: 'shadow-pink-500'
    },
    {
      id: 8,
      src: python,
      title: 'Python',
      style: 'shadow-yellow-500'
    },
  ]

  return (
    <div
      name='experiência'
      className='bg-gradient-to-b from-gray-300 to-white w-full h-screen md:h-screen'
    >
      <div
        className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black'
      >
        <div>
          <p              
            className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'
          >
            Experiência
          </p>
          <p
            className='py-6'
          >
            Estas são as tecnologias com as quais já trabalhei
          </p>
        </div>
        <div className='items-center w=full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {technologies.map(({id, src, title, style}) => (
            <div 
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} 
            >
            <img 
              src={src} 
              alt='' 
              className='w-20 mx-auto'
            />
            <p className='mt-4'>{title}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience