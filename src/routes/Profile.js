import React, { useState, useEffect } from "react";
import profileImg from "../imgs/profile.jpg";
import programmers from "../imgs/programmers.png";
import osw from "../imgs/osw.mp4";
const Profile = () => {
  return (
    <div className="profile">
      <div className="container profile" style={{ backgroundColor: "#171717" }}>
        <div className="form profile">
          <div className="inForm">
            <div style={{ fontSize: "60px" }}>About</div>
            <div className="introduce">
              <img src={profileImg} />
              {/* <video>
                <source src={osw} type="video/mp4" />
              </video> */}
              <div
                style={{
                  fontWeight: 500,
                  padding: "30px 30px",
                }}
              >
                <div style={{ fontWeight: 800, paddingBottom: "40px" }}>
                  안녕하세요.
                  <br />
                  신입 개발자 오승원 입니다.
                </div>
                현재 고려대학교 (세종캠퍼스) 휴학 중이며, 웹앱 개발 및 데이터
                관리 분야에 주력하고 있습니다. <br />
                주로{" "}
                <span style={{ fontWeight: 900 }}>JS, React, C++, Python</span>
                을 활용하고 있습니다.
              </div>
            </div>
            <div className="introduce" style={{ marginTop: "250px" }}>
              <a
                href="https://programmers.co.kr/job_profiles/53112"
                target="_blank"
              >
                <img
                  src={programmers}
                  style={{
                    width: "300px",
                    height: "100%",
                    borderRadius: "0",
                    boxShadow: "none",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
