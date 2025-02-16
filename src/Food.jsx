function Food() {
    // if you are adding javascript in the returns statement you need {} braces
    // outside, you don't
    const food1 = "Apple"
    const food2 = "Banana"
    // we can use these vars in the return statement
    return (
        <ul>
            <li>Orange</li>
            <li>{food2}</li>
            <li>{food1.toUpperCase()}</li>
        </ul>
    )
}

export default Food