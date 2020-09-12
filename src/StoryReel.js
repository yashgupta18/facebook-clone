import React from 'react'
import Story from "./Story";
import "./StoryReel.css";


function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://images.unsplash.com/photo-1510442650500-93217e634e4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=637&q=80"
                profileSrc="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                title="Adam"    
            />
            
            <Story
                image="https://images.unsplash.com/photo-1542444459-b54d41b491c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
                profileSrc="https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
                title="Tom"    
            />

            <Story
                image="https://images.unsplash.com/photo-1521812814624-9571995714fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                profileSrc="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                title="Lucifer"    
            />

            <Story
                image="https://images.unsplash.com/photo-1515733392795-4fbb2be3d1dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
                profileSrc="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80"
                title="Emma"    
            />
        </div>
    )
}

export default StoryReel
