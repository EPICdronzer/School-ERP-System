import React, { useState } from 'react'
import Dashboard from '../pages/Dashboard'
import StudentOverviewPage from '../pages/StudentOverviewPage';
import { Outlet } from 'react-router';
import Layout from '../components/Layout';

function AdminLandingPage() {
  return (
    <>
        <Layout >
            <Outlet/>
        </Layout>
    </>
  )
}
export default AdminLandingPage