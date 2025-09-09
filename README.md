# ClassPay - Teacher Payment Manager

![ClassPay Logo](logo.png)

## 📖 Description

ClassPay is a comprehensive payment management system specifically designed for teachers. This Progressive Web App (PWA) allows you to easily record student payments, generate professional receipts, and manage your classes with a modern, intuitive interface.

## ✨ Features

### 🎯 Core Features
- **Student Payment Recording** - Record student names, classes, months, payment amounts, and payment methods
- **Professional Receipt Generation** - Automatic receipt generation and printing
- **Payment History Management** - View, edit, and delete all payment records
- **Teacher Information Management** - Customize your personal information and class names
- **Class Management** - Add and manage your own custom class names

### 📱 PWA Features
- **Mobile App Installation** - Install as a native app on your mobile device
- **Offline Functionality** - Works without internet connection
- **Fast Performance** - Low mobile data usage and quick response times
- **Modern UI/UX** - Neon glow effects and glass morphism design

### 🎨 Interface Features
- **Neon Glow Effects** - Beautiful neon glow effects for a modern interface
- **Dark Theme** - Eye-friendly dark theme design
- **Sinhala & English Support** - Full support for both Sinhala and English languages
- **Responsive Design** - Works perfectly on all devices

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Mobile device or computer

### Installation

1. **Download from GitHub:**
   ```bash
   git clone https://github.com/yourusername/classpay.git
   cd classpay
   ```

2. **Start a web server:**
   ```bash
   # With Python 3
   python -m http.server 8000
   
   # With Node.js
   npx serve .
   
   # Using Live Server (VS Code extension)
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

### Installing as PWA

1. Click the "Install App" button in the top-right corner of your browser
2. Confirm the installation
3. Access the app from your mobile device or desktop

## 📖 How to Use

### First Time Setup

1. **Configure Teacher Information:**
   - Click the "Settings" button
   - Enter your name, degree, university, and contact number
   - Add your class names

2. **Record Payments:**
   - Enter student name
   - Select class
   - Choose month
   - Enter payment amount
   - Select payment method
   - Click "Record Payment"

3. **Print Receipt:**
   - Receipt is automatically displayed after payment recording
   - Click "Print Receipt"

### Managing Payment History

- **View:** All payment records are displayed at the bottom of the page
- **Edit:** Click the "Edit" button on each record
- **Delete:** Click the "Delete" button (confirmation required)

## 🛠️ Technical Details

### Technologies Used
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **Database:** IndexedDB (Browser-based)
- **PWA:** Service Worker, Web App Manifest
- **Fonts:** Inter, Noto Sans Sinhala

### File Structure
```
ClassPay/
├── index.html          # Main HTML file
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker
├── logo.png           # App logo
└── README.md          # This file
```

### Key Components
- **IndexedDB:** For data storage
- **Service Worker:** For offline functionality
- **Web App Manifest:** For PWA installation
- **Print CSS:** For receipt printing

## 🔧 Development

### Local Development
```bash
# Clone the repository
git clone https://github.com/yourusername/classpay.git
cd classpay

# Start local server
python -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Adding New Features
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📱 PWA Features

### Installation
- **Desktop:** Supported by Chrome, Edge, Firefox
- **Mobile:** Supported by Android Chrome, iOS Safari
- **Offline:** Full offline functionality

### App Shortcuts
- **Add Payment:** Quickly add new student payments
- **View History:** View payment history

## 🎨 UI/UX Features

### Neon Glow Effects
- Beautiful neon glow effects
- Glass morphism with dark theme
- Smooth user experience

### Responsive Design
- Works perfectly on all devices
- Optimized for mobile and tablet

## 🔒 Security and Privacy

- **Local Data Storage:** All data is stored on your device
- **No Internet Required:** Offline functionality
- **No Data Collection:** Your data is not shared with third parties

## 🐛 Bug Reporting

If you encounter any bugs, please report them on the [Issues](https://github.com/yourusername/classpay/issues) page.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Pasindu Banuka**
- BICT(Hon's)(UG) - University of Sri Jayewardenepura

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Google Fonts](https://fonts.google.com/) - Inter and Noto Sans Sinhala fonts
- [PWA Builder](https://www.pwabuilder.com/) - PWA guidance

## 📞 Contact

If you have questions or suggestions:
- Email: pasindubanuka155@gmail.com
- GitHub: [@yourusername]([https://github.com/yourusername](https://github.com/DKPBanuka))

---

**ClassPay** - Payment Management System Specifically Designed for Teachers 🎓💳
