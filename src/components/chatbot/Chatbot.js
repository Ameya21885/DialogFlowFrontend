import React from "react";
import "./Chatbot.css";
import axios from "axios";
import Messages from "./Messages";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";

function Chatbot() {
  const textQuery = async () => {
    const res = await axios.post("", {
      text: "hi",
      userId: "",
    });
    console.log("response from dialogflow", res);
  };

  return (
    <div className="chatbot">
      <div className="chatbot_header">
        <h1 className="chatbot_header_text">OrderBoy</h1>
        <button className="chatbot_header_btn">&#10060;</button>
      </div>
      <div className="chatbot_body">
        {/* messages */}
        <Messages />
      </div>
      <div className="chatbot_footer">
        <input
          type="text"
          placeholder="type here"
          className="chatbot_footer_input"
        />
        <Button variant="outlined" startIcon={<ShareIcon />}></Button>
        <button className="chatbot_footer_btn" onClick={() => textQuery()}>
          send
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
