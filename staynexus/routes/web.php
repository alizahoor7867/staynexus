<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About/Index');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
})->name('contact');

// Public Hostel Routes
Route::get('/hostels/search', function () {
    $location = request('location', '');
    return Inertia::render('Hostels/Search', [
        'hostels' => [],
        'filters' => [],
        'location' => $location
    ]);
})->name('hostels.search');

Route::get('/hostels/book-now', function () {
    return Inertia::render('Hostels/BookNow', [
        'hostel' => []
    ]);
})->name('hostels.book-now');

Route::get('/hostels/schedule-visit', function () {
    return Inertia::render('Hostels/ScheduleVisit', [
        'hostel' => []
    ]);
})->name('hostels.schedule-visit');

Route::get('/hostels/{id}', function ($id) {
    return Inertia::render('Hostels/Show', [
        'hostel' => []
    ]);
})->name('hostels.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Super Admin Routes
Route::prefix('superadmin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('SuperAdmin/Dashboard', ['stats' => []]);
    })->name('superadmin.dashboard');
    Route::get('/hostels', function () {
        return Inertia::render('SuperAdmin/Hostels');
    })->name('superadmin.hostels');
    Route::get('/users', function () {
        return Inertia::render('SuperAdmin/Users');
    })->name('superadmin.users');
    Route::get('/subscriptions', function () {
        return Inertia::render('SuperAdmin/Subscriptions');
    })->name('superadmin.subscriptions');
    Route::get('/analytics', function () {
        return Inertia::render('SuperAdmin/Analytics');
    })->name('superadmin.analytics');
    Route::get('/reports', function () {
        return Inertia::render('SuperAdmin/Reports');
    })->name('superadmin.reports');
    Route::get('/settings', function () {
        return Inertia::render('SuperAdmin/Settings');
    })->name('superadmin.settings');
    Route::get('/invoices', function () {
        return Inertia::render('SuperAdmin/Invoices');
    })->name('superadmin.invoices');
});

// Hostel Admin Routes
Route::prefix('hosteladmin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('HostelAdmin/Dashboard', ['stats' => []]);
    })->name('hosteladmin.dashboard');
    Route::get('/rooms', function () {
        return Inertia::render('HostelAdmin/Rooms');
    })->name('hosteladmin.rooms');
    Route::get('/bookings', function () {
        return Inertia::render('HostelAdmin/Bookings');
    })->name('hosteladmin.bookings');
    Route::get('/reviews', function () {
        return Inertia::render('HostelAdmin/Reviews');
    })->name('hosteladmin.reviews');
    Route::get('/staff', function () {
        return Inertia::render('HostelAdmin/Staff');
    })->name('hosteladmin.staff');
    Route::get('/settings', function () {
        return Inertia::render('HostelAdmin/Settings');
    })->name('hosteladmin.settings');
    Route::get('/students', function () {
        return Inertia::render('HostelAdmin/Students');
    })->name('hosteladmin.students');
    Route::get('/billing', function () {
        return Inertia::render('HostelAdmin/Billing');
    })->name('hosteladmin.billing');
});

// Student Routes
Route::prefix('student')->middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Student/Dashboard', [
            'bookings' => [],
            'recommendations' => []
        ]);
    })->name('student.dashboard');
    Route::get('/search', function () {
        return Inertia::render('Hostels/Search');
    })->name('student.search');
    Route::get('/bookings', function () {
        return Inertia::render('Student/Bookings');
    })->name('student.bookings');
    Route::get('/reviews', function () {
        return Inertia::render('Student/Reviews');
    })->name('student.reviews');
    Route::get('/profile', function () {
        return Inertia::render('Student/Profile');
    })->name('student.profile');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
