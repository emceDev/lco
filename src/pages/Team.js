import React from 'react';
import TeamMember from '../components/TeamMember';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const members = require("../data/team.json")


function getPhoto(){
  return[{
    src:require("../images/member1.png")
  },
  {
    src:require("../images/member1.png")
  },
  {
    src:require("../images/member1.png")
  },
  {
    src:require("../images/member1.png")
  },
  {
    src:require("../images/member1.png")
  },
  {
    src:require("../images/member1.png")
  }]
}
const photo = getPhoto()
function Team() {
return (
    <div className="team">
      <div className="teamContainer">
      {
      members.member.map(member =>{
      return <TeamMember 
      key={member.id} img={photo[member.id].src}name={member.name} age={member.age} 
      height={member.height} weight={member.weight} mvp={member.mvp}/>
      })
    }
    </div>
    </div>
  );  
}

export default Team;