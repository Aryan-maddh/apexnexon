# Host the backend on Vercel (same account as frontend)

You can run the **FastAPI backend** on Vercel as a **second project**. The frontend stays one project; the backend is a separate project that gives you an API URL.

---

## 1. Create a second Vercel project for the backend

1. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
2. **Import** the same Git repository (e.g. **Aryan-maddh/apexnexon**).
3. **Root Directory:** click **Edit** and set it to **`backend`** (so Vercel only uses the `backend/` folder).
4. **Framework Preset:** Vercel should detect **FastAPI** (or choose **Other**).
5. **Build Command:** leave empty (or `pip install -r requirements.txt` if needed).
6. **Output Directory:** leave empty.
7. Click **Deploy**.

After the first deploy, you’ll get a URL like **`https://apexnexon-api.vercel.app`** (or similar).

---

## 2. Set environment variables for the backend project

In the **backend project** on Vercel: **Settings** → **Environment Variables**. Add:

| Name | Value | Notes |
|------|--------|------|
| `MONGO_URL` | `mongodb+srv://...` | Your MongoDB Atlas connection string |
| `DB_NAME` | `apexnexon` | Main DB name |
| `DB_CONTACT` | `apexnexon` | DB for contact form (or same as DB_NAME) |
| `DB_BLOG` | `apexnexon` | DB for blog (or same as DB_NAME) |
| `CORS_ORIGINS` | `https://apexnexon.tech,https://apexnexon.vercel.app,https://www.apexnexon.tech` | Comma-separated frontend origins |
| `BLOG_EDIT_KEY` | (optional) | Secret key for creating/deleting blog posts |

Then **redeploy** the backend project so the new env vars are used.

---

## 3. Point the frontend to the backend

In the **frontend project** on Vercel: **Settings** → **Environment Variables**. Add (or update):

| Name | Value |
|------|--------|
| `REACT_APP_BACKEND_URL` | Your backend URL, e.g. `https://apexnexon-api.vercel.app` |

No trailing slash. Then **redeploy** the frontend so the new build uses this URL.

---

## 4. Notes

- **Contact form** will POST to `https://your-backend-url/api/contact` and should work.
- **Blog image upload** on Vercel saves to `/tmp` and does **not** persist between requests (serverless limitation). For persistent uploads you’d need something like Vercel Blob or S3; for a demo, contact form + blog create/list/delete are enough.
- **Email** (contact form notification) depends on `email_service` config (e.g. SMTP or SES). Set any required env vars in the backend project.

---

## Quick checklist

- [ ] Backend project created with **Root Directory** = `backend`
- [ ] Backend env vars set: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS` (and optional `DB_CONTACT`, `DB_BLOG`, `BLOG_EDIT_KEY`)
- [ ] Backend redeployed
- [ ] Frontend env var `REACT_APP_BACKEND_URL` set to backend URL
- [ ] Frontend redeployed
- [ ] Test contact form on the live site
