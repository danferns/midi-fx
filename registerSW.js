if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/midi-fx/sw.js', { scope: '/midi-fx/' })})}