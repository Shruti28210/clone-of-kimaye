function navbar(){
    return `
    <div id="green_div">Currently available in Mumbai | Same day delivery</div>
    <header>
        <div class="navbar">
            <ul>
                <li><a href="#">SHOP<i class="fas fa-chevron-down"></i></a>
                    <ul>
                        <li><a href="data.html">ALL FRUITS</a></li>
                        <li><a href="#">FRESH CUTS</a></li>
                        <li><a href="#">FRUIT COMBOS</a></li>
                        <li><a href="#">GRAPE FAMILY BY KIMAYE</a></li>
                        <li><a href="#">GIFTS BY KIMAYE</a></li>
                        <li><a href="#">COMMUNITY BUYING</a></li>
                        <li><a href="#">FRUITS X SUBSCRIPTION</a></li>
                        <li><a href="#">RETURN AND REPLACEMENT</a></li>
                    </ul>
                </li>
                <li><a href="#">LEARN <i class="fas fa-chevron-down"></i></a>
                <ul>
                    <li><a href="#">OUR STORY</a></li>
                    <li><a href="#">WHY KIMAYE</a></li>
                    <li><a href="#">TRACEABILITY</a></li>
                    <li><a href="#">BEYOND FRUITS</a></li>
                </ul>
            </li>
                <li><a href="#">GROW</a></li> 
            </ul>
            </div>
            <div id="logo_img">
              <img src="./IMAGES/kimaye.png"/>
            </div>
              <div class="navbar">
                <ul>
                  <li class="active">
                    <a href="#"><i class="fa fa-search" aria-hidden="true"></i></a>
                    <!-- <div class="search-box">
                      <input type="text">
                      <input type="button" value="search">
                    </div> -->
                  </li>
                  <li><a href="#"><i class="far fa-user"id="user"></i></a></li>
                  <li><a href="cartKimaye.html"><i class="fa fa-shopping-bag"></i></a></li>
                </ul>
              </div>
    </header> 
     `
}

export default navbar