    
import React from 'react';
import './App.css'

function Button(props){
  const handle=(props)=>{
    setTimeout(function(){
      console.log(props.text) 
    },2000)
  }
  const handleClick=props.handleClick===undefined?handle:props.handleClick
  return(
    <button className={props.className} text={props.text} onClick={() =>{ handleClick(props)}}>{props.text}</button>
  )
}
function Comfirm(props){
 return(
   <div>
     <div className="content">{props.info}
     <Button className="cancel" text="取消" />
     <Button className="confirm" text="确定" />
     </div>
    
     <div className="mask"></div>
   </div>
 )
}
export default Comfirm;