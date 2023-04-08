import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios, { AxiosRequestConfig } from 'axios';
import {BrowserRouter as Link, useNavigate} from 'react-router-dom';

import { Pagination, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import COLORS from '../../styles/colors'
import { FONT_STYLES } from '../../styles/font-style';
import Location from '../Main/Location';

import IcLocation from '../../assets/icons/ic-location.png';
import IcAlarm from '../../assets/icons/ic-alarm.png';
import IcSettings from '../../assets/icons/ic-settings.png';
import IcDivision from '../../assets/icons/ic-division-white.png';
import IcDivisionGray from '../../assets/icons/ic-division-gray.png';
import IcClock from '../../assets/icons/ic-clock.png';
import MainSample from '../../assets/img-main-sample.png';

import DummyCard from '../../assets/img-dummy-card.png';
import o1 from '../../assets/image-outer/1.jpg';
import o2 from '../../assets/image-outer/2.jpg';
import o3 from '../../assets/image-outer/3.jpg';
import o4 from '../../assets/image-outer/4.jpg';
import o5 from '../../assets/image-outer/5.jpg';
import o6 from '../../assets/image-outer/6.jpg';
import o7 from '../../assets/image-outer/7.jpg';
import o8 from '../../assets/image-outer/8.jpg';
import o9 from '../../assets/image-outer/9.jpg';
import o10 from '../../assets/image-outer/10.jpg';
import o11 from '../../assets/image-outer/11.jpg';

import b1 from '../../assets/image-onePiece/b1.jpg';
import b2 from '../../assets/image-onePiece/b2.jpg';
import b3 from '../../assets/image-onePiece/b3.jpg';
import b4 from '../../assets/image-onePiece/b4.jpg';
import b5 from '../../assets/image-onePiece/b5.jpg';
import b6 from '../../assets/image-onePiece/b6.jpg';
import b7 from '../../assets/image-onePiece/b7.jpg';
import b8 from '../../assets/image-onePiece/b8.jpg';
import b9 from '../../assets/image-onePiece/b9.jpg';
import b10 from '../../assets/image-onePiece/b10.jpg';
import b11 from '../../assets/image-onePiece/b11.jpg';
import b12 from '../../assets/image-onePiece/b12.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imgData from '../../utils/imgData';
import imgOuter from '../../utils/imgOuter';
import imgBottom from '../../utils/imgBottom';

const outerImgs = [o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11];
const onePieceImgs= [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12];

  const Styled = {
    Wrap: styled.div`
    `,
    System: styled.div`
      width: 100%;
      height: 44px;
      background-color: ${COLORS.Gray100};
    `,
    Header: styled.div`
      height: 52px;
      background-color: ${COLORS.Gray200};
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    LocationTxt: styled.div`
      ${FONT_STYLES.R_12}
    `,
    LeftWrap: styled.div`
      display: flex;
    `,
    RightIconWrap: styled.div`
      display: flex;
    `,
  }

  const Icon = {
    Location: styled.img`
      width: 16px;
      height: 16px;
      margin: 0px 20px;
    `,
    Alarm: styled.img`
      width: 16px;
      height: 16px;
      margin-right: 11px;
    `,
    Settings: styled.img`
      width: 16px;
      height: 16px;
      margin-right: 20px;
    `,
  };

  const Banner = {
    MainImg: styled.div`
      width: 100%;
      height: 100%;
      background-image: url(${MainSample});
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 25px;
    `,
    TextWrap: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-bottom: 20px;
    `,
    WhiteArea: styled.div`
      width: 335px;
      height: 63px;
      background-color: ${COLORS.White};
      border-radius: 100px;
      text-align: center;
      align-items: center;
      justify-content: center;
      display: flex;
    `,
    BannerWrap: styled.div`
      display: flex;
      height: 375px;
      justify-content: center;
    `,

    MainText: styled.div`
      color: ${COLORS.White};
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      ${FONT_STYLES.B_14}
      margin-bottom: 14px;
    `,
    SubTextWrap: styled.div`
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    `,
    SubTextWrap2: styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    SubText: styled.div`
      display: flex;
      justify-content: center;
      color: ${COLORS.White};
      ${FONT_STYLES.R_11}
      margin-bottom: 8px;
    `,
    SubNumber: styled.div`
      justify-content: center;
      color: ${COLORS.White};
      ${FONT_STYLES.B_12}
    `,
    Division: styled.img`
      width: 0.5px;
      height: 31px;
      margin: 0px 62.25px;
    `,
    DivisionGray: styled.img`
      width: 0.5px;
      height: 31px;
      margin: 0px 16.5px;
    `,
    Clock: styled.img`
      width: 10.42;
      height: 9.71px;
      margin-right: 3px;
    `,
    Time: styled.div`
      ${FONT_STYLES.M_11}
      margin-right: 16px;
    `,
    Temperature: styled.div`
      ${FONT_STYLES.B_20}
    `,
  };

  const Component = {
    Margin: styled.div`
      margin: 0px 20px;
    `,
  };

  const Category = {
    TitleTxt: styled.div`
      ${FONT_STYLES.B_16}
    `,
    MoreTxt: styled.div`
      ${FONT_STYLES.R_11}
    `,
    Header: styled.div`
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
    `,
  }

  const ImgSwiper = {
    Wrap: styled.div`
      height: 156px;
    `,
    Card: styled.img`
      height: 144px;
    `,
  }


function Home(props) {

    const navigate = useNavigate()

  const variable = {
    data: {
      lat: 37,
      lon: 127
    }
  };

  const fashionVariable = {
    data: {
      style: 'office',
      max: 14,
      min: 50
    }
  };

  // lat,lon: 사용자의 위도, 경도 params 필요
  // http://localhost:3000/api/weather?lat=37.56667&lon=126.97806
  useEffect(() => {
    axios.get('http://readygo-tpo.p-e.kr:8080/api/weather?lat=37.56667&lon=126.97806', variable)
      .then((response) => {
        console.log(response.data);
      })
  }, [])

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/fashion?style="casual"&style="office"&min=18&max=29', fashionVariable)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  // }, [])
  
  
  return (
    <div>
      {/* <Styled.System /> */}
      <Styled.Header>
        <Styled.LeftWrap>
          <Icon.Location src={IcLocation} />
          <Styled.LocationTxt>Dongjak-gu, Sangdo-dong</Styled.LocationTxt>
        </Styled.LeftWrap>

        <Styled.RightIconWrap>
          <Icon.Alarm src={IcAlarm} />
          {/* <Link to='../Setting'> */}
            <Icon.Settings src={IcSettings} onClick={ () => {
            navigate('../Setting')
          }}/>
          {/* </Link> */}
        </Styled.RightIconWrap>
      </Styled.Header>

      <Banner.MainImg>
        <Banner.BannerWrap>
          <Banner.TextWrap>
            <Banner.MainText>Now</Banner.MainText>
            <Banner.MainText style={{fontSize: 32}}>28°C</Banner.MainText>

            <Banner.SubTextWrap>
              <Banner.SubTextWrap2>
                <Banner.SubText>Humidity</Banner.SubText>
                <Banner.SubNumber>50%</Banner.SubNumber>
              </Banner.SubTextWrap2>

              <Banner.Division src={IcDivision}/>

              <Banner.SubTextWrap2>
                <Banner.SubText>Weather</Banner.SubText>
                <Banner.SubNumber>Cloudy</Banner.SubNumber>
              </Banner.SubTextWrap2>
            </Banner.SubTextWrap>

            <Banner.WhiteArea>
              <Banner.Clock src={IcClock} />
              <Banner.Time>12 PM</Banner.Time>
              <Banner.Temperature>10°C</Banner.Temperature>
              <Banner.DivisionGray src={IcDivisionGray} />
              <Banner.Clock src={IcClock} />
              <Banner.Time>7 PM</Banner.Time>
              <Banner.Temperature>13°C</Banner.Temperature>
            </Banner.WhiteArea>
          </Banner.TextWrap>
        </Banner.BannerWrap>
      </Banner.MainImg>

      <Component.Margin>
        <Category.Header>
          <Category.TitleTxt>Top</Category.TitleTxt>
          <Category.MoreTxt onClick={ () => {
            navigate('/contents')
          }}>More</Category.MoreTxt>
        </Category.Header>

        <ImgSwiper.Wrap>
          <Swiper
          slidesPerView={3}
          spaceBetween={5}
          modules={[Pagination, FreeMode]}
          loop
          // freeMode
          >
          {imgData.map((v) => (
              <SwiperSlide><ImgSwiper.Card src={v.img}/></SwiperSlide>
          ))}
        </Swiper>
      </ImgSwiper.Wrap>

      <Category.Header>
          <Category.TitleTxt>Outer</Category.TitleTxt>
          <Category.MoreTxt>More</Category.MoreTxt>
        </Category.Header>

        <ImgSwiper.Wrap>
          <Swiper
          slidesPerView={3}
          spaceBetween={5}
          modules={[Pagination, FreeMode]}
          loop
          // freeMode
          >

          {outerImgs.map((v) => (
              <SwiperSlide><ImgSwiper.Card src={v}/></SwiperSlide>
          ))}
        </Swiper>
      </ImgSwiper.Wrap>

      <Category.Header>
          <Category.TitleTxt>One Piece</Category.TitleTxt>
          <Category.MoreTxt>More</Category.MoreTxt>
        </Category.Header>

        <ImgSwiper.Wrap>
          <Swiper
          slidesPerView={3}
          spaceBetween={5}
          modules={[Pagination, FreeMode]}
          loop
          // freeMode
          >

          {onePieceImgs.map((v) => (
              <SwiperSlide><ImgSwiper.Card src={v}/></SwiperSlide>
          ))}
        </Swiper>
      </ImgSwiper.Wrap>
    </Component.Margin>
    </div>
  )
}

export default Home;
