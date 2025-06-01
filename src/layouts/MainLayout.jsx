import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  return (
    <>
    <div className="font-body min-h-screen flex flex-col">
      <Navbar />
      <main>{children}</main>
      <Footer />
      </div>
    </>
  );
}
