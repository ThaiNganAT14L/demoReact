import React, { Component } from 'react';

export default class FormLogin extends Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return(
            <form className = "form-login">
                <div className="signin-email">
                    <div>
                        <label for="email">Email :</label>
                        <input type="text" className="input input-emails" />
                    </div>
                    <div>
                        <label for="pass">Mật Khẩu :</label>
                        <input type="password" className="input input-pass" />
                    </div>
                </div>
                <a href="#" className="forget-pass">Quên mật khẩu?</a>
                <a href="#" className="btn-signIn">
                    Đăng nhập
                </a>
            </form>
        )
    }
}