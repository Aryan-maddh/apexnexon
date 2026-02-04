# Push to GitHub (fix 401 / Repository not found)

## Important: run the full command on ONE line
If you break the `git push` command across lines, the shell will run ` main` as a separate command and fail. Copy the full line below without line breaks.

## If Git uses the wrong user (e.g. "denied to Aryan-wanbuffer")
Git/Cursor is sending **Aryan-wanbuffer’s** credentials instead of your token. Even with the token in the URL or `credential.helper=` it can still use system/Cursor credentials.

**Do this:**

1. **Use a system terminal outside Cursor** (e.g. **Ctrl+Alt+T** → open Terminal, or use another app). Cursor’s Git integration may be injecting Aryan-wanbuffer’s credentials.
2. **Clear stored GitHub credentials** (so only your token is used):
   ```bash
   git config --global --unset-all credential.helper
   rm -f ~/.git-credentials
   ```
   If you use a keyring (GNOME Keyring, KWallet), remove stored `github.com` entries.
3. **Push to your own repo** (recommended): Create **aryan-madd/apexnexon** on GitHub (if it doesn’t exist), then:
   ```bash
   cd ~/apexnexon
   git push https://aryan-madd:YOUR_TOKEN@github.com/aryan-madd/apexnexon.git main
   ```
   Then open a **Pull Request** from **aryan-madd/apexnexon** → **Aryan-maddh/apexnexon** so the owner can merge your changes.
4. **If you must push directly to Aryan-maddh/apexnexon**: You need write access. The owner (Aryan-maddh) must add **aryan-madd** (or Aryan-wanbuffer) as a collaborator with **Write** permission. Then push from the system terminal (outside Cursor) with your token in the URL.

---

## 1. Check the repo exists
- Open **https://github.com/aryan-madd/apexnexon** in your browser (log in as **aryan-madd**).
- If you get 404, create the repo: **New** → name: `apexnexon` → Create (no README if you already have code).

## 2. Create a new Personal Access Token (PAT)
- GitHub → **Settings** (your profile) → **Developer settings** → **Personal access tokens** → **Tokens (classic)**.
- **Generate new token (classic)**.
- Note: e.g. `apexnexon push`.
- Expiration: 90 days or No expiration.
- Scopes: check **repo** (full control).
- **Generate token** → **copy the token** (you won’t see it again).

## 3. Push from system terminal (not Cursor)
Cursor’s Git askpass often causes 401. Use your system terminal instead.

**Option A – Push and type credentials when asked**
```bash
cd ~/apexnexon
git push origin main
```
- **Username:** `aryan-madd` (your exact GitHub username).
- **Password:** paste your **new PAT** (not your GitHub password).

**Option B – One-time push with token in URL (then remove it)**
```bash
cd ~/apexnexon
git push https://aryan-madd:YOUR_NEW_TOKEN_HERE@github.com/aryan-madd/apexnexon.git main
```
Replace `YOUR_NEW_TOKEN_HERE` with your PAT. After a successful push, clear the URL so the token isn’t stored:
```bash
git remote set-url origin https://github.com/aryan-madd/apexnexon.git
```

## 4. If your GitHub username is different
If your login is e.g. **Aryan-madd** (capital A) or **AryanMadd**, use that exact username and the same repo path (GitHub redirects, but the username for auth must be correct).

## 5. Use SSH instead (optional)
If you have an SSH key added to GitHub:
```bash
git remote set-url origin git@github.com:aryan-madd/apexnexon.git
git push origin main
```
No password popup; it uses your SSH key.
