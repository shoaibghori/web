<?php
$main_link="http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$basepath=trim(basename($main_link).PHP_EOL);
?>


<!--woopra-->
	<?php include("inc/woopra.php");?>
<!--woopra-->



<?php

if($basepath=='index.php'){
	$basepath='index.php';
}
if($basepath=='about-us.php'){
	$basepath='about-us.php';
}
if($basepath=='services.php'){
	$basepath='services.php';
}


if($basepath=='website-design.php'){
	$basepath='services.php';
}

if($basepath=='website-devlopment.php'){
	$basepath='services.php';
}
if($basepath=='web-maintenance.php'){
	$basepath='services.php';
}
if($basepath=='web-hosting.php'){
	$basepath='services.php';
}
if($basepath=='domain-registration.php'){
	$basepath='services.php';
}
if($basepath=='graphic-design.php'){
	$basepath='services.php';
}
if($basepath=='profile-design.php'){
	$basepath='services.php';
}
if($basepath=='logo-design.php'){
	$basepath='services.php';
}
if($basepath=='e-broucher.php'){
	$basepath='services.php';
}
if($basepath=='business-card.php'){
	$basepath='services.php';
}
if($basepath=='seo.php'){
	$basepath='services.php';
}
if($basepath=='content-writing.php'){
	$basepath='services.php';
}
if($basepath=='email-marketing.php'){
	$basepath='services.php';
}

if($basepath=='portfolio.php'){
	$basepath='portfolio.php';
}
if($basepath=='blog.php'){
	$basepath='blog.php';
}
if($basepath=='graphic_design_blog.php'){
	$basepath='blog.php';
}
if($basepath=='contactus.php'){
	$basepath='contactus.php';
}

?>








	<header class="noFixMenu menu_right with_user_menu no_container_padding">
				<div class="topWrapFixed"></div>
				<div class="topWrap">
					<!--topbar-->
						<?php include("inc/topbar.php");?>
					<!--topbar-->
					<div class="mainmenu_area"  itemscope itemtype="http://www.exactwebs.com/" style="background:url(../images/header-bg.png);" >
						<div class="container with_logo_left">
							<div class="logo logo_left">
								<a href="index.php">
								<!--<img src="images/logonew.png" class="logo_main" alt="exactwebs">-->
									
									<img srcset=" images/logonew.png 4x,images/logonew.png 3x,images/logonew.png 2x,images/logonew.png 1x, 	src="images/logonew.png" class="logo_main" alt="exactwebs" style="width: 210px; height: 81px;">
																								  
																								  
									<img src="images/logonew.png" class="logo_fixed" alt="exactwebs">
									<span class="logo_slogan"></span>
								</a>
							</div>
						<div class="search" title="Open/close search form">
							<div class="searchForm">
								<form role="search" method="get" class="search-form" action="#">
									<button type="submit" class="searchSubmit" title="Start search">
										<span class="icoSearch"></span>
									</button>
									<input type="text" class="searchField" placeholder="Search &hellip;" value="" name="s" title="Search for:"/>
								</form>
							</div>
							<div class="ajaxSearchResults"></div>
						</div>
						<a href="#" class="openResponsiveMenu">Menu</a>
						<nav class="menuTopWrap topMenuStyleLine">
							<ul id="mainmenu" class="">
								<li class="menu-item <?php if($basepath=='index.php'){echo 'current-menu-item';}?> current_page_item menu-item-home">
									<a href="index.php">Home</a>
								</li>
								<li class="menu-item  <?php if($basepath=='about_us.php'){echo 'current-menu-item';}?> current_page_item menu-item-home">
									<a href="about_us.php">AboutUs</a>
								</li>
								<li class="menu-item menu-item-has-children columns custom_view_item <?php if($basepath=='services.php'){echo 'current-menu-item';}?>">
									<a title="Tools and Pages" href="services.php">Services</a>
									<ul class="menu-panel columns">
										<li>
											<ul class="custom-menu-style columns sub-menu">
												<li class="menu-item menu-item-has-children">
													
													<ul class="sub-menu">
														<li class="menu-item">
															<a href="website-design.php">Website Designing</a>
														</li>
														<li class="menu-item">
															<a href="website-devlopment.php">Website Development</a>
														</li>
														<li class="menu-item">
															<a href="web-maintenance.php">Web Maintenance</a>
														</li>
														<li class="menu-item">
															<a href="web-hosting.php">Web Hosting</a>
														</li>
														
														<li class="menu-item">
															<a href="domain-registration.php">Domain Registration</a>
														</li>
														
														<li class="menu-item">
															<a href="graphic-design.php">Graphics Designing</a>
														</li>
														<li class="menu-item">
															<a href="profile-design.php">Profile Designing</a>
														</li>
														<li class="menu-item">
															<a href="logo-design.php">Logo Designing</a>
														</li>
														<li class="menu-item">
															<a href="e-broucher.php">E-Brochure</a>
														</li>
														<li class="menu-item">
															<a href="business-card.php">Business Card</a>
														</li>
														<li class="menu-item">
															<a href="seo.php">Seo</a>
														</li>
														<li class="menu-item">
															<a href="content-writing.php">Content Writing</a>
														</li>
														<li class="menu-item">
															<a href="email-marketing.php">Emial Marketing</a>
														</li>

													</ul>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								
								
								<li class="menu-item  <?php if($basepath=='portfolio.php'){echo 'current-menu-item';}?> ">
													<a href="portfolio.php">Portfolio</a>
												</li>
								
								
								<li class="menu-item  <?php if($basepath=='blog.php'){echo 'current-menu-item';}?> ">
									<a href="blog.php">Blog</a>
								</li>
								<li class="menu-item <?php if($basepath=='contactus.php'){echo 'current-menu-item';}?> ">
									<a href="contactus.php">Contact us</a>
								</li>
							</ul>
						</nav>
						</div>
					</div>
				</div>
			</header>