import React from 'react'
import { useParams } from 'react-router-dom'
import AboutDropdown from '../../components/dropdown/AboutDropdown'
import '../../styles/HouseSheet.css'

import data from '../../data.json'
import Carousel from '../../components/Carousel/Carousel'

export default function HouseSheet() {
  const account = useParams().id

  const obj = data.find((c) => c.id === account)
  const tagList = obj.tags

  console.log(obj)
  return (
    <div>
      <div className="carousel">
        <Carousel picList={obj.pictures} />
      </div>
      <div>
        <div className="info-header">
          <div className="left-content">
            <h1 className="hs-h1">{obj.title}</h1>
            <h2 className="hs-h2">{obj.location}</h2>
            <div className="tag-container">
              {tagList.map((tag) => (
                <p className="tag" key={tag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="right-content">
            <div className="host-infos">
              <p className="host-name">{obj.host.name}</p>
              <img className="host-img" src={obj.host.picture} alt="host PP" />
            </div>
            <div className="rating"></div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <AboutDropdown title="Description" content={obj.description} />
        <AboutDropdown
          title="Equipements"
          type="list"
          content={obj.equipments}
        />
      </div>
    </div>
  )
}
