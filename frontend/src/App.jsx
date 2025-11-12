import {BrowserRouter, Routes, Route} from "react-router"
import { lazy } from "react"
import { useSelector } from "react-redux"

const Home = lazy(()=> import("./pages/Home"))
const Navbar = lazy(()=> import("./components/Navbar"))
const Footer = lazy(()=> import("./components/Footer"))
const ProductDtail = lazy(()=> import("./pages/ProductDetail"))
const Cart = lazy(()=> import("./pages/Cart"))
const Checkout = lazy(()=> import("./pages/Checkout"))
const Signin = lazy(()=> import("./pages/Signin"))
const Signup = lazy(()=> import("./pages/Signup"))
const YourOrder = lazy(()=> import("./pages/YourOrders"))
const AdminDashboard = lazy(()=> import("./pages/AdminDashboard"))
const UploadProduct = lazy(()=> import("./pages/UploadProduct"))
const UpdateProduct = lazy(()=> import("./pages/UpdateProduct"))

function App() {
  const user = useSelector(state => state.user)
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDtail/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout/:id" element={<Checkout/>}/>
          <Route path="/signin" element={user?.isAuthenticated == true ?<Home/>: <Signin/>}/>
          <Route path="/signup" element={user?.isAuthenticated == true ?<Home/>:<Signup/>}/>
          <Route path="/your-orders" element={user?.isAuthenticated ==true? <YourOrder/>:<Signin/>}/>
          <Route path="/admin-dashboard" element={user?.isAuthenticated && user?.user?.role ==='ADMIN'? <AdminDashboard/>: <Home/>}/>
          <Route path="/admin-upload-product" element={user?.isAuthenticated && user?.user?.role ==='ADMIN'?<UploadProduct/>:<Home/>}/>
          <Route path="/admin-update-product/:id" element={user?.isAuthenticated && user?.user?.role ==='ADMIN'?<UpdateProduct/>:<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
