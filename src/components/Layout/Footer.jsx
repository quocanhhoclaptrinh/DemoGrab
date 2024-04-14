// import appstore from "./img/appstore.png";
// import CHplay from "./img/CHplay.png";
// import squarefacebook1 from "./img/squarefacebook1.png";
// import squareinstagram from "./img/squareinstagram.png";
// import squaretwitter from "./img/squaretwitter.png";
// import logo from "./img/logo.png";
// function Footer() {
//   return (
//     <>
//       <div className="container-max-footer">
//         <div className="container-sm container-button">
//           <div className="footer">
//             <div className="container-sm">
//               <img
//                 style={{
//                   margin: "30px 20px",
//                   width: "170px",
//                   height: "70px",
//                   cursor: "pointer",
//                 }}
//                 className="grab-logo"
//                 src="	https://food.grab.com/static/images/logo-grabfood-white2.svg"
//                 alt="grab-logo"
//               />
//               <div class="border-bottom border-footer"></div>
//               <div className="footer-all-wrap">
//                 <div className="wrap-li">
//                   <li className="footer-li">Về GrabFood</li>
//                   <li className="footer-li">Về Grab</li>
//                   <li className="footer-li">Blog</li>
//                 </div>
//                 <div className="wrap-li">
//                   <li className="footer-li">Mở quán trên GrabFood</li>
//                   <li className="footer-li">Trở thành tài xế Grab</li>
//                 </div>
//                 <div className="wrap-li">
//                   <li className="footer-li">Trung tâm hỗ trợ</li>
//                   <li className="footer-li">Câu hỏi thường gặp</li>
//                 </div>
//                 <div className="wrap-img">
//                   <span className="footer-img">
//                     <img src={squarefacebook1}></img>
//                   </span>
//                   <span className="footer-img">
//                     <img src={squareinstagram}></img>
//                   </span>
//                   <span className="footer-img">
//                     <img src={squaretwitter}></img>
//                   </span>
//                 </div>
//               </div>
//               <div
//                 class="border-bottom border-footer"
//                 style={{ marginTop: "140px", marginBottom: "20px" }}
//               ></div>
//               <div className="span-wrap">
//                 <div>
//                   <a href="https://apps.apple.com/us/app/grab-%C4%91%E1%BA%B7t-xe-giao-%C4%91%E1%BB%93-%C4%83n/id647268330?l=vi&af_prt=food.grab.com&c=direct&is_retargeting=true&pid=other_websites">
//                     <img
//                       className="appstore"
//                       src="https://food.grab.com/static/images/logo-appstore.svg"
//                       style={{ marginRight: "18px", marginLeft: "25px" }}
//                     ></img>
//                   </a>
//                   <span>
//                     <a href="https://play.google.com/store/apps/details?id=com.grabtaxi.passenger&hl=vi_VN&pid=other_websites&c=direct&is_retargeting=true&af_prt=food.grab.com">
//                       <img
//                         className="appstore"
//                         src="https://food.grab.com/static/images/logo-playstore.svg"
//                       ></img>
//                     </a>
//                   </span>
//                 </div>
//                 <div className="span-wrap-li">
//                   <li className="span-li">@2024</li>
//                   <li className="span-li">Câu hỏi thường gặp</li>
//                   <li className="span-li">Chính sách bảo mật</li>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Footer;
import React from "react";
import "../GlobalStyle/Footer.css";
const Footer = () => {
  return (
    <div className="FooterContainer" style={{ width: "100%" }}>
      <div className="FooterContent" style={{ display: "flex" }}>
        <div style={{ width: "100%", alignItems: "flex-start" }}>
          <img
            src="https://food.grab.com/static/images/logo-grabfood-white2.svg"
            alt="GrabFood Logo"
            style={{ width: "50%", maxWidth: "15%" }}
          />
          <hr style={{ width: "100%", margin: "5px 0px", height: 0.5, backgroundColor: "hsla(0, 0%, 100%, .3)" }} />
          <div style={{ marginTop: 5, display: "flex", flexDirection: "column" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-start", marginBottom: 10 }}>
              <div style={{ width: "25%", display: "flex", flexDirection: "column", gap: 5 }}>
                <span class="whiteText"> Về GrabFood </span>
                <span class="whiteText"> Về Grab </span>
                <span class="whiteText"> Blog </span>
              </div>
              <div style={{ width: "25%", display: "flex", flexDirection: "column", gap: 5 }}>
                <span class="whiteText"> Mở quán trên GrabFood </span>
                <span class="whiteText"> Trở thành tài xế Grab </span>
              </div>
              <div style={{ width: "25%", display: "flex", flexDirection: "column", gap: 5 }}>
                <span class="whiteText"> Trung tâm hỗ trợ </span>
                <span class="whiteText"> Câu hỏi thường gặp </span>
              </div>
            </div>
          </div>
          <hr style={{ width: "100%", margin: "10px 0px", height: 0.5, backgroundColor: "hsla(0, 0%, 100%, .3)" }} />
          <div style={{ width: "100%", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
            <div style={{ marginBottom: 10 }}>
              <div style={{ width: "50%", display: "flex", flexDirection: "column", gap: 2 }}>
                <img
                  src="https://food.grab.com/static/images/logo-appstore.svg"
                  alt="App Store Logo"
                  style={{ width: "100%", maxWidth: "50%" }}
                />
                <img
                  src="https://food.grab.com/static/images/logo-playstore.svg"
                  alt="Play Store Logo"
                  style={{ width: "100%", maxWidth: "50%" }}
                />
              </div>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "flex-start", gap: 2, fontSize: 12, color: "white", flexDirection: "column" }}>
              <span class="whiteText">© 2024 Grab</span>
              <span class="whiteText" >
                Câu hỏi thương gặp <span>&#x2022;</span> Chính sách bảo mật
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
  
};

export default Footer;
