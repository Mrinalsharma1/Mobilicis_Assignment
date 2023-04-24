import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FilterView() {
    const [data, setData] = useState([])
    const [result, setResult] = useState([])
    useEffect(() => {
        axios.post('http://localhost:5000/getdetails').then((response) => {
            setData(response.data);
        });
    }, []);


    // useEffect(() => {
    //     setResult(data);
    // }, [])


    function first_fun() {
        let flag = false;
        let newArray = []
        data &&
            data.map((item) => {
                let price = item.income.replace(/\$/g, '')

                if (parseInt(price) < 5 && item.car === 'Mercedes-Benz' || item.car === 'BMW') {
                    newArray.push(item)
                    flag = true
                    console.log(price)
                }
            })
        if (flag !== true) alert(`Data Not Found!`)
        console.log(newArray)
        setData(newArray)

    }

    var count = 0;
    // console.log(data)
    return (
        <div>
            <div className='container'>
                <h2 className='pt-5'> Custome Filter</h2>
                <div className='row'>
                    <div className='col-md-2'>
                        <button className='btn btn-success'>Count {data ? data.length : ''}</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-dark' onClick={first_fun}>1. $5 & BMW</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary'>2. Male Price Gt 10k</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-secondary'>3. No digit Email</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-danger'>4. Last Name "M"</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-info'>5. Top 10 Cities</button>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-12'>
                        <div className='text-center'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Income</th>
                                        <th scope="col">Car</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Phone_Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        data.map((item, key) => (
                                            <tr key={key.id}>
                                                <th scope="row" className='text-danger'>{count + key + 1}</th>
                                                <td>{item.first_name}</td>
                                                <td>{item.last_name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.city}</td>
                                                <td>{item.income}</td>
                                                <td>{item.car}</td>
                                                <td>{item.city}</td>
                                                <td>{item.phone_price}</td>
                                            </tr>

                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterView