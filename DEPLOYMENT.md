# Deployment Checklist

## 1) Frontend (Vercel)

- Import this Git repository in Vercel.
- Set **Root Directory** to `frontend`.
- Keep defaults:
  - Install command: `npm install`
  - Build command: `npm run build`
  - Output: Next.js auto-detected
- Add these environment variables in Vercel project settings:
  - `NEXT_PUBLIC_STRAPI_URL` = your deployed Strapi URL (example: `https://your-cms.example.com`)
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
  - `OUTLOOK_SMTP_HOST`
  - `OUTLOOK_SMTP_PORT`
  - `OUTLOOK_SMTP_USER`
  - `OUTLOOK_SMTP_PASS`
  - `ENQUIRY_TO_EMAIL`
  - `ENQUIRY_FROM_EMAIL`

## 2) CMS (Strapi)

Deploy `cms` separately (Render / Railway / VPS). Vercel is not intended for running Strapi.

Required variables:

- `HOST=0.0.0.0`
- `PORT=1337` (or your host-assigned port)
- `CORS_ORIGIN=https://<your-vercel-domain>`
- `APP_KEYS`
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `JWT_SECRET`
- `ENCRYPTION_KEY`

In Strapi admin:

- **Settings -> Users & Permissions plugin -> Roles -> Public**
- Enable blog `find` and `findOne`.

## 3) Connect both apps

- Confirm frontend calls:
  - `/api/blogs?populate=*`
  - `/api/blogs?populate=*&filters[slug][$eq]=<slug>`
- Confirm CMS CORS allows your Vercel domain.
