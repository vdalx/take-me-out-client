import { createContext, useState, useContext, useEffect} from 'react';
import axiosInstance from '../../utils';
import { getToken } from '../../tokenUtils';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profileData, setProfileData] = useState('');
    const [existingUser, setExistingUser] = useState(false)

    useEffect(() => {
        axiosInstance.get('/users/profile', getToken())
            .then(result => {
                if (!result.data.firstName || !result.data.lastName) {
                    setIsLoggedIn(true);
                    setProfileData(result.data);
                    const path = query.get('/account') || '/account/settings';
                    navigate(path)
                } else {
                    setIsLoggedIn(true);
                    setProfileData(result.data);
                    setExistingUser(true);
                }
            })
            .catch(err => {
            if (err.response && err.response.status === 401) {
                setIsLoggedIn(false);
            } else {
                console.error('Error fetching user profile:', err);
            }
        });
    },[navigate, query]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, profileData, existingUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);