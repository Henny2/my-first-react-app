// we are working with function based components

function Header() {
    // combination of javascript and html
    // all we are gonna do withing this function is return something
    // within the return statement we can write pure HTML
    // react components are only able to return a single element BUT you can nest elements
    return (
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <p>TEST TEST</p>
            <hr></hr>
        </header>
    );

}
// exporting to use it elsewhere in our project
export default Header