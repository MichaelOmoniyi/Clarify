import React, { useState } from 'react';
import { OpenAI } from 'openai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Chat.css';

//import 'dotenv/config';

const Chat = () => {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  //console.log(process.env.OPENAI_API_KEY);

  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e) => {
    e.preventDefault();

    if (!message) return;

    setIsTyping(true);

    let msgs = [...chats];
    msgs.push({ role: 'user', content: message });
    setChats(msgs);

    setMessage('');

    try {
      const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are Clarify. The Clarify app is a web-based AI-enabled Chat App that assists its users in making informed and guided decisions on career paths. You have to approach every chat with the aproach to help make a career decision. Speak and think intelligently.' },
          ...msgs,
        ],
      });

      console.log(res.data);

      msgs.push({
         role: 'assistant',
         content: res.choices[0].message.content
      });
      setChats(msgs);
    } catch (error) {
      console.log(error);
      alert(error);
    }

    setIsTyping(false);
  };

  return (
    <div className="chatContainer">
      <div className="chatArea">
        <section>
          {chats && chats.length
            ? chats.map((chat, index) => (
                <p key={index} className={chat.role === 'user' ? 'user_msg' : ''}>
                  <span>
                    <b>{chat.role.toUpperCase()}</b>
                  </span>
                  <span>:</span>
                  <span>{chat.content}</span>
                </p>
              ))
            : ''}
        </section>

        <div className={isTyping ? '' : 'hide'}>
          <p>
            <i>{isTyping ? 'Typing' : ''}</i>
          </p>
        </div>

        <div className="prompt">
          <form action="" className="promptForm" onSubmit={(e) => chat(e)}>
            <input
              type="text"
              name="message"
              value={message}
              placeholder="Enter prompt..."
              onChange={(e) => setMessage(e.target.value)}
            />
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
