import React, { useEffect, useState } from 'react'

function AdminTable() {
    const [data, setdata] = useState([])

    function getData() {
        fetch("http://localhost:3000/aromas/")
            .then(res => res.json())
            .then(data => setdata(data))
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <table border={1} style={{ display:'flex', justifyContent:'center', gap:'2rem'}}>
                <th>
                    <td>Name</td>
                </th>
                <th>
                    <td>Description</td>
                </th>
                <th>
                    <td>Name</td>
                </th>
                <th>
                    <td>Price</td>
                </th>
                {data.map((x) => 
                   <tbody key={x._id}>
               
                   </tbody>
                )}
             
            </table>
        </div>
    )
}

export default AdminTable
