---
layout: page
title: Tiệm khóa Tiến Phát
tagline: Sửa khóa Buôn Ma Thuột
description: Kinh doanh khóa, chìa khóa và các vật tư ngành khóa.
---
{% include JB/setup %}

<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
    <li data-target="#carousel-example-generic" data-slide-to="4"></li>
  </ol>
 
<!-- Wrapper for slides -->
<div class="carousel-inner">
    <div class="item active">
      <img src="http://placehold.it/1200x400" alt="...">
      <div class="carousel-caption">
          <h3>Dịch vụ sửa khóa chuyên nghiệp</h3>
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/1200x400" alt="...">
      <div class="carousel-caption">
          <h3>Làm chìa khóa Ô tô</h3>
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/1200x400" alt="...">
      <div class="carousel-caption">
          <h3>Khóa chống trộm xe máy</h3>
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/1200x400" alt="...">
      <div class="carousel-caption">
          <h3>Khóa dân dụng, khóa văn phòng công ty</h3>
      </div>
    </div>
    <div class="item">
      <img src="http://placehold.it/1200x400" alt="...">
      <div class="carousel-caption">
          <h3>Mở két sắt</h3>
      </div>
    </div>
  </div>
 
<!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div> <!-- Carousel -->

<div>
	<h3>Bài viết</h3>
	<ul class="posts">
		{% for post in site.posts %}
    	<li><span>{{ post.date | date: "%Y-%m-%d" }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  		{% endfor %}
  	</ul>
</div>