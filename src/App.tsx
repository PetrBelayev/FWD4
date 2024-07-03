import React from 'react';
import Header from './components/Header';
import Comic from './components/Comic';
import Footer from './components/Footer';
import { format } from 'date-fns';
import './styles.css';

const App: React.FC = () => {
  const currentDate = format(new Date(), 'MMMM dd, yyyy');

  return (
    <div className="App">
      <Header />
      <Comic 
        title="Title" 
        imageUrl="https://cdn-icons-png.flaticon.com/512/1178/1178479.png" 
        date={currentDate} 
      />
      <Footer />
    </div>
  );
};

export default App;
