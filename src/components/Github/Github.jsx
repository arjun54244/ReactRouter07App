import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/arjun54244')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])
    return (
        <div className='container'>
            <div className="text-center m-4 text-white bg-gray-600 p-4 text-3xl">Github Followers {data.followers}</div>
            <div className="flex bg-gray-600 justify-center items-center">
                <img src={data.avatar_url} alt="Git Image" width={300} />
            </div>
        </div>
    )
}

export default Github
export const GithubInfoLoder = async ()=>{
    const response = await fetch("https://api.github.com/users/arjun54244")
    return response.json()

}
