import React, { Component } from 'react';
import LoginWith from './loginWith';
import FormLogin from './formLogin';

class LoginHUC extends Component{
    // constructor(props){
    //     super(props);
    //     // this.state = {

    //     // };
    // }
    render(){
        return(
            <body>
                <header className="header-login">
                    <a href="#" class="brand">Brand</a>
                </header>
                <div className="main-login">
                    <div className="bottom-header">
                        <h1 className="tittle">
                            Đăng nhập để tiếp tục
                        </h1>
                        <LoginWith/>
                        <h2 className="tittle choose-tittle">
                            hoặc đăng nhập bằng email
                        </h2>
                        <FormLogin/>
                        <div class="href-register">
                            Chưa có tài khoản?
                            <a href="#">Đăng ký!</a>
                        </div>
                        <div class="footer-main">
                            <a class="login-footer" href="#">Thỏa Thuận Sử Dụng</a>
                            <a href="#" class="login-footer">Quy Định Bảo Mật</a>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default LoginHUC