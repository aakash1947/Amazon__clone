import React from 'react'
import './Ordersection.css'

const Ordersection = () => {
    return (
        <div>
            <div className="Container">

                <div className="Yourorder-search">
                    <div className='heading-h1'>
                        <h1>Your Order</h1>
                    </div>

                    <div className="Seacrh-box">
                        <div>
                            <input type="Search all orders" placeholder='Search All orders' />
                        </div>

                        <div className='Search-btn'>
                            <button>Search Orders</button>
                        </div>
                    </div>
                </div>


                {/* Orders Buy Again Not Yet Shipped Cancelled Orders section */}


                <div className="order-nav">
                    <div className='nav-para'>
                        <div className='Order'><p>Order</p></div>
                        <div><p>Buy Again </p></div>
                        <div><p>Not yet Shipped</p></div>
                        <div><p>Cancelled Orders</p></div>

                    </div>

                    <div id='Horiontal-line'></div>
                </div>

                {/* oder placed button category month wise */}



                <div className='last-month-order'>

                    <div><p><span>60 orders</span> placed in</p></div>
                    <div><button>past 3 month</button></div>



                </div>


                {/* order box */}

                <div className="Order-box-container">
                    <div className="oder-box-navigationbar">
                        <div className='oder-box-navigationbar-2'>

                            <div className='ORDER PLACED'>
                                <div><p>ORDER PLACED</p></div>
                                <div className='bottom-para'><p>24 February 2024</p></div>
                            </div>
                            <div className='TOTAL'>
                                <div><p>TOTAL</p></div>
                                <div className='bottom-para'><p> RS.17,899.00</p></div>
                            </div>
                            <div className='SHIP TO'>
                                <div><p>SHIP TO</p></div>
                                <div className='bottom-para'><p><span>Aakash Gupta</span></p></div>
                            </div>
                        </div>

                    </div>

                    <div className='box'>
                        <div className='box0'>
                            <div className='box1'>
                                <div>
                                    <h2>Arriving tomorrow by 10 PM</h2>
                                </div>

                                <div className='img-brand'>
                                    <div>
                                        <img src="https://m.media-amazon.com/images/I/41Xe96WtZoL._SY90_.jpg" alt="" />
                                    </div>
                                    <div>
                                        <p>OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="box2">

                                <button>Track package</button>
                                <br />
                                <button>Get product support</button>

                                <button>Cancel this delivery</button>
                                <button>Leave seller feedback</button>



                            </div>

                        </div>
                        <div className='last-box'>
                            <p>Archive order</p>
                        </div>
                    </div>
                </div>





            </div>
        </div>
    )
}

export default Ordersection
