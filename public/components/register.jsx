import React from 'react';
import {Link} from 'react-router';

class Logo extends React.Component {
  render() {
    return (
      <div><h3 className="swag-name">Swag Drogue</h3>
        <hr/>
      </div>
    )
  }
}
class Register extends React.Component {
  render() {
    return (
      <div className="part-two">
        <div className="enter-form">
          <span className="register-one"> 注册Swag Drouge  </span>
          <span className="register-two"><Link to="#"> 登录</Link></span>
        </div>
        <div className="enter-button">
          <ul>
            <li className="edit-lines"><img src="images/reg.png"/>
              <input type="text" placeholder="请输入注册名" className="register-name"/>
            </li>
            <li className="edit-lines"><img src="images/key.png"/>
              <input type="password" placeholder="请输入你密码" className="register-passWord"/>
            </li>
            <li className="edit-lines"><img src="images/conKey.png"/>
              <input type="confirmPassword" placeholder="请确认你的密码" className="register-conPassWord"/>
            </li>
          </ul>
        </div>
        <button className="button-confirm" type="button"><Link to="#">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</Link>
        </button>
      </div>


    )
  }
}
class RegBody extends React.Component {
  render() {
    return (
      <div>
        <Logo/>
        <Register/>
      </div>

    )
  }
}

export default RegBody