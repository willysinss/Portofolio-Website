/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL ===============*/
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const header = document.getElementById('header')
const parallaxItems = [
    { el: document.querySelector('.home__blob'), speed: 0.15 },
    { el: document.querySelector('.about__blob'), speed: -0.12 }
].filter(item => item.el)

let ticking = false
const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
        const y = window.scrollY
        y >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
        if (!reduceMotion) {
            for (const { el, speed } of parallaxItems) {
                el.style.transform = `translate3d(0, ${y * speed}px, 0)`
            }
        }
        ticking = false
    })
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

/*=============== SCROLL REVEAL ===============*/
if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('reveal-visible', entry.isIntersecting)
        })
    }, { threshold: 0.15 })

    revealEls.forEach(el => io.observe(el))
} else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('reveal-visible'))
}

/*=============== PARTICLE BACKGROUND (tsParticles v4) ===============*/
if (!reduceMotion) {
    const particleOptions = {
        fullScreen: { enable: false },
        fpsLimit: 60,
        background: { color: 'transparent' },
        particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: ['#0097B2', '#20c0dc', '#1ba5bd'] },
            shape: { type: 'circle' },
            opacity: { value: { min: 0.55, max: 0.95 } },
            size: { value: { min: 2, max: 5 } },
            links: { enable: true, distance: 130, color: '#0097B2', opacity: 0.5, width: 1 },
            move: { enable: true, speed: 1.4, direction: 'none', random: true, straight: false, outModes: { default: 'out' } }
        },
        interactivity: {
            detectOn: 'window',
            events: {
                onHover: { enable: true, mode: ['grab', 'attract'] },
                resize: { enable: true }
            },
            modes: {
                grab: { distance: 180, links: { opacity: 0.7 } },
                attract: { distance: 200, rotate: { x: 600, y: 1200 } }
            }
        },
        detectRetina: true
    }
    let tries = 0
    const initParticles = () => {
        if (window.tsParticles && window.loadSlim) {
            window.loadSlim(window.tsParticles)
                .then(() => window.tsParticles.load({ id: 'tsparticles', options: particleOptions }))
                .catch(() => {})
        } else if (tries++ < 120) {
            setTimeout(initParticles, 120)
        }
    }
    initParticles()
}

/*=============== CONTACT FORM (EmailJS) ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_d3psfpo', 'template_8gaj7n6', '#contact-form', 'wgaAlEmLwQYo9EXDW')
        .then(()=>{
            contactMessage.textContent = 'Message Sent Successfully'

            setTimeout(()=>{
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()

        }, ()=>{
            contactMessage.textContent = 'Message Not Sent (service error)'
        })
}

contactForm.addEventListener('submit', sendEmail)
