import { MoonLoader } from "react-spinners";

type SpinnerProps = {
    size:number
}

const Spinner = (props:SpinnerProps) => {
  
    return (
        <div className="flex flex-col justify-center">
            <div className="flex justify-center">
                <MoonLoader
                    size={props.size}
                
                />
            </div>
        </div>
    );
  };
  
  export default Spinner;