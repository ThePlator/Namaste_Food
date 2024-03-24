import { useEffect, useState } from 'react';
import { LOGO_URL } from '../utils/Contants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState('Login');
  const online = useOnlineStatus();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    console.log('useeffect called');
  }, [btnNameReact]);

  const cartItem = useSelector((store) => store.cart.items);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  //   console.log(cartItem);

  return (
    <div
      className="flex justify-between  items-center w-full bg-white fixed z-50"
      style={{ top: 0 }}>
      <div className="h-20 w-80 px-2 flex items-center ">
        <p className="font-bold text-4xl text-[#3F4255] ">
          namaste f<span className="text-yellow-500">oo</span>d
        </p>
      </div>

      <ul className="md:flex text-[#9093A6] hidden">
        <li
          className="px-3 font-semibold hover:underline hover:font-bold"
          onClick={scrollToTop}>
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 font-semibold hover:font-bold hover:underline duration-600">
          <Link to="/about">About Me</Link>
        </li>

        <li
          className="px-3 font-semibold hover:font-bold"
          onClick={scrollToTop}>
          <Link to="/cart">
            Cart{' '}
            {cartItem.length > 0 && (
              <span className="rounded-full bg-[#3F4255] px-[6px] text-white">
                {cartItem.length}
              </span>
            )}
          </Link>
        </li>
      </ul>

      {showMenu && (
        <ul className="flex-col text-[#9093A6] md:hidden fixed top-20 z-40 w-full bg-white rounded-lg  py-3 shadow-md	">
          <li
            className="px-3 font-semibold hover:underline hover:font-bold py-3 hover:bg-gray-100"
            onClick={() => {
              setShowMenu(false);
              scrollToTop();
            }}>
            <Link to="/">Home</Link>
          </li>
          <li
            className="px-3 py-3 font-semibold hover:underline hover:font-bold hover:bg-gray-100 "
            onClick={() => {
              setShowMenu(false);
              scrollToTop();
            }}>
            <Link to="/body">Menu</Link>
          </li>
          <li
            className="px-3 py-3 font-semibold hover:font-bold hover:underline hover:bg-gray-100"
            onClick={() => {
              setShowMenu(false);
              scrollToTop();
            }}>
            <Link to="/about">About Me</Link>
          </li>

          <li
            className="px-3 py-3 font-semibold hover:font-bold hover:bg-gray-100"
            onClick={() => {
              setShowMenu(false);
              scrollToTop();
            }}>
            <Link to="/cart">
              Cart{' '}
              {cartItem.length > 0 && (
                <span className="rounded-full bg-[#3F4255] px-[6px] text-white">
                  {cartItem.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      )}

      <GiHamburgerMenu
        className="visible md:hidden text-3xl mx-2 text-[#3F4255] hover:cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
    </div>
  );
};
export default Header;
