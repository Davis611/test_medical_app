import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {
  
  const reports = [
    { id: 1, title: "Health Checkup", date: "2025-04-01", status: "Completed" },
    { id: 2, title: "Blood Test", date: "2025-04-10", status: "Pending" },
  ];

  return (
    <div className="reports-layout">
      <div className="dropdown">
        <button className="dropbtn">Welcome, User ▼</button>
        <div className="dropdown-content">
          <a href="/profile">Profile</a>
          <a href="/reports">Your Reports</a>
        </div>
      </div>

      <h2>Your Reports</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Report Title</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.title}</td>
              <td>{report.date}</td>
              <td>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;
