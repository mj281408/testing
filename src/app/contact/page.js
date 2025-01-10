"use client"
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const page = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Function to export data to Excel
    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet([formData]);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'form_data.xlsx');
    };

    return (
        <div className="p-4">
            <h2 className="mb-4 text-xl">Form to Export Data to Excel</h2>
            <form>
                <div className="mb-2">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-1 border"
                    />
                </div>
                <div className="mb-2">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-1 border"
                    />
                </div>
                <div className="mb-2">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-1 border"
                    />
                </div>
                <button
                    type="button"
                    onClick={exportToExcel}
                    className="p-2 mt-2 text-white bg-blue-500"
                >
                    Export to Excel
                </button>
            </form>
        </div>
    );
};

export default page;
