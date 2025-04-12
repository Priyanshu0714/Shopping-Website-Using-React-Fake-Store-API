import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useCartStore } from '../store/useCartStore';

export function Cart() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCartStore();

  const handleCheckout = () => {
    clearCart();
    toast.success('Order placed successfully!', {
      duration: 4000,
    });
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">
          Your cart is empty
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900">Shopping Cart</h2>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.id} className="p-6 flex items-center">
              <div className="h-24 w-24 bg-gray-100 rounded-lg flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-cover"
                />
              </div>
              <div className="ml-6 flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-lg font-semibold text-gray-800">
                  ₹{(item.price * 83).toFixed(2)}
                </p>
              </div>
              <div className="ml-6 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="p-1 text-gray-500 hover:text-gray-700"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="text-gray-700">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 text-gray-500 hover:text-gray-700"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium text-gray-900">Total</span>
          <span className="text-2xl font-bold text-gray-900">
            ₹{(total * 83).toFixed(2)}
          </span>
        </div>
        <button
          onClick={handleCheckout}
          className="mt-6 w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}