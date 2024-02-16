import React from 'react';
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
const OpenAI = require("openai");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Chat.css";

const Chat = () => {
   // const { logOut, user } = UserAuth();

   // const handleSignOut = async () => {
   //    try {
   //       await logOut();
   //    } catch (error) {
   //       console.log(error);
   //    }
   // };

   
const openai = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

   const [message, setMessage] = useState("");
   const [chats, setChats] = useState([]);
   const [isTyping, setIsTyping] = useState(false);

   return (
      <div className="chatContainer">
         <div className="chatArea">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="sendResponse">
               <div className="response">ll</div>
               <div className="send">jj</div>
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
};

export default Chat;