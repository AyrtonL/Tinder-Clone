import React from 'react'
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Elon Musk"
            message="Yo man whats up?"
            timestamp="40 seconds ago"
            profilePic="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg" 
            />
            <Chat
            name="Jeff Bezos"
            message="Do you wanna buy something 😉?"
            timestamp="55 minutes ago"
            profilePic="https://s.yimg.com/ny/api/res/1.2/OeHveUdVj9UPStwZ4T9aAQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/es-ES/digital_trends_es_737/10d4295b8eae6dc78595d7070f2146ef" 
            />
            <Chat
            name="Ester Exposito"
            message="Hacemos algo hoy?"
            timestamp="2 hours ago"
            profilePic="https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/08/20/Recortada/img_smauri_20200620-191048_imagenes_lv_terceros_ester_exposito_1_bulgari-k3ID-U482915095548ENG-992x558@LaVanguardia-Web.jpg" 
            />

        </div>
    )
}

export default Chats
