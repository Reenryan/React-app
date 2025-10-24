function Food (){
    const food1 = 'Orange';
    const food2 = 'Banana';
    
    // in jsx it only allows expressions not statements
    let message =" ";

    if (food1.startsWith("O")){
        message = "Oranges are sweet";
    } else {
        message = "These are not Oranges";
    }
    return(
        <>
        <ul>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li>
            <li>   
                { food1.startsWith("O") ? <p>Oranges are sweet</p> :  <p>THis are not Oranges</p>}
            </li>
        </ul>
        <p>{message}</p>
        </>

    )
}
export default Food;