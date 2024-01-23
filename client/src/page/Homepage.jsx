import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

const Homepage = () => {
  return (
     <>
     <h1 className='text-center text-3xl font-semibold mt-4'>Home Page</h1>
     <div className='flex justify-center mt-6'>
     <Button variant="contained" color="success"><Link to='/addlanding' >Add</Link></Button>
     </div>
     
     
     </>
  )
}

export default Homepage