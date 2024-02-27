import React from 'react'
// import { FontAwesomeIcon } from 'react-fontawesome';


const Navigationbar = (props) => {
    return (
        <div>
            <div className="navbar">

                <div className="nav-logo">
                    <img className='border' src="./images/logo.png" alt="" />
                </div>

                <div className="nav-address border">

                    <p className='add1'>Deliver to</p>
                    <div className="add-icon">
                        <div className='loaction-icons'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvZq_JD9KL428exsBaoJcPh3mCYQLWRlBU76_efUsjdw&s" alt="" />
                        </div>

                        <p className='add2'>India</p>
                    </div>


                </div>

                <div className="nav-search">
                    <select className='search-select' >
                        <option >All</option>
                    </select>

                    <input type="text" placeholder='Search Amazon.in' className='nav-input' />

                    <div className="search-icon">
                        <img src="./images/seach.png" alt="" />
                    </div>
                </div>

                <div className="nav-language border">

                    <div className='nav-language-inner'>
                        <div className="tiranga">
                            <img src="./images/tiranga.png" alt="" />
                        </div>
                        <p className='lan-para'>EN</p>

                        <section>
                            <option value="" className='option'></option>
                        </section>
                    </div>


                </div>

                <div className="sign-Account border" onClick={props.Signinsection}>
                    <div >
                        <p className='sign-in'>Hello,signIn</p>
                    </div>
                    <div><p className='Account' >Account & List</p></div>
                </div>

                <div className="return border" onClick={props.openOrdersection}>
                    <div >
                        <p className="sign-in">Return</p>
                    </div>

                    <div >
                        <p className="Account">& Orders</p>
                    </div>


                </div>

                <div className="Cart border">
                    <div className="icons">

                        <img src="./images/cart.png" alt="" />

                    </div>
                    <div className="c">
                        <p className="Account" >Cart</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navigationbar
