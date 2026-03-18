import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { CartDrawer } from '@/components/CartDrawer';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { CollectionPage } from '@/pages/CollectionPage';
import { NewArrivalPage } from '@/pages/NewArrivalPage';
import { SalePage } from '@/pages/SalePage';
import { ProductPage } from '@/pages/ProductPage';
import { AboutPage } from '@/pages/AboutPage';
import { PackagingPage } from '@/pages/PackagingPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <CartDrawer />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections/new-arrival" element={<NewArrivalPage />} />
            <Route path="/collections/sale" element={<SalePage />} />
            <Route path="/collections/:slug" element={<CollectionPage />} />
            <Route path="/products/:slug" element={<ProductPage />} />
            <Route path="/pages/about" element={<AboutPage />} />
            <Route path="/pages/packaging" element={<PackagingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
};
