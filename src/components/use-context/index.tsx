import { Box } from '@mui/material';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactElement,
} from 'react';
import Headline from '../../ui/Headline';

export const UserContext = createContext({ name: '', age: '' });
export const HobbyContext = createContext('');

const GrandChildComponent = (): ReactElement => {
  const user = useContext(UserContext);
  const hobby = useContext(HobbyContext);

  return (
    <Box my={2}>
      <Headline title="Grand Child Component" variant="xl" />
      <p>親コンポーネントからContextで渡されたstate↓↓</p>
      <p>{user.name}</p>
      <p>{hobby}</p>
    </Box>
  );
};

const ChildComponent = (): ReactElement => {
  return (
    <Box my={2}>
      <Headline title="Child Component" variant="xl" />
      <GrandChildComponent />
    </Box>
  );
};

const ContextPage = (): ReactElement => {
  const [user] = useState({
    name: 'セイラ',
    age: '17',
  });

  const [hobby] = useState('キャンプ');

  // express-sandbox-app APIを叩く
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const res = await fetch('http://localhost:3000/api/photo/list');
      const data = await res.json();
      console.log(data);
    };

    void fetchData();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <HobbyContext.Provider value={hobby}>
        <Box my={2}>
          <Headline title="React useContext API Practice" variant="xl" />
          <ChildComponent />
        </Box>
      </HobbyContext.Provider>
    </UserContext.Provider>
  );
};
export default ContextPage;
