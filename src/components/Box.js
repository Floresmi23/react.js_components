import React from "react";

//any other imports




function Box(props){

    const [num, setNum]= React.useState(14);

    let addUp =(nm)=>{
        let result = num+nm;

        setNum(result);
    }




    return(
        <div>
            {/*Name Prop*/}
            <p>{props.mess}</p>

            {/*Age Prop*/}
            <p onClick={()=>addUp(props.number)}>I am  {num} years old</p>

            {/*Color Prop*/}
            <p>{props.nm}</p>



        </div>
    )
}

export default Box;