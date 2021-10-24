import React from "react";

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    //   props.alert && ..... means agar props.alert null h to 
    //   kuch return mt kro and if it's not null return the part after &&.
   props.alert && 
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        
      </div>
   
  )
}

export default Alert
