# Project Title
FemPulse

## Overview

FemPulse is a web application designed to empower women by providing a convenient platform for tracking mood and periods. The app aims to support women in understanding their emotional and physical well-being by offering insights based on their tracked data.

### Problem

Many women face challenges in tracking their mood due to the lack of user-friendly and comprehensive tools. This can lead to difficulties in understanding patterns and managing emotional and physical health effectively. FemPulse addresses these challenges by providing a simple yet powerful solution for tracking and analyzing important aspects of women's health.

### User Profile

The target users of FemPulse are women who want to gain insights into their mood. They may lead busy lives and need a convenient and intuitive app to track their health seamlessly. Special considerations include ensuring privacy and sensitivity in handling personal health data.

### Features

1. Mood Tracking: Users can easily log their daily mood by selecting from predefined options or adding custom mood tags.

2. Menstruation Tracking: The app allows users to track their menstrual cycles, including the start and end dates of periods.


## Implementation

### Tech Stack

Frontend: React
Backend: Node.js with Express for the server-side logic
Database: MySQL for storing user data
Authentication: JSON Web Tokens (JWT) for user authentication

### APIs

No external APIs are required for the core functionality of the app.


### Sitemap

- Login/Signup Screens
- Home/Calendar (Summary)
    - Mood Tracking
    - Menstruation Tracking

### Mockups

Mood Tracking

Menstruation Tracking

### Data

The app stores user data, including mood entries, periods days data. These are related as follows:

- Each user has multiple mood entries, each associated with a specific date.
- Each user has periods record, including start and end dates for each period.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

GET /home/calendar: Redirect to main page.
POST /signup: Add User with email and password.
POST /login: User registration with email and password.
GET /home/calendar/: Get mood and periods entries for the current user.
POST /home/calendar/: Add mood and periods entries for the current user.
POST /home/calendar: User logout.


### Auth

User authentication will be implemented using JWT tokens. Upon successful login, the server will generate a token that will be used to authenticate subsequent requests.

## Roadmap

- Set up project structure and basic frontend components.
- Implement user authentication.
- Develop mood tracking functionality.
- Add perods tracking feature.
- Enhance UI/UX for mood and periods screens.
- Finalize UI/UX improvements and perform testing.

## Nice-to-haves

- Insights and statistics.
- Social sharing features to connect with other users or healthcare professionals for support and advice.
