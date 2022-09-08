import React from 'react'
import './aboutRight.css'
import Skill from '../skill/skill'


function AboutRight() {
  return (
    <div>
      <Skill skill = "ReactJS" skillLevel={8} style={{ width: '80%' }}></Skill>
      <Skill skill = "React Native" skillLevel = {8} style={{ width: '80%' }}></Skill>
      <Skill skill = "NodeJS" skillLevel = {8} style={{ width: '80%' }}></Skill>
      <Skill skill = "Ruby On Rails" skillLevel = {6.5} style={{ width: '65%' }}></Skill>
      <Skill skill = "Django" skillLevel = {6.5} style={{ width: '65%' }}></Skill>
    </div>
  )
}

export default AboutRight