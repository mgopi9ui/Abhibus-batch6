import React, {Component}from 'react';
import './Bus.css';

import abhibuslogo from '../logo.png';

import { withRouter } from 'react-router-dom';

class Bus extends Component {
    constructor(){
        super();
        this.state={
            journyData:{},
            error:false
        }
    }

    handleSubmit(event){
       
        event.preventDefault();
      const{journyData}= this.state;
      const{source, destination, doj}= journyData;
      console.log({})
        if(source && destination && doj){
            const path=`/bus_search/${source}/${destination}/${doj}`
            
            this.props.history.push(path)
        }else{
            this.setState({
                error:true
                })
        }
        console.log(this.state.journyData)
    }

    handleData(event){
        console.log(event.target.value, event.target.name)
       this.setState({
        journyData:{
            ...this.state.journyData,
            [event.target.name]:event.target.value
        }
       })
    }
      render(){
       const{error}=this.state;
       console.log('render')
    return (
    
        <div>
       
    <div className="top-section">
    <h2 className="text-center">Book Bus Tickets</h2>
    <div className="display">
    <h1 >Bus</h1>
    <h1 >Trains</h1>
    <h1 >Hotels</h1>
    <h1 >Rentals</h1>
    </div>
            <form  onSubmit={(event)=>this.handleSubmit(event)}>
            <div className="leaving-form ">
           
            
            <input className="input-form searchinput" type="text"  name="source"placeholder="source"
             onChange={(event)=>this.handleData(event)}/>
            <input className="input-form" type="text" name="destination"placeholder="destination" 
             onChange={(event)=>this.handleData(event)}/>
            <input className="input-form" type="date" name="doj" placeholder="Date of journy"
             onChange={(event)=>this.handleData(event)}/>
            <input className="input-form" type="date" placeholder="Date of Return"/>
            <input className=" searchBtn" type="submit" value="search"/>
            </div>
            </form>
            
            {error?<p className='text-danger text-center'>please enter source and destination</p>:''}
            </div>
         
         <div className="offers">
        <h2>AbhiBus Offers</h2>
        <div className="offersImg">
        <img  src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/24/1632471480/twid-476X220.png" alt="offers"/>
        <img  src="https://static.abhibus.com/busgallery/offerbanners/Feb2022/02/1643746459/476x220.png" alt="offers"/>
        <img  src="https://static.abhibus.com/busgallery/offerbanners/Feb2022/08/1644335815/476x220.png" alt="offers"/>
        <img  src="https://static.abhibus.com/busgallery/offerbanners/Dec2021/26/1640460615/476x220.png" alt="offers"/>
        <img  src="https://static.abhibus.com/busgallery/offerbanners/Feb2022/01/1643694880/476X220.png" alt="offers"/>
        </div>
    </div>
    
      
       <div className="infosection ">
         <div className="avatarItem ">
         <img  src={abhibuslogo} alt="buslogo"/>
         <h2>100000</h2>
         <span>ROUTES</span>
         </div> 
        
         <div className="avatarItem">
         <img  src={abhibuslogo} alt="buslogo"/> 
         <h2>100000</h2>
         <span>ROUTES</span>
        </div>

        <div className="avatarItem">
         <img  src={abhibuslogo} alt="buslogo"/> 
         <h2>2500</h2>
         <span>BUS PARTNERS</span>
        </div>

        <div className="avatarItem">
         <img src={abhibuslogo} alt="buslogo"/>
         <h2>30 SEC</h2>
         <span>INSTANT E-TICKET & REFUND</span> 
        </div>

        <div className="avatarItem">
         <img  src={abhibuslogo} alt="buslogo"/> 
         <h2> CRORE</h2>
         <span>HAPPY CUSTOMERS</span>
        </div>

        <div className="avatarItem">
         <img  src={abhibuslogo} alt="buslogo"/>
         <h2>24/7</h2>
         <span>CUSTOMER CARE</span> 
        </div>
       </div>


        <div className=" row border-dark m-5 border p-3 bg-white d-flex ">
        <div className="col-md-9 ">
        <h1>COVID-19 Related Travel Advisory</h1>
        <p>AbhiBus recommends that all passengers follow <a href="https://www.abhibus.com/corona" target="blank">Covid Safety Guidelines.</a> Maintaining strict safety protocols can ensure that the virus spread is in control. Travellers must make sure to wear double masks, use hand sanitisers and keep their distance from others.</p>
        <p>Look out for our bus services while booking your tickets. These bus services are handpicked and they follow all the safety protocols - regular bus fumigation, availability of hand sanitisers, passenger temperature screening before onboarding, staff that is well educated about the safety protocols.</p>
        <p>Follow our travel updates to know the up to date travel guidelines in the country. Refer to <a href="https://www.abhibus.com/news/state-wise-travel-guidelines-india" target="blank" >State-wise COVID-19 Travel Guidelines in India</a> for detailed information.</p>
        <p>Follow 6 simple steps to protect yourself during bus travel.</p>
        <img src="https://static.abhibus.com/img/homepage/covid-precausion.png" alt="covid rules"/>
       <div className=" text-center col-md-3  ">
       </div>
        <img src="https://static.abhibus.com/img/homepage/home-2.png " width="200px" alt="travel-img"/>
      </div>
      </div>
    
    

    <div className="BookBusTicket">
    <div>
    <h1>
        The Best Way to Book Bus Ticket
    </h1>
    <p>Do you want to know the best way to book tickets online securely and how to book tickets in advance? AbhiBus.com is the best online platform for bus booking, train tickets booking and hotels booking. You can check the amenities provided, compare booking fares, check bus timings in the searched route, other facilities and more with us. You can find an affordable and cost-effective online travel bookings facility at AbhiBus.</p>

       <p> With AbhiBus, online bus ticket booking is now very easy. You simply need to fill in the details of your journey in our search bar (departure city, destination city and the date of journey) click on the search button to get all the bus operators available for booking tickets online. Then, select the bus that best suits your travel needs and securely complete your booking online on AbhiBus.com.</p>
        
      <p>  We would recommend that you book your tickets at least 2 - 3 days in advance so that you can reserve bus or train seats as per your preference and get the best-discounted price on your booking.</p>
        </div>
        <h1>Online Bus Booking Services</h1>
        <p>AbhiBus is India’s leading online bus ticket booking service provider. Check out our great offers and amazing discount coupons to book bus tickets at the lowest price with us. You can check the bus schedules, compare prices, and find all the information you need to plan an ideal and comfortable bus or train journey.</p>

           <p> AbhiBus has simplified the online bus booking process for your travel planning. You can save time and money by using AbhiCash. Book now!!!</p>
            
        <p>Check all your bus or train route options and use the advanced smart filters to accommodate a reliable and comfortable journey as per your scheduled travel plan needs.</p>
        <h1>Why Choose AbhiBus for Bus Ticket Booking?</h1>
        <p>AbhiBus is India’s fastest growing online ticket booking platform offering bus ticket booking, train ticket booking and bus rental services. AbhiBus is the official ticketing partner of several State Road Transport Corporation (SRTC) operators, and you can also book tickets for your favourite private travels at discounted ticket prices. Travellers can also book IRCTC train tickets without any hassle-free services on AbhiBus.</p>

            <p>AbhiBus has an inventory of over 2,500+ bus service partners operating scheduled buses in India. Travellers can easily view their bus schedules, compare their ticket prices, and book bus tickets online directly through AbhiBus. All these buses currently cover more than 100,000 bus routes with reliable transportation in India.</p>
            
            <p>Travellers can book all types of bus booking, from Non-AC buses to Volvo AC buses on AbhiBus.</p>
            <ul>
                <li> Free Cancellation</li>
                <li>Safe-T Bus Partners</li>
                <li> Instant Refunds</li>
                <li>Lowest Bus Ticket Price Assured</li>
                <li> Easy and Quick Bus Booking Online</li>
                <li> Exciting Discounts, Cashback & Bus Ticket Booking Offers</li>
                <li> 24/7 Customer Assistance</li>
             </ul>
             </div>

             <div className="footer-section">
             <h1>Popular Bus Routes</h1>

             <p>ou can check popular bus routes, compare bus schedules, timings and their prices to book bus tickets online. AbhiBus brings you low-cost bus fare for your travel across India. For a seamless travel experience, book bus tickets online with AbhiBus for your bus journey.</p>
             <div className="chatbot">
                 <img className="chatbotImg" src="./chat-pop.png" alt="chat-pop"/>
             </div>
                             <div className="section">
                             <footer>
                             <ul>
                                 <li>Hyderabad to Bangalore Bus</li>
                                 <li>Hyderabad to Bangalore Bus</li>
                                 <li>Hyderabad to Bangalore Bus</li>
                                 <li>Hyderabad to Bangalore Bus</li>
                             </ul>
                             </footer>

                         <footer>
                            <ul>
                                <li>Hyderabad to Bangalore Bus</li>
                                <li>Hyderabad to Bangalore Bus</li>
                                <li>Hyderabad to Bangalore Bus</li>
                                <li>Hyderabad to Bangalore Bus</li>
                            </ul>
                         </footer>

                         <footer>  
                         <ul>
                            <li>Hyderabad to Bangalore Bus</li>
                            <li>Hyderabad to Bangalore Bus</li>
                            <li>Hyderabad to Bangalore Bus</li>
                            <li>Hyderabad to Bangalore Bus</li>
                        </ul>
                    </footer>
                    </div>
                    </div>
                  
    
    </div>
  )
}
}
export default withRouter(Bus);
