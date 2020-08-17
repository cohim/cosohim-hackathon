import React from 'react'

const ChatBotComponent = () => {
    return (
        <div class="chatbot_box">
                <b>챗봇</b>
                <div className="chatbot_pop">
                    
                    <div Class="message_ballon_client">
                        <p Class="ballon_client">
                            '카테고리'를 보여주세요
                        </p>
                    </div>
                                    <br />
                    <div Class="message_ballon_server">
                        <p>
                            logo    
                        </p>

                        <p Class="ballon_server">
                            방법은 ~~~ 입니다
                            dskfjakljfajkfadskfjsdjf
                            ksadjfklsjfklwjrfjdasf
                            dakafjksdjflkasjklsdfrlkejdflk
                        </p>
                    </div>
                                    <br />
                    <div Class="category_list">
                        <div Class="Category1">
                            상품 조회
                        </div>
                        <div Class="Category2">
                                절차 안내
                        </div>
                        <div Class="Category3">
                                절차 서류
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default ChatBotComponent
