# StayNexus - Quick Start Guide 🚀

## Prerequisites
- PHP 8.0 or higher
- Composer
- Node.js & NPM
- MySQL database

## Installation Steps

### 1. Environment Setup
```bash
# Copy environment file
cp .env.example .env

# Configure database in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=staynexus
DB_USERNAME=root
DB_PASSWORD=your_password
```

### 2. Install Dependencies
```bash
# Install PHP dependencies
composer install

# Install JavaScript dependencies
npm install
```

### 3. Generate Application Key
```bash
php artisan key:generate
```

### 4. Run Migrations (Phase 2)
```bash
# This will be available in Phase 2
php artisan migrate
```

### 5. Build Frontend Assets
```bash
# Development build with hot reload
npm run dev

# OR Production build
npm run build
```

### 6. Start Development Server
```bash
# Terminal 1: Laravel server
php artisan serve

# Terminal 2 (if using dev): Vite dev server
npm run dev
```

## Access the Application

### Public Pages
- **Home**: http://localhost:8000
- **Search Hostels**: http://localhost:8000/hostels/search
- **Login**: http://localhost:8000/login
- **Register**: http://localhost:8000/register

### Dashboards (After Login)
- **Super Admin**: http://localhost:8000/superadmin/dashboard
- **Hostel Admin**: http://localhost:8000/hosteladmin/dashboard
- **Student**: http://localhost:8000/student/dashboard

## Default Test Accounts (Phase 2)

These will be created via seeders in Phase 2:

```
Super Admin:
Email: superadmin@staynexus.com
Password: password

Hostel Admin:
Email: admin@hostel1.com
Password: password

Student:
Email: student@example.com
Password: password
```

## Development Commands

### Frontend Development
```bash
# Watch for changes and rebuild
npm run dev

# Build for production
npm run build

# Format code
npm run format
```

### Backend Development
```bash
# Run Laravel server
php artisan serve

# Clear cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

# Run migrations
php artisan migrate

# Seed database
php artisan db:seed

# Create new controller
php artisan make:controller ControllerName

# Create new model
php artisan make:model ModelName -m

# Run tests
php artisan test
```

## Project Structure Overview

```
staynexus/
├── app/                    # Laravel application code
├── resources/
│   ├── js/                # React components
│   │   ├── Components/    # Reusable components
│   │   ├── Layouts/       # Layout components
│   │   └── Pages/         # Page components
│   ├── css/               # Stylesheets
│   └── views/             # Blade templates
├── routes/
│   ├── web.php           # Web routes
│   ├── api.php           # API routes
│   └── auth.php          # Auth routes
├── database/
│   ├── migrations/       # Database migrations
│   └── seeders/          # Database seeders
├── public/               # Public assets
└── storage/              # File storage
```

## Available Routes

### Public Routes
```
GET  /                     - Home page
GET  /hostels/search       - Search hostels
GET  /hostels/{id}         - Hostel details
GET  /login                - Login page
GET  /register             - Register page
```

### Super Admin Routes
```
GET  /superadmin/dashboard      - Dashboard
GET  /superadmin/hostels        - Manage hostels
GET  /superadmin/subscriptions  - Manage subscriptions
GET  /superadmin/analytics      - View analytics
GET  /superadmin/users          - Manage users
```

### Hostel Admin Routes
```
GET  /hosteladmin/dashboard  - Dashboard
GET  /hosteladmin/rooms      - Manage rooms
GET  /hosteladmin/bookings   - Manage bookings
GET  /hosteladmin/reviews    - View reviews
GET  /hosteladmin/staff      - Manage staff
GET  /hosteladmin/settings   - Settings
```

### Student Routes
```
GET  /student/dashboard  - Dashboard
GET  /student/search     - Search hostels
GET  /student/bookings   - My bookings
GET  /student/reviews    - My reviews
GET  /student/profile    - Profile
```

## Troubleshooting

### Issue: Assets not loading
```bash
# Rebuild assets
npm run build

# Clear Laravel cache
php artisan cache:clear
```

### Issue: Route not found
```bash
# Clear route cache
php artisan route:clear

# List all routes
php artisan route:list
```

### Issue: Database connection error
```bash
# Check .env file database credentials
# Ensure MySQL is running
# Create database if it doesn't exist
```

### Issue: Permission denied
```bash
# Fix storage permissions (Linux/Mac)
chmod -R 775 storage bootstrap/cache

# Windows: Run as administrator
```

## Tech Stack

- **Backend**: Laravel 9
- **Frontend**: React 18
- **Routing**: Inertia.js
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Build Tool**: Vite
- **Database**: MySQL

## Features Implemented (Phase 1)

✅ Landing page with hero section
✅ Hostel search with filters
✅ Role-based dashboard layouts
✅ Super Admin dashboard
✅ Hostel Admin dashboard
✅ Student dashboard
✅ Authentication (Login/Register)
✅ Responsive design
✅ Modern UI components

## Coming in Phase 2

⏳ Database schema & migrations
⏳ Backend API controllers
⏳ Repository pattern
⏳ Service layer
⏳ Multi-tenant data isolation
⏳ Booking workflow
⏳ Review system
⏳ Google Maps integration
⏳ Payment integration
⏳ Email notifications

## Support

For issues or questions:
1. Check documentation files
2. Review Laravel documentation: https://laravel.com/docs
3. Review Inertia.js documentation: https://inertiajs.com
4. Review React documentation: https://react.dev

---

**Status**: Phase 1 Complete ✅
**Last Updated**: 2024
