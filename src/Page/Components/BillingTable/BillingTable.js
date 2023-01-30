import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import AddBillingModal from '../AddBillingModal/AddBillingModal';
import Paiganition from '../Paiganition/Paiganition';

const BillingTable = ({ search }) => {
  const [bills, setBills] = useState([])
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  // loaded data for bongodb billing list
  useEffect(() => {
    setLoading(true)
    fetch('https://power-hack-server-green.vercel.app/api/billing-list')
      .then(res => res.json())
      .then(data => setBills(data))
    setLoading(false)
  }, [bills])

  // calculation paiganition 
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = bills.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  // Delete click Handler and delete bills
  const deleteItem = (id) => {
    const agree = window.confirm(" Are You sure you wnat to delete?")
    if (agree) {
      fetch(`https://power-hack-server-green.vercel.app/api/delete-billing/${id}`,
        {
          method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          toast.success('Bill successfully Deleted')
        })
        .catch(error => {
          console.log(error)
          toast.error('Somthing wrong try again')
        })

    }



  }
  return (
    <div className="overflow-x-auto">

      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Billing Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {

            currentPost.filter((bill) => {
              return search === ' ' ? bill : bill.name.toLowerCase().includes(search) || bill.email.toLowerCase().includes(search) || bill.phone.includes(search)
            }).map(bill => <tr key={bill._id}>
              <td>{bill.billingId}</td>
              <td>{bill?.name}</td>
              <td>{bill?.email}</td>
              <td>{bill?.phone}</td>
              <td>{bill?.amount}$</td>
              <td className=''>
                <lebel htmlFor="my-modal-3" className="btn btn-xs btn-outline bg-blue-600 text-white">Edit </lebel>
                <button onClick={() => deleteItem(bill._id)} className='ml-2 btn btn-xs btn-outline bg-red-500 text-white'>Delete</button>
              </td>
            </tr>)
          }
          <div>
            <AddBillingModal paginate={paginate} > </AddBillingModal>
          </div>
        </tbody>

      </table>
      <div>
        <Paiganition postPerPage={postPerPage} totalPost={bills.length} paginate={paginate} > </Paiganition>
      </div>
    </div>
  );
};

export default BillingTable;

