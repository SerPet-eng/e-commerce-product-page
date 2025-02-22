import { createContext, useContext, useEffect, useState } from 'react';
import useFetchData from './useFetchData';

const PageContextProvider = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function usePageContext() {
  return useContext(PageContextProvider);
}

// eslint-disable-next-line react/prop-types
export default function PageContext({ children }) {
  const { data: items, error } = useFetchData('../../data/data.json');
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
    error,
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
