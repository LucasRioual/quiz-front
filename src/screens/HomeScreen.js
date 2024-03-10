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

    const hidePopUp = () => {
        setIsVisible(false);
    }






  return (
    <div className = "h-screen flex items-center p-6 md:p-0 justify-center md:justify-start  ">
        <div className="h-full md:w-1/2 md:pl-20 flex flex-col justify-center items-center md:items-start md:-translate-y-5">
            <div className="md:pl-8 md:mb-10 absolute md:relative top-10   ">
                <Logo/>
            </div>
            
            <MainMenu create={handleCreate} join={handleJoin} regle={showPopUpRegle}/>
        </div>
        <div className=" md:w-1/2 md:px-32 absolute md:relative w-3/4 ">
            <PopUpHome isVisible={isVisible} isJoin={isJoin} cancel={hidePopUp}/>
            
        </div>
        <Regle isVisible={showRegle} cancel={hideRegle}/>


      
    </div>
  );
}

export default HomeScreen;