import { createContext, useState, useContext, useEffect} from 'react';
import axiosInstance from '../src/utils';
import { getToken } from '../src/tokenUtils';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profileData, setProfileData] = useState('');
    const [existingUser, setExistingUser] = useState(false)

    useEffect(() => {
        axiosInstance.get('/users/profile', getToken())
            .then(result => {
                setIsLoggedIn(true);
                setProfileData(result.data);
                setExistingUser(true);
            })
            .catch(err => {
            if (err.response.status === 401) {
                setIsLoggedIn(false);
            }
        });
    },[navigate, query]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, profileData, existingUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);