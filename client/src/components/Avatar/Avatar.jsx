import React from 'react'

const Avatar=({children,padding,backgroundColor,color,borderRadius,fontSize,cursor,display})=>{
 const style={
  padding,backgroundColor,color:color || 'black',
  borderRadius,fontSize,textAlign:'center',
  cursor: cursor || null,display,textDecoration:'none'
 }




 return( <div style={style}>
{children}

  </div>
 )
}

export default Avatar
