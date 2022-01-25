import React from "react";

//any other imports




function Box2(props){

    const [num, setNum]= React.useState(6);

    let addUp =(nm)=>{
        let result = num+nm;

        setNum(result);
    }


    return(
        <div>

            {/*Name Prop*/}
            <p>Name: {props.mess}</p>

            {/*Age Prop*/}
            <p onClick={()=>addUp(props.number)}>I am  {num} years old</p>

            {/*Color Prop*/}
            <p>The coolest color is {props.nm}</p>

            {/*<button onClick={()=>addUp(props.number)}>Number</button>*/}


        </div>
    )
}

export default Box2;