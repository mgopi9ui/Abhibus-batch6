import React from 'react'

export default function List(props) {
    const{data}=props;
  return (
    <div>
         {data.map((carInfo,index)=>{
            return <div className='card' key={index}> 
              <p> car name:{carInfo.name}</p>
              <p> car place:{carInfo.place}</p>
              <p> car year:{carInfo.year}</p>
               </div>
          })}

    </div>
  )
}
