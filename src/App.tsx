import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster } from '@/components/ui/sonner'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LegalNoticePage from './pages/LegalNoticePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import AdminDashboard from './pages/AdminDashboard'
import LoginPage from './pages/LoginPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

function AppContent() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (section: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(section)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleLegalNavigate = (path: string) => {
    navigate(path)
  }

  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isAdminRoute && <Header onNavigate={handleNavigate} currentSection="home" />}
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions-legales" element={<LegalNoticePage />} />
          <Route path="/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      
      {!isAdminRoute && <Footer onNavigate={handleNavigate} onLegalNavigate={handleLegalNavigate} />}
      <Toaster />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App