import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import react from "../imgs/icons/react.svg";
import youtube from "../imgs/icons/movie.svg";
import campus from "../imgs/icons/campus.svg";

const Experiences = () => {
  return (
    <div className="experiences">
      <div
        className="container experiences"
        style={{ backgroundColor: "#171717" }}
      >
        <div className="form experiences">
          <div style={{ fontSize: "60px" }}>Experiences</div>
          <div className="introduce experiences">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(0, 0, 0, 0.2)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(18, 18, 18, 1)",
                }}
                date="2020 - present"
                iconStyle={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#fff",
                  backgroundImage: `url(${react})`,
                }}
              >
                <h3 className="vertical-timeline-element-title">신입 개발자</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  복무중 + 휴학중
                </h4>
                <p>???</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019"
                contentStyle={{
                  background: "rgba(0, 0, 0, 0.2)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(18, 18, 18, 1)",
                }}
                iconStyle={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#fff",
                  backgroundImage: `url(${youtube})`,
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  유튜브 콘텐츠 플랫폼
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  동아리 활동 (중단됨)
                </h4>
                <p>유튜버 양성과 커뮤니케이션의 활성화를 위한 SNS기반 플랫폼</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017"
                contentStyle={{
                  background: "rgba(0, 0, 0, 0.2)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(18, 18, 18, 1)",
                }}
                iconStyle={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#fff",
                  backgroundImage: `url(${campus})`,
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  고려대학교 입학
                </h3>
                {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
                <p></p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
