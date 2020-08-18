import React from 'react'
import jQuery from "jquery";
// import chatNotice from "../../assets/images/chatbot_notice.jpeg";
import chatNotice from "../../assets/images/chatbot_notice.jpeg";
// import { Modal, Button } from 'react-bootstrap';

const index = () => {
    window.$ = window.jQuery = jQuery;

    jQuery(document).ready(function() {
        window.$('#myModal').show();
    });
    //팝업 Close 기능
    const closeApp = (flag) => {
        window.$('#myModal').hide();

    }

    return (
        <div id="myModal" className="modal">
          <div className="modal-content" style={{width:"500px", height:"600px"}}>
                    <p style={{textAlign: "center"}}><span style={{fontSize: "24pt"}}><b><span style={{fontSize: "24pt"}}>공지</span></b></span></p>
                    {/* <p style={{textAlign: "center",lineHeight:" 1.5"}}><br /></p>
                    <p style={{textAlign: "center",lineHeight:" 1.5"}}><span style={{fontSize: "14pt"}}>사이트 서버 점검으로</span></p>
                    <p style={{textAlign: "center",lineHeight:" 1.5"}}><b><span style={{color: "rgb(255, 0, 0)", fontSize: "14pt"}}>10:00 - 18:00 까지</span></b></p>
                    <p style={{textAlign: "center",lineHeight:" 1.5"}}><span style={{fontSize: "14pt"}}>사이트 사용이 중지 됩니다.</span></p>
                    <p style={{textAlign: "center",lineHeight:" 1.5"}}><span style={{fontSize: "14pt"}}><br /></span></p>
                    <p style={{textAlign: "center",lineHeight:" 1.5"}}><span style={{fontSize: "14pt"}}>이용에 불편을 드린 점 양해를 </span></p>
                    <p style={{textAlign: "center",lineHeight:" 1.5"}}><span style={{fontSize: "14pt"}}>부탁드립니다.</span></p>
                    <p style={{textAlign: "center",lineHeight:" 1.5"}}><br /></p> */}
                    <div>
                        <img src={chatNotice} alt="img" width="100%" height="100%" />
                    </div>
                    <p><br/></p>
                <div style={{cursor:"pointer",backgroundColor:"#DDDDDD",textAlign: "center",paddingBottom: "10px",paddingTop: "10px"}} onClick={closeApp}>
                    <span className="pop_bt" style={{fontSize: "13pt"}} >
                         닫기
                    </span>
                </div>
          </div>
     
        </div>
        // <Modal.Dialog>
        //     <Modal.Header closeButton>
        //         <Modal.Title>Modal title</Modal.Title>
        //     </Modal.Header>

        //     <Modal.Body>
        //         <p>Modal body text goes here.</p>
        //     </Modal.Body>

        //     <Modal.Footer>
        //         <Button variant="secondary">Close</Button>
        //         <Button variant="primary">Save changes</Button>
        //     </Modal.Footer>
        // </Modal.Dialog>
    )
}

export default index
