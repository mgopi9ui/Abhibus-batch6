import React, { Component } from 'react';
import axios from "axios";
export default class Buslist extends Component {
  constructor(){
    super();
    this.state={
      buslist:[],
      message: ''
    }
  }

   async componentDidMount(){
    const{source,destination}=this.props.match.params;
    const url=`http://localhost:8081/list/${source}/${destination}`
    console.log({url})
    const resp =await axios.get(url);
  //   .then(data=>this.setState({buslist:data.data}))
       this.setState({buslist:resp.data})
   }

    handleBooking=async(data)=>{
      console.log('data', data)
  const resp = await axios.post('http://localhost:8081/book',{
      body:data
    });
    // .then(data=>this.setState({
    //   message:data.data.msg
    // }))
    this.setState({
        message:resp.data.message
       })
    
  }

  render() {
    const { buslist, message } = this.state;
   console.log(this.props.match.params) 
   const { source, destination } = this.props.match.params;
    return (
      <div>
          { buslist.length ? <h4>showing busses from <b>{source}</b> to <b>{destination}</b></h4>:'' }
          {message ?<p className="text-success text-center">{message}</p>:''}
        {buslist.length ? buslist.map((bus,index) => {
           return(
           <div className='card p-2 m-2 ' key={index}>
            <h4>{bus.type}</h4>
            <p>{bus.time}</p>
            <div className='d-flex justify-content-between'>
            <b>${bus.price}</b>
            <button type='button' className='btn btn-danger' onClick={()=>this.handleBooking(bus)}>Book Now</button>
            </div>
           </div>
           )

          }):<h4 className='text-center text-danger'>Currently no buses available</h4>}
        




      </div>
    )
  }
}
