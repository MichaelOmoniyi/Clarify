import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./chat.css";

export default class Chat extends Component {
  prompt = () => {
    let promptDisplay = document.querySelector(".send");
    let promptValue = document.getElementById("prompt").value;

    promptDisplay.innerHTML = promptValue;
    promptValue = ""
  }
  
  render() {
    return (
      <div className="chatContainer">
        <div className="chatArea">
          <div className="promptResponse">
            <div className="response">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              voluptate quidem, iusto, dolorem error, omnis recusandae quasi
              commodi amet numquam eligendi perspiciatis. Neque, est quidem
              alias ad corporis in asperiores?
            </div>
            <div className="send"></div>
          </div>
          <div className="prompt">
            <form action="#" method="get" className="promptForm">
              <input id="prompt" type="text" placeholder="Enter prompt..." />
              <button type="submit" onClick={this.prompt}>
                <FontAwesomeIcon className="upArrow" icon={faArrowUp} />
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
