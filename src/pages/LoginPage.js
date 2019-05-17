import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'react-admin';

// Libs for login 
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
// socials icons
import {FaFacebookSquare, FaGoogle} from 'react-icons/fa';


import './LoginPage.css'



const response = (site,response) => {
  console.log(`${site} : ${JSON.stringify(response,null,2)}`);
}


class LoginPage extends Component {
 
    submit = (site,response) => {  
      const SiteRes = {site, response}
      this.props.userLogin(SiteRes);
    }

    render() {
        return (
            <div className="containerPage">
              <div className="containerSocialLogins">
                <div className="titleSocialLogins">
                  <h2>SYSTEM ADMIN USERS</h2>
                  <h4>Log in with some of your social accounts.</h4>
                </div>
                <form className="cantainerButtons">
                  <GoogleLogin
                    clientId="207942292890-i90sku9gc0spm363sghe2gj6c2jfl07n.apps.googleusercontent.com" 
                    onSuccess={(response)=>{ this.submit("Google",response) }}
                    onFailure={(res)=>response('Google',res)}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                      <div className="ButtonLogin btnGoogle" onClick={renderProps.onClick} disabled={renderProps.disabled} >  <FaGoogle />  <span className="textBtnLogin"> Continue with Google  </span> </div>
                      )}
                  />
                  <FacebookLogin 
                    appId="827051914347032"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={res=>this.submit("Facebook", res)}  
                    render={renderProps => (
                        <div className="ButtonLogin btnFacebook" onClick={renderProps.onClick} disabled={renderProps.disabled} > <FaFacebookSquare />  <span className="textBtnLogin"> Continue with Facebook  </span> </div>
                        )}
                    />
                </form>
              </div>
            </div>
        );
    }
};

export default connect(undefined, { userLogin })(LoginPage);
