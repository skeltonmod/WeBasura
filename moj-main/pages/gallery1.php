<?php
  
  
?>
<!DOCTYPE html>
<html>
<head>
<title>SB | Gallery | Municipality of Jasaan</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link rel="icon" href="../images/logo1.png">
<link href="../layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
<link href="../layout/styles/calendar.css" rel="stylesheet" type="text/css">
<link href="../layout/styles/pagination.css" rel="stylesheet" type="text/css">
<link href="../layout/styles/album1.css" rel="stylesheet" type="text/css">
<link href="../layout/styles/modal.css" rel="stylesheet" type="text/css">


</head>
<body id="top" style="background-image:url('../images/hall3.png'); background-size: auto; background-repeat: no-repeat;">
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
    <!-- ################################################################################################ -->
    <div id="logo" class="fl_left">
      <h1><a href="../index.php">Office of Sangguniang Bayan<i><img src="../images/logo1.png" style="width:200%"></i>  
      <p>Municipality of Jasaan</p></a></h1>
    </div>
    <!-- ################################################################################################ -->
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
            <li><a href="mission-vision.php">MISSION & VISION</a></li>
            <li><a href="history.php">HISTORY</a></li>
            <li class="active"><a href="gallery.php">GALLERY</a></li>
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
    <div class="content"> 
      
    <!-- MAIN (Center website) -->
<div class="main">

<h1>Gallery</h1>

<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> Show all</button>
  <button class="btn" onclick="filterSelection('municipal hall')"> Municipal Hall</button>
  <button class="btn" onclick="filterSelection('coastal clean up')"> Coastal Clean Up</button>
</div>

<!-- Portfolio Gallery Grid -->
<div class="row">
<!-- Municipal Hall -->     
  <div class="column municipal hall">
    <div class="content">
      <img src="../img/hall/3.jpg" alt="3" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
    </div>
  </div>
  <div class="column municipal hall">
    <div class="content">
    <img src="../img/hall/hall2.jpg" alt="hall2" style="width:100%" onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
    </div>
  </div>
  <div class="column municipal hall">
    <div class="content">
    <img src="../img/hall/hall.jpg" alt="hall" style="width:100%" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
    </div>
  </div>
  
    <div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">

    <div class="mySlides">
      <div class="numbertext">1 / 4</div>
      <img src="../img/hall/3.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">2 / 4</div>
      <img src="../img/hall/hall2.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">3 / 4</div>
      <img src="../img/hall/hall.jpg" style="width:100%">
    </div>
    
    <div class="mySlides">
      <div class="numbertext">4 / 4</div>
      <img src="../img/hall/3.jpg" style="width:100%">
    </div>
    
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <div class="caption-container">
      <p id="caption"></p>
    </div>

  </div>

</div>
<!-- ################################################################################################ -->
<!-- Coastal Clean-Up -->     
<div class="column coastal clean up">
    <div class="content">
      <img src="../img/coastal/1.jpg" alt="1" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
    </div>
  </div>
  <div class="column coastal clean up">
    <div class="content">
    <img src="../img/coastal/2.jpg" alt="2" style="width:100%" onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
    </div>
  </div>
  <div class="column coastal clean up">
    <div class="content">
    <img src="../img/coastal/5.jpg" alt="5" style="width:100%" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
    </div>
  </div>
  <div class="column coastal clean up">
    <div class="content">
    <img src="../img/coastal/6.jpg" alt="6" style="width:100%" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
    </div>
  </div>
  
    <div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">

    <div class="mySlides">
      <div class="numbertext">1 / 4</div>
      <img src="../img/coastal/1.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">2 / 4</div>
      <img src="../img/coastal/2.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">3 / 4</div>
      <img src="../img/coastal/5.jpg" style="width:100%">
    </div>
    
    <div class="mySlides">
      <div class="numbertext">4 / 4</div>
      <img src="../img/coastal/6.jpg" style="width:100%">
    </div>
    
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <div class="caption-container">
      <p id="caption"></p>
    </div>

  </div>

</div>
<!-- ################################################################################################ -->
<!-- END GRID -->
</div>
<!-- END MAIN -->
</div>
    </div>
    </div>
<!-- ################################################################################################ -->    
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
                  <li><a href="../pages/mission-vision.php">Mission & Vision</a></li>
                  <li><a href="../pages/history.php">History</a></li>
                  <li><a  class="active" href="../pages/gallery.php">Gallery</a></li>
                  <li><a href="../pages/sb-member.php">SB Members</a></li>
                  <li><a href="../pages/sc.php">Standing Committee</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          </div>
        </div>
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
      <div id="map-container-google-11" class="z-depth-1-half map-container-6" style="height: 300px">
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
<script src="../layout/scripts/album.js"></script>
<script src="../layout/scripts/gallerymodal.js"></script>
<script src="../layout/scripts/jquery.min.js"></script>
<script src="../layout/scripts/jquery.backtotop.js"></script>
<script src="../layout/scripts/jquery.mobilemenu.js"></script>
<!-- IE9 Placeholder Support -->
<script src="../layout/scripts/jquery.placeholder.min.js"></script>
<!-- / IE9 Placeholder Support -->
</body>
</html>