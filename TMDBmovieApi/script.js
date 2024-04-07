const apiKey = '2a1ee7802ad8396139751e395b110495'
let year = 2024;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc&year=${year}`

const content = document.getElementById('content')
const urlPosterMovie = 'https://image.tmdb.org/t/p/w500/'

const dropDown = document.getElementById('years')

async function displayMovies(url) {
   // ทำการเรียก API ดึงข้อมูลหนัง
   const res = await fetch(url);
   const movies = await res.json(); 

   // ลบเนื้อหาเก่าทั้งหมดที่อยู่ใน content
   while(content.firstChild){
      content.removeChild(content.firstChild)
   }

   // วนลูปเพื่อสร้าง element และแสดงข้อมูลหนัง
   movies.results.forEach(data => {
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie')
      const title = document.createElement('h2');
      const poster = document.createElement('img');
      title.innerHTML = `${data.title.substring(0, 24)}`;
      poster.src = `${urlPosterMovie}${data.poster_path}`;
      movieEl.appendChild(title);
      movieEl.appendChild(poster);
      content.appendChild(movieEl);
   });

   console.log(movies);
}

// เพิ่ม Event Listener สำหรับตรงที่ให้ผู้ใช้เลือกปี
dropDown.addEventListener('change', () => {
   // เมื่อผู้ใช้เลือกปีใหม่ให้อัปเดตค่า year และเรียกฟังก์ชัน displayMovies ใหม่
   year = dropDown.value
   const updateUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc&year=${year}`
   displayMovies(updateUrl)
})

// เรียกใช้งานฟังก์ชัน displayMovies เพื่อแสดงหนังตอนโหลดหน้า
displayMovies(url);
