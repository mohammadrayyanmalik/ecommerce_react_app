import React, { useEffect, useState } from 'react'

function useInternet() {
    const [online, setOnline] = useState(navigator.onLine);
    const setOnlineStatus = () => {
        setOnline(true);
    }
    const setOffLineStatus = () => {
        setOnline(false)
    }



    useEffect(() => {
        window.addEventListener("online", setOnlineStatus);
        window.addEventListener("offline", setOffLineStatus);

        return () => {
            window.removeEventListener("online", setOnlineStatus)
            window.removeEventListener("offline", setOffLineStatus)
        }


    }, [online])

    return online 
}

export default useInternet