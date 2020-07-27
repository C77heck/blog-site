import React from 'react';

function Navbar() {

    return ( 
        <nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Furuma</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Search
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li>
                            <form class="navbar-form navbar-left" action="/" method="post">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Search" name="search" />
                                </div>
                                <button type="submit" class="btn btn-default">Submit</button>
                            </form>
                        </li>
                    </ul>
                </li>
                <li><a href="/buying">Shop</a></li>
                <li><a href="#">Dairy</a></li>
                <li><a href="#">Fruits & veg</a></li>
                <li><a href="#">Desserts</a></li>
                <li><a href="#">Meats</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a class="googleAnchor" href="/auth/google" role="button"><img class="googleImg"
                            src="images/Google.png" alt="" /></a></li>
                <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
        </div>
    </div>
</nav>
)
}


export default Navbar;