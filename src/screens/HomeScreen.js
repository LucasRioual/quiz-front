import React, {useState} from 'react';
import Logo from '../components/Logo';
import MainMenu from '../components/MainMenu';
import PopUpHome from '../components/PopUpHome';
import Regle from '../components/Regle';

function HomeScreen() {

    const [isVisible, setIsVisible] = useState(false);
    const [isJoin, setIsJoin] = useState(false);
    const [showRegle, setShowRegle] = useState(false)

    const handleCreate = () => {
        setIsJoin(false);
        setIsVisible(true);
        
    }

    const handleJoin = () => {
        setIsJoin(true);
        setIsVisible(true);
    }

    const hideRegle =() => {
        setShowRegle(false);
    }

    const showPopUpRegle = () => {
        setShowRegle(true);
    }






  return (
    <div className = "h-screen flex items-center   ">
        <div className="h-full w-1/2 pl-20 flex flex-col justify-center">
            <div className="pl-8 mb-7 ">
                <Logo/>
            </div>
            
            <MainMenu create={handleCreate} join={handleJoin} regle={showPopUpRegle}/>
        </div>
        <div className=" w-1/2 px-32 ">
            <PopUpHome isVisible={isVisible} isJoin={isJoin}/>
            
        </div>
        <Regle isVisible={showRegle} cancel={hideRegle}/>


      
    </div>
  );
}

export default HomeScreen;