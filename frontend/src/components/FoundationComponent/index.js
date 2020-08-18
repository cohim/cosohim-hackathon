import React from 'react'
import foundation1 from '../../assets/images/foundation.png'
import foundation2 from '../../assets/images/ceo1.png'
import foundation3 from '../../assets/images/ceo2.png'


const FoundationComponent = () => {
    return (
        
        <>
            <div className="foundation_article">
                <div className="foundation_article_name" id="foundation">재단소개</div>
                <img src={foundation1} className='foundation_png' alt="foundation_img"/>
            </div>

            <div className="ceo_article">
                <div className="ceo_article_name"id="ceo">CEO 소개</div>
                <img src={foundation2} className='ceo1_png' alt="ceo1_png"/>
                <img src={foundation3} className='ceo2_png' alt="ceo2_png"/>
            </div>
        </>
    )
}

export default FoundationComponent
