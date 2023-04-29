
const contents = document.getElementById('konten');

var hitung_judul = judul.length;
for (var i = 0; i < judul.length; i++) {

    contents.innerHTML += `<li>  <a href="` + link[i] + `">
          <div class="blog-card">
          <figure class="card-banner img-holder" style="--width: 400; --height: 290;">
              <img src="` + gambar[i] + `" width="400" height="290" loading="lazy"
              alt="Shooter Action Video" class="img-cover">
              </figure>
              <div class="card-content">
              <ul class="card-meta-list">
              <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>
              <a href="/porto" class="item-text">Admin</a>
              </li>
              <li class="card-meta-item">
              <ion-icon name="calendar-outline"></ion-icon>
                  <time datetime="2022-09-19" class="item-text">`+ tanggal[i] + `</time>
                </li>
              </ul>
              <h3 class="card-title" style="text-shadow:2px 2px 1px var(--marigold_75);"> `+ judul[i] + ` </h3>
              <div style="display: flex;">
                <a href="`+ link[i] + `" class="card-link skewBg">
                  <span class="span " style="padding: 10px;">Read More </span>
                  <ion-icon name="caret-forward"></ion-icon>
                </a>
              </div>
              </div>
              </div>
              </a>
        </li>`
}

const otherposts = document.getElementById('otherpost');

var hitung_judul = judul.length;
for (var i = 0; i < judul.length; i++) {

    otherposts.innerHTML += `<li>  <a href="` + link[i] + `">
          <div class="blog-card">
          <figure class="card-banner img-holder" style="--width: 400; --height: 290;">
              <img src="` + gambar[i] + `" width="400" height="290" loading="lazy"
              alt="Shooter Action Video" class="img-cover">
              </figure>
              <div class="card-content">
              <ul class="card-meta-list">
              <li class="card-meta-item">
              <ion-icon name="person-outline"></ion-icon>
              <a href="/porto" class="item-text">Admin</a>
              </li>
              <li class="card-meta-item">
              <ion-icon name="calendar-outline"></ion-icon>
                  <time datetime="2022-09-19" class="item-text">`+ tanggal[i] + `</time>
                </li>
              </ul>
              <h3 class="card-title" style="text-shadow:2px 2px 1px var(--marigold_75);"> `+ judul[i] + ` </h3>
              <div style="display: flex;">
                <a href="`+ link[i] + `" class="card-link skewBg">
                  <span class="span " style="padding: 10px;">Read More </span>
                  <ion-icon name="caret-forward"></ion-icon>
                </a>
              </div>
              </div>
              </div>
              </a>
        </li>`
}


const newstitle = document.getElementById('news');

var hitung_judul = judul.length;
for (var i = 0; i < judul.length; i++) {

    newstitle.innerHTML += `<i onclick="window.href('` + link[i] + `')">/ / ` + judul[i] + `</i>`
}