import React from 'react';
import Navigation from '../components/Navigation'
import members from '../data/team.json'
import TeamMember from '../components/TeamMember';


function Team() {
return (
    <div className="team">
      
      <div className="teamContainer">
      {
      members.member.map(member =>{
      return <TeamMember 
      key={member.id} img={member.photo}name={member.name} age={member.age} 
      height={member.height} weight={member.weight} mvp={member.mvp}/>
      })
    }
    </div>
    </div>
  );  
}

export default Team;