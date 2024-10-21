export default function Navbar(){
    return(
        <div>
            <footer  className="flex">
                
                <div className="w-96" >
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our service</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliated program</a></li>
                    </ul>
                </div>
                    <div className="w-6/12 ">
                        <h4>Get Help </h4>
                        <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#"> returns</a></li>
                        <li><a href="#"></a>order status</li>
                        <li><a href="#">ppayment option</a></li>
                        </ul>
                    </div>
                        <div className="w-4/12"> 
                            <h4>Online Shop</h4>
                            <ul>
                                <li><a href="#">watch</a></li>
                                <li><a href="#">bag</a></li>
                                <li><a href="#">shoes</a></li>
                                <li><a href="#">dress</a></li>
                            </ul>
                        </div>
            </footer>
        </div>

    )
}