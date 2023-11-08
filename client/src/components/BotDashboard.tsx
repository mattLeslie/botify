import { useState } from "react";
import Switch from "react-switch";


const BotDashboard = () => {

    const [botEnabled, setBotEnabled] = useState<boolean>(false);

    const handleChange = () => {
        setBotEnabled(!botEnabled)
    }

    return (
        <div className="w-[100%] h-[100%] bg-gray-200 rounded-b-xl">
            <div className="flex h-[100%] w-[80%] m-auto justify-around flex-col font-thin">
                <div className="flex items-center">
                    <Switch onColor="#4ade80" uncheckedIcon={false} checkedIcon={false} onChange={handleChange} checked={botEnabled}/>
                    <span className="text-2xl pl-4">Enable Botify</span>
                </div>
                <button disabled={!botEnabled} className="disabled:opacity-50 flex flex-col w-[80%]" >
                    <div className="flex items-center">
                        <Switch onColor="#4ade80" uncheckedIcon={false} checkedIcon={false} onChange={handleChange} checked={botEnabled}/>
                        <span className="text-2xl pl-4">Enable Timed Deletion</span>
                    </div>
                    <div className="flex items-center">
                        <Switch onColor="#4ade80" uncheckedIcon={false} checkedIcon={false} onChange={handleChange} checked={botEnabled}/>
                        <span className="text-2xl pl-4">Enable Timed Replacement</span>
                    </div>
                    <div className="flex items-center">
                        <Switch onColor="#4ade80" uncheckedIcon={false} checkedIcon={false} onChange={handleChange} checked={botEnabled}/>
                        <span className="text-2xl pl-4">Enable Timed Insertion</span>
                    </div>
                </button>

            </div>
        </div>
    );
  };
  
  export default BotDashboard;