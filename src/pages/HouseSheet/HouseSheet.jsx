import React from 'react'
import { useParams } from 'react-router-dom'
import AboutDropdown from '../../components/dropdown/AboutDropdown'

import data from '../../data.json'

export default function HouseSheet() {
  const account = useParams().id

  const obj = data.find((c) => c.id === account)
  const tagList = obj.tags

  console.log(obj)
  return (
    <div>
      <div className="carousel"></div>
      <div>
        <div className="left-content">
          <h1>{obj.title}</h1>
          <h2>{obj.location}</h2>
          <div className="tag-container">
            {tagList.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
        </div>
        <div className="right-content">
          <div className="host-infos">
            <p>{obj.host.name}</p>
            <img src={obj.host.picture} alt="host PP" />
          </div>
          <div className="rating"></div>
        </div>
      </div>
      <div className="main-content">
        <AboutDropdown title="Description" content={obj.description} />
        <AboutDropdown title="Equipements" content={obj.equipments} />
      </div>
    </div>
  )
}
