import React, {useEffect, useState} from 'react';
import axios from "axios";
import Message from "./Message";

const Chatbot = (props)=>{

    //const messages=[];
    const [messages,setMessages] = useState([]);
    const renderMessage = (stateMessages)=>{
        if(messages){
            return messages.map((message,i)=>{
                return<Message key={i} speaks={message.speaks} text={message.text}/>
            });
        }
        else{
            return null;
        }
    }

    const df_text_query = async (text)=>{
        try {
            let says = {
                speaks:"Me",
                msg:{
                    text:{
                        text:text
                    }
                }
            }
            setMessages([...messages,says]);
            const res = await axios.post('http://localhost:5000/api/df_text_query',{text});
            for(let msg of res.data.fullfillmentMessages){
                says= {
                    speaks: 'bot',
                    msg:msg
                }
                setMessages([...messages,says]);
            }
        }
        catch (e){

            if(e.response){
                console.log(e.response.data);
                console.log(e.response.status);
                console.log(e.response.header);
            }
            else {
                console.log(`Error: ${e.message}`);
            }

        }
    }

    //Event Messages
    const df_event_query = async (event)=>{
        try {

            const res = await axios.post('http://localhost:5000/api/df_event_query',{text: event});
            for(let msg of res.data.fulfillmentMessages){
                let says= {
                    speaks: 'me',
                    msg:msg
                }
                setMessages([...messages,says]);
            }
        }
        catch (e){

            if(e.response){
                console.log(e.response.data);
                console.log(e.response.status);
                console.log(e.response.header);
            }
            else {
                console.log(`Error: ${e.message}`);
            }

        }
    }
    useEffect(()=>{
        df_event_query('Welcome').then(r => {
            console.log(r);
        });
    },[])

    let message2={
        speaks:"Bot",
        text:"Hi Baby Hi"
    }
    return(
        <div style={{height:640, width:400, float: 'right' , border:'1px solid green'}}>
            <div style={{height:'100%' , width:'100%', overflow: 'auto'}}>
                <h2>EduBot</h2>
                {renderMessage(messages)}
                <Message speaks={message2.speaks} text={message2.text}/>
                <Message speaks={message2.speaks} text={message2.text}/>
                <Message speaks={message2.speaks} text={message2.text}/>
            </div>
        </div>
    )
}

export default Chatbot;
