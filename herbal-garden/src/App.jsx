import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthUI from './components/authentication/Auth-ui';
import ProtectedRoute from './routes/ProtectedRoute';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import World from './pages/World';
import MainLayout from './layout/MainLayout';
import About from './pages/About';
import { ChatPanelProvider } from './context/ChatPanelContext';

export default function App() {
  return (
    <Router>
      <ChatPanelProvider>
        <Routes>
          {/* Public Route (no navbar) */}
          <Route path="/" element={<AuthUI />} />

          {/* Protected Routes with shared layout */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Home />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/world"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <World />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <About />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChatPanelProvider>
    </Router>
  );
}
