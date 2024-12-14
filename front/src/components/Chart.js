import React, {useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useSelector} from "react-redux";


const generateDynamicData = (users) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    const currentMonthIndex = today.getMonth();
    const currentYear = today.getFullYear();

    const monthPurchases = new Array(12).fill(0);
    const dayPurchases = {};

    const userCounts = new Array(12).fill(0);

    users.forEach(user => {
        user.purchases.forEach(purchase => {
            const purchaseDate = new Date(purchase.purchaseDate);
            const monthIndex = purchaseDate.getMonth();
            const day = purchaseDate.getDate();

            if (!dayPurchases[monthIndex]) {
                dayPurchases[monthIndex] = {};
            }

            if (!dayPurchases[monthIndex][day]) {
                dayPurchases[monthIndex][day] = { total: 0, users: 0 };
            }

            dayPurchases[monthIndex][day].total += purchase.price;
            dayPurchases[monthIndex][day].users += 1;
            monthPurchases[monthIndex] += purchase.price;
        });
    });

    const data = [];
    for (let i = 0; i < 12; i++) {
        const monthIndex = (currentMonthIndex - i + 12) % 12;
        const year = currentYear - Math.floor((currentMonthIndex - i + 12) / 12);

        for (let day = 1; day <= new Date(year, monthIndex + 1, 0).getDate(); day++) {
            data.push({
                day,
                month: months[monthIndex],
                purchases: dayPurchases[monthIndex]?.[day]?.total || 0,
                users: dayPurchases[monthIndex]?.[day]?.users || 0,
            });
        }
    }
    return data;
};

const LineChartComponent = () => {

    const { allData } = useSelector((state) => state.allData);
    const users = allData.filter((user) => user.role === "user");
    const [filter, setFilter] = useState('3months');

    const allUsersData = generateDynamicData(users);

    const filteredData = (() => {
        switch (filter) {
            case '3months':
                return allUsersData.slice(0, 90);
            case '6months':
                return allUsersData.slice(0, 180);
            case 'year':
            default:
                return allUsersData;
        }
    })();

    if (!filteredData || filteredData.length === 0) {
        return <div>No data available</div>;
    }


    const uniqueMonths = [...new Set(filteredData.map(data => data.month))];

    return (
        <div style={{ width: '100%', height: '350px' }}>
            <div style={{ marginBottom: 20 }}>
                <h4 className="h4 mb-10">Activity for</h4>
                <button onClick={() => setFilter('3months')} style={filter === '3months' ? activeButtonStyle : buttonStyle}>3 months</button>
                <button onClick={() => setFilter('6months')} style={filter === '6months' ? activeButtonStyle : buttonStyle}>6 months</button>
                <button onClick={() => setFilter('year')} style={filter === 'year' ? activeButtonStyle : buttonStyle}>Year</button>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={filteredData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="month"
                        ticks={uniqueMonths}
                        interval="preserveStartEnd"
                    />
                    <YAxis />
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const { month, day, users, purchases } = payload[0].payload;
                                return (
                                    <div className="custom-tooltip">
                                        <p>{`${month} ${day}`}</p>
                                        <p>{`New Users: ${users}`}</p>
                                        <p>{`Purchases: $${purchases}`}</p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="purchases" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
};

const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4caf50',
    color: '#fff',
    border: '1px solid #4caf50',
};

export default LineChartComponent;
