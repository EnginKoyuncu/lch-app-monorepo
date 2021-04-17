import { useEffect, useState, useRef } from "react";
import Button from "../../../../Design/Button";
import Input from '../../../../Design/Input';

const PartLogs = () => {

    const [hours, setHours] = useState('');
    const inputRef = useRef();


    useEffect(() => {
        console.log(inputRef);
        if (inputRef.current) {
            inputRef.current.focus();
        }        
    }, []);

    const handleHoursChange = (e) => {
        setHours(e.target.value);
    }

    const handleMinClick = () => {

    };

    const handlePlusClick = () => {

    };

    return(
        <form>
            
                <div className="d-flex">
                <Button onClick={handleMinClick}>-</Button>
                
                <Input
                    type="number" 
                    ref={inputRef}
                    value={hours} 
                    onChange={handleHoursChange} 
                    name="hours" />
                <Button onClick={handlePlusClick}>+</Button>
                
                </div>
            
                <Button color="danger" type="submit">Save</Button>
            
            
        </form>
    )
}

export default PartLogs;