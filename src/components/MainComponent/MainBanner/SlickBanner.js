import React, {Component} from 'react'
import Slider from 'react-slick';

import mini1 from "../../../assets/images/banner3.png"
import mini2 from "../../../assets/images/banner2.png"
import mini3 from "../../../assets/images/banner1.png"

export default class SlickBanner extends Component{
    render() {
      const settings = {
        slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
        speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
        dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 5000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
        
        // responsive: [ // 반응형 웹 구현 옵션
        //     {  
        //         breakpoint: 960, //화면 사이즈 960px
        //         settings: {
        //             //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        //             slidesToShow:3 
        //         } 
        //     },
        //     { 
        //         breakpoint: 768, //화면 사이즈 768px
        //         settings: {	
        //             //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        //             slidesToShow:2 
        //         } 
        //     }
        // ]
        className:"slide-item",
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: true

      };
      return (
        <div className={`slider_container}`}>
          <Slider {...settings}>
            <div className="slide_content">
                <img src={mini1} alt="slide_img" width="100%" height="100%" />  
            </div>
            <div className="slide_content">
              <img src={mini2} alt="slide_img" width="100%" height="100%" />
            </div>
            <div className="slide_content">
              <img src={mini3} alt="slide_img" width="100%" height="100%" />
            </div>
          </Slider>
        </div>
      );
    }
}
