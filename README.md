# 🏨 Grand Horizon - Online Hotel Booking & Management System

![Banner Image](images/home_banner.jpg)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PHP Version](https://img.shields.io/badge/PHP-%3E%3D%207.0-8892BF.svg)](https://www.php.net/)
[![Database](https://img.shields.io/badge/Database-MySQL-4479A1.svg)](https://www.mysql.com/)
[![Aesthetic](https://img.shields.io/badge/Design-Premium%20Aesthetic-gold.svg)](#)

Welcome to the **Grand Horizon Hotel Booking & Management System**! This repository showcases a dual-architecture system: a **PHP/MySQL backend application** and a **fully client-side static HTML/CSS/JS frontend application** (using browser `localStorage` to simulate database records).

---

## 📸 Room Gallery & Previews

Experience the luxurious accommodations offered at Grand Horizon:

| 🛌 Duplex Suite | 👨‍👩‍👧‍👦 Family Room |
|:---:|:---:|
| ![Duplex Suite](images/home_gallary/1.jpg) | ![Family Room](images/home_gallary/2.jpg) |
| *Modern duplex living starting at 1,500 tk/night.* | *Spacious comfort starting at 3,500 tk/night.* |

| 🌟 Super Comfort Suite | 🛋️ Lounge & Facilities |
|:---:|:---:|
| ![Super Comfort Suite](images/home_gallary/3.jpg) | ![Lounge & Facilities](images/home_gallary/4.jpg) |
| *Relaxing comfort starting at 2,200 tk/night.* | *Enjoy premium wifi, room service, and AC.* |

---

## ⚡ Dual-Architecture Design

You can choose to run this project in one of two modes:

### 🌐 1. Static Frontend Mode (GitHub Pages/Vercel Ready)
- **Database Engine**: Simulated via `localStorage` wrapper [js/db.js](js/db.js).
- **Session Manager**: Tracked inside browser `sessionStorage`.
- **Files**: All `.html` files in root and `admin/` directory.
- **Why use it**: Zero-setup preview, hosting on completely static web servers.

### 🐘 2. PHP / MySQL Backend Mode (XAMPP/Production Ready)
- **Database Engine**: MySQL Server (relational table structure).
- **Session Manager**: Server-side PHP sessions.
- **Files**: All `.php` files in root and `admin/` directory.
- **Why use it**: Traditional database storage with live server processing.

---

## 🌟 Key Features

*   **🔍 Interactive Room Queries**: Check availability instantly by entering check-in and check-out dates.
*   **🛒 One-Click Reservations**: Streamlined customer booking form capturing name, phone number, and calendar dates.
*   **🔐 Admin Control Center**: Dynamic administration panel to oversee bookings, edit room category pricing, configure room details, and register new manager profiles.
*   **🧼 Real-time Room Release**: Admin tools to easily release/unbook rooms back to the available inventory pool.

---

## 🛠️ Technology Stack

| Component | Technology Used |
| :--- | :--- |
| **Backend** | PHP (MySQLi Object-oriented extension) |
| **Database** | MySQL (Standard relational tables) |
| **Storage Mock** | Browser LocalStorage API (HTML5) |
| **Frontend** | HTML5, CSS3, JavaScript, jQuery |
| **Styling** | Bootstrap 3 & W3.CSS |
| **Widgets** | jQuery UI Datepicker |

---

## 🚀 Setup & Launch Guide

### For Static Frontend Mode (HTML)
1. Open [index.html](index.html) directly in any modern web browser, or host it on a static platform like GitHub Pages or Vercel.

### For PHP & MySQL Backend Mode
1. **Move Files**: Place the project folder inside your local web server's root directory (e.g., `C:/xampp/htdocs/hotel-booking/`).
2. **Setup Database**:
   - Access `http://localhost/phpmyadmin/`.
   - Create a database named `hotel`.
   - Import the database schema from [hotel.sql](hotel.sql).
3. **Configure Connection**:
   - Check and update database credentials in [admin/include/db_config.php](admin/include/db_config.php).
4. **Launch**:
   - Start Apache & MySQL in your XAMPP Control Panel.
   - Navigate to `http://localhost/hotel-booking/index.php`.

---

## 🔑 Default Credentials (Admin & Manager)

Use these credentials to access the Administrator portal:

- **Primary Administrator**:
  - **Username**: `admin`
  - **Password**: `1234`
- **Assigned Manager**:
  - **Username**: `jinat`
  - **Password**: `jinat`

---

## 🔒 Security Notice

> [!WARNING]
> This application is built as an educational/learning project. In PHP mode, it does not include prepared statements or bcrypt password hashing.
> **Please do not deploy the PHP version to public production servers without refactoring it for SQL injection safety and secure hashing algorithms.**

---

## 📬 Contact & Support

Maintainer: **Vijay Mahes**  
GitHub: [@vijaymahes9080](https://github.com/vijaymahes9080)  
Email: [vijaymahes9080@gmail.com](mailto:vijaymahes9080@gmail.com)  
