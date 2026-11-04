# Unique Foundation School

A polished school website and student result portal built for a modern secondary school brand. This project combines a professional public-facing homepage with a practical academic records system, giving the school an online presence that feels credible, welcoming, and functional.

## Project vision

Unique Foundation School needed a website that could do more than just display information. The project was designed to reflect the school’s values and identity while also supporting real operational needs such as:

- Admissions and school enquiries
- Student result access
- Staff/admin record management
- A simple and responsive digital experience for parents and students

## What this project includes

- A clean landing page for the school
- Academic and admissions sections
- Contact information and enquiry form
- A student result portal
- An admin dashboard for managing academic data
- CSV-based record upload for students and results
- Responsive design for mobile and desktop users

## Project structure

```text
school/
├── index.html          # Public school homepage
├── examportal.html     # Student result portal
├── admin.html          # Admin dashboard
├── config.js           # School configuration and Supabase settings
├── script.js           # Enquiry form behavior
├── logo.svg            # School logo
├── *.jpg               # School photography assets
├── README.md           # Project documentation
└── ...
```

## Tech stack

- HTML5
- CSS3
- JavaScript
- Supabase
- Papa Parse

## Portfolio-style overview

This project presents a strong example of a digital school brand identity, combining:

- Educational storytelling and school communication
- Functional user interfaces for parents and administrators
- Data-driven tools for report management
- A clean design language suitable for a growing institution

It is especially useful as a portfolio project because it shows both frontend design and practical school administration functionality in one complete solution.

## Features

### Public website
- School introduction and mission-focused storytelling
- Academic structure from JSS 1 to SS 3
- Admissions information and enquiry flow
- Gallery section and school highlights
- Contact details for parents and guardians

### Results portal
- Result lookup by Student ID and PIN
- Session and term selection
- Clear academic performance summary
- Pass/fail indicators
- Print-friendly result sheet layout

### Admin dashboard
- Secure sign-in flow for administrators
- Upload student records by CSV
- Upload subject results by CSV
- Auto-generate or reset student PINs
- Download student PIN lists
- Delete results or reset all data when needed

## Getting started

### Option 1: Open in browser

Open `index.html` in your preferred browser.

### Option 2: Run locally

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Configuration

The application reads school and database settings from `config.js`.

```js
window.APP_CONFIG = {
  SUPABASE_URL: "https://your-project.supabase.co",
  SUPABASE_KEY: "your-publishable-key",
  SCHOOL_NAME: "Unique Foundation School",
  SESSIONS: ["2026/2027"],
  TERMS: ["First Term", "Second Term", "Third Term"],
  DEFAULT_SESSION: "2026/2027",
  DEFAULT_TERM: "First Term",
  PASS_MARK: 40
};
```

You should update the Supabase credentials for your live deployment.

## Admin usage

1. Open `admin.html` in the browser.
2. Sign in with an approved admin account.
3. Upload student data using a CSV file.
4. Upload academic results using the result CSV format.
5. Download PINs or manage records as needed.

### Student CSV example

```csv
student_id,name,class,pin
UFS/001,Jane Doe,JSS 1,
```

- Leave the `pin` field blank to auto-generate a 6-digit PIN.
- Re-uploading an existing student resets their PIN.

### Result CSV example

```csv
student_id,session,term,subject,ca,exam
UFS/001,2026/2027,First Term,Mathematics,30,50
```

- `ca` should be from 0 to 40
- `exam` should be from 0 to 60

## Design and project goals

This project was built with a school brand in mind:

- professional and trustworthy
- accessible for parents and students
- engaging and informative for the community
- practical for school administration

It demonstrates a balanced approach between aesthetic presentation and real-world utility, which is a strong quality for a front-end and web portfolio project.

## Notes

- The project is static and does not need a framework or build system.
- Some sections may need replacement with official school data, branding, and media assets.
- Production deployment would benefit from stronger validation, backups, and role-based admin protection.

## Future improvements

- Add a dedicated admissions page
- Include a real school blog or news section
- Add better student account security and role checks
- Improve SEO and metadata for each page
- Replace sample content with final school information
- Add a contact form backend for production use

## Project status

This project is currently a functional school website and digital academic portal, suitable for showcasing a school’s online presence and student management workflow.

## License

No license has been assigned yet for this project.
