import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AddBillingModal from '../AddBillingModal/AddBillingModal';
import BillingTable from '../BillingTable/BillingTable';

const Header = () => {

  // This is the header page create search bar and add bill button
  const [search, setSearch] = useState('')
  const [openM ,setOpenM] = useState(true)

  return (
    <div>
      <header aria-label="Page Header" className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center sm:justify-between sm:gap-4">
            <form  className="relative hidden sm:block">
              <label className="sr-only" for="search"> Search </label>

              <input onChange={(e)=>{setSearch(e.target.value)}} name='searchText'
                className="h-10 w-full rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
                id="search"
                type="search"
                placeholder="Search website..."
              />

              <button
                
                type="submit"
                className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
              >
                <span className="sr-only">Submut Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>

            <div
              className="flex flex-1 items-center justify-between gap-8 sm:justify-end"
            >
              <div className="flex gap-4">
                <button
                  type="button"
                  className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              <div
                type="button"
                className="group flex shrink-0 items-center rounded-lg transition"
              >
                <AddBillingModal openM={openM} setOpenM={setOpenM}>
                </AddBillingModal>
                
                 <label htmlFor="bill-modal" className="   btn inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Add new billing +</label>

              </div>
            </div>
          </div>
        </div>
      </header>
      {<BillingTable search={search.toLocaleLowerCase()} ></BillingTable>}
    </div>
  );
};

export default Header;