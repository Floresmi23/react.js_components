import React from "react";

//any other imports




function Box1(props){

    const [num, setNum]= React.useState(22);

    let addUp =(nm)=>{
        let result = num+nm;

        setNum(result);
    }


    return(
        <div>

            {/*Name Prop*/}
            <p>Name: Michael</p>

            {/*Age Prop*/}
            <p onClick={()=>addUp(props.number)}>I am  {num} years old</p>

            {/*Color Prop*/}
            <p>{props.nm}</p>

            {/*<button onClick={()=>addUp(props.number)}>Number</button>*/}


        </div>
    )
}

export default Box1;