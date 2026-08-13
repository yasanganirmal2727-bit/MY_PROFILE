document.addEventListener('DOMContentLoaded', () => {
  const navtoggle = document.querySelector('.navtoggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Mobile Menu toggle
  if (navtoggle && mobileNav) {
    navtoggle.addEventListener('click', () => {
      mobileNav.classList.add('open');
      navtoggle.setAttribute('aria-expanded', 'true');
    });
  }

  if (mobileNavClose && mobileNav) {
    mobileNavClose.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      if (navtoggle) navtoggle.setAttribute('aria-expanded', 'false');
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav) mobileNav.classList.remove('open');
      if (navtoggle) navtoggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Hero background video — make autoplay reliable across browsers/devices.
  // Some mobile browsers (and data-saver modes) block the initial autoplay
  // attempt, which is why the video can appear missing once the site is
  // hosted and opened on another device. This retries play() and resumes
  // on the first user interaction / when the tab becomes visible again.
  const heroVideo = document.querySelector('.hero-bg video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;

    const tryPlayHeroVideo = () => {
      const playPromise = heroVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const resumeOnInteraction = () => heroVideo.play().catch(() => {});
          ['click', 'touchstart', 'scroll'].forEach(evt => {
            document.addEventListener(evt, resumeOnInteraction, { once: true, passive: true });
          });
        });
      }
    };

    tryPlayHeroVideo();
    window.addEventListener('load', tryPlayHeroVideo);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && heroVideo.paused) tryPlayHeroVideo();
    });
    heroVideo.addEventListener('error', () => {
      console.warn('Hero background video failed to load. Double-check that "video/hero-bg.mp4" exists on the server with that exact file name and case.');
    });
  }

  // Project video galleries (e.g. Glow Natural) — styled play cover + switcher
  document.querySelectorAll('.video-gallery').forEach(gallery => {
    const thumbs = gallery.querySelectorAll('.video-thumb');
    const switchBtns = gallery.querySelectorAll('.video-switch-btn');

    thumbs.forEach(thumb => {
      const video = thumb.querySelector('video');
      const cover = thumb.querySelector('.video-cover');
      const playBtn = thumb.querySelector('.video-play-btn');
      if (!video || !cover || !playBtn) return;

      playBtn.addEventListener('click', () => {
        video.play();
        cover.classList.add('hidden');
      });
      video.addEventListener('pause', () => cover.classList.remove('hidden'));
      video.addEventListener('ended', () => cover.classList.remove('hidden'));
    });

    switchBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        switchBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        thumbs.forEach(thumb => {
          const video = thumb.querySelector('video');
          const cover = thumb.querySelector('.video-cover');
          if (thumb.getAttribute('data-video-index') === target) {
            thumb.hidden = false;
          } else {
            thumb.hidden = true;
            if (video) video.pause();
            if (cover) cover.classList.remove('hidden');
          }
        });
      });
    });
  });

  // Intersection Observer for scroll animations
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});