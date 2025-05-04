import { createContext, useContext, useState, useEffect } from 'react';
import {
  loginUser,
  registerUser,
  fetchAuthenticatedUser,
  trackCubeVisit,
  fetchCubeInfo,
} from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const user = await fetchAuthenticatedUser();
        // console.log('user : ', user);
        setUser(user);
      } catch (err) {
        setUser(null);
      } finally {
        setAuthLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (credentials) => {
    setAuthLoading(true);
    setError(null);
    try {
      const { user } = await loginUser(credentials);
      // console.log('logged in user : ', user);
      setUser(user);
    } catch (err) {
      setError(err.message);
      setUser(null);
    } finally {
      setAuthLoading(false);
    }
  };

  const signup = async (data) => {
    setAuthLoading(true);
    setError(null);
    try {
      const { data: userData } = await registerUser(data);
      setUser(userData);
      return { success: true };
    } catch (err) {
      setError(err.message);
      setUser(null);
      return { success: false, message: err.message }; // ⬅️ return status
    } finally {
      setAuthLoading(false);
    }
  };

  const handleCubeClick = async (cubeName) => {
    try {
      await trackCubeVisit(cubeName); // First API call to track visit

      const { status, cube } = await fetchCubeInfo(cubeName); // Destructure the response

      if (status) {
        return { success: true, plant: cube }; // Renamed 'cube' to 'plant' here
      } else {
        console.error('Failed to fetch cube information in AutthContext');
        return { success: false, message: 'Failed to fetch cube' };
      }
    } catch (err) {
      console.error('Cube interaction failed:', err);
      return { success: false, message: err.message };
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, authLoading, error, handleCubeClick }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
