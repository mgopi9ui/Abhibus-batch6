// import React, { Component } from 'react'

// export default class Button extends Component {
//   render() {
//     return (
//       <div>
//          <button type='button' 
//          className={`btn ${this.props.color} `}
//           onClick={()=>this.props.Btnclick(this.props.name)}>
//             {this.props.Lable}</button>
//      </div>
//     )
//   }
// }


import React from 'react'

export default function Button(props) {
  const{color,Btnclick,name,Lable}=props;
  return (
    <div>
       <button type='button' 
         className={`btn ${color} `}
          onClick={()=>Btnclick(name)}>
            {Lable}</button>
    </div>
  )
}



