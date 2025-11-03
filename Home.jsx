import React from 'react';
import './Home.css'; 


function Home() {
  return (
    <div>
      <div className="container">
        
        <header className="hero">
          <nav className="nav">
            <div className="logo">
              <img src="https://smpn1cibadak.sch.id/asset/img/logo_sekolah.png" alt="Logo" />
            </div>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#guru">Guru</a></li>
              <li><a href="#siswa">Siswa</a></li>
              <li><a href="#pendaftaran">Pendaftaran</a></li>
              <li><a href="#lampe">Lampe</a></li>
              <li><a href="#kontak">Kontak</a></li>
            </ul>
          </nav>
          <div className="motto">
            <h4>MOTTO</h4>
            <p>
              <strong>SMP N 1 Cibadak (Cerdas Beretika)</strong>
              Ceria, Empat, Rasional, Damai, Aktif, Sabar, Bersih, Elok, Tulus, Iman, Konsiste, Amanah.
            </p>
            <button className="btn">Contact us</button>
          </div>
        </header>
        
        <section className="welcome">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Fm97XGuvFk8sGyGdRMX-SUCE2xfYv98rwA&s" alt="Kepala Sekolah" className="head-img" />
          <div className="welcome-text">
            <h2>Sambutan Kepala Sekolah<br />SMP Negeri 1 Cibadak</h2>
            <p>
              Puji dan syukur mari kita panjatkan kehadirat Allah SWT, yang senantiasa dengan...
            </p>
            <button className="btn">Lihat Lanjut</button>
          </div>
        </section>
        
        <section className="profile-wrapper">
          <div className="profile-container">
            <div className="profile-left">
              <h2>Profil Sekolah</h2>
              <p>
                Di samping adalah profil sekolah kami secara keseluruhan dari mulai bagian depan hingga seluruh fasilitas yang terdapat disekolah kami kami akan ...
              </p>
              <button className="btn-primary">Lebih Lanjut</button>
            </div>
            <div className="profile-right">
              {cardData.map((card, idx) => (
                <div className="profile-card" key={idx}>
                  <div className="card-icon">{card.icon}</div>
                  <div className="card-title">{card.title}</div>
                  <div className="card-desc">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
    
        <section className="berita-agenda-section">
          <div className="berita-agenda-wrapper">
            <div className="berita-main">
              <div className="berita-header">
                <h2>Berita dan Agenda</h2>
                <input className="berita-search" placeholder="Search" />
              </div>
              <div className="berita-list">
                {berita.map((item, idx) => (
                  <div className="berita-item" key={idx}>
                    <img className="berita-img" src={item.img} alt={item.title} />
                    <div className="berita-info">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                      <span className="berita-date">{item.date}</span>
                    </div>
                    <span className="berita-arrow">&#8594;</span>
                  </div>
                ))}
              </div>
            </div>
            <aside className="agenda-sidebar">
              {agenda.map((ag, idx) => (
                <div className="agenda-item" key={idx}>
                  <img className="agenda-img" src={ag.img} alt={ag.title} />
                  <div>
                    <div className="agenda-date">{ag.date}</div>
                    <div className="agenda-title">{ag.title}</div>
                  </div>
                  <span className="agenda-arrow">&#8594;</span>
                </div>
              ))}
            </aside>
          </div>
        </section>
      </div>
      <div className="main-wrapper">
        <div className="gallery-section">
          <h2 className="gallery-title">Gallery</h2>
          <div className="gallery-grid">
            {images.map((src, idx) => (
              <img
                src={src }
                alt={`gallery-image-${idx + 1}`}
                className="gallery-img"
                key={idx}
              />
            ))}
          </div>
          <button className="gallery-button">Lebih Lanjut</button>
        </div>
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-logo">
              <img src="https://smpn1cibadak.sch.id/asset/img/logo_sekolah.png" alt="School Logo" className="footer-logo-img" />
              <address>
                Jl. Simpang No 123, Cibadak, Obadak, Sukabumi, Jawa Barat 43215<br />
                Indonesia, 0266361383<br />
                <a href="mailto:info@smpn1cibadak.sch.id">info@smpn1cibadak.sch.id</a><br />
                <a href="mailto:smpn1cbd_kab@yahoo.co.id">smpn1cbd_kab@yahoo.co.id</a>
              </address>
            </div>
            <div className="footer-links">
              <div>
                <div className="footer-heading">Jelajah</div>
                <ul>
                  <li>Sambutan</li>
                  <li>Profil Sekolah</li>
                  <li>Berita</li>
                  <li>Galeri</li>
                </ul>
              </div>
              <div>
                <div className="footer-heading">Halaman Umum</div>
                <ul>
                  <li>Data Guru</li>
                  <li>PPDB SMPN 1 Cibadak</li>
                  <li>Panduan PPDB</li>
                  <li>Lokasi</li>
                  <li>Kontak</li>
                </ul>
              </div>
              <div>
                <div className="footer-heading">Media Sosial</div>
                <div className="footer-social">
                  <a href="https://twitter.com/"><i className="fa fa-twitter"><img src="https://raknexcent.netlify.app/assets/twitter-918f0713.svg" alt="twitter" /></i></a>
                  <a href="https://facebook.com/"><i className="fa fa-facebook"><img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAbwoox.img" alt="facebook" /></i></a>
                  <a href="https://instagram.com/"><i className="fa fa-instagram"><img src="https://raknexcent.netlify.app/assets/instagram-98011fa7.svg" alt="instagram" /></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            Copyright © SMP Negeri 1 Cibadak. All right Reserved. Hosting by IDcloudHost.
          </div>
        </footer>
      </div>
    </div>
  );
}

const cardData = [
  {
    title: 'Fasilitas',
    desc: 'Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.',
    icon: '🏫',
  },
  {
    title: 'Lokasi',
    desc: 'Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.',
    icon: '📍',
  },
  {
    title: 'Sejarah',
    desc: 'Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.',
    icon: '📜',
  },
  {
    title: 'Prestasi',
    desc: 'Lorem ipsum dolor sit amet adipiscing aqua lorem ipsum.',
    icon: '🏅',
  },
];

const berita = [
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=400&q=80",
    title: "Belajar di Rumah",
    desc: "Lorem ipsum dolor sit amet, adipiscing amet adipiscing amet.",
    date: "20 Juni",
  },
  {
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?fit=crop&w=400&q=80",
    title: "Kegiatan Belajar mengajar di Rumah",
    desc: "Lorem ipsum dolor sit amet, adipiscing ipsum dolor sit amet.",
    date: "20 Juni",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=400&q=80",
    title: "Kegiatan Belajar mengajar di Rumah",
    desc: "Lorem ipsum dolor sit amet, adipiscing ipsum dolor sit amet.",
    date: "20 Juni",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMkTWo3wHAsWJ3anvrOTcZJUFVnW23Xun8g&s",
    title: "Kegiatan Pembelajaran Daring",
    desc: "Lorem ipsum dolor sit amet, adipiscing ipsum dolor sit amet.",
    date: "20 Juni",
  },
];

const agenda = [
  {
    img: "https://smpn1cibadak.sch.id/asset/img/logo_sekolah.png",
    date: "01 - 06 - 2021",
    title: "Deklarasi Sekolah Ramah Anak",
  },
  {
    img: "https://smpn1cibadak.sch.id/asset/img/logo_sekolah.png",
    date: "01 - 06 - 2021",
    title: "Pembagian Ijazah",
  },
  {
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?fit=crop&w=400&q=80",
    date: "01 - 06 - 2021",
    title: "Pemberitahuan PPDB 2020/2021",
  },
];

const images = [
  'https://cdn.timesmedia.co.id/images/2020/10/08/Belajar-di-rumah.jpg',
  'https://tse4.mm.bing.net/th/id/OIP.lVsCjpYCss2GvyaQ0OSigwHaFk?rs=1&pid=ImgDetMain&o=7&rm=3',
  'https://th.bing.com/th/id/OIP.S_Dhj6k4S3dwfR31b0_I7gHaE8?&rs=1&pid=ImgDetMain&o=7&rm=3',
  'https://images.unsplash.com/photo-1503676382389-4809596d5290?fit=crop&w=400&q=80',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMkTWo3wHAsWJ3anvrOTcZJUFVnW23Xun8g&s',
  'https://static.wixstatic.com/media/e8cfd4_fdcbc8b2ffb945609d445603b972a2a8~mv2.png/v1/fit/w_2500,h_1330,al_c/e8cfd4_fdcbc8b2ffb945609d445603b972a2a8~mv2.png',
];

export default Home;
