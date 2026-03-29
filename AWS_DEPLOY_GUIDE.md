# 🚀 Deploy Saurabh Lande Portfolio to AWS

## Option 1: AWS S3 + CloudFront (Recommended — Cheapest & Fastest)

### Step 1 — Build the project locally
```bash
npm install
npm run build
# This creates a /dist folder
```

### Step 2 — Create an S3 bucket
1. Go to **AWS S3 Console** → Create bucket
2. Bucket name: `saurabh-lande-portfolio` (must be globally unique)
3. Region: `ap-south-1` (Mumbai — closest to Nagpur)
4. **Uncheck** "Block all public access"
5. Enable **Static website hosting** → Index document: `index.html`, Error document: `index.html`

### Step 3 — Upload build files
```bash
# Install AWS CLI first if not done
aws configure  # enter your Access Key, Secret Key, region

# Upload dist/ to S3
aws s3 sync ./dist s3://saurabh-lande-portfolio --delete
```

### Step 4 — Set S3 Bucket Policy (make it public)
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::saurabh-lande-portfolio/*"
  }]
}
```

### Step 5 — Set up CloudFront (CDN + HTTPS)
1. Go to **CloudFront** → Create Distribution
2. Origin domain: Select your S3 bucket
3. **Redirect HTTP to HTTPS**
4. Default root object: `index.html`
5. Error pages → Add custom error: 403 → `/index.html` → 200 (for React Router)
6. Deploy (takes ~10 mins)

✅ Your site will be live at: `https://xxxxxx.cloudfront.net`

---

## Option 2: AWS Amplify (Easiest — Auto CI/CD)

1. Push your code to **GitHub**
2. Go to **AWS Amplify Console** → New App → Host web app
3. Connect GitHub repo → Select branch
4. Amplify auto-detects Vite/React and builds + deploys
5. Every `git push` auto-deploys! ✅

---

## Option 3: Custom Domain (Optional)

1. Buy domain on **Route 53** or use existing one
2. In **Route 53** → Create hosted zone → Add A record → Alias to CloudFront
3. In **ACM (Certificate Manager)** → Request certificate → Validate via DNS
4. Attach certificate to CloudFront distribution

---

## Cost Estimate (Monthly)
| Service | Cost |
|---------|------|
| S3 Storage (~10 MB) | ~$0.00 |
| CloudFront (first 1TB free) | $0.00 |
| Route 53 (custom domain) | ~$0.50 |
| **Total** | **~$0.50/month** |

> Free tier covers most usage for a portfolio site!
