import React from 'react';

const BreakTime = () => {

    const[exerciseTime,setExerciseTime] = useState([]);
    useEffect(()=>{
        fetch('breaktime.json')
        .then(res=>res.json())
        .then(data=> setExerciseTime(data))
    },[]);
    return (
        <div>
            
        </div>
    );
};

export default BreakTime;