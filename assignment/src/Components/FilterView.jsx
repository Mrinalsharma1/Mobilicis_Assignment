import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FilterView() {
    const [data, setData] = useState([])
    const [result, setResult] = useState([])
    useEffect(() => {
        axios.post('http://localhost:5000/getdetails').then((response) => {
            setData(response.data);
            setResult(response.data)
        });
    }, []);

    // console.log("result data", result)

    function first_fun() {
        let flag = false;
        let newArray = [];
        data.length &&
            data.forEach((item) => {
                let price = item.income.replace(/\$/g, '')
                price = parseInt(price)

                if (price < 5 && (item.car === 'Mercedes-Benz' || item.car === 'BMW')) {
                    newArray.push(item)
                    flag = true
                    // console.log(typeof (price))
                }
            })
        if (flag !== true) alert(`Data Not Found!`)
        // console.log(newArray)
        setResult(newArray)
    }

    function second_fun() {
        let flag = false;
        let newArray = [];

        data.length &&
            data.forEach((item) => {
                if (item.gender.toLowerCase() === 'male' && parseInt(item.phone_price) > 10000) {
                    newArray.push(item)
                    flag = true
                }
            })
        if (flag !== true) alert(`Data Not Found!`)
        // console.log(newArray)
        setResult(newArray)

    }
    function third_fun() {
        let flag = false;
        let newArray = [];
        data.length &&
            data.forEach((item) => {
                // let email=item.email
                // let l_name=item.last_name
                var regex = new RegExp(item.last_name, "i");
                let position = item.email.search(regex);
                if (position >= 0) {
                    if (item.last_name.charAt(0) === 'M' && item.quote.length > 15) {
                        newArray.push(item)
                        flag = true
                    }
                }
            })
        if (flag !== true) alert(`Data Not Found!`)
        // console.log(newArray)
        setResult(newArray)
    }

    function forth_fun() {
        let flag = false;
        let newArray = [];
        data.length &&
            data.forEach((item) => {
                var matches = item.email.match(/\d+/g);
                if (matches == null) {
                    if (item.car.toLowerCase() === 'bmw' || item.car.toLowerCase() === 'mercedes-benz' || item.car.toLowerCase() === 'audi') {
                        newArray.push(item)
                        flag = true;
                    }
                }
            })
        if (flag !== true) alert(`Data Not Found!`)
        // console.log(newArray)
        setResult(newArray)
    }
    function fifth_fun() {
        let flag = false;
        let newArray = [];

        data.length &&
            data.sort((a, b) => {
                let price1 = a.income.replace(/\$/g, '')
                price1 = parseFloat(price1)
                let price2 = b.income.replace(/\$/g, '')
                price2 = parseFloat(price2)
                return price2 - price1;
            });

        // data.forEach((e) => {
        //     for (var i = 0; i < 10; i++) {
        //         newArray.push(e)
        //         flag = true
        //     }
        data.length &&
            data.slice(0, 10).map((item, i) => {
                newArray.push(item);
                flag = true
            });
        if (flag !== true) alert(`Data Not Found!`)
        // console.log(newArray)
        setResult(newArray)
    }


    var count = 0;
    // console.log(data)
    return (
        <div>
            <h2 className='p-4 mb-4 text-white text-center bg-dark'>CUSTOMER <span className='text-warning'>FILTER</span> SYSTEM</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-2'>
                        <button className='btn btn-success'>Count {result.length ? result.length : data.length}</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-dark' data-bs-toggle="tooltip" data-bs-placement="top" title="Click Me for Search" onClick={first_fun}>1. $5 & BMW</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary' data-bs-toggle="tooltip" data-bs-placement="top" title="Click Me for Search" onClick={second_fun}>2. Male Price Gt 10k</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-secondary' data-bs-toggle="tooltip" data-bs-placement="top" title="Click Me for Search" onClick={third_fun}>3. Last Name "M"</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-danger' data-bs-toggle="tooltip" data-bs-placement="top" title="Click Me for Search" onClick={forth_fun}>4. No digit Email </button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-info' data-bs-toggle="tooltip" data-bs-placement="top" title="Click Me for Search" onClick={fifth_fun}>5. Top 10 Cities</button>
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
                                        <th scope="col">Gender</th>
                                        <th scope="col">Phone Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.length ?
                                            result.map((item, key) => (
                                                <tr key={key.id}>
                                                    <th scope="row" className='text-danger'>{count + key + 1}</th>
                                                    <td>{item.first_name}</td>
                                                    <td>{item.last_name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.income}</td>
                                                    <td>{item.car}</td>
                                                    <td>{item.gender}</td>
                                                    <td>{item.phone_price}</td>
                                                </tr>

                                            )) :
                                            data.map((item, key) => (
                                                <tr key={key.id}>
                                                    <th scope="row" className='text-danger'>{count + key + 1}</th>
                                                    <td>{item.first_name}</td>
                                                    <td>{item.last_name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.income}</td>
                                                    <td>{item.car}</td>
                                                    <td>{item.gender}</td>
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