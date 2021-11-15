import React from 'react';
import { Link } from 'react-router-dom';
import './createitem.scss';
import Navbar from '../landing/header/Navbar.js';
const CreateItem = () => {
    return (
        <>
            <div className="crate-outer">
                <Navbar />
                <section className="live-auctions ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-12">
                                <div className="outer-main">
                                    <div className="ff">
                                        <div className="img">
                                            <img src="\roobin\rhp2.png" alt="" className=" img-sddf" />
                                        </div>
                                        <div className="buttonss">
                                            <button>Dashboard</button>
                                        </div>
                                    </div>
                                    <div className="ff">
                                        <div className="img">
                                            <img src="\roobin\icon2.png" alt="" className=" img-sddf" />
                                        </div>
                                        <div className="buttonss">
                                            <button>Marketplace</button>
                                        </div>
                                    </div>
                                    <div className="ff">
                                        <div className="img">
                                            <img src="\roobin\icon3.png" alt="" className=" img-sddf" />
                                        </div>
                                        <div className="buttonss">
                                            <button>Wallet</button>
                                        </div>
                                    </div>
                                    <div className="ff">
                                        <div className="img">
                                            <img src="\roobin\icon4.png" alt="" className=" img-sddf" />
                                        </div>
                                        <div className="buttonss">
                                            <button>Staking</button>
                                        </div>
                                    </div>

                                    <div className="ff">
                                        <div className="img">
                                            <img src="\roobin\icon5.png" alt="" className=" img-sddf" />
                                        </div>
                                        <div className="buttonss">
                                            <button>Launchpad</button>
                                        </div>
                                    </div>
                                    <div className="ff">
                                        <div className="img">
                                            <img src="\roobin\icon6.png" alt="" className="img-sddf" />
                                        </div>
                                        <div className="buttonss">
                                            <button>News</button>
                                        </div>
                                    </div>
                                    <div className="ff">
                                        <div className="img">
                                            <img src="\roobin\icon7.png" alt="" className="img-sddf" />
                                        </div>
                                        <div className="buttonss">
                                            <button>Minigames</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8 main-image-ss">
                                <div className="image-back-main text-center">
                                    {/* <img src="\roobin\background-new.png" alt="" className="img-fluid img-sddf" /> */}
                                    {/* <h4>THE BEST PLACE TO COLLECT BUY<br></br>AND SELL <span>AWESOME NFT</span></h4> */}
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-0"></div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default CreateItem;