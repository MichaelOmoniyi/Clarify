import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./chat.css";

export default class Chat extends Component {
  render() {
    return (
      <div className="chatContainer">
        <div className="chatArea">
          <div className="sendResponse">
            <div className="response"></div>
            <div className="send"></div>
          </div>
          <div className="prompt">
            <form action="#" method="post" className="promptForm">
              <input type="text" placeholder="Enter prompt..." />
              <button type="submit">
                <FontAwesomeIcon className="upArrow" icon={faArrowUp} />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
