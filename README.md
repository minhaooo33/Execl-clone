# Excell Clone 前端電商展示網站

本專案為一個使用 React 打造的 Excell.tw 官網風格克隆網站，模擬購物體驗，並展示常見電商功能如 Hero 區塊、商品分類、RWD、購物車 modal 等。

---

## 🛠️ 技術棧

- **React 19**
- **Tailwind CSS**
- **Vite**
- **React Router v7**
- **Lucide React**（用於圖示）
- **React Portal** + `useContext` 管理 modal 狀態

---

## ✨ 功能描述

- ✅ Hero 區塊（背景影片自動播放）
- ✅ Banner 輪播圖（含標題與按鈕）
- ✅ 商品分類展示區（含 RWD 支援）
- ✅ 精選商品區塊（hover 動畫效果）
- ✅ 購物車 Modal（createPortal 實作，右側抽屜式）
- ✅ 點擊遮罩關閉購物車，支援 loading 狀態、數量加減
- ✅ Search Modal / Menu Modal 預留結構
- ✅ 完整 RWD 響應式設計

---

## ⚙️ 安裝與啟動方式

```bash
# 安裝依賴
npm install

# 開發環境啟動
npm run dev
```

---

## 🧱 資料結構設計

### 商品分類（productCategories）

```js
[
  { id: "c1", title: "桌上型切割器", image: "/products/xxx.jpg" },
  ...
]
```

### 商品資料（allProducts）

```js
[
  {
    id: "ET-2508",
    name: "...",
    price: 190,
    CategoriesId: "c1",
    image: "/products/..."
  },
  ...
]
```

☑️ 採用「分類 & 商品分開」的資料設計方式，實際應用更彈性。

---

## ⚛️ 使用到的 React Hooks

- `useState`：控管局部 UI 狀態（如數量、loading 狀態）
- `useEffect`：監控 modal 的開關顯示
- `useRef`：操作 `<dialog>` 元素的開關
- `useContext`：用於 modal 狀態共享（如購物車開關）
- `useReducer`：購物車商品加減管理（未來可擴充）

---

## 🧩 開發者擴充建議

- 可整合 Firebase 實作後端儲存
- 可接 Stripe 實作實際結帳
- Modal 可加動畫（transition + transform）
- 可將搜尋 Modal、Menu Modal 同樣整合至 `UserProgressContext`

---

## 📁 專案結構簡介

```
src/
├── assets/            # 靜態圖片與影片
├── components/        # 所有 UI 元件
├── context/           # 狀態管理（CartContext, UserProgressContext）
├── pages/             # 首頁 Home
├── App.jsx            # 路由與頁面配置
├── main.jsx           # 進入點
```

---

本專案為個人前端練習用途，無商業用途，僅供技術參考 🙌
