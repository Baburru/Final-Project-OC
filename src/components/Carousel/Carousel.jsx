import React from 'react'
import '../../styles/Carousel.css'
import SlideCard from './slideCard'

const Carousel = (picList) => {
  const box = document.getElementsByClassName('product-container')
  console.log(box)

  const btnpressprev = () => {
    let width = box[0].clientWidth
    box[0].scrollLeft = box[0].scrollLeft - width
  }

  const btnpressnext = () => {
    let width = box[0].clientWidth
    box[0].scrollLeft = box[0].scrollLeft + width
  }

  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div className="product-container">
        {picList.picList.map((pic, index) => (
          <SlideCard pic={pic} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Carousel
