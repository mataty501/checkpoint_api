import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card';

const UserList = () => {
    const [listOfUser, setListOfUser] = useState()


    useEffect(() => {
        const handleSearch = async () => {

            const response = await axios.get('https://jsonplaceholder.typicode.com/users')

            setListOfUser(response.data)

        }

        handleSearch()
    }, [])
    return (
        <div>
            {listOfUser && listOfUser.map((elm) => {
                return <Card name={elm.name} username={elm.username} email={elm.email} />;
            })}

        </div>
    )
}


export default UserList
