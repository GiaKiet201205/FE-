# IIG Training Center - React Modular Demo

## Demo accounts

| Role | Email | Password | Dashboard |
|---|---|---|---|
| Admin | admin@iig.com | 123456 | /admin |
| Teacher | teacher@iig.com | 123456 | /teacher |
| Student | student@iig.com | 123456 | /my-courses |

## Authentication features

- Login with 3 demo accounts.
- Role-based protected routes.
- Logout.
- Login state persisted in localStorage under `iig_current_user`.
- Password is not stored in localStorage.
- Header changes according to the logged-in role.
- Unauthorized users are redirected to their own dashboard.

## Run

```bash
npm install
npm run dev
```

This is frontend-only demo authentication. Replace `AuthContext.login()` with your backend API/JWT when the J2EE/.NET backend is ready.
