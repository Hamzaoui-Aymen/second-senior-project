'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import { CiLogout } from 'react-icons/ci';

import React, { useEffect, useState } from 'react';
import { useAuth } from './components/context/AuthContext';
import router from 'next/router';


export default function Home() {
  const router = useRouter();

  const [key, setKey] = useState('');
  const [data, setData] = useState([]);
  const { user, seller, admin, logOut, token } = useAuth();

  const [open, setOpen] = useState<boolean>(false);
  const [menuView, setMenuView] = useState<boolean>(false);
  const signOut = () => {
    logOut();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleMenu = () => {
    setMenuView(!menuView);
  };
  const filter = (searchKey: string) => {
    const lowercaseSearchKey = searchKey.toLowerCase();
    const filteredData = data.filter((item) => {
      const lowercaseSearchKey= searchKey.toLowerCase
      return item.name.toLowerCase().includes(lowercaseSearchKey);
    });
    setData(filteredData);
  };

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/products', {
        headers: localStorage.getItem('token'),
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      }) 
      
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/products', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  const renderNavBar = () => {
<<<<<<< HEAD
    if (admin) {
      return (
        <AdminNavBar
          toggleMenu={toggleMenu}
          menuView={menuView}
          signout={signOut}
          key={key}
          setKey={setKey}
          filter={filter}
        />
      );
    } else if (seller) {
      return (
        <SellerNavBar
          toggleMenu={toggleMenu}
          menuView={menuView}
          signout={signOut}
          key={key}
          setKey={setKey}
          filter={filter}
        />
      );
    } else if (user) {
      return (
        <UserNavBar
          toggleMenu={toggleMenu}
          menuView={menuView}
          signout={signOut}
          key={key}
          setKey={setKey}
          filter={filter}
        />
      );
=======
    // if (admin) {
      // return <AdminNavBar toggleMenu={toggleMenu} menuView={menuView}  signout={signOut}/>;
    // } 
    if (seller) {
      return <SellerNavBar  toggleMenu={toggleMenu} menuView={menuView} signout={signOut} router={router}/>;
    } else if (user) {
      return <UserNavBar  toggleMenu={toggleMenu}menuView={menuView} signout={signOut} router={router}/>;
>>>>>>> 168402039adc67d75a2338f87d104eeaf3a9879e
    } else {
      return <DefaultNavBar router={router} />;
    }
  };

  return <nav>{renderNavBar()}</nav>;
}

<<<<<<< HEAD
const AdminNavBar = ({
  toggleMenu,
  menuView,
  signout,
  key,
  setKey,
  filter,
}) => (
  <div className="grid min-h-[90px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
      <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a
            href="/HomePage"
            onClick={() => router.push('/HomePage')}
            className="mr-4 block cursor-pointer py-2 font-sans text-base font-medium leading-relaxed text-inherit antialiased text-2xl"
          >
            Dashbord
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden mr-4 lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-black">
                  <a href="/seller" className="flex items-center">
                    Seller
                  </a>
                </li>
=======
// const AdminNavBar = ({toggleMenu,menuView,signout}) => 
//   (
//   <div className="grid min-h-[90px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
    {/* <Admin/> */}
    {/* <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
    <nav
      className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a href="/HomePage" onClick={()=>router.push('/HomePage',(el={data}))}
          className="mr-4 block cursor-pointer py-2 font-sans text-base font-medium leading-relaxed text-inherit antialiased text-2xl">
        Dashbord
        </a>
        <div className="flex items-center gap-4">
          <div className="hidden mr-4 lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-black">
                <a href="/AdminApp"  onClick={()=>router.push('/AdminApp')}  className="flex items-center">
                  Seller
                </a>
              </li>
             
              <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-black">
                <a href="/User" className="flex items-center">
                  User
                </a>
              </li>
>>>>>>> 168402039adc67d75a2338f87d104eeaf3a9879e

                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-black">
                  <a href="/User" className="flex items-center">
                    User
                  </a>
                </li>
                <div className="searchForm">
                  <input type="text"  placeholder='Search...'
             onChange={(e)=>setSearch(e.target.value)
             }
            className='z-10 bg-white p-2 border-[1px] rounded-full px-20 W-[36%] shadow-sm outline-red-600'
            />
            <button
            onClick={()=>userInput(search)}
            className='bg-red-600 rounded-full p-2 shadow-md z-10 hover:scale-105 transition-all  cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg"
             fill="none" 
             viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

            </button>
                </div>

                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  <a
                    href="/About"
                    className="flex items-center text-blue-gray-900"
                  >
                    About
                  </a>
                </li>

                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-black">
                  <a href="/AddProduct" className="flex items-center">
                    <IoMdAdd /> Add Product
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-x-1 text-black">
              {menuView && (
                <div className="absolute top-12 right-12 bg-white shadow-md rounded-md py-2 w-48">
                  <span
                    className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={() => signout()}
                  >
                    <CiLogout /> Logout
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </nav>
    </div>
  </div>
);

const SellerNavBar = ({
  toggleMenu,
  menuView,
  signout,
  key,
  setKey,
  filter,
}) => (
=======
      </div>
    </nav>
    </div> */}
  {/* </div>
); */}

const SellerNavBar = ({toggleMenu,menuView,signout,router}) => (
>>>>>>> 168402039adc67d75a2338f87d104eeaf3a9879e
  <div className="grid min-h-[90px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
      <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a
            href="/HomePage"
            onClick={() => router.push('/HomePage')}
            className="mr-4 block cursor-pointer py-2 font-sans text-base font-medium leading-relaxed text-inherit antialiased text-2xl"
          >
            exclusive
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden mr-4 lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <div className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-black">
                  <div className="searchForm">
                    <input
                      value={key}
                      onChange={(e) => setKey(e.target.value)}
                      type="text"
                      placeholder="looking for ..."
                      className="search"
                    />
                    <button
                      onClick={() => filter(key)}
                      className="searchButton"
                    >
                      Search
                    </button>
                  </div>
                </div>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-black">
                  <a href="/Contact" className="flex items-center">
                    Contact
                  </a>
                </li>

                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-black">
                  <a href="/EditProfile" className="flex items-center">
                    EditProfile
                  </a>
                </li>

                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  <a
                    href="/About"
                    className="flex items-center text-blue-gray-900"
                  >
                    About
                  </a>
                </li>

                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-black">
                  <a href="/AddProduct" className="flex items-center">
                    Add Product
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-x-1 text-black"></div>
            <button
              className="absolute top-4 right-12 h-8 w-8 bg-black rounded-full text-white flex items-center justify-center"
              onClick={toggleMenu}
            >
              <FaRegUserCircle className="icon" />
            </button>
            {menuView && (
              <div className="absolute top-12 right-12 bg-white shadow-md rounded-md py-2 w-48">
                <span
                  className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => router.push('/EditProfile')}
                >
                  <FaRegEdit />
                </span>
                <span
                  className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => signout()}
                >
                  <CiLogout /> Logout
                </span>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  </div>
);

<<<<<<< HEAD
const UserNavBar = (toggleMenu, menuView, signout) => (
=======
const UserNavBar = (toggleMenu,menuView,signout,router) => (
>>>>>>> 168402039adc67d75a2338f87d104eeaf3a9879e
  <div className="grid min-h-[90px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
      <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a
            href="/HomePage"
            onClick={() => router.push('/HomePage')}
            className="mr-4 block cursor-pointer py-2 font-sans text-base font-medium leading-relaxed text-inherit antialiased text-5xl"
          >
            exclusive
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden mr-4 lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-black">
                  <a href="/Contact" className="flex items-center">
                    Contact
                  </a>
                </li>
                <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  <a
                    href="/About"
                    className="flex items-center text-blue-gray-900"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-x-1 text-black">
              <li className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
                <a
                  href="/Signin"
                  className="flex items-center text-blue-gray-900"
                >
                  Signup
                </a>
              </li>
              <button
                className="absolute top-4 right-12 h-8 w-8 bg-black rounded-full text-white flex items-center justify-center"
                onClick={toggleMenu}
              >
                <FaRegUserCircle className="icon" />
              </button>
              {menuView && (
                <div className="absolute top-12 right-12 bg-white shadow-md rounded-md py-2 w-48">
                  <span
                    className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={() => router.push('/WishList')}
                  >
                    WishList
                  </span>
                  <span
                    className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                    onClick={() => signout()}
                  >
                    Delete
                  </span>
                </div>
              )}
            </div>
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </div>
);

const DefaultNavBar = ({router}) => (
  <div className="grid min-h-[90px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
<<<<<<< HEAD
      <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <a
            href="/HomePage"
            onClick={() => router.push('/HomePage')}
            className="mr-4 block cursor-pointer py-2 font-sans text-base font-medium leading-relaxed text-inherit antialiased text-2xl"
          >
            exclusive
          </a>
=======
   <nav className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
   <div className="flex items-center justify-between text-blue-gray-900">
        <a href="/HomePage" onClick={()=>router.push('/HomePage')}
          className="mr-4 block cursor-pointer py-2 font-sans text-base font-medium leading-relaxed text-inherit antialiased text-2xl">
          exclusive
        </a>
>>>>>>> 168402039adc67d75a2338f87d104eeaf3a9879e
        </div>
        <div className="flex items-center gap-x-1 text-black">
          <li className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block">
            <a href="/Signin" className="flex items-center text-blue-gray-900">
              Signup
            </a>
          </li>
        </div>
      </nav>
    </div>
  </div>
);
