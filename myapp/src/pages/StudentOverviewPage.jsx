import React from 'react'
import Layout from '../components/Layout'

function StudentOverviewPage() {
  return (
    <Layout>
    <div className='flex justify-around'>
      <div className='flex justify-between items-center w-full'>
        <div>Student List</div>
        <div className='border-2 rounded-xl p-2'>+Add Student</div>
      </div>
    </div>
    </Layout>
  )
}

export default StudentOverviewPage