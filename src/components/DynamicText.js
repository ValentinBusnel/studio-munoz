import React, { useEffect } from 'react'

const DynamicText = () => {
  const array = ['simple', 'iconic', 'unique', 'special']
  let wordIndex = 0
  let letterIndex = 0

  useEffect(() => {
    const target = document.getElementById('text-target')

    const createLetter = () => {
      const letter = document.createElement('span')
      target.appendChild(letter)

      letter.classList.add('letter')
      letter.style.opacity = '0'
      letter.style.animation = 'anim 5s ease forwards'
      letter.textContent = array[wordIndex][letterIndex]

      setTimeout(() => {
        letter.remove()
      }, 2000)
    }

    const loop = () => {
      setTimeout(() => {
        if (wordIndex >= array.length) {
          // eslint-disable-next-line
          wordIndex = 0;
          // eslint-disable-next-line
          letterIndex = 0;
          loop()
        } else if (letterIndex < array[wordIndex].length) {
          createLetter()
          letterIndex++
          loop()
        } else {
          letterIndex = 0
          wordIndex++
          setTimeout(() => {
            loop()
          }, 2000)
        }
      }, 80)
    }
    loop()
  }, [])

  return (
    <span className='dynamic-text'>
      <span className='simply'>Something</span>
      <span id='text-target' />
    </span>
  )
}

export default DynamicText
