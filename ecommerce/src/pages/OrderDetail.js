import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "../OrderDetailCss.css"


export default function OrderDetail() {
    const [orderList, setOrderList] = useState([])

    const { slug } = useParams();


    useEffect(() => {
        if (!slug) {
            return;
        }
        let url = "http://localhost:3000/orders?orderId=" + slug;

        fetch(url)
            .then((response) => response.json())
            .then((data) => setOrderList(data));
    }, [])

    return (
        <><div className="table-wrapper">
            <table className="fl-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>Order ID</th>
                        <th>Payment Metot</th>
                    </tr>
                </thead>
                <tbody>
                    {orderList && orderList.map((order, index) => {
                        return <tr key={index}>
                            <td>{order.firstName}</td>
                            <td>{order.lastName}</td>
                            <td>{order.email}</td>
                            <td>{order.orderId}</td>
                            <td>{order.paymentMethod}</td>
                        </tr>
                    })}
                </tbody></table>
        </div></>
    )
}

