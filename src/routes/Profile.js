import React, { useState, useEffect } from "react";
import profileImg from "../imgs/profile.jpg";
import homeImg from "../imgs/home2.jpg";

const Profile = () => {
  return (
    <div className="profile">
      <div
        className="container profile"
        style={{
          backgroundImage: `url(${homeImg})`,
        }}
      >
        <div className="form profile">
          <div className="inForm">
            <div>My name is...</div>
            <div className="introduce">
              <img src={profileImg} />
              <span>
                현재 고려대학교 (세종캠퍼스) 휴학 중이며, 웹앱 개발 및 데이터
                관리 분야에 주력하고 있습니다. 주로 JS, React, C++, Python을
                활용하고 있습니다. 더 나아가 node.js, spring과 같은 백엔드
                분야를 활용할 계획입니다.{" "}
              </span>
            </div>
            <div>Skills</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
