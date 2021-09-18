<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Office Of Sangguniang Bayan | Municipality of Jasaan</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="../moj/images/logo1.png">
    <link href="layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
    <link href="../moj/layout/styles/calendar.css" rel="stylesheet" type="text/css">
    <link href="../moj/layout/styles/gallery.css" rel="stylesheet" type="text/css">
    <link href="../moj/layout/styles/video.css" rel="stylesheet" type="text/css">
    <link href="../moj/layout/styles/login.css" rel="stylesheet" type="text/css">

  </head>
<body id="top" style="background-image: url('images/hall3.png'); background-size: cover;">

<!-- ################################################################################################ -->
<div class="wrapper row0">
  <div id="topbar" class="hoc clear"> 
    
    <div class="fl_right">
    <div class="menu">
      <div class="title" onclick="f()">Admin <i class="fa fa-user"></i>
        <div class="arrow"></div>
      </div>

      <div class="dropdown">
      <div id="login">
        <div id="triangle"></div>
        <h1>Log in</h1> 
    <form action="#" method="POST">
    <input type="text"  name="user" placeholder="Email" autofocus required="required"/>
    <input type="password" name="pass" placeholder="Password" required="required"/>
    <input type="submit"  name="submit" value="Log in"/>
    </form>
    </div>
    </div>
   </div>  
    </div>

   
    <div class="fl_left">
      <form class="clear" method="POST" action="#">
        <fieldset>
          <legend>Search:</legend>
          <input type="search" value="" placeholder="Search Here&hellip;">
          <button class="fa fa-search" type="submit" title="Search"><em>Search</em></button>
        </fieldset>
      </form>
    </div>
    

  </div>
</div>
     
<!-- ################################################################################################ -->
<div class="wrapper row6"></div>
<!-- ################################################################################################ -->

<div class="wrapper row1" >
  <header id="header" class="hoc clear"> 

    <div id="logo" class="fl_left">
      <h1><a >Office of Sangguniang Bayan<i><img src="images/logo1.png" style="width:200%"></i>  
      <p>Municipality of Jasaan</p></a></h1>
    </div>

    <nav id="mainav" class="fl_right">
      <ul class="clear">
        <li class="active"><a href="index.php">Home</a></li>
        <li><a class="drop" href="#">GOVERNMENT</a>
          <ul>
            <li><a href="pages/municipal-ordinances.php">MUNICIPAL ORDINANCES</a></li>
            <li><a href="pages/resolutions.php">RESOLUTIONS</a></li>
            <li><a href="pages/committee-reports.php">COMMITTEE REPORTS</a></li>
          </ul>
        </li>
          <li><a class="drop" href="#">SERVICES</a>
          <ul>
            <li><a href="pages/events.php">EVENTS</a></li>
            <li><a href="pages/news.php">NEWS</a></li>
          </ul>
        </li>
        <li><a class="drop" href="#">ABOUT US</a>
           <ul>
            <li><a href="pages/mission-vision.php">MISSION & VISION</a></li>
            <li><a href="pages/history.php">HISTORY</a></li>
            <li><a href="pages/gallery.php">GALLERY</a></li>
            <li><a href="pages/sb-member.php">SB MEMBERS</a></li>
            <li><a href="pages/sc.php">STANDING COMMITTEE</a></li>

        </ul>
        </li>
    </nav>
  </header>
</div>

<!-- ################################################################################################ -->

    <div class="wrapper row1 bgded" >
      <div id="pageintro" class="hoc clear" > 
    
        <div class="galleryContainer">
        <div class="slideShowContainer">
            <div id="playPause" style="background-image:url('playPause.png');" onclick="playPauseSlides()"></div>
            <div onclick="plusSlides(-1)" class="nextPrevBtn leftArrow"><span class="arrow arrowLeft"></span></div>
            <div onclick="plusSlides(1)" class="nextPrevBtn rightArrow"><span class="arrow arrowRight"></span></div>
            <div id="dotsContainer" class="captionTextHolder"><p class="captionText slideTextFromTop"></p></div>
            
            <div class="imageHolder">
                <img src="images/hall1.jpg">
                <p class="captionText"></p>
            </div>
    
            <div class="imageHolder">
                <img src="images/q.jpeg">
                <p class="captionText"></p>
            </div>
    
            <div class="imageHolder">
                <img src="images/jasaan.jpg">
                <p class="captionText"></p>
            </div>
    
            <div class="imageHolder">
                <img src="images/hw.jpg">
                <p class="captionText"></p>
            </div>
            <script src="layout/scripts/myScript.js"></script>
        </div>
        </div>

         <div class="hoc container clear"> 
          
        <h4>WELCOME TO THE MUNICIPALITY OF JASAAN</h4>
        <video  controls  style="margin-right:20px">
        <source src="../moj/videos/duaw.mp4" type="video/mp4" >
        </video>
      <br><br>
       <h5>The town of Jasaan is located some 28 kilometers east of Cagayan de Oro City and is becoming a growing tourism destination in the province of Misamis Oriental.
    
           <span>Jasaan is politically subdivided into 15 barangays, of which 8 are coastal barangays (Aplaya, Solana, Luz Banzon, Kimaya, Lower Jasaan, Bobuntugan, Jampason and San Antonio) and 7 inland barangays (Upper Jasaan, Corrales, San Isidro, Natubo, Danao, San Nicolas, and Ignacio S. Cruz).</span>
    
       <span>Among its featured tourism sites include Sagpulon Falls, Agutayan Island, the Immaculate Conception Church, Sailfin Lizard and Carloise Halo-Halo.</span>
    
       </h5>
      </div>

      </div>
    </div>

     

<!-- ################################################################################################ -->
<div class="wrapper coloured">
  <div class="hoc container clear"> 
    <div id="table-calendar" >
      <div  class="one_third ">

        <div class="container-calendar">  

          <div class="button-container-calendar">
              <button id="previous" onclick="previous()">&#8249;</button>
              <button id="next" onclick="next()">&#8250;</button>
              <h3 id="monthAndYear"></h3>
          </div> 
          <table class="table-calendar" id="calendar" data-lang="en">
              <thead id="thead-month"></thead>
              <tbody id="calendar-body"></tbody>
          </table>
          
          <div class="footer-container-calendar">
              <label for="month">Jump To: </label>
              <select id="month" onchange="jump()">
                  <option value=0>Jan</option>
                  <option value=1>Feb</option>
                  <option value=2>Mar</option>
                  <option value=3>Apr</option>
                  <option value=4>May</option>
                  <option value=5>Jun</option>
                  <option value=6>Jul</option>
                  <option value=7>Aug</option>
                  <option value=8>Sep</option>
                  <option value=9>Oct</option>
                  <option value=10>Nov</option>
                  <option value=11>Dec</option>
              </select>
              <select id="year" onchange="jump()"></select>       
          </div>
          <script src="layout/scripts/calendar.js" type="text/javascript"></script>
        </div>
      </div>
 <!-- ################################################################################################ -->
    <div  class="one_quarter">
      <ul>
       <h3 class="font-x2 nospace"><b>UPCOMING EVENTS</b></h3>
       <br>
        <article>
        <time class="font-xs" datetime="2045-04-06">11<sup>th</sup> January 2021</time>
        <h2 class="nospace font-x1 bold">Watch out for the grand homecoming of our new Miss Kuyamis 2021, Ms. Dannah Joy Tempra &hellip;</h2>
        <br><p class="nospace"><a href="pages/events.php"><strong>Read More</strong>&raquo;</a></p>
        </article>
      <br>
        <article>
        <time class="font-xs" datetime="2045-04-06">5-6<sup>th</sup> December 2020</time>
        <h2 class="nospace font-x1 bold">Local Government Unit of Jasaan in cooperation with Jasaan Runners Club brings you Katubigan Virtual Run 2020 &hellip;</h2>
        <br><p class="nospace"><a href="pages/events.php"><strong>Read More</strong> &raquo;</a></p>
        </article>
      <br>
        <article>
        <time class="font-xs" datetime="2045-04-06">5-6<sup>th</sup> December 2020</time>
        <h2 class="nospace font-x1 bold">Local Government Unit of Jasaan in cooperation with Jasaan Runners Club brings you Katubigan Virtual Run 2020 &hellip;</h2>
        <br><p class="nospace"><a href="pages/events.php"><strong>Read More</strong> &raquo;</a></p>
        </article>
      </ul>  
    </div>
<!-- ################################################################################################ -->


</div>
</div>  
</div>    
<!-- ################################################################################################ -->
<div class="wrapper row3">
  <section class="hoc container clear"> 
    <div class="center btmspace-50">
    <h3 class="font-x2 nospace"><center><b>LATEST NEWS</b></center></h3>
    </div>

    <div class="group">
      <div class="one_third first"> 
       <article>
        <img class="imgl borderedbox inspace-5" src="images/drug.jpg" alt="vicky" style="width:170px;height:170px;margin-right:15px;">
        <br><time class="font-xs; font-size: 10px;" datetime="2045-04-06">11<sup>th</sup>March 2021</time>
        <h2 class="nospace font-x1 bold"></h2>
        <p>AURING" WEAKENS INTO TROPICAL STORM AND IS NOW BEGINNING TO MOVE WESTWARD&hellip;</p>
        <p class="nospace"><a href="pages/news.php">Read More &raquo;</a></p>
       </article>
      </div> 

      <div class="one_third "> 
        <article>
         <img class="imgl borderedbox inspace-5" src="images/z.jpg" alt="vicky" style="width:170px;height:170px;margin-right:15px;">
         <br><time class="font-xs; font-size: 10px;" datetime="2045-04-06">18<sup>th</sup> December 2020</time>
         <h2 class="nospace font-x1 bold"></h2>
         <p>The Local Government Unit of Jasaan headed by Our Municipal Mayor . Redentor S. Jardin congratulates our new SB member Hon. Francisco Uyguanco Jr.&hellip;</p>
         <p class="nospace"><a href="pages/news.php">Read More &raquo;</a></p>
        </article>
       </div> 

      <div class="one_third "> 
        <article>
         <img class="imgl borderedbox inspace-5" src="images/vicky.jfif" alt="vicky" style="width:170px;height:170px;margin-right:15px;">
         <br><time class="font-xs; font-size: 10px;" datetime="2045-04-06">18<sup>th</sup> December 2020</time>
         <h2 class="nospace font-x1 bold"></h2>
         <p>BANTAY BAGYO | Tropical Depres on VickyPH.&hellip;</p>
         <p class="nospace"><a href="pages/news.php">Read More &raquo;</a></p>
        </article>
      </div> 
    </div> 

    <div class="group">
      <div class="one_third first"> 
       <article>
        <img class="imgl borderedbox inspace-5" src="images/vicky.jfif" alt="vicky" style="width:170px;height:170px;margin-right:15px;">
        <br><time class="font-xs; font-size: 10px;" datetime="2045-04-06">18<sup>th</sup> December 2021</time>
        <h2 class="nospace font-x1 bold"></h2>
        <p>AURING" WEAKENS INTO TROPICAL STORM AND IS NOW BEGINNING TO MOVE WESTWARD&hellip;</p>
        <p class="nospace"><a href="pages/news.php">Read More &raquo;</a></p>
       </article>
      </div> 

      <div class="one_third "> 
        <article>
         <img class="imgl borderedbox inspace-5" src="images/vicky.jfif" alt="vicky" style="width:170px;height:170px;margin-right:15px;">
         <br><time class="font-xs; font-size: 10px;" datetime="2045-04-06">18<sup>th</sup> December 2020</time>
         <h2 class="nospace font-x1 bold"></h2>
         <p>BANTAY BAGYO | Tropical Depres on VickyPH.&hellip;</p>
         <p class="nospace"><a href="pages/news.php">Read More &raquo;</a></p>
        </article>
       </div> 

      <div class="one_third "> 
        <article>
         <img class="imgl borderedbox inspace-5" src="images/vicky.jfif" alt="vicky" style="width:170px;height:170px;margin-right:15px;">
         <br><time class="font-xs; font-size: 10px;" datetime="2045-04-06">18<sup>th</sup> December 2020</time>
         <h2 class="nospace font-x1 bold"></h2>
         <p>BANTAY BAGYO | Tropical Depres on VickyPH.&hellip;</p>
         <p class="nospace"><a href="pages/news.php">Read More &raquo;</a></p>
        </article>
      </div> 
    </div> 

  </section>  
</div>      
<!-- ################################################################################################ -->
<div class="wrapper row4">
  <footer id="footer" class="hoc clear"> 
   <div class="one_third first">
      <h6 class="title">CONTACT INFO</h6>
      <ul class="nospace linklist contact">
        <li style="font-size:15px"><i class="fa fa-map-marker"></i>
          <address>
          Jasaan Misamis Oriental 9003
          </address>
        </li>
        <li style="font-size:15px"><i class="fa fa-phone" ></i>+639123456789<br>
        <li style="font-size:15px"><i class="fa fa-envelope-o"></i> <a href="https://gmail.com/">sangguniangbayan.jasaan@gmail.com</a>
        </address></li>
        <li style="font-size:15px"><i class="fa fa-facebook"></i> <a href="https://www.facebook.com/sangguniangbayan.jasaan.3">SB Facebook</a>
        </address></li>
        <address></li>
        <li style="font-size:15px"><i class="fa fa-facebook"></i> <a href="https://www.facebook.com/Local-Government-Unit-of-Jasaan-101619861534087/?ref=page_internal">LGU Facebook</a>
        </address></li>
      </ul>
    </div>
 <!-- ################################################################################################ -->
    <div class="one_third">
    <h6 class="title">FEEDBACK</h6>
      <form>      
        <input name="name" type="text" class="feedback-input" placeholder="Name (Optional)" />   
        <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" value="SUBMIT"/>
      </form>
    </div>
  <!-- ################################################################################################ -->
  <!--Google map-->
    <div class="one_third">
      <div id="map-container-google-11" class="z-depth-1-half map-container-6" style="height: 270px">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3944.4323044022485!2d124.7546583!3d8.6503694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5440c642208789f!2sJasaan%20Municipal%20Hall!5e0!3m2!1sen!2sph!4v1608780676452!5m2!1sen!2sph" width="600" height="1000" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
  </footer>
</div>
<!-- ################################################################################################ -->
<div class="wrapper row5">
  <div id="copyright" class="hoc clear"> 
    <p class="fl_left">Copyright &copy; 2020 - All Rights Reserved - <a href="#">Jasaan Misamis Oriental</a></p>
  </div>
</div>
<!-- ################################################################################################ -->

<a id="backtotop" href="#top"><i class="fa fa-chevron-up"></i></a>
<!-- JAVASCRIPTS -->
<script src="layout/scripts/login1.js"></script>
<script src="layout/scripts/jquery.min.js"></script>
<script src="layout/scripts/jquery.backtotop.js"></script>
<script src="layout/scripts/jquery.mobilemenu.js"></script>
<!-- IE9 Placeholder Support -->
<script src="layout/scripts/jquery.placeholder.min.js"></script>
<!-- / IE9 Placeholder Support -->
</body>
</html>