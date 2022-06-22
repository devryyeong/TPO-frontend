import React, { useState, useEffect } from 'react';
import GoogleLogin  from 'react-google-login';
import axios from 'axios';
import styled from 'styled-components';
import COLORS from '../../styles/colors'
import { FONT_STYLES } from '../../styles/font-style';

import ImgBanner from '../../assets/img-login-banner.png';
import IcGoogle from '../../assets/icons/ic-Google.png';

const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StBanner = styled.img`
  width: 335px;
  height: 343px;
  margin-top: 41px;
  margin-bottom: 35px;
`; 

const Text = {
  Main: styled.div`
    ${FONT_STYLES.B_20}
    margin-bottom: 24px;
  `,
  Sub: styled.div`
    ${FONT_STYLES.M_16}
  `,
  Login: styled.div`
    ${FONT_STYLES.R_14}
    color: ${COLORS.White};
    
  `,
}

const LoginBtn = styled.button`
  width: 335px;
  height: 56px;
  background-color: ${COLORS.MainGray000};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 42px;
`;

const ImgGoogle = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

function Login() {
  const [userObj, setUserObj]=useState({
    email:"",
    name:""
  })

  const onLoginSuccess = (res:any)=>{
    setUserObj({...userObj,
      email:res.profileObj.email,
      name:res.profileObj.name
    })
  }

  return (
    <div>
      <MainWrapper>
        <SubWrapper>
          <StBanner src={ImgBanner} />
          <Text.Main>Recommend Today’s Outfit</Text.Main>
          <Text.Sub>Commend clothes suitable for the</Text.Sub>
          <Text.Sub>temperature of your location</Text.Sub>
        </SubWrapper>

        <GoogleLogin
          clientId='381022787166-3o85p0aqvdk9ts00ch0tqj5oci3q7jjd.apps.googleusercontent.com'
          buttonText="Continue with Google"
          onSuccess={result => onLoginSuccess(result)}
          onFailure={result => console.log(result)}
          cookiePolicy="single_host_origin"
          render={renderProps => (
            <LoginBtn type='button' onClick={renderProps.onClick}>
              <ImgGoogle src={IcGoogle} />
              <Text.Login>Continue with Google</Text.Login>
            </LoginBtn>
          )}
        />
      </MainWrapper>
        
    </div>
  )
}

export default Login;