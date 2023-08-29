import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

export type UserDataType = {
    authToken: string;
    username: string;
    isLoggedIn: boolean;
}

const useUserData = () => {
    const [userData, setUserData] = useState<UserDataType | null>(null)

    useEffect(() => {
        const userDataCookie = Cookies.get('userData')
        const parsedUserData = JSON.parse(userDataCookie || '{}') as UserDataType
        setUserData(parsedUserData)

        const storageEventListener = (event: StorageEvent) => {
            if (event.key === 'userData') {
                const updatedUserData = JSON.parse(event.newValue || '{}') as UserDataType
                setUserData(updatedUserData)
            }
        }

        window.addEventListener('storage', storageEventListener)

        return () => {
            window.removeEventListener('storage', storageEventListener)
        }
    }, [])

    return userData
}

export default useUserData