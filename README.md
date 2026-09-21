# SellerGraph — landing page + console

Static HTML + CSS + vanilla JS. No framework, no build step.

```
index.html      landing page (video hero)
login.html      role gate: seller / admin
app.html        compatibility redirect to workspace.html
workspace.html  seller projects, onboarding, chat and profile editor
admin.html      alliance portfolio board + seller detail drawer

styles.css      landing page
console.css     shared console shell
chat.css        shared chat bubbles
workspace.css   seller workspace
admin.css       admin board

main.js         landing page (stats count-up, mobile menu)
api.js          backend client + formatting helpers
auth.js         demo role gate
workspace.js    seller workspace and schema-driven onboarding
admin.js        admin board
demo-data.js    frozen snapshot of real backend responses

assets/logo.webp
fonts/GeistPixel-Circle.woff2
```

## Accounts

| Tài khoản | Mật khẩu | Thấy gì |
|---|---|---|
| `seller` | `1234` | Dự án, hồ sơ 5 khối, hội thoại và hồ sơ xin cấp vốn |
| `admin`  | `1234` | Danh mục liên minh, hàng phê duyệt và truy vết từng người bán |

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

**2. Another machine on the LAN**

Paste that machine's `http://192.168.x.x:8000` into the connection bar. Works
because both ends are plain HTTP.

> **The published GitHub Pages site cannot reach your localhost.** This was
> measured, not assumed: Chrome blocks an HTTPS page from calling
> `http://localhost` (mixed content / Private Network Access) and no
> server-side header opens it back up. The backend does send the CORS and
> Private-Network headers, and the browser still refuses. So the published
> page is for looking at the UI; for real data, use option 1.

**3. Demo data (what the published site shows)**

With no backend reachable the console falls back on its own — no button to
press. `demo-data.js` is a **frozen snapshot of real backend responses** —
genuine engine output, not invented numbers — and every screen shows a
`DỮ LIỆU DEMO` banner while it is in use. Regenerate it with
`python scripts/capture_demo_data.py` from the backend repo.

## What the seller screen shows

The workspace manages several shop projects, schema-driven onboarding, profile
health and funding applications. The model's prose and the engine's numbers
are rendered as **separate blocks** on purpose:

- the explanation is free text with no authority over any figure;
- the **SỐ LIỆU TỪ CÔNG CỤ TẤT ĐỊNH** panel is rendered field by field straight
  from the API's `facts` object.

A frontend that parsed amounts out of the prose would defeat the architecture,
so this one never does.

## What the admin screen shows

- Portfolio KPIs, alliance capital, risk and funding charts, alerts and model status.
- A decision queue for review, approval, rejection and disbursement.
- Seller detail tabs for scores, the five profile blocks, applications,
  conversations, and workflow input/output traces with audit hashes.

## Notes

- Background video streams from CloudFront; first paint is black until it buffers.
- Display type is **BubbledotICG-FinePos** (OnlineWebFonts CDN), with
  **Geist Pixel Circle** bundled locally as the fallback.
- Icons are Font Awesome 6.5.2 brand glyphs from cdnjs.
- Mobile breakpoint is 720px.
- Honours `prefers-reduced-motion`.
