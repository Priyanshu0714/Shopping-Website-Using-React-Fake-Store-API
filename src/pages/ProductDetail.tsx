import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import toast from 'react-hot-toast';
import { useCartStore } from '../store/useCartStore';
import type { Product } from '../types';

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      toast.success('Added to cart!');
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto"></div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="flex items-center justify-center bg-gray-100 rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-96 object-contain w-full h-full p-8"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
            <p className="mt-2 text-sm text-gray-500 capitalize">
              {product.category}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.round(product.rating.rate)
                      ? 'text-gray-800 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className="text-gray-700">{product.description}</p>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              ₹{(product.price * 83).toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}