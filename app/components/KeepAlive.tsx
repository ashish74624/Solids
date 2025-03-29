import React from 'react'

export default async function KeepAlive() {

    const backend = process.env.NODE_ENV === 'production' ? process.env.BACKENDURL : 'http://localhost:3000'

    async function pingServer() {
        try {
            const res = await fetch(`${process.env.paymentServer}/`, { method: 'HEAD' });
            if (res.ok) {
                console.log("RazorPay server alive");
            }
            const response = await fetch(`${backend}/api/keepAlive`, { method: 'HEAD' });
            if (response.ok) {
                console.log('Server is alive:', new Date().toLocaleTimeString());
            } else {
                console.warn('Server ping failed:', response.status);
            }
        } catch (error) {
            console.error('Ping error:', error);
        }
    }

    // Initial ping
    await pingServer();

    // Set interval to ping every 4 minutes (240,000 ms)
    setInterval(pingServer, 240000);

    return (
        <div className='bg-red hidden'>
            hello
        </div>
    )
}
