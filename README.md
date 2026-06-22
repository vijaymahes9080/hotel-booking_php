# 🏨 Online Hotel Booking & Management System

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PHP Version](https://img.shields.io/badge/PHP-%3E%3D%207.0-8892BF.svg)](https://www.php.net/)
[![Database](https://img.shields.io/badge/Database-MySQL-4479A1.svg)](https://www.mysql.com/)

A simple, secure, and intuitive web application built with PHP and MySQL to streamline hotel booking operations. It allows travelers to check room availability and book their desired rooms online while providing administrators with a secure portal to manage rooms, bookings, and system configurations.

---

## 🌟 Key Features

### 👤 User Roles & Functions
*   **Customer / Traveler Portal**:
    *   View room categories, facilities, and pricing structure.
    *   Check live room availability by entering check-in and check-out dates.
    *   Book rooms online instantly by providing details (name, phone, dates).
*   **Administrator Portal**:
    *   Secure login authentication panel.
    *   Add, edit, or delete room categories (pricing, bed counts, bed type, facilities).
    *   Dynamically generate and add rooms for each category.
    *   View all current room bookings, checking check-in/check-out dates.
    *   Register new admin/manager accounts.

---

## 🛠️ Technology Stack

*   **Backend**: PHP (using MySQLi object-oriented interface)
*   **Database**: MySQL
*   **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 3, jQuery

---

## 🚀 Installation & Setup Guide

### Prerequisites
*   Web server environment: **XAMPP / WAMP / MAMP** (Requires a PHP environment with `mysqli` extension enabled).

### Step-by-Step Installation
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/vijaymahes9080/hotel-booking_php.git
    ```
2.  **Move to Server Directory**:
    Place the project folder inside your web server's root directory (e.g., `C:/xampp/htdocs/hotel-booking/`).

3.  **Database Setup**:
    *   Start Apache and MySQL from your server Control Panel.
    *   Open your browser and navigate to `http://localhost/phpmyadmin/`.
    *   Create a new database named `hotel`.
    *   Import the database schema file [hotel.sql](hotel.sql) located in the project root.

4.  **Configuration**:
    *   Open [admin/include/db_config.php](admin/include/db_config.php) to verify or adjust database connection parameters:
        ```php
        define('DB_SERVER','localhost');
        define('DB_USERNAME','root');
        define('DB_PASSWORD','');
        define('DB_DATABASE','hotel');
        ```

5.  **Run the Application**:
    *   Open your browser and navigate to `http://localhost/hotel-booking/index.php`.

---

## 🔑 Default Login Credentials

Use the following credentials to access the Administrator Panel:

*   **Administrator (Demo)**:
    *   **Username**: `admin`
    *   **Password**: `1234`
*   **Manager (Alternative)**:
    *   **Username**: `jinat`
    *   **Password**: `jinat`

---

## 🔒 Security Notice

> [!WARNING]
> This application is built as a learning project and does not feature robust encryption for passwords or input sanitization against SQL injections.
> **Please do not deploy this application on public production servers without adding prepared statements and password hashing.**

---

## 📄 License

Distributed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

---

## 📬 Contact & Support

Maintainer: **Vijay Mahes**  
GitHub: [@vijaymahes9080](https://github.com/vijaymahes9080)  
Email: [vijaymahes9080@gmail.com](mailto:vijaymahes9080@gmail.com)  

If you run into any issues setting up the application, feel free to open a GitHub issue or contact me directly!
