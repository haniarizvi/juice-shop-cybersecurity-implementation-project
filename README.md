# juice-shop-cybersecurity-implementation-project
![Juice Shop Logo](https://raw.githubusercontent.com/juice-shop/juice-shop/master/frontend/src/assets/public/images/JuiceShop_Logo_100px.png) OWASP Juice Shop

## Overview
This project implements comprehensive security measures for a web application, focusing on vulnerability assessment, password security, authentication enhancement, and secure data transmission.

## Weekly Tasks

### Week 1: Security Assessment
- Set up the application from a mock web base eg. juice-shop 
- Performed vulnerability assessment using OWASP ZAP
- Tested for XSS vulnerabilities
- SQL injection testing

### Week 2: Implementing Security Measures
- Input validation and sanitization using validator library
- Password hashing with bcrypt
- Token-based authentication with jwtverify
- Secure HTTP headers using Helmet.js

### Week 3: Advanced Security
- Basic penetration testing with Nmap
- Logging implementation with Winston

##  Setup Instructions
### How to install set up of Juice shop

1. Install [node.js](#nodejs-version-compatibility)
2. Run `git clone https://github.com/juice-shop/juice-shop.git --depth 1` (or
   clone [your own fork](https://github.com/juice-shop/juice-shop/fork)
   of the repository)
3. Go into the cloned folder with `cd juice-shop`
4. Run `npm install` (only has to be done before first start or when you change the source code)
5. Run `npm start`
6. Browse to <http://localhost:3000>

### Prerequisites
```bash
node -v  # v14 or higher
npm -v   # v6 or higher

