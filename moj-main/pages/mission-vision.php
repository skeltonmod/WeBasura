<?php
  
  
?>
<!DOCTYPE html>
<html>
<head>
<title>SB | Mission & Vission</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="icon" href="../images/logo1.png">
<link href="../layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
<link href="../layout/styles/calendar.css" rel="stylesheet" type="text/css">
</head>
<body id="top" style="background-image:url('../images/hall3.png'); background-size: cover;">
  <!-- ################################################################################################ -->
<div class="wrapper row0">
  <div id="topbar" class="hoc clear"> 
     
  </div>
</div>
<!-- ################################################################################################ -->
<div class="wrapper row6">
  </div>
<!-- ################################################################################################ -->
<div class="wrapper row1">
  <header id="header" class="hoc clear"> 
    <div id="logo" class="fl_left">
      <h1><a href="../index.php">Office of Sangguniang Bayan<i><img src="../images/logo1.png" style="width:200%"></i>  
      <p>Municipality of Jasaan</p></a></h1>
    </div>
    <nav id="mainav" class="fl_right">
      <ul class="clear">
        <li><a href="../index.php">Home</a></li>
        <li><a class="drop" href="#">GOVERNMENT</a>
          <ul>
            <li><a href="municipal-ordinances.php">MUNICIPAL ORDINANCES</a></li>
            <li><a href="resolutions.php">RESOLUTIONS</a></li>
            <li><a href="committee-reports.php">COMMITTEE REPORTS</a></li>
          </ul>
        </li>
         <li><a class="drop" href="#">SERVICES</a>
          <ul>
            <li><a href="events.php">EVENTS</a></li>
            <li><a href="news.php">NEWS</a></li>
          </ul>
        </li>
        <li class="active"><a class="drop" href="#">ABOUT US</a>
           <ul>
            <li class="active"><a href="mission-vision.php">MISSION & VISION</a></li>
            <li><a href="history.php">HISTORY</a></li>
            <li><a href="gallery.php">GALLERY</a></li>
            <li><a href="sb-member.php">SB MEMBERS</a></li>
            <li><a href="sc.php">STANDING COMMITTEE</a></li>

        </ul>
        </li>
    </nav>
  </header>
</div>
<!-- ################################################################################################ -->
<div class="wrapper row3">
  <main class="hoc container clear">
    <div class="content three_quarter first"> 
<div id="breadcrumb" class="hoc clear" > 
<div class="wrapper row3 bgded" style="background-image:url('../images/hall.jpg');" >
<article >
      <div class="overlay inspace-30 btmspace-30">
       <!--<p class="font-xs nospace">Vivamus condimentum et mi quis</p>-->
         <center>
      <h1 style="font-size:50px;"><p style="font-family:verdana;">MISSION </p></h1>
      <p style="font-size: 25px;">Delivery of Basic services to attain quality life of every Hasaanon.</p>
      
      
      <h1 style="font-size:50px;"><p style="font-family:verdana;">VISION</p></h1>
      <p style="font-size:25px;"> An Agro-Industrial and Eco-tourism Municipality propelled by morally upright and competent local leaders with enterpricing engaged and environmentally conscious Hasaanons
    </p>
      </center>
      </div>
    </article>
    </div>
    </div>
    </div>
    
    <div class="sidebar one_quarter"> 
      <h6>Sangguniang Bayan</h6>
      <nav class="sdb_holder">
        <ul>
          <li><a href="../index.php">Home</a></li>
          <li><a>Government</a>
            <ul>
              <li><a href="../pages/municipal-ordinances.php">Municipal Ordinances</a></li>
              <li><a href="../pages/resolutions.php">Resolutions</a></li>
              <li><a href="../pages/committee-reports.php">Committee Reports</a></li>
            </ul>
          </li>
          <li><a>Services</a>
            <ul>
              <li><a href="../pages/events.php">Events</a></li>
              <li><a href="../pages/news.php">News</a></li>
            </ul>
          </li>
          <li><a>About Us</a>
            <ul>
              <li><a class="active" href="../pages/mission-vision.php">Mission & Vision</a></li>
              <li><a href="../pages/history.php">History</a></li>
              <li><a href="../pages/gallery.php">Gallery</a></li>
              <li><a href="../pages/sb-member.php">SB Members</a></li>
              <li><a href="../pages/sc.php">Standing Committee</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      
      </div>
    </div>

    <!-- ################################################################################################ -->
    <div class="clear"></div>
  </main>
</div>
<!-- ################################################################################################ -->
<div class="wrapper row4">
  <footer id="footer" class="hoc clear"> 
    <!-- ################################################################################################ -->
    <div class="one_third first">
      <h6 class="title">CONTACT INFO</h6>
      <ul class="nospace linklist contact">
        <li style="font-size:15px"><i class="fa fa-map-marker"></i>
          <address>
          Jasaan Misamis Oriental 9003
          </address>
        </li>
        <li style="font-size:15px"><i class="fa fa-phone" ></i>+639123456789<br>
        <li style="font-size:15px"><i class="fa fa-envelope-o"></i> <a href="https://gmail.com/">jasaan@gmail.com</a>
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
      <div id="table-calendar">
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
          </div>
    </div>
    </div>
        <script src="../layout/scripts/calendar.js" type="text/javascript"></script>
  <!-- ################################################################################################ -->
<!--Google map-->
<div class="one_third">
<footer>
<div id="map-container-google-11" class="z-depth-1-half map-container-6" style="height: 300px">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3944.4323044022485!2d124.7546583!3d8.6503694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5440c642208789f!2sJasaan%20Municipal%20Hall!5e0!3m2!1sen!2sph!4v1608780676452!5m2!1sen!2sph" width="600" height="1000" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
  </footer>
</div>
    <!-- ################################################################################################ -->
  </footer>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<div class="wrapper row5">
  <div id="copyright" class="hoc clear"> 
    <!-- ################################################################################################ -->
    <p class="fl_left">Copyright &copy; 2020 - All Rights Reserved - <a href="#">Jasaan Misamis Oriental</a></p>
    <!-- ################################################################################################ -->
  </div>
</div>
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->
<!-- ################################################################################################ -->

<a id="backtotop" href="#top"><i class="fa fa-chevron-up"></i></a>
<!-- JAVASCRIPTS -->
<script src="../layout/scripts/jquery.min.js"></script>
<script src="../layout/scripts/jquery.backtotop.js"></script>
<script src="../layout/scripts/jquery.mobilemenu.js"></script>
<!-- IE9 Placeholder Support -->
<script src="../layout/scripts/jquery.placeholder.min.js"></script>
<!-- / IE9 Placeholder Support -->
</body>
        </html>