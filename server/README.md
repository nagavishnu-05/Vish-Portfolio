# Portfolio Server Setup

This is the backend server for the portfolio contact form using Express and Nodemailer.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the `server` directory with the following variables:

```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
PORT=5000
```

### 3. Getting Gmail App Password
1. Go to [Google Account Security](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Windows Computer" (or your device)
3. Google will generate a 16-character password
4. Use this password as `EMAIL_PASSWORD` in your `.env` file

### 4. For Other Email Providers
- **Outlook/Hotmail**: Use `EMAIL_SERVICE=outlook` and generate app passwords from account settings
- **Yahoo**: Use `EMAIL_SERVICE=yahoo` and generate app passwords
- **Custom SMTP**: Modify the transporter configuration in `server.js`

### 5. Run the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### POST /api/send-email
Sends an email from the contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "message": "Email sent successfully"
}
```

### GET /api/health
Health check endpoint to verify server is running.

## Running Frontend & Backend Together

1. Start the backend server in the `server` folder:
   ```bash
   npm run dev
   ```

2. In another terminal, start the frontend from the root directory:
   ```bash
   npm run dev
   ```

The Vite dev server will proxy API calls to the backend automatically.

## Deployment

For production deployment:
1. Deploy the server to a platform like Heroku, Railway, or Vercel
2. Update the API endpoint in `ContactPage.jsx` from `/api/send-email` to the deployed server URL
3. Set environment variables on your hosting platform
