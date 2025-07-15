# 🤖 Robo People Counter

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge&logo=netlify)](https://serene-rabanadas-288f27.netlify.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A sleek, futuristic people counter application with a robot-themed interface. Perfect for tracking visitors, counting people at events, or managing capacity in real-time.

## 🚀 Features

- **Real-time Counting**: Increment counter with a single click
- **Save Functionality**: Store and track multiple count sessions
- **Responsive Design**: Perfectly centered and works on all devices
- **Robot Theme**: Futuristic UI with robot background imagery
- **Clean Interface**: Modern, minimalist design with excellent UX

## 🎯 Live Demo

**🌐 [Try it live here!](https://serene-rabanadas-288f27.netlify.app/)**

## 📸 Screenshots

![Robo Counter Interface](robo-counter.jpg)
*The sleek robot-themed interface with centered design*

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Flexbox
- **Vanilla JavaScript** - Interactive functionality
- **Netlify** - Deployment platform

## 🎨 Design Features

- **Centered Layout**: Perfect centering using CSS Flexbox
- **Glass Morphism**: Semi-transparent overlay with blur effects
- **Modern Typography**: Apple system fonts for crisp readability
- **Accessible Colors**: High contrast for better visibility
- **Rounded Corners**: Smooth, modern aesthetic
- **Hover Effects**: Interactive button states

## 💻 Code Highlights

### CSS Flexbox Centering
```css
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### Background Blend Mode
```css
.container {
    background-blend-mode: darken;
    background-color: rgba(0, 0, 0, 0.5);
}
```

### JavaScript Functionality
```javascript
function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser
- Basic understanding of HTML, CSS, and JavaScript

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/robo-people-counter.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd robo-people-counter
   ```

3. **Open in your browser**
   ```bash
   # Simply open index.html in your preferred browser
   open index.html
   ```

### File Structure
```
robo-people-counter/
│
├── index.html          # Main HTML file
├── index.css           # Stylesheet with modern design
├── index.js            # JavaScript functionality
├── robo-counter.jpg    # Robot background image
└── README.md           # Project documentation
```

## 🎮 How to Use

1. **Increment**: Click the red "INCREMENT" button to add people to your count
2. **Save**: Click the green "SAVE" button to record the current count and reset the counter
3. **Track History**: View all previous counts in the "Previous entries" section

## 🌟 Use Cases

- **Event Management**: Count attendees at conferences, meetups, or parties
- **Retail Analytics**: Track customer flow in stores
- **Capacity Management**: Monitor room occupancy
- **Personal Projects**: Practice counting anything you need to track
- **Learning Tool**: Great for understanding JavaScript DOM manipulation

## 🎯 Learning Objectives

This project demonstrates:
- DOM manipulation with `getElementById()`
- Event handling with `onclick` attributes
- String concatenation and template literals
- CSS Flexbox for responsive layouts
- Modern CSS techniques (blend modes, gradients)
- Clean, semantic HTML structure

## 🚀 Deployment

This project is deployed on **Netlify** for lightning-fast global delivery:

**🔗 [https://serene-rabanadas-288f27.netlify.app/](https://serene-rabanadas-288f27.netlify.app/)**

### Deploy Your Own
1. Fork this repository
2. Connect your GitHub to Netlify
3. Deploy with one click!

## 🤝 Contributing

Contributions are welcome! Here are some ideas for improvements:

- Add reset button functionality
- Implement local storage for persistence
- Add sound effects for button clicks
- Create different themes (space, cyberpunk, etc.)
- Add animation effects
- Implement keyboard shortcuts

### Steps to Contribute
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers


## 👨‍💻 About

Created as part of the Scrimba JavaScript course. This project showcases fundamental web development skills while maintaining a focus on clean, modern design principles.

---

<div align="center">

**🌟 Star this repository if you found it helpful! 🌟**

Made with ❤️ and ☕ by Pratik Chandra Thakur

</div>
