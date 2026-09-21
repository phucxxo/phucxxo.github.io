# SellerGraph — landing page + console

Static HTML + CSS + vanilla JS. No framework, no build step.

```
index.html      landing page (video hero)
login.html      role gate: seller / admin
app.html        seller chatbot
admin.html      admin board + per-run forensics

styles.css      landing page
console.css     shared console shell
chat.css        seller chat
admin.css       admin board

main.js         landing page (stats count-up, mobile menu)
api.js          backend client + formatting helpers
auth.js         demo role gate
chat.js         seller chat
admin.js        admin board
demo-data.js    frozen snapshot of real backend responses

assets/logo.webp
fonts/GeistPixel-Circle.woff2
```

## Accounts

| Tài khoản | Mật khẩu | Thấy gì |
|---|---|---|
| `seller` | `1234` | Chatbot vốn lưu động, phê duyệt / từ chối đề xuất |
| `admin`  | `1234` | Bảng tổng hợp nhiều gian hàng, chi tiết đầu vào/đầu ra từng hồ sơ |

> **Đây không phải bảo mật.** Mật khẩu nằm ngay trong `auth.js` mà ai cũng đọc
> được, và backend không kiểm tra người gọi. Nó chỉ để demo hai màn hình khác
> nhau. Production RBAC nằm ngoài phạm vi MVP.

## Connecting to the backend

The console needs the SellerGraph API. Three ways, easiest first:

**1. Serve the console from the API (recommended for local work)**

```bash
cd sellergraph-core
uvicorn app.main:app --reload --port 8000
# open http://localhost:8000/app/login.html
```

Same origin, so no CORS and no mixed-content problems at all.

**2. Open the published page and point it at a local backend**

Open the GitHub Pages URL, then paste `http://localhost:8000` into the
connection bar. The backend already sends the CORS and Private-Network headers
Chrome needs for an HTTPS page to reach localhost.

**3. Demo data**

With no backend reachable, click *Dùng dữ liệu demo*. `demo-data.js` is a
**frozen snapshot of real backend responses** — genuine engine output, not
invented numbers — and every screen shows a `DỮ LIỆU DEMO` banner while it is
in use. Regenerate it with `python scripts/capture_demo_data.py` from the
backend repo.

## What the seller screen shows

The model's prose and the engine's numbers are rendered as **separate blocks**
on purpose:

- the explanation is free text with no authority over any figure;
- the **SỐ LIỆU TỪ CÔNG CỤ TẤT ĐỊNH** panel is rendered field by field straight
  from the API's `facts` object.

A frontend that parsed amounts out of the prose would defeat the architecture,
so this one never does.

## What the admin screen shows

- Portfolio KPIs and a seller table (risk band, PD, limit, exposure, executed).
- Every run, newest first, filterable by seller.
- Click a run for four tabs: **Tổng quan**, **Đầu vào / đầu ra** (every tool
  call with its validated input, its output and the audit hashes), **Nhật ký**,
  and **Đề xuất & giải ngân**.

Read-only by design: approving from an oversight screen would record the
decision against nobody.

## Notes

- Background video streams from CloudFront; first paint is black until it buffers.
- Display type is **BubbledotICG-FinePos** (OnlineWebFonts CDN), with
  **Geist Pixel Circle** bundled locally as the fallback.
- Icons are Font Awesome 6.5.2 brand glyphs from cdnjs.
- Mobile breakpoint is 720px.
- Honours `prefers-reduced-motion`.
