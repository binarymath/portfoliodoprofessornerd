'use client'
import Navbar from '@/components/Navbar';
import React from 'react';

const CalendarioPage: React.FC = () => {
    return (
        <div>
            <div className='mb-20'><Navbar /></div>
        <div className='mb-40'>
            <div className='mb-20'>
                <div className="flex flex-col justify-center items-center h-screen space-y-4">
                    <iframe 
                        src="https://calendar.google.com/calendar/embed?src=c_5c7a8d01ed2101ebee29af30d65af6486c78aa536d251415ea4c1591874495ed%40group.calendar.google.com&ctz=America%2FSao_Paulo" 
                        style={{ border: 0 }} 
                        width="800" 
                        height="600" 
                        frameBorder="0" 
                        scrolling="no"
                    ></iframe>
                    <a 
                        href="https://calendar.google.com/calendar/u/0/r?cid=c_5c7a8d01ed2101ebee29af30d65af6486c78aa536d251415ea4c1591874495ed@group.calendar.google.com" 
                        target="_blank" 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Adicione a nossa agenda ao seu Google Calendário.
                    </a>
                </div>
            </div>
        </div>
       </div> 
    );
};

export default CalendarioPage;
