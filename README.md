# 🎬 QuickShow – Movie Ticket Booking Platform

QuickShow is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) movie ticket booking platform that allows users to seamlessly browse movies, select shows, choose seats, make payments, and receive booking confirmations. It features both **User** and **Admin** panels, integrating modern tools and services for real-time updates and transactional notifications.

---

## 🚀 Features

### 👥 User Panel

- 🔐 **Authentication**
  - User signup & login using [Clerk](https://clerk.dev/)
  - Support for multiple user accounts

- 🎞️ **Movie Exploration**
  - Browse movies using the TMDB API
  - Mark movies as **Favorites** to view later

- 🎟️ **Booking Flow**
  - Select movie → choose date → select show time → pick seats → make payment
  - Integrated with **Stripe** for secure payments

- 🕐 **Seat Hold Logic**
  - If payment fails or is not made, selected seats are held for **10 minutes**
  - User can retry payment from **My Bookings**
  - After 10 minutes, held seats are released for others to book

- ✅ **Post-Booking**
  - On payment success, users are redirected to **My Bookings**
  - Confirmation email sent via **Brevo (SendinBlue)**

- ✉️ **New Show Alerts**
  - Users are notified via email when a new show is added

---

### 🛠️ Admin Dashboard

Admins are identified using Clerk private metadata:  
```json
"role": "admin"
```

#### 🧾 Dashboard Page
- Total Bookings
- Total Revenue
- Active Shows
- Total Users

#### ➕ Add Shows Page
- Select movie from the TMDB movie list
- Add pricing, date, and time
- Click "Add Show" to publish

#### 📋 List Shows Page
- View all shows with:
  - Movie title
  - Show timing
  - Total bookings
  - Earnings

#### 📑 List Bookings Page
- View user bookings with:
  - Username
  - Movie
  - Time
  - Seats
  - Amount paid

---

## 🧪 Tech Stack

| Tech         | Purpose                                |
|--------------|----------------------------------------|
| MongoDB      | NoSQL Database                         |
| Express.js   | Backend Framework                      |
| React + Vite | Frontend Framework                     |
| Node.js      | Runtime Environment                    |
| Tailwind CSS | UI Styling                             |
| Clerk        | Authentication & Role Management       |
| Stripe       | Payment Gateway                        |
| Brevo        | Email Notifications (SMTP)             |
| Inngest      | Background Jobs / Delayed Tasks        |
| TMDB API     | Movie Info API                         |

---

## 📁 Project Structure

```
QuickShow/
├── client/                # React + Vite frontend
│   ├── .env               # Frontend environment variables
│   └── ...
├── server/                # Express backend
│   ├── .env               # Backend environment variables
│   └── ...
├── README.md
└── ...
```

---

## 🔐 Environment Variables

### Server-side (`server/.env`)
```
MONGODB_URI=

CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

TMDB_API_KEY=

STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

SENDER_EMAIL=
SMTP_USER=
SMTP_PASS=
```

### Client-side (`client/.env`)
```
VITE_CURRENCY=

VITE_CLERK_PUBLISHABLE_KEY=

VITE_BASE_URL=

VITE_TMDB_IMAGE_BASE_URL=
```

---

## 🧾 How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/omrajkamat68/QuickShow.git
cd QuickShow
```

### 2. Install Dependencies

**Client:**

```bash
cd client
npm install
```

**Server:**

```bash
cd ../server
npm install
```

### 3. Configure Environment Variables

- Create `.env` files in both `client/` and `server/` directories
- Add the keys mentioned above accordingly

### 4. Run the Project

**Start Backend:**

```bash
cd server
npm run server
```

**Start Frontend:**

```bash
cd client
npm run dev
```

---

## 📬 Email Functionality

- Booking confirmation emails
- New show announcement emails
- SMTP powered by [Brevo (SendinBlue)](https://www.brevo.com/)

---

## 🧠 Logic Highlights

- ⏳ Seats are locked for 10 minutes after user selection if payment is not completed
- 🔁 Retry mechanism from **My Bookings** page within that timeframe
- 🧮 Total revenue and booking data dynamically update in the admin dashboard
- 🛡️ Admin routes protected using Clerk role-based metadata

---

## 💡 Future Improvements

- Mobile responsiveness for all pages
- Search and filter for movies/shows
- SMS notifications for bookings
- Integration with real cinema APIs

---

## 🙌 Acknowledgements

- [TMDB](https://www.themoviedb.org/) for movie data
- [Clerk](https://clerk.dev/) for seamless auth
- [Stripe](https://stripe.com/) for payment integration
- [Brevo](https://www.brevo.com/) for transactional emails
- [Inngest](https://www.inngest.com/) for handling timed seat-release tasks

---
