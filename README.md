# Men's Health Hub - Farewell Magazine

A digital magazine-style farewell project created as a tribute to Diogo's journey at NewCoffee. Built with React, TypeScript, and Tailwind CSS to create an interactive magazine experience.

## 🌟 Features

- **Interactive Magazine Layout**: Navigate through pages like a real magazine
- **Responsive Design**: Optimized for all screen sizes
- **Personalized Messages**: Heartfelt farewell messages from colleagues
- **Modern Tech Stack**: Built with React, TypeScript, and Vite

## 🚀 Technologies Used

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## 📖 Project Structure

```
├── components/
│   ├── ArticleGrid.tsx      # Split-view image pages
│   ├── FeaturedArticle.tsx  # Cover page component
│   ├── Header.tsx           # Magazine wrapper/navigation
│   ├── PlanGenerator.tsx    # Comments page
│   └── SingleImagePage.tsx  # Full-page image component
├── images/                  # Magazine images and content
├── services/               # API services (Gemini integration)
├── constants.ts            # App constants and content
├── types.ts               # TypeScript type definitions
└── App.tsx                # Main app component
```

## 🏃‍♂️ Run Locally

**Prerequisites:** Node.js (v16 or higher)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/mens-health-hub.git
   cd mens-health-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file and add your Gemini API key:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173` to view the magazine

## 🎯 Usage

- Use the navigation arrows to flip through magazine pages
- View the cover page, content pages, and personal messages
- Experience the full magazine-style layout and interactions

## 🤝 Contributing

This is a personal farewell project, but contributions are welcome for improving the magazine experience or adding new features.

## 📝 License

This project is created as a personal tribute and is available under the MIT License.

---

*Created with ❤️ as a farewell tribute to Diogo's amazing journey at NewCoffee*
