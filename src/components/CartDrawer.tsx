import { useCart } from '@/context/CartContext';

export const CartDrawer = () => {
  const { items, removeFromCart, totalItems, totalPrice, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsOpen(false)}
      />
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-amber-50 z-50 shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-5 border-b border-neutral-200">
          <h2 className="text-blue-950 font-bold text-lg tracking-wide">Your Cart ({totalItems})</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 text-neutral-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 opacity-40">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p className="text-sm font-medium">Your cart is empty</p>
              <p className="text-xs mt-1 opacity-70">Add some beautiful pottery!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 bg-white rounded-xl p-3 shadow-sm">
                <img src={item.imageSrc} alt={item.imageAlt} className="w-16 h-16 object-cover rounded-lg" />
                <div className="flex-1 min-w-0">
                  <p className="text-blue-950 text-sm font-medium leading-tight line-clamp-2">{item.productName}</p>
                  <p className="text-green-600 text-sm font-semibold mt-1">{item.currentPrice}</p>
                  <p className="text-neutral-400 text-xs">Qty: {item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-neutral-400 hover:text-red-500 transition-colors p-1 self-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4h6v2" /></svg>
                </button>
              </div>
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="p-5 border-t border-neutral-200 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-neutral-600 font-medium">Total</span>
              <span className="text-blue-950 font-bold text-lg">Rs.{totalPrice.toLocaleString()}</span>
            </div>
            <a
              href="https://www.arraish.com/cart"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-950 text-white text-center py-3 rounded-lg font-medium tracking-wide hover:bg-blue-900 transition-colors"
            >
              Proceed to Checkout
            </a>
          </div>
        )}
      </div>
    </>
  );
};
