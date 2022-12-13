import React from 'react'
import "../RightSidebar/RightSidebar.css"
import Comment from '../../logo/comment.svg'
import Pen from '../../logo/pen.svg'
import Overflow from "../../logo/stack-overflow.svg"
const Widget = () => {
  return (
   <div className='widget'>
    <h4>The Overflow Blogs</h4>
    <div className='right-sidebar-div-1'>
     <div className='right-sidebar-div-2'>
  <img  src={Pen} alt="pen" style={{width:'17px'}}  />
  <p>Observability is the key to future of software and your DevOps carrer</p>

     </div>
     <div className='right-sidebar-div-2'>
  <img src={Pen} alt="pen" style={{width:'17px'}}  />
  <p>Podcast 374: How valuable is your screen name?</p>

     </div>
     </div>
     <h4>Featured On Meta</h4>
    <div className='right-sidebar-div-1'>
     <div className='right-sidebar-div-2'>
  <img src={Comment} alt="pen" style={{width:'17px'}}  />
  <p>Review queue workflows-Final release...</p>

     </div>
     <div className='right-sidebar-div-2'>
  <img src={Comment} alt="pen" style={{width:'17px'}}  />
  <p>Please welcome Valued Associates #958 -V2blast #959- SpencerG</p>

     </div>
     <div className='right-sidebar-div-2'>
  <img src={Overflow} alt="overflow" style={{width:'17px'}}  />
  <p>Outdated Aswers:accepted answer is now unpinned on Stack Overflow</p>

     </div>
     </div>
     <h4>Hot Meta Posts</h4>
    <div className='right-sidebar-div-1'>
     <div className='right-sidebar-div-2'>
  <p>38</p>
  <p>Why was this spam flag declined.yet the question marked as spam?</p>

     </div>
     <div className='right-sidebar-div-2'>
<p>20</p>
  <p>What is the best course of action when a user has high enough rep to...</p>

     </div>
     <div className='right-sidebar-div-2'>
<p>14</p>
  <p>Is the link to the "How to ask" help page a useful comment?</p>

     </div>



     </div>


    
   </div>
  )
}

export default Widget
