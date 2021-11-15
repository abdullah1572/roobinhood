import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AddFollower, RemoveFollower, GetNumberOfFollowers, GetAlreadyFollowed } from '../../redux/action';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useHistory } from "react-router-dom";
import './profile.scss';
import Navbar from '../landing/header/Navbar.js';
const Profile = () => {
    return (
        <>
            <div className="profile-mains">
            <Navbar />
                <section className="profiles-back">
                    <div className="container profiless">
                        <div className="action-button">
                            {/* <button type="button" className="act-but"></button> */}
                            <ul className="list-inline">
                                {/* <li className="list-inline-item">
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1" className="act-but">Edit cover photo <img src="\bluemoon-nft\profiles\profile-1.png" alt="" className="img-fluid" /></label>
                                        <input type="file" class="form-control-file d-none" id="exampleFormControlFile1" />
                                    </div>
                                </li> */}
                                {/* <li className="list-inline-item">
                                    <Link to={`/editprofile/${walletAddress}`}><button type="button" className="act-but">Edit profile<img src="\bluemoon-nft\profiles\profile-2.png" alt="" className="img-fluid" /></button></Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="Profile-main-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 p-0">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-12 col-12 main-profile-pad">
                                        <div className="side-profilessss">
                                            <div className="main-image-d text-center">
                                                {/* <img alt="" src={userDetail?.ipfsImageUrl} className="img-fluid side-pf-img" /> */}
                                                <h2>svdshdbwhehsbxb23ebwebs..</h2>
                                                <h6>sdhds7373cshcv...
                                                    
                                                        <button><img alt="" src="\bluemoon-nft\profiles\blue-cir.png" className="img-fluid" /></button>
                                                 
                                                </h6>
                                                <p>dsdcdcdcdcdc</p>
                                               
                                                    <a target="_blank" href="#"className="linkkks"><img alt="" src="\bluemoon-nft\profiles\earth1.png" className="img-fluid " />sds</a>
                                                <div className="followw">
                                                    <button className="fllow" type="button" >Follow</button> 

                                                    {/* <button className="fllow" type="button" >UnFollow</button> */}
                                                    <button className="uplode" type="button"><img alt="" src="\bluemoon-nft\profiles\follow-next-1.png" className="" /></button>
                                                    <button className="uplode" type="button"><img alt="" src="\bluemoon-nft\profiles\follow-next-2.png" className="" /></button>
                                                </div>
                                                <div className="socialss">
                                                
                                                        <a href="#" target="_blank"><img alt="" src="\bluemoon-nft\profiles\tiwitters.png" className="img-fluid " /></a>
                                                    {/* <a className="link-main-oad"><img alt="" src="\bluemoon-nft\profiles\instaa.png" className="img-fluid " /></a> */}
                                                    {/* <a><img alt="" src="\bluemoon-nft\profiles\facebooks.png" className="img-fluid " /></a> */}
                                                </div>
                                                <h4>Member since Mar 15, 2021</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-8 col-md-12  col-12  main-paddss">
                                        <div className="right-profile-slider">
                                            <div className="row">
                                                <div className="col-"></div>
                                            </div>
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="onsale-tab" data-toggle="tab" href="#onsale" role="tab" aria-controls="onsale" aria-selected="true">On Sale</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="collectible-tab" data-toggle="tab" href="#collectible" role="tab" aria-controls="collectible" aria-selected="false"  >Collectibles</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="created-tab" data-toggle="tab" href="#created" role="tab" aria-controls="created" aria-selected="false">Created</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="likes-tab" data-toggle="tab" href="#likes" role="tab" aria-controls="likes" aria-selected="false" >Likes</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#following" role="tab" aria-controls="contact" aria-selected="false" >Following</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#followers" role="tab" aria-controls="followers" aria-selected="false"  >Followers</a>
                                                </li>
                                            </ul>
                                            <div class="tab-content" id="myTabContent">
                                                <div class="tab-pane fade show active" id="onsale" role="tabpanel" aria-labelledby="onsale-tab">
                                                    <div className="row">
                                                       sdsdsd
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="collectible" role="tabpanel" aria-labelledby="collectible-tab">
                                                    <div className="row">
                                                        sdsdsd

                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="created" role="tabpanel" aria-labelledby="created-tab">
                                                    <div className="row">
                                                        sdsds
                                                    </div>
                                                </div>
                                             
                                                <div class="tab-pane fade" id="likes" role="tabpanel" aria-labelledby="likes-tab">
                                                    <div className="row">
                                                        sdsdsd
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="following" role="tabpanel" aria-labelledby="followers-tab">
                                                    <div className="folowers">
                                                        <div className="followers-list">
                                                            <div className="row">
                                                               dsdd
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="followers" role="tabpanel" aria-labelledby="followers-tab">
                                                    <div className="folowers">
                                                        <div className="followers-list">
                                                            <div className="row">
                                                            sdsdsd
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Profile;