import React, {useState} from 'react';
import Logo from '../components/Logo';
import MainMenu from '../components/MainMenu';
import PopUpHome from '../components/PopUpHome';

function HomeScreen() {

    const [isVisible, setIsVisible] = useState(false);
    const [isJoin, setIsJoin] = useState(false);

    const handleCreate = () => {
        setIsJoin(false);
        setIsVisible(true);
        
    }

    const handleJoin = () => {
        setIsJoin(true);
        setIsVisible(true);
    }





  return (
    <div class = "h-screen flex items-center   ">
        <div class="h-full w-1/2 pl-20 flex flex-col justify-center">
            <div class="pl-8 mb-7 ">
                <Logo/>
            </div>
            
            <MainMenu create={handleCreate} join={handleJoin}/>
        </div>
        <div class=" w-1/2 px-32 ">
            <PopUpHome isVisible={isVisible} isJoin={isJoin}/>
            
        </div>

      
    </div>
  );
}

export default HomeScreen;