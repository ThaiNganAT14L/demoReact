import React, { Component } from 'react';
import logoFB from '../logo-fb.svg';
import logoGG from '../logo-gg.svg';
export default class LoginWith extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <div className="loginWith">
                <a href="#" className="loginWith-item loginWith-fb">
                    <span className="icon icon-fb">
                        <img src={logoFB} alt=""/>
                    </span>
                    với tài khoản Facebook 
                </a>
                <a href="#" className="loginWith-item loginWith-google">
                    <span className="icon icon-gg">
                        <img src={logoGG} alt=""/>
                    </span>
                    với tài khoản Google 
                </a>
            </div>
        )
    }
}