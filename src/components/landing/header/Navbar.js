import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.scss';
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../../hooks/useAuth';
import { fortmatic } from '../../../utils/web3React';
import Signature from '../../../SignMessage/Signature';
import { toast } from 'react-toastify';
import useEthBalance from '../../../hooks/dataFetcher';
import { useHistory } from 'react-router';

const connectorsByName = {
    Fortmatic: fortmatic,
};

const Navbar = () => {

    const context = useWeb3React();
    const { account, activate, deactivate } = context;
    // const [ account, setc] =useState(123);
    const [username, setUserName] = useState("Your Account");
    const [userbalance, setUserBalance] = useState("0");
    const { userSign } = Signature(account);
    const { login, logout } = useAuth();
    const history = useHistory();
    const ethBalance = useEthBalance();

    // console.log("ethBalance", ethBalance/ 10 ** 18)
    const balance = (ethBalance / 10 ** 18).toFixed(5);
    // setUserBalance(balance);

    const connectMetaMask = async () => {
        try {
            localStorage.setItem('injected', "injected")
            if (account) {
                logout()
            } else {
                login("injected");
            }
        } catch (e) {
            console.log(e)
        }
    }
    // console.log("account", account);
    const walletConnect = async () => {
        localStorage.setItem('walletconnect', "walletconnect")
        if (account) {
            logout()
        } else {
            login("walletconnect");
        }
    }
    const FormaticWallet = () => {
        localStorage.setItem('formatic', "formatic")
        if (account) {
            logout()
        } else {
            activate(connectorsByName.Fortmatic)
        }
    }
    const UserSignWindow = async () => {

        const tx = await userSign()
        console.log("tx==========", tx)
        if (tx) {
            console.log("if tx==========", tx)
            history.push('/createnft')
        }
        else {
            console.log("tx==========", tx)
            history.push('/')
            toast.error("Sign Wallet First")
        }
    }


    return (
        <>

            <section className="main-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-11 m-auto">
                            <nav className="navbar ptb20 navbar-expand-xl">
                                
                                <NavLink to="/" className="navbar-brand">
                                    <img src="\roobin\logo.png" alt="" className="img-fluid" />
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="mdhfy"> <i class="fas fa-bars"></i></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="search-in">
                                    <form className="form-inline my-2 my-lg-0">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>

                                    </form>
                                    <div className="icons-search">
                                    <i class="fas fa-search"></i>
                                    </div>
                                    </div>
                                    <ul className="navbar-nav ml-auto">

                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Discover</a>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Nftswap">Activity</Link>
                                        </li>
                                       
                                        <li className="nav-item">
                                            <Link to="/profile" className="nav-link" >Pages</Link>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contact</a>
                                        </li>
                                        <li>
                                        <button className="buttonssre">CONNECT WALLET</button>
                                        </li>
                                    </ul>
                                   
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Navbar;
