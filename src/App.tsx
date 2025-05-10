import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/utils/LoadingScreen';
import WhatsAppButton from './components/utils/WhatsAppWidget';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/utils/ScrollToTop';
import PaymentSuccess from './components/checkout/PaymentSuccess';

// Lazy load pages with custom loading
const Home = React.lazy(() => import('./pages/Home'));
const ShapeSelector = React.lazy(() => import('./pages/ShapeSelector'));
const CustomShape = React.lazy(() => import('./pages/CustomShape'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'));

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const images = [
        'https://imgur.com/p9YM9bA.jpg',
        'https://imgur.com/65F4scP.jpg',
        'https://imgur.com/6dnSoJ0.jpg',
        'https://imgur.com/Uqsm7go.jpg',
        'https://imgur.com/aUgTJXA.jpg',
        'https://imgur.com/OyyDqUp.jpg',
        'https://imgur.com/ajiQmjU.jpg',
        'https://imgur.com/8A2boqI.jpg',
        'https://imgur.com/oH8sIqK.jpg'
      ];

      await Promise.all([
        new Promise(resolve => setTimeout(resolve, 1500)),
        ...images.map(src => new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        }))
      ]);
    };

    preloadImages()
      .then(() => setInitialLoading(false))
      .catch(error => {
        console.error('Failed to preload images:', error);
        setInitialLoading(false);
      });
  }, []);

  if (initialLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#f0ece5]">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<div className="min-h-screen bg-[#f0ece5]" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/spiegels" element={<ShapeSelector />} />
                <Route path="/custom/:slug" element={<CustomShape />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/payments/success" element={<PaymentSuccess />} />
                <Route path="/custom" element={<Navigate to="/spiegels" replace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

// import React, { Suspense, useState, useEffect } from 'react';