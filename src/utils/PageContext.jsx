import { createContext, useContext, useEffect, useState } from 'react';

import imageProduct1Thumbnail from '../../images/image-product-1-thumbnail.jpg';
import imageProduct1 from '../../images/image-product-1.jpg';
import imageProduct2Thumbnail from '../../images/image-product-2-thumbnail.jpg';
import imageProduct2 from '../../images/image-product-2.jpg';
import imageProduct3Thumbnail from '../../images/image-product-3-thumbnail.jpg';
import imageProduct3 from '../../images/image-product-3.jpg';
import imageProduct4Thumbnail from '../../images/image-product-4-thumbnail.jpg';
import imageProduct4 from '../../images/image-product-4.jpg';

const PageContextProvider = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function usePageContext() {
  return useContext(PageContextProvider);
}

// eslint-disable-next-line react/prop-types
export default function PageContext({ children }) {
  const items = [
    {
      images: {
        thumbnail: imageProduct1Thumbnail,
        main: imageProduct1,
      },
    },
    {
      images: {
        thumbnail: imageProduct2Thumbnail,
        main: imageProduct2,
      },
    },
    {
      images: {
        thumbnail: imageProduct3Thumbnail,
        main: imageProduct3,
      },
    },
    {
      images: {
        thumbnail: imageProduct4Thumbnail,
        main: imageProduct4,
      },
    },
  ];

  const originalPrice = 125;

  const [image, setImage] = useState([]);
  const [carts, setCarts] = useState({
    quantity: 0,
    totalPrice: 0,
    haveCarts: false,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHandleSideBarClicked, setisHandleSideBarClicked] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const deleteButton = () => [
    setCarts((prevCart) => ({
      ...prevCart,
      haveCarts: false,
      totalPrice: 0,
      quantity: 0,
    })),
  ];

  useEffect(() => {
    setImage(items.map((item) => item.images.main));
  }, [items]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const handleSideBar = () => {
    setisHandleSideBarClicked(!isHandleSideBarClicked);
  };

  const handleCartDisplay = () => {
    setIsCartClicked(!isCartClicked);
  };

  const previousIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1,
    );
  };

  const nextIndex = () => [
    setCurrentIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1,
    ),
  ];

  const confirmOrder = () => {
    if (!carts.haveCarts) return;
    setIsCartClicked(true);
  };

  const updateCart = (variable) => {
    setCarts((prevCart) => {
      const newQuantity = Math.max(0, prevCart.quantity + variable);
      const newPrice = newQuantity * originalPrice;

      return {
        quantity: newQuantity,
        totalPrice: newPrice,
        haveCarts: newQuantity > 0,
      };
    });
  };

  const incrementQuantity = () => updateCart(1);
  const decrementQuantity = () => updateCart(-1);

  const datas = {
    items,
    image,
    currentIndex,
    handleClick,
    handleCartDisplay,
    handleSideBar,
    previousIndex,
    nextIndex,
    confirmOrder,
    incrementQuantity,
    decrementQuantity,
    deleteButton,
    isHandleSideBarClicked,
    isCartClicked,
    windowSize,
    carts,
  };

  return (
    <>
      <PageContextProvider.Provider value={datas}>
        {children}
      </PageContextProvider.Provider>
    </>
  );
}
