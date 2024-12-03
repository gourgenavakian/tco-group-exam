import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { month: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { month: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { month: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { month: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { month: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { month: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { month: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    { month: 'Aug', uv: 4200, pv: 3900, amt: 2300 },
    { month: 'Sep', uv: 3100, pv: 2900, amt: 2400 },
    { month: 'Oct', uv: 4100, pv: 3600, amt: 2500 },
    { month: 'Nov', uv: 4800, pv: 3200, amt: 2600 },
    { month: 'Dec', uv: 5000, pv: 3500, amt: 2700 },
];

const LineChartComponent = () => {
    return (
        <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartComponent;
