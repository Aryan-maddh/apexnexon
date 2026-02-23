# Fix: One Vercel project + Python error + contact form 405

You currently have **one** project (**apexnexon**) that’s trying to do both frontend and backend, which causes the Python runtime error and the form 405. Do the following.

---

## Step 1: Make the existing project frontend-only

1. In Vercel, open the **apexnexon** project.
2. Go to **Settings** → **General**.
3. **Root Directory:** set to **`frontend`** (so only the React app is built). Save.
4. **Build & Development:**
   - **Framework Preset:** Create React App (or leave as detected).
   - **Build Command:** `npm run build` (or `yarn build`).
   - **Output Directory:** `build`.
   - **Install Command:** `npm install` (or `npm install --legacy-peer-deps` if you use that locally).
5. Remove any Python-related settings or config from this project.
6. **Redeploy** (Deployments → ⋮ → Redeploy).

After this, the Python runtime error should go away and the site (apexnexon.tech) will be frontend-only.

---

## Step 2: Create a second project for the backend

1. In Vercel, click **Add New** → **Project**.
2. **Import** the same Git repo (e.g. **Aryan-maddh/apexnexon**).
3. **Root Directory:** click **Edit** → set to **`backend`**. Continue.
4. **Project Name:** e.g. **apexnexon-api**.
5. **Environment Variables** (add before or after first deploy):
   - `MONGO_URL` = your MongoDB Atlas connection string
   - `DB_NAME` = `apexnexon`
   - `DB_CONTACT` = `apexnexon`
   - `DB_BLOG` = `apexnexon`
   - `CORS_ORIGINS` = `https://www.apexnexon.tech,https://apexnexon.tech,https://apexnexon.vercel.app`
   - (optional) `BLOG_EDIT_KEY` = your secret for blog create/delete
6. Deploy. Copy the **production URL** (e.g. `https://apexnexon-api-xxxx.vercel.app`).

---

## Step 3: Point the frontend to the backend

1. Open the **apexnexon** (frontend) project again.
2. **Settings** → **Environment Variables**.
3. Add or edit:
   - **Name:** `REACT_APP_BACKEND_URL`
   - **Value:** the backend URL from Step 2 (e.g. `https://apexnexon-api-xxxx.vercel.app`) — **no trailing slash**
   - **Environments:** Production (and Preview if you want).
4. Save.
5. **Redeploy** the frontend (Deployments → Redeploy).

---

## Result

- **apexnexon** (frontend) → builds from `frontend/` → apexnexon.tech (no Python error).
- **apexnexon-api** (backend) → builds from `backend/` → e.g. apexnexon-api-xxxx.vercel.app (handles `/api/contact`).
- Contact form sends to `REACT_APP_BACKEND_URL/api/contact` → backend → no more 405.
