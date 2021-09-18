<?php
  
  
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
  <title>Office Of Sangguniang Bayan | Municipality of Jasaan</title>

  <!-- Favicons -->
  <link href="../images/logo1.png" rel="icon">
  <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link href="lib/bootstrap-wysiphp5/bootstrap-wysiphp5.css" rel="stylesheet" />
  <!-- Custom styles for this template -->
  <link href="css/style.css" rel="stylesheet">
  <link href="css/style-responsive.css" rel="stylesheet">
</head>

<body>
  <section id="container">
    <!-- **********************************************************************************************************************************************************
        TOP BAR CONTENT & NOTIFICATIONS
        *********************************************************************************************************************************************************** -->
    <!--header start-->
    <header class="header black-bg">
      <div class="sidebar-toggle-box">
        <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
      </div>
      <!--logo start-->
      <a href="index.php" class="logo"><b>S<span>B</span></b></a>
      <!--logo end-->
      <div class="top-menu">
        <ul class="nav pull-right top-menu">
          <li><a class="logout" href="../index.php">Logout</a></li>
        </ul>
      </div>
      <div class="nav notify-row" id="top_menu">
        <!--  notification start -->
        <ul class="nav top-menu">
          <!-- inbox dropdown start-->
          <li id="header_inbox_bar" class="dropdown">
            <a data-toggle="dropdown" class="dropdown-toggle" href="index.php#">
              <i class="fa fa-envelope-o"></i>
              <span class="badge bg-theme">5</span>
              </a>
            <ul class="dropdown-menu extended inbox">
              <div class="notify-arrow notify-arrow-green"></div>
              <li>
                <p class="green">You have 5 new messages</p>
              </li>
              <li>
                <a href="index.php#">
                  <span class="photo"><img alt="avatar" src="img/ui-zac.jpg"></span>
                  <span class="subject">
                  <span class="from">Zac Snider</span>
                  <span class="time">Just now</span>
                  </span>
                  <span class="message">
                  Hi mate, how is everything?
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.php#">
                  <span class="photo"><img alt="avatar" src="img/ui-divya.jpg"></span>
                  <span class="subject">
                  <span class="from">Divya Manian</span>
                  <span class="time">40 mins.</span>
                  </span>
                  <span class="message">
                  Hi, I need your help with this.
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.php#">
                  <span class="photo"><img alt="avatar" src="img/ui-danro.jpg"></span>
                  <span class="subject">
                  <span class="from">Dan Rogers</span>
                  <span class="time">2 hrs.</span>
                  </span>
                  <span class="message">
                  Love your new Dashboard.
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.php#">
                  <span class="photo"><img alt="avatar" src="img/ui-sherman.jpg"></span>
                  <span class="subject">
                  <span class="from">Dj Sherman</span>
                  <span class="time">4 hrs.</span>
                  </span>
                  <span class="message">
                  Please, answer asap.
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.php#">See all messages</a>
              </li>
            </ul>
          </li>
          <!-- inbox dropdown end -->
          <!-- notification dropdown start-->
          <li id="header_notification_bar" class="dropdown">
            <a data-toggle="dropdown" class="dropdown-toggle" href="index.php#">
              <i class="fa fa-bell-o"></i>
              <span class="badge bg-warning">7</span>
              </a>
            <ul class="dropdown-menu extended notification">
              <div class="notify-arrow notify-arrow-yellow"></div>
              <li>
                <p class="yellow">You have 7 new notifications</p>
              </li>
              <li>
                <a href="index.php#">
                  <span class="label label-danger"><i class="fa fa-bolt"></i></span>
                  Server Overloaded.
                  <span class="small italic">4 mins.</span>
                  </a>
              </li>
              <li>
                <a href="index.php#">
                  <span class="label label-warning"><i class="fa fa-bell"></i></span>
                  Memory #2 Not Responding.
                  <span class="small italic">30 mins.</span>
                  </a>
              </li>
              <li>
                <a href="index.php#">
                  <span class="label label-danger"><i class="fa fa-bolt"></i></span>
                  Disk Space Reached 85%.
                  <span class="small italic">2 hrs.</span>
                  </a>
              </li>
              <li>
                <a href="index.php#">
                  <span class="label label-success"><i class="fa fa-plus"></i></span>
                  New User Registered.
                  <span class="small italic">3 hrs.</span>
                  </a>
              </li>
              <li>
                <a href="index.php#">See all notifications</a>
              </li>
            </ul>
          </li>
          <!-- notification dropdown end -->
        </ul>
        <!--  notification end -->
      </div>
    </header>
    <!--header end-->
    <!-- **********************************************************************************************************************************************************
        MAIN SIDEBAR MENU
        *********************************************************************************************************************************************************** -->
    <!--sidebar start-->
    <aside>
      <div id="sidebar" class="nav-collapse ">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu" id="nav-accordion">
          <p class="centered"><a href="profile.php"><img src="../images/fred1.png" class="img-circle" width="80"></a></p>
          <h5 class="centered">Frederick M. Llausas</h5>
          <li class="mt">
            <a href="index.php">
              <i class="fa fa-dashboard"></i>
              <span>Dashboard</span>
              </a>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-cogs"></i>
              <span>Components</span>
              </a>
            <ul class="sub">
              <li><a href="gallery.php">Gallery</a></li>
              <li><a href="dropzone.php">Dropzone File Upload</a></li>
              <li><a href="file_upload.php">Multiple File Upload</a></li>
            </ul>
          </li>
          <li>
            <a class="active" href="inbox.php">
              <i class="fa fa-envelope"></i>
              <span>Mail </span>
              <span class="label label-theme pull-right mail-info">3</span>
              </a>
          </li>
          <li>
            <a href="google_maps.php">
              <i class="fa fa-map-marker"></i>
              <span>Google Maps </span>
              </a>
          </li>
        </ul>
        <!-- sidebar menu end-->
      </div>
    </aside>
    <!--sidebar end-->
    <!-- **********************************************************************************************************************************************************
        MAIN CONTENT
        *********************************************************************************************************************************************************** -->
    <!--main content start-->
    <section id="main-content">
      <section class="wrapper">
        <!-- page start-->
        <div class="row mt">
          <div class="col-sm-3">
            <section class="panel">
              <div class="panel-body">
                <a href="mail_compose.php" class="btn btn-compose">
                  <i class="fa fa-pencil"></i>  Compose Mail
                  </a>
                <ul class="nav nav-pills nav-stacked mail-nav">
                  <li class="active"><a href="inbox.php"> <i class="fa fa-inbox"></i> Inbox  <span class="label label-theme pull-right inbox-notification">3</span></a></li>
                  <li><a href="#"> <i class="fa fa-envelope-o"></i> Send Mail</a></li>
                  <li><a href="#"> <i class="fa fa-exclamation-circle"></i> Important</a></li>
                  <li><a href="#"> <i class="fa fa-file-text-o"></i> Drafts <span class="label label-info pull-right inbox-notification">8</span></a></a>
                  </li>
                  <li><a href="#"> <i class="fa fa-trash-o"></i> Trash</a></li>
                </ul>
              </div>
          </div>
          <div class="col-sm-9">
            <section class="panel">
              <header class="panel-heading wht-bg">
                <h4 class="gen-case">
                    Compose Mail
                    <form action="#" class="pull-right mail-src-position">
                      <div class="input-append">
                        <input type="text" class="form-control " placeholder="Search Mail">
                      </div>
                    </form>
                  </h4>
              </header>
              <div class="panel-body">
                <div class="compose-btn pull-right">
                  <button class="btn btn-theme btn-sm"><i class="fa fa-check"></i> Send</button>
                  <button class="btn btn-sm"><i class="fa fa-times"></i> Discard</button>
                  <button class="btn btn-sm">Draft</button>
                </div>
                <div class="compose-mail">
                  <form role="form-horizontal" method="post">
                    <div class="form-group">
                      <label for="to" class="">To:</label>
                      <input type="text" tabindex="1" id="to" class="form-control">
                      <div class="compose-options">
                        <a onclick="$(this).hide(); $('#cc').parent().removeClass('hidden'); $('#cc').focus();" href="javascript:;">Cc</a>
                        <a onclick="$(this).hide(); $('#bcc').parent().removeClass('hidden'); $('#bcc').focus();" href="javascript:;">Bcc</a>
                      </div>
                    </div>
                    <div class="form-group hidden">
                      <label for="cc" class="">Cc:</label>
                      <input type="text" tabindex="2" id="cc" class="form-control">
                    </div>
                    <div class="form-group hidden">
                      <label for="bcc" class="">Bcc:</label>
                      <input type="text" tabindex="2" id="bcc" class="form-control">
                    </div>
                    <div class="form-group">
                      <label for="subject" class="">Subject:</label>
                      <input type="text" tabindex="1" id="subject" class="form-control">
                    </div>
                    <div class="compose-editor">
                      <textarea class="wysiphp5 form-control" rows="9"></textarea>
                      <input type="file" class="default">
                    </div>
                    <div class="compose-btn">
                      <button class="btn btn-theme btn-sm"><i class="fa fa-check"></i> Send</button>
                      <button class="btn btn-sm"><i class="fa fa-times"></i> Discard</button>
                      <button class="btn btn-sm">Draft</button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <!-- /wrapper -->
    </section>
    <!-- /MAIN CONTENT -->
    <!--main content end-->
    <!--footer start-->
    <footer class="site-footer">
      <div class="text-center">
      <p>Copyright &copy; 2020 - All Rights Reserved - <a href="#">Jasaan Misamis Oriental</a></p>

        <a href="mail_compose.php#" class="go-top">
          <i class="fa fa-angle-up"></i>
          </a>
      </div>
    </footer>
    <!--footer end-->
  </section>
  <!-- js placed at the end of the document so the pages load faster -->
  <script src="lib/jquery/jquery.min.js"></script>
  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
  <script class="include" type="text/javascript" src="lib/jquery.dcjqaccordion.2.7.js"></script>
  <script src="lib/jquery.scrollTo.min.js"></script>
  <script src="lib/jquery.nicescroll.js" type="text/javascript"></script>
  <!--common script for all pages-->
  <script src="lib/common-scripts.js"></script>
  <!--script for this page-->
  <script type="text/javascript" src="lib/bootstrap-wysiphp5/wysiphp5-0.3.0.js"></script>
  <script type="text/javascript" src="lib/bootstrap-wysiphp5/bootstrap-wysiphp5.js"></script>

  <script type="text/javascript">
    //wysiphp5 start

    $('.wysiphp5').wysiphp5();

    //wysiphp5 end
  </script>
</body>
</html>
