# 🎬 QuickShow – Movie Ticket Booking Platform

**QuickShow** is a feature-rich **MERN stack** application that offers a seamless movie ticket booking experience. Users can sign up, explore movies, book seats, make payments, and receive instant confirmation — all through an elegant, intuitive interface. Admins get a powerful dashboard to manage shows, users, bookings, and revenue.

---

## 🚀 **Live Demo**

🌐 Click here to explore the deployed app:  
🔗 **[https://quickshow-eight-mocha.vercel.app/](https://quickshow-eight-mocha.vercel.app/)**

---

## 🚀 Key Features

### 👤 User Experience

- 🔐 **Secure Authentication**
  - 👥 Multi-account login/signup with [Clerk](https://clerk.dev/)
  - 🔐 Clerk handles session management, user metadata, and role-based access

- 🎬 **Movie Discovery**
  - 🧠 Real-time movie listings via [TMDB API](https://www.themoviedb.org/)
  - ❤️ Add movies to your **Favorites** list for quick access

- 🗓️ **Show Selection & Booking**
  - 🎥 Choose a movie → 📆 Select date → ⏰ Choose time → 🎫 Pick your seats → 💳 Pay securely
  - 💸 Powered by [Stripe](https://stripe.com/) for lightning-fast, secure payments

- ⏳ **Intelligent Seat Hold System**
  - 🚧 If payment fails or is skipped, selected seats are locked for **10 minutes**
  - 🔁 Users can complete payment from **My Bookings** within the hold window
  - 🔓 After 10 minutes, seats are automatically released

- ✅ **Smart Redirection & Confirmation**
  - 🔁 On successful payment, users are redirected to the **My Bookings** page
  - 📧 Booking confirmation is emailed instantly via [Brevo (SendinBlue)](https://www.brevo.com/)

- 📬 **Proactive Email Notifications**
  - 📢 New show announcements are emailed to all users

---

## 🛠️ Admin Dashboard

> Admins are authenticated via Clerk metadata:

```json
{
  "role": "admin"
}
```

- 📊 **Dashboard Overview**
  - 📦 Total Bookings  
  - 💰 Revenue  
  - 🎭 Active Shows  
  - 👥 Total Users

- ➕ **Add Shows**
  - 🎞️ Select a movie from TMDB list, set price, date, time — then ➕ publish the show

- 📋 **Manage Shows**
  - 🗂️ See all shows with time, bookings count, and 💵 earnings

- 📑 **Manage Bookings**
  - 👤 View bookings with: Username, Movie, Time, Seats, and Amount

---

## 🧪 Tech Stack

| 🧰 Technology     | 📝 Description                          |
|------------------|------------------------------------------|
| 🟢 MongoDB        | Database (NoSQL)                         |
| ⚙️ Express.js     | Backend Framework                        |
| ⚛️ React + Vite   | Frontend Framework (SPA)                 |
| 🟣 Node.js        | JavaScript Runtime                       |
| 🎨 Tailwind CSS   | Utility-first CSS Framework              |
| 🧾 Clerk          | Authentication & Role Management         |
| 💳 Stripe         | Payment Processing                       |
| ✉️ Brevo (SMTP)   | Email Delivery & Notifications           |
| 🧠 Inngest        | Background Jobs (Seat Release Logic)     |
| 🎬 TMDB API       | Movie Data Integration                   |

---

## 📁 Project Structure

```
QuickShow/
├── client/                # Frontend (React + Vite)
│   ├── .env               # Frontend env variables
│   └── ...
├── server/                # Backend (Express.js)
│   ├── .env               # Backend env variables
│   └── ...
├── README.md
└── ...
```

---

## 🔐 Environment Variables

### 🌐 Server-Side (`server/.env`)
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

### 💻 Client-Side (`client/.env`)
```
VITE_CURRENCY=

VITE_CLERK_PUBLISHABLE_KEY=

VITE_BASE_URL=

VITE_TMDB_IMAGE_BASE_URL=
```

---

## 🧾 Local Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/omrajkamat68/QuickShow.git
cd QuickShow
```

### 2️⃣ Install Dependencies

📦 **Frontend:**

```bash
cd client
npm install
```

📦 **Backend:**

```bash
cd ../server
npm install
```

### 3️⃣ Add Environment Variables

📝 Create `.env` files in both `client/` and `server/` directories  
🔑 Paste and fill in the respective keys from the sections above

### 4️⃣ Run the Application

🚀 **Start Backend:**

```bash
cd server
npm run server
```

🚀 **Start Frontend:**

```bash
cd client
npm run dev
```

---

## ✉️ Email Functionality

- 📩 **Booking Confirmation:** Sent after successful payment
- 📣 **New Show Alerts:** Sent to all users when a new show is added
- 📤 **SMTP:** Powered by [Brevo (SendinBlue)](https://www.brevo.com/)

---

## 🧠 Core Logic Highlights

- ⏱️ **10-Minute Seat Locking:** Prevents overbooking on incomplete payments  
- ♻️ **Retry Booking:** Option to complete payment later from **My Bookings**  
- 📊 **Live Analytics:** Admin dashboard reflects up-to-date stats  
- 🔐 **Role-Based Access Control:** Admin-only routes via Clerk metadata

---

## 🌟 Future Enhancements

- 📱 Mobile-responsive design
- 🔍 Advanced movie/show filters
- 📲 SMS alerts for booking confirmations
- 🎫 Real-time cinema integration

---

## 🙏 Acknowledgements

- 🎥 [TMDB](https://www.themoviedb.org/) – Movie Data  
- 🧾 [Clerk](https://clerk.dev/) – User Authentication  
- 💳 [Stripe](https://stripe.com/) – Payment Gateway  
- ✉️ [Brevo](https://www.brevo.com/) – Email Services  
- 🧠 [Inngest](https://www.inngest.com/) – Background Job Scheduling
