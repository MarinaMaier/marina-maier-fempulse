# Project Title
FemPulse

## Overview

FemPulse is a web application designed to empower women by providing a convenient platform for tracking mood, menstruation, and ovulation. The app aims to support women in understanding their emotional and physical well-being by offering insights based on their tracked data.

### Problem

Many women face challenges in tracking their mood, menstrual cycles, and ovulation periods due to the lack of user-friendly and comprehensive tools. This can lead to difficulties in understanding patterns and managing emotional and physical health effectively. W2W addresses these challenges by providing a simple yet powerful solution for tracking and analyzing important aspects of women's health.

### User Profile

The target users of FemPulse are women of reproductive age who want to gain insights into their mood, menstrual cycles, and ovulation periods. They may lead busy lives and need a convenient and intuitive app to track their health seamlessly. Special considerations include ensuring privacy and sensitivity in handling personal health data.

### Features

1. Mood Tracking: Users can easily log their daily mood by selecting from predefined options or adding custom mood tags.

2. Menstruation Tracking: The app allows users to track their menstrual cycles, including the start and end dates of periods.

3. Ovulation Tracking: W2W provides features for tracking ovulation periods, helping users understand their fertility cycles.

4. Weekly Insights: At the end of each week, users receive informative summaries that highlight patterns and correlations between mood and menstrual cycles.

5. Optional Comments: Users can add optional.

## Implementation

### Tech Stack

Frontend: React
Backend: Node.js with Express for the server-side logic
Database: MySQL for storing user data
Authentication: JSON Web Tokens (JWT) for user authentication

### APIs

No external APIs are required for the core functionality of the app.


### Sitemap

- Login Screen
- Home/Calendar (Summary)
    - Mood Tracking
    - Menstruation Tracking
    - Ovulation Tracking
    - Monthly Insights
- Input Screen for user to add data

### Mockups

Mood Tracking

Menstruation Tracking

Ovulation Tracking

### Data

The app stores user data, including mood entries, menstrual cycle information, and ovulation tracking data. These are related as follows:

- Each user has multiple mood entries, each associated with a specific date.
- Each user has a menstrual cycle record, including start and end dates for each period.
- Each user can track ovulation periods, with associated start and end dates.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

**GET /moods**

- Retrieves mood entries for the authenticated user.
Parameters: None.

Example Response:
```
[
    {
        "id": 1,
        "date": "2024-03-18",
        "mood": "😊",
        "comment": "Great day!"
    },
    {
        "id": 2,
        "date": "2024-03-17",
        "mood": "😐",
        "comment": "Feeling neutral."
    },
    ...
]
```
**POST /moods**
- Creates a new mood entry for the authenticated user.
Parameters:

- mood: Mood selected by the user (can be "😊", "😐", "😖", or "😞").
- comment (optional): Additional comment provided by the user.

Example Request:
```
{
    "mood": "😊",
    "comment": "Great day!"
}
```
Example Response:
```
{
    "id": 3,
    "date": "2024-03-19",
    "mood": "😊",
    "comment": "Great day!"
}
```
POST /api/auth/login: User login with email and password.
POST /api/auth/register: User registration with email and password.
GET /api/mood: Get mood entries for the current user.
POST /api/mood: Add a new mood entry for the current user.
GET /api/menstruation: Get menstrual cycle data for the current user.
POST /api/menstruation: Add or update menstrual cycle data for the current user.
GET /api/ovulation: Get ovulation tracking data for the current user.
POST /api/ovulation: Add or update ovulation tracking data for the current user.

### Auth

User authentication will be implemented using JWT tokens. Upon successful login, the server will generate a token that will be used to authenticate subsequent requests.

## Roadmap

- Set up project structure and basic frontend components.
- Implement user authentication.
- Develop mood tracking functionality.
- Add menstruation tracking feature.
- Enhance UI/UX for mood and menstruation tracking screens.
- Implement ovulation tracking feature.
- Generate monthly insights based on tracked data.
- Finalize UI/UX improvements and perform testing.

## Nice-to-haves

- Integration with wearable devices for automatic mood and activity tracking.
- Reminders and notifications for upcoming periods and ovulation periods.
- Social sharing features to connect with other users or healthcare professionals for support and advice.
