// import React, { useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//
//
// const generateDynamicData = () => {
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     const today = new Date();
//     const currentMonthIndex = today.getMonth();
//     const currentYear = today.getFullYear();
//
//
//     const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
//
//
//     const data = [];
//     for (let i = 0; i < 12; i++) {
//         const monthIndex = (currentMonthIndex + i) % 12;
//         const year = currentYear + Math.floor((currentMonthIndex + i) / 12);
//         const daysInMonth = getDaysInMonth(monthIndex, year);
//
//         for (let day = 1; day <= daysInMonth; day++) {
//             data.push({
//                 day,
//                 month: months[monthIndex],
//                 users: Math.floor(Math.random() * 20) + 5,
//                 purchases: Math.floor(Math.random() * 1000) + 100,
//             });
//         }
//     }
//     return data;
// };
//
// const LineChartComponent = () => {
//     const [filter, setFilter] = useState('year');
//     const allData = generateDynamicData();
//
//
//     const filteredData = (() => {
//         switch (filter) {
//             case '3months':
//                 return allData.slice(0, 90);
//             case '6months':
//                 return allData.slice(0, 180);
//             case 'year':
//             default:
//                 return allData;
//         }
//     })();
//
//
//     if (!filteredData || filteredData.length === 0) {
//         return <div>No data available</div>;
//     }
//
//
//     const uniqueMonths = [...new Set(filteredData.map(data => data.month))];
//
//     return (
//         <div style={{ width: '100%', height: '350px' }}>
//             <div style={{ marginBottom: 20 }}>
//                 <h4 className="h4 mb-10">Activity for</h4>
//                 <button onClick={() => setFilter('3months')} style={filter === '3months' ? activeButtonStyle : buttonStyle}>3 months</button>
//                 <button onClick={() => setFilter('6months')} style={filter === '6months' ? activeButtonStyle : buttonStyle}>6 months</button>
//                 <button onClick={() => setFilter('year')} style={filter === 'year' ? activeButtonStyle : buttonStyle}>Year</button>
//
//             </div>
//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={filteredData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis
//                         dataKey="month"
//                         ticks={uniqueMonths}
//                         interval="preserveStartEnd"
//                     />
//                     <YAxis />
//                     <Tooltip
//                         content={({ active, payload }) => {
//                             if (active && payload && payload.length) {
//                                 const { month, day, users, purchases } = payload[0].payload;
//                                 return (
//                                     <div className="custom-tooltip">
//                                         <p>{`${month} ${day}`}</p>
//                                         <p>{`New Users: ${users}`}</p>
//                                         <p>{`Purchases: $${purchases}`}</p>
//                                     </div>
//                                 );
//                             }
//                             return null;
//                         }}
//                     />
//                     <Legend />
//                     <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
//                     <Line type="monotone" dataKey="purchases" stroke="#82ca9d" />
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//     );
// };
//
//
// const buttonStyle = {
//     padding: '10px 20px',
//
//     margin: '10px',
//     backgroundColor: '#f0f0f0',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     cursor: 'pointer',
// };
//
// const activeButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: '#4caf50',
//     color: '#fff',
//     border: '1px solid #4caf50',
// };
//
// export default LineChartComponent;


// import React, { useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//
// // Предположим, у нас есть данные о пользователе с покупками
// const user = {
//     purchases: [
//         {
//             price: 200,
//             purchaseDate: "2024-12-13T21:58:39.391Z",
//         },
//         {
//             price: 150,
//             purchaseDate: "2024-12-12T21:58:39.391Z",
//         },
//         {
//             price: 100,
//             purchaseDate: "2024-12-05T21:58:39.391Z",
//         },
//     ]
// };
//
// const generateDynamicData = (purchases) => {
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     const today = new Date();
//     const currentMonthIndex = today.getMonth();
//     const currentYear = today.getFullYear();
//
//     // Группируем покупки по месяцам
//     const monthPurchases = new Array(12).fill(0); // массив для хранения покупок по месяцам
//     purchases.forEach(purchase => {
//         const purchaseDate = new Date(purchase.purchaseDate);
//         const monthIndex = purchaseDate.getMonth();
//         monthPurchases[monthIndex] += purchase.price; // увеличиваем общую стоимость покупок для месяца
//     });
//
//     const data = [];
//     for (let i = 0; i < 12; i++) {
//         const monthIndex = (currentMonthIndex - i + 12) % 12; // вычисляем индекс месяца для отображения
//         const year = currentYear - Math.floor((currentMonthIndex - i + 12) / 12);
//
//         data.push({
//             month: months[monthIndex],
//             purchases: monthPurchases[monthIndex], // общая сумма покупок для месяца
//             users: Math.floor(Math.random() * 20) + 5, // количество пользователей (можно заменить на реальные данные)
//         });
//     }
//     return data;
// };
//
// const LineChartComponent = () => {
//     const [filter, setFilter] = useState('year');
//     const allData = generateDynamicData(user.purchases); // генерируем данные с учетом покупок пользователя
//
//     const filteredData = (() => {
//         switch (filter) {
//             case '3months':
//                 return allData.slice(0, 3); // последние 3 месяца
//             case '6months':
//                 return allData.slice(0, 6); // последние 6 месяцев
//             case 'year':
//             default:
//                 return allData; // все данные за год
//         }
//     })();
//
//     if (!filteredData || filteredData.length === 0) {
//         return <div>No data available</div>;
//     }
//
//     const uniqueMonths = filteredData.map(data => data.month);
//
//     return (
//         <div style={{ width: '100%', height: '350px' }}>
//             <div style={{ marginBottom: 20 }}>
//                 <h4 className="h4 mb-10">Activity for</h4>
//                 <button onClick={() => setFilter('3months')} style={filter === '3months' ? activeButtonStyle : buttonStyle}>3 months</button>
//                 <button onClick={() => setFilter('6months')} style={filter === '6months' ? activeButtonStyle : buttonStyle}>6 months</button>
//                 <button onClick={() => setFilter('year')} style={filter === 'year' ? activeButtonStyle : buttonStyle}>Year</button>
//             </div>
//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={filteredData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis
//                         dataKey="month"
//                         ticks={uniqueMonths}
//                         interval="preserveStartEnd"
//                     />
//                     <YAxis />
//                     <Tooltip
//                         content={({ active, payload }) => {
//                             if (active && payload && payload.length) {
//                                 const { month, users, purchases } = payload[0].payload;
//                                 return (
//                                     <div className="custom-tooltip">
//                                         <p>{`${month}`}</p>
//                                         <p>{`New Users: ${users}`}</p>
//                                         <p>{`Purchases: $${purchases}`}</p>
//                                     </div>
//                                 );
//                             }
//                             return null;
//                         }}
//                     />
//                     <Legend />
//                     <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
//                     <Line type="monotone" dataKey="purchases" stroke="#82ca9d" />
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//     );
// };
//
// const buttonStyle = {
//     padding: '10px 20px',
//     margin: '10px',
//     backgroundColor: '#f0f0f0',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     cursor: 'pointer',
// };
//
// const activeButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: '#4caf50',
//     color: '#fff',
//     border: '1px solid #4caf50',
// };
//
// export default LineChartComponent;



import React, {useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useSelector} from "react-redux";



const generateDynamicData = (purchases) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    const currentMonthIndex = today.getMonth();
    const currentYear = today.getFullYear();

    // Группируем покупки по месяцам и дням внутри месяца
    const monthPurchases = new Array(12).fill(0); // массив для хранения покупок по месяцам
    const dayPurchases = {}; // объект для хранения покупок по дням внутри месяца

    purchases.forEach(purchase => {
        const purchaseDate = new Date(purchase.purchaseDate);
        const monthIndex = purchaseDate.getMonth();
        const day = purchaseDate.getDate();


        if (!dayPurchases[monthIndex]) {
            dayPurchases[monthIndex] = {};
        }

        if (!dayPurchases[monthIndex][day]) {
            dayPurchases[monthIndex][day] = 0;
        }

        dayPurchases[monthIndex][day] += purchase.price;
        monthPurchases[monthIndex] += purchase.price; // увеличиваем общую стоимость покупок для месяца
    });

    const data = [];
    for (let i = 0; i < 12; i++) {
        const monthIndex = (currentMonthIndex - i + 12) % 12; // вычисляем индекс месяца для отображения
        const year = currentYear - Math.floor((currentMonthIndex - i + 12) / 12);

        // Добавляем данные по дням для каждого месяца
        const monthData = [];
        for (let day = 1; day <= new Date(year, monthIndex + 1, 0).getDate(); day++) {
            monthData.push({
                day,
                month: months[monthIndex],
                purchases: dayPurchases[monthIndex] && dayPurchases[monthIndex][day] ? dayPurchases[monthIndex][day] : 0,
                users: +1, // количество пользователей (можно заменить на реальные данные)
            });
        }

        data.push(...monthData);
    }
    return data;
};

const LineChartComponent = () => {

    const {allData} = useSelector((state) => state.allData);
    const users = allData.filter((user) => user.role === "user");
    const [filter, setFilter] = useState('year');
    // const allUsersData = generateDynamicData(user.purchases); // генерируем данные с учетом покупок пользователя
let allUsersData;
for (const user of users) {
   allUsersData = generateDynamicData(user.purchases);
}

    const filteredData = (() => {
        switch (filter) {
            case '3months':
                return allUsersData.slice(0, 90); // последние 3 месяца
            case '6months':
                return allUsersData.slice(0, 180); // последние 6 месяцев
            case 'year':
            default:
                return allUsersData; // все данные за год
        }
    })();

    if (!filteredData || filteredData.length === 0) {
        return <div>No data available</div>;
    }

    // Выделяем уникальные месяцы для отображения на оси X
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
