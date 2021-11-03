import React from 'react'
import "./team-member.css"

const TeamMember = (props) => {
    return (
        <div className="team-card">
            <div className="profile-pic" style={{ backgroundImage: `url(${props.imageUrl})` }} />
            <div className="member-name">{props.name}</div>
            <div className="member-role">{props.role}</div>
        </div>
    )
}

export default TeamMember
