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