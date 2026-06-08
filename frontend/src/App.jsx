import React from 'react'
import SiteHeader from './components/layout/SiteHeader'
import './App.css'
import './styles/responsive.css'


// Static slides configuration matching the uploaded images
const slides = [
  {
    image: '/hero-acceil.png',
    title: 'DJOMA TECH',
    subtitle: 'INNOVATION AU SERVICE DE VOTRE RÉUSSITE',
    btnText: 'DJOMA TECH',
    position: 'center right',
  },
  {
    image: '/hero2.jpg',
    title: 'EXPERT TECHNIQUE',
    subtitle: 'CONCEVOIR LE FUTUR AVEC DES TECHNOLOGIES DE POINTE',
    btnText: 'DJOMA TECH',
    position: 'center',
  },
  {
    image: '/hero-dernier.png',
    title: 'SOLUTIONS DIGITALES',
    subtitle: 'TRANSFORMER VOS AMBITIONS EN SUCCÈS NUMÉRIQUE',
    btnText: 'DJOMA TECH',
    position: 'center',
  },
]

const services = [
  {
    image: '/service-web-app.png',
    title: 'Développement de Sites Web & Applications Mobiles',
    description:
      'Transformez vos idées en solutions numériques performantes avec Djoma-Tech. Nous concevons des sites web modernes, rapides et sécurisés ainsi que des applications mobiles innovantes qui offrent une expérience utilisateur exceptionnelle. Notre objectif est de vous aider à attirer plus de clients, renforcer votre crédibilité et accélérer votre croissance grâce à des technologies de pointe.',
    tagline: 'Votre vision. Notre expertise. Un impact durable.',
  },
  {
    image: '/service-design.png',
    title: 'Design Graphique & Infographie',
    description:
      "Votre image de marque mérite l'excellence. Chez Djoma-Tech, nous créons des identités visuelles uniques, des supports marketing professionnels et des designs percutants qui captivent instantanément votre audience. Chaque création est pensée pour valoriser votre entreprise, renforcer votre notoriété et vous démarquer de la concurrence.",
    tagline: 'Nous transformons vos idées en visuels qui inspirent, convainquent et marquent les esprits.',
  },
  {
    image: '/service-marketing.png',
    title: 'Marketing Digital & Développement de Marque',
    description:
      "Dominez votre marché grâce à des stratégies digitales intelligentes et orientées résultats. Nous vous aidons à accroître votre visibilité, développer votre communauté, générer des prospects qualifiés et augmenter vos ventes. De la gestion des réseaux sociaux à la publicité en ligne, en passant par la monétisation et la certification professionnelle, nous mettons en place des solutions efficaces pour faire rayonner votre marque.",
    tagline: "Plus de visibilité. Plus d'engagement. Plus de résultats.",
  },
  {
    image: '/service-maintenance.png',
    title: 'Maintenance Informatique & Solutions Logicielles',
    description:
      'Assurez la performance et la sécurité de votre infrastructure informatique avec nos services professionnels. Nous proposons la maintenance des systèmes, l\'installation de logiciels certifiés, la protection des données, l\'optimisation des performances et l\'assistance technique. Nos solutions fiables garantissent la continuité de vos activités et la productivité de votre entreprise.',
    tagline: 'La technologie doit être un moteur de croissance, jamais un frein.',
  },
  {
    image: '/service-formation.png',
    title: 'Formation Professionnelle',
    description:
      'Préparez-vous aux métiers de demain avec nos formations pratiques et certifiantes. Nous accompagnons étudiants, professionnels, entrepreneurs et entreprises dans le développement de compétences stratégiques en informatique, marketing digital, bureautique, développement web, design graphique, intelligence artificielle et entrepreneuriat. Nos programmes sont conçus pour répondre aux exigences du marché et favoriser une insertion professionnelle rapide.',
    tagline: 'Apprenez aujourd\'hui. Innovez demain. Réussissez pour toujours.',
  },
]

const whyChooseUs = [
  'Expertise et innovation technologique',
  'Solutions personnalisées et évolutives',
  'Accompagnement professionnel de bout en bout',
  'Qualité, sécurité et performance garanties',
  'Une équipe passionnée par votre réussite',
]

const values = [
  {
    image: '/value-accessibilite.png',
    title: 'Accessibilité',
    description:
      'Nous croyons que la technologie doit être accessible à tous. C\'est pourquoi nous développons des solutions numériques inclusives, intuitives et adaptées à tous les profils d\'utilisateurs. Notre mission est de réduire les barrières technologiques et de permettre à chacun de bénéficier des opportunités offertes par le digital.',
    tagline: 'Rendre le numérique simple, accessible et utile pour tous.',
  },
  {
    image: '/value-disponibilite.png',
    title: 'Disponibilité',
    description:
      'Dans un monde connecté en permanence, votre activité ne s\'arrête jamais, et nous non plus. Notre équipe reste disponible, réactive et engagée pour vous accompagner à chaque étape de votre croissance digitale. Nous assurons un suivi continu et un support efficace afin de garantir votre sérénité et la performance de vos projets.',
    tagline: 'Votre succès est notre priorité, 24 heures sur 24, 7 jours sur 7.',
  },
  {
    image: '/value-creativite.png',
    title: 'Créativité',
    description:
      'L\'innovation naît de la créativité. Chez Djoma-Tech, nous repoussons constamment les limites du possible pour imaginer des solutions uniques, modernes et adaptées à vos objectifs. Chaque projet est une nouvelle opportunité de créer, d\'innover et de faire la différence.',
    tagline: 'Transformer les idées audacieuses en réalisations exceptionnelles.',
  },
]

const objectifGoals = [
  'Accélérer la transformation digitale des entreprises.',
  'Créer des expériences numériques mémorables et performantes.',
  'Favoriser l\'innovation et la compétitivité.',
  'Générer de la valeur durable pour nos clients.',
  'Devenir un partenaire stratégique de confiance.',
]

const skillBars = [
  { label: 'DÉVELOPPEMENT DE SITE WEB', percent: 70 },
  { label: 'INFOGRAPHIE & DESIGN', percent: 60 },
  { label: 'MARKETING DIGITAL', percent: 75 },
]


const CONTACT_EMAIL = 'djomatech777@gmail.com'

const initialContactForm = {
  lastName: '',
  firstName: '',
  email: '',
  message: '',
}

function App() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [contactForm, setContactForm] = React.useState(initialContactForm)
  const [contactStatus, setContactStatus] = React.useState(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({ ...prev, [name]: value }))
    if (contactStatus) setContactStatus(null)
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setContactStatus({ type: 'loading', message: 'Envoi en cours...' })

    const fullName = `${contactForm.firstName} ${contactForm.lastName}`.trim()

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          email: contactForm.email,
          message: contactForm.message,
          _subject: `[Djoma-Tech] Nouveau message de ${fullName}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.message || 'Erreur lors de l\'envoi')
      }

      setContactStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès. Nous vous répondrons très bientôt.',
      })
      setContactForm(initialContactForm)
    } catch {
      setContactStatus({
        type: 'error',
        message: 'Impossible d\'envoyer le message. Veuillez réessayer ou nous contacter par email.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const navItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Notre Équipe', href: '#equipe' },
    { label: 'À Propos', href: '#a-propos' },
    { label: 'Contact', href: '#contact' },
  ]

  const stats = [
    { value: '+150', label: 'Projets' },
    { value: '+200', label: 'Clients' },
    { value: '+98', label: 'Satisfaction clients' },
    { value: '2 ans', label: "d'expérience" },
  ]

  const testimonials = [
    {
      quote: "DJOMA TECH a transformé notre présence digitale. L’équipe a su comprendre nos enjeux pour livrer une plateforme web ultra-performante et un design haut de gamme.",
      author: "Keita Fode",
      role: "Économiste & Comptable, GS Djoma Savoir",
      initials: "KF"
    },
    {
      quote: "Un accompagnement exceptionnel, une équipe très réactive et à l’écoute. Les résultats en termes de trafic et d’engagement clients sont déjà visibles.",
      author: "Nanssabory Keita",
      role: "Biologiste, Laboratoire",
      initials: "NK"
    },
  ]

  return (
    <div className="djoma-shell" id="accueil">
      <SiteHeader navItems={navItems} />

      {/* 3. HERO SECTION */}
      <main className="hero-section">
        {/* Full-width Background Slider */}
        <div className="hero-background-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-bg-slide-img${index === 0 ? ' hero-bg-slide-img--banner' : ''} ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.position || 'center',
              }}
            />
          ))}
          <div className="hero-overlay" />
          <div className="hero-overlay-gradient" aria-hidden="true" />
        </div>

        {/* Content Box Overlays */}
        <div className="hero-section__content" key={currentSlide}>
          <div className="hero-title-box hero-animate-item hero-animate-item--1">
            <h1 className="slide-title">&ldquo;{slides[currentSlide].title}&rdquo;</h1>
          </div>
          <div className="hero-subtitle-box hero-animate-item hero-animate-item--2">
            <h2 className="slide-subtitle">{slides[currentSlide].subtitle}</h2>
          </div>
          <div className="hero-actions-box hero-animate-item hero-animate-item--3">
            <a className="btn-djomatech" href="#contact">
              {slides[currentSlide].btnText}
            </a>
          </div>
        </div>

        {/* Slider Navigation Arrows on the edges */}
        <button className="slider-arrow prev" onClick={prevSlide} aria-label="Slide précédente">
          ‹
        </button>
        <button className="slider-arrow next" onClick={nextSlide} aria-label="Slide suivante">
          ›
        </button>

        {/* Social Media icons in the top right corner of the hero image */}
        <div className="hero-social-sidebar">
          <a href="https://www.facebook.com/share/1EJAC7SQaS/" className="hero-social-icon facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/djoma-tech/" className="hero-social-icon linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

        {/* Small Slider Dots at the bottom center */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div>
      </main>

      {/* 4. INTRO AGENCY SECTION */}
      <section className="intro-agency-section">
        <div className="intro-agency-decor intro-agency-decor--left" aria-hidden="true" />
        <div className="intro-agency-decor intro-agency-decor--right" aria-hidden="true" />
        <div className="intro-agency-square" aria-hidden="true" />

        <div className="intro-agency-scroll" aria-hidden="true">
          <span className="intro-agency-scroll__line" />
          <span className="intro-agency-scroll__icon">↓</span>
        </div>

        <div className="intro-agency-content">
          <div className="section-heading section-heading--intro intro-agency-title-wrap">
            <h2 className="section-heading__title">
              Djoma-Tech : L&apos;Innovation Digitale au Service de Votre Réussite
            </h2>
            <div className="section-heading__accent" aria-hidden="true">
              <span className="section-heading__accent-line" />
              <span className="section-heading__accent-mark" />
              <span className="section-heading__accent-line" />
            </div>
          </div>
          <p className="intro-agency-text">
            Chez Djoma-Tech, nous ne nous contentons pas de suivre l&apos;évolution du numérique, nous la créons. Notre mission est d&apos;accompagner les entreprises, les entrepreneurs et les organisations dans leur transformation digitale grâce à des solutions innovantes, performantes et adaptées aux défis d&apos;aujourd&apos;hui.
          </p>
          <p className="intro-agency-text">
            Nous combinons expertise technologique, créativité et stratégie pour concevoir des expériences digitales qui génèrent de la croissance, renforcent votre image de marque et accélèrent votre développement. Que ce soit pour la création de sites web, le développement d&apos;applications, le marketing digital, le design graphique ou les solutions technologiques sur mesure, nous transformons vos idées en résultats concrets.
          </p>
          <p className="intro-agency-text">
            Avec Djoma-Tech, vous bénéficiez d&apos;un partenaire engagé, ambitieux et tourné vers l&apos;avenir. Chaque projet est une opportunité de repousser les limites, d&apos;innover et de bâtir ensemble un avenir numérique plus performant.
          </p>
          <p className="intro-agency-tagline">
            Djoma-Tech — Construisons aujourd&apos;hui les solutions numériques de demain.
          </p>
          <div className="intro-agency-actions">
            <a className="btn-djomatech" href="#realisations">
              NOS REALISATIONS &raquo;
            </a>
            <a className="btn-djomatech btn-djomatech--outline" href="#contact">
              NOUS CONTACTER &raquo;
            </a>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="services-section" id="services">
        <div className="services-header">
          <div className="section-heading">
            <h2 className="section-heading__title">NOS SERVICES</h2>
            <div className="section-heading__accent" aria-hidden="true">
              <span className="section-heading__accent-line" />
              <span className="section-heading__accent-mark" />
              <span className="section-heading__accent-line" />
            </div>
          </div>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <div className="service-card__image">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <p className="service-card__tagline">{service.tagline}</p>
            </article>
          ))}
        </div>

        <div className="services-why">
          <div className="section-heading section-heading--sub section-heading--sentence services-why__heading">
            <h3 className="section-heading__title">Pourquoi Choisir Djoma-Tech ?</h3>
            <div className="section-heading__accent" aria-hidden="true">
              <span className="section-heading__accent-line" />
              <span className="section-heading__accent-mark" />
              <span className="section-heading__accent-line" />
            </div>
          </div>
          <ul className="services-why__list">
            {whyChooseUs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="services-why__closing">
            <strong>Djoma-Tech</strong>
            <p>L&apos;innovation numérique qui transforme vos ambitions en succès.</p>
          </div>
        </div>
      </section>

      {/* 5. STATS SECTION */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="stats-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VALUES SECTION */}
      <section className="values-section" id="a-propos">
        <div className="values-header">
          <div className="section-heading">
            <h2 className="section-heading__title">NOS DIFFÉRENTES VALEURS</h2>
            <div className="section-heading__accent" aria-hidden="true">
              <span className="section-heading__accent-line" />
              <span className="section-heading__accent-mark" />
              <span className="section-heading__accent-line" />
            </div>
          </div>
        </div>

        <div className="values-intro">
          <p>
            Chez Djoma-Tech, nos valeurs ne sont pas de simples principes : elles constituent le fondement de chaque projet, de chaque innovation et de chaque relation que nous construisons avec nos clients. Nous croyons en la puissance de la technologie pour transformer les idées en opportunités et les ambitions en réussites durables.
          </p>
          <p>
            Notre culture repose sur l&apos;innovation, l&apos;excellence, la créativité, la transparence et l&apos;engagement. Nous travaillons avec passion pour concevoir des solutions digitales performantes qui créent de la valeur et génèrent un impact réel.
          </p>
        </div>

        <div className="values-scroll-icon" aria-hidden="true">↓</div>

        <div className="values-grid">
          {values.map((value) => (
            <article key={value.title} className="value-card">
              <div className="value-card__icon">
                <img src={value.image} alt={value.title} loading="lazy" />
              </div>
              <h3 className="value-card__title">{value.title}</h3>
              <p className="value-card__desc">{value.description}</p>
              <p className="value-card__tagline">{value.tagline}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 7. OBJECTIF SECTION */}
      <section className="objectif-section">
        <div className="objectif-header">
          <div className="values-scroll-icon" aria-hidden="true">↓</div>
          <div className="section-heading section-heading--compact">
            <h2 className="section-heading__title">NOTRE OBJECTIF</h2>
            <div className="section-heading__accent" aria-hidden="true">
              <span className="section-heading__accent-line" />
              <span className="section-heading__accent-mark" />
              <span className="section-heading__accent-line" />
            </div>
          </div>
        </div>

        <div className="objectif-container">
          <div className="objectif-visual">
            <img src="/objectif-team.png" alt="Équipe Djoma-Tech" loading="lazy" />
          </div>

          <div className="objectif-content">
            <p>
              Notre ambition est de devenir un acteur de référence dans la transformation digitale en Afrique et au-delà. Nous avons pour mission d&apos;accompagner les entreprises, les entrepreneurs et les organisations dans leur évolution numérique en leur proposant des solutions innovantes, performantes et durables.
            </p>
            <p>
              Nous ne nous contentons pas de créer des sites web, des applications ou des stratégies digitales ; nous construisons des opportunités de croissance, renforçons la compétitivité de nos clients et contribuons à leur succès à long terme.
            </p>
            <p className="objectif-content__lead">
              À travers l&apos;innovation, l&apos;excellence et l&apos;accompagnement personnalisé, nous visons à :
            </p>
            <ul className="objectif-goals">
              {objectifGoals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
            <div className="objectif-closing">
              <strong>Djoma-Tech</strong>
              <p>Innover aujourd&apos;hui, transformer demain, réussir ensemble.</p>
            </div>
            <a className="btn-djomatech btn-djomatech--outline objectif-cta" href="#contact">
              Nous Contacter
            </a>
          </div>
        </div>
      </section>

      {/* 8. REALISATIONS SECTION */}
      <section className="realisations-section" id="realisations">
        <div className="realisations-header">
          <div className="section-heading">
            <h2 className="section-heading__title">NOS RÉALISATIONS</h2>
            <div className="section-heading__accent" aria-hidden="true">
              <span className="section-heading__accent-line" />
              <span className="section-heading__accent-mark" />
              <span className="section-heading__accent-line" />
            </div>
          </div>
        </div>

        <div className="realisations-container">
          <div className="realisations-visual">
            <img src="/realisations.png" alt="Réalisations Djoma-Tech" loading="lazy" />
          </div>

          <div className="realisations-content">
            <p>
              Chez <strong className="founder-highlight--brand">Djoma-Tech</strong>, chaque projet est une démonstration de notre expertise, de notre créativité et de notre engagement envers l&apos;excellence. À travers nos solutions web, applications mobiles, designs graphiques et stratégies digitales, nous aidons nos clients à atteindre leurs objectifs et à accélérer leur croissance.
            </p>
            <p>
              Nos réalisations témoignent de notre capacité à transformer les idées en résultats concrets, en proposant des solutions innovantes, performantes et adaptées aux besoins de chaque client.
            </p>
            <p className="realisations-tagline">
              <strong>Djoma-Tech : des projets réussis, des clients satisfaits et une vision tournée vers l&apos;avenir.</strong>
            </p>
            <a className="btn-djomatech realisations-cta" href="#contact">
              Démarrer un projet &raquo;
            </a>
          </div>
        </div>
      </section>

      {/* 9. FOUNDER SECTION */}
      <section className="founder-section" id="equipe">
        <div className="founder-header">
          <div className="section-heading">
            <h2 className="section-heading__title">MOT DU FONDATEUR</h2>
            <div className="section-heading__accent" aria-hidden="true">
              <span className="section-heading__accent-line" />
              <span className="section-heading__accent-mark" />
              <span className="section-heading__accent-line" />
            </div>
          </div>
        </div>

        <div className="founder-container">
          <div className="founder-content">
            <p className="founder-greeting">
              Bonjour et bienvenue chez <strong className="founder-highlight--brand">Djoma-Tech</strong>,
            </p>
            <p>
              Je suis <strong className="founder-highlight--name">Billy Nankouman Keita</strong>, fondateur et Directeur Général de <strong className="founder-highlight--brand">Djoma-Tech</strong>, une entreprise spécialisée dans les solutions numériques, l&apos;innovation technologique et la transformation digitale.
            </p>
            <p>
              Mon parcours est celui d&apos;un jeune entrepreneur animé par une passion profonde pour la technologie et l&apos;innovation. Dès mes débuts, j&apos;ai compris que le numérique représentait bien plus qu&apos;un simple outil : c&apos;est un puissant levier capable de transformer les entreprises, créer des opportunités et contribuer au développement de notre société.
            </p>
            <p>
              Comme tout entrepreneur, j&apos;ai dû faire face à de nombreux défis. Les contraintes financières, le manque de ressources et les obstacles du quotidien auraient pu freiner mes ambitions. Pourtant, chaque difficulté est devenue une source d&apos;apprentissage, chaque échec une leçon, et chaque défi une occasion de grandir.
            </p>
            <p>
              Porté par une vision claire et une détermination sans faille, j&apos;ai consacré des années à développer mes compétences dans les domaines du développement web, des technologies numériques, du design, du marketing digital et de l&apos;innovation. Cette passion a donné naissance à <strong className="founder-highlight--brand">Djoma-Tech</strong>, avec une mission simple mais ambitieuse : accompagner les entreprises, les entrepreneurs et les organisations dans leur réussite numérique.
            </p>
            <p>
              Aujourd&apos;hui, Djoma-Tech est bien plus qu&apos;une entreprise technologique. C&apos;est une équipe engagée qui travaille chaque jour pour créer des solutions innovantes, performantes et adaptées aux besoins réels de nos clients. Nous croyons que chaque projet mérite l&apos;excellence, chaque client mérite l&apos;écoute et chaque ambition mérite les meilleures opportunités de réussite.
            </p>
            <p>
              Notre vision est de devenir une référence dans l&apos;écosystème numérique africain en offrant des services de qualité internationale, tout en contribuant à la formation, à l&apos;innovation et à l&apos;émergence d&apos;une nouvelle génération d&apos;acteurs du digital.
            </p>
            <p>
              Je vous remercie pour votre confiance et vous invite à construire avec nous l&apos;avenir numérique.
            </p>
            <div className="founder-signature">
              <strong className="founder-signature__name">Billy Nankouman Keita</strong>
              <span className="founder-signature__role">Fondateur &amp; Directeur Général de Djoma-Tech</span>
              <blockquote className="founder-signature__quote">
                &laquo; L&apos;innovation n&apos;est pas seulement une technologie, c&apos;est la capacité de transformer les idées en impact durable. &raquo;
              </blockquote>
            </div>
          </div>

          <div className="founder-visual">
            <div className="founder-photo-frame">
              <img src="/fondateur-billy.png" alt="Billy Nankouman Keita, Fondateur de Djoma-Tech" loading="lazy" />
            </div>
            <div className="skill-bars">
              {skillBars.map((skill, index) => (
                <div
                  key={skill.label}
                  className="skill-bar-item"
                  style={{ marginLeft: `${index * 48}px` }}
                >
                  <span className="skill-bar-label">{skill.label}</span>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${skill.percent}%` }}>
                      <span className="skill-bar-percent">{skill.percent}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS SECTION */}
      <section className="testimonials-section" id="temoignages">
        <div className="testimonials-header">
          <div className="section-heading testimonials-heading">
            <h2 className="section-heading__title">TÉMOIGNAGES</h2>
            <div className="section-heading__accent" aria-hidden="true">
              <span className="section-heading__accent-line" />
              <span className="section-heading__accent-mark" />
              <span className="section-heading__accent-line" />
            </div>
            <p className="testimonials-subtitle">Ce que disent nos clients</p>
            <p className="testimonials-desc">
              La satisfaction de nos partenaires est notre plus belle réussite. Découvrez leurs retours d&apos;expérience avec Djoma-Tech.
            </p>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <article key={index} className="testimonial-card">
              <div className="testimonial-card__top">
                <div className="testimonial-card__quote-icon" aria-hidden="true">&ldquo;</div>
                <div className="testimonial-card__stars" aria-label="5 étoiles sur 5">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
              <blockquote className="testimonial-card__quote">
                <p>{item.quote}</p>
              </blockquote>
              <footer className="testimonial-card__author">
                <div className="testimonial-card__avatar-placeholder">
                  {item.initials}
                </div>
                <div className="testimonial-card__meta">
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </section>      {/* 8. CONTACT SECTION */}
      <section className="contact-section" id="contact">
        {/* Contact Form on Top */}
        <div className="contact-form-container">
          <div className="contact-form-left">
            <div className="section-heading section-heading--on-dark section-heading--large section-heading--sentence contact-form-heading">
              <span className="section-heading__eyebrow section-heading__eyebrow--accent">Nous contacter</span>
              <h2 className="section-heading__title">Entrer en contact</h2>
              <div className="section-heading__accent" aria-hidden="true">
                <span className="section-heading__accent-line" />
                <span className="section-heading__accent-mark" />
                <span className="section-heading__accent-line" />
              </div>
            </div>
            <p className="contact-form-description">
              Vous souhaitez explorer de nouvelles opportunités dans le monde numérique ? Notre équipe est prête à vous accompagner.
              Contactez-nous dès aujourd&apos;hui pour discuter de vos projets, de vos défis et de la manière dont nous pouvons vous aider à atteindre vos objectifs dans ce paysage digital en constante évolution. &raquo;
            </p>
          </div>

          <div className="contact-form-right">
            <form className="contact-actual-form" onSubmit={handleContactSubmit}>
              <div className="form-field-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nom"
                  className="contact-form-input"
                  value={contactForm.lastName}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-field-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Prénom"
                  className="contact-form-input"
                  value={contactForm.firstName}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-field-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="contact-form-input"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-field-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="contact-form-textarea"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  required
                  minLength={10}
                />
              </div>
              {contactStatus && (
                <p className={`contact-form-status contact-form-status--${contactStatus.type}`} role="status">
                  {contactStatus.message}
                </p>
              )}
              <div className="form-submit-wrapper">
                <button type="submit" className="contact-form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Cards on Bottom */}
        <div className="contact-cards-container">
          {/* Card 1: Adresse */}
          <div className="contact-info-card">
            <div className="contact-card-icon-wrapper address-icon-bg">
              <svg viewBox="0 0 100 100" width="60" height="60">
                <ellipse cx="50" cy="82" rx="22" ry="7" fill="#1e293b" opacity="0.15" />
                <path d="M50 12 C32 12 18 26 18 44 C18 63 45 84 50 87 C55 84 82 63 82 44 C82 26 68 12 50 12 Z" fill="#ffb700" />
                <circle cx="50" cy="41" r="13" fill="#0052cc" />
                <circle cx="50" cy="41" r="5" fill="#ffffff" />
              </svg>
            </div>
            <h3>Adresse:</h3>
            <p>
              Guinée, Conakry<br />
              Siguiri – Colline
            </p>
          </div>

          {/* Card 2: Email */}
          <div className="contact-info-card">
            <div className="contact-card-icon-wrapper email-icon-bg">
              <svg viewBox="0 0 120 120" width="60" height="60">
                <path d="M15 45 L105 45 L105 95 L15 95 Z" fill="#4ea5f9" />
                <path d="M15 45 L60 20 L105 45 Z" fill="#295bb3" />
                <rect x="25" y="28" width="70" height="52" rx="4" fill="#ffffff" />
                <text x="60" y="62" fontFamily="var(--font-headings)" fontSize="24" fontWeight="900" fill="#0052cc" textAnchor="middle">@</text>
                <path d="M15 95 L55 65 M105 95 L65 65" stroke="#4ea5f9" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Email</h3>
            <p>djomatech777@gmail.com</p>
          </div>

          {/* Card 3: Appel ou Whatsapp */}
          <div className="contact-info-card">
            <div className="contact-card-icon-wrapper phone-icon-bg">
              <svg viewBox="0 0 120 120" width="60" height="60" style={{ transform: 'rotate(-5deg)' }}>
                {/* Ringing Sound Wave Arcs on the Left */}
                <path d="M22 42 A 16 16 0 0 0 22 78" fill="none" stroke="#ffaa00" strokeWidth="4" strokeLinecap="round" />
                <path d="M12 34 A 28 28 0 0 0 12 86" fill="none" stroke="#ffaa00" strokeWidth="3" strokeLinecap="round" opacity="0.7" />

                {/* Smartphone Body */}
                <rect x="38" y="16" width="52" height="88" rx="8" ry="8" fill="#4ea5f9" stroke="#ffffff" strokeWidth="3" />
                {/* Phone screen */}
                <rect x="43" y="24" width="42" height="62" rx="4" fill="#1e293b" />
                {/* Speaker slit */}
                <line x1="58" x2="70" y1="20" y2="20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                
                {/* Handset drawing on screen */}
                <path d="M50 42 C50 42 66 42 66 54 C66 60 58 70 50 68" stroke="#ffaa00" strokeWidth="4" strokeLinecap="round" fill="none" />
                
                {/* Home button */}
                <circle cx="64" cy="94" r="3" fill="#ffffff" />
              </svg>
            </div>
            <h3>Appel ou Whatsapp</h3>
            <p>(+224) 660 08 05 07</p>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <img src="/logo.png" alt="DJOMA TECH Logo" className="logo-img footer-logo" />
            <p className="footer-brand-text">
              Nous sommes votre agence digitale dynamique et en constante évolution.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="footer-column">
            <h4 className="footer-title-underlined">SERVICES</h4>
            <ul className="footer-services-list">
              <li>CONCEPTION DE SITE WEB</li>
              <li>CONCEPTION D&apos;APPLICATION MOBILE &amp; WEB</li>
              <li>INFOGRAPHIE &amp; DESIGN</li>
              <li>MARKETING DIGITAL</li>
              <li>MAINTENANCE SYSTEME</li>
            </ul>
          </div>

          {/* Column 3: Adresse */}
          <div className="footer-column">
            <h4 className="footer-title-underlined">ADRESSE</h4>
            <div className="footer-contact-info">
              <div className="footer-info-item">
                <div className="footer-info-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.7 1c.55.08.9.55.9 1v3.5c0 .55-.45 1-1 1A16 16 0 013 4c0-.55.45-1 1-1h3.5c.55 0 1 .35 1 .9a11.72 11.72 0 001 3.7c.07.36-.06.74-.27 1.11l-2.21 2.08z" />
                  </svg>
                </div>
                <span>+224 660 08 05 07</span>
              </div>
              <div className="footer-info-item">
                <div className="footer-info-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <span>Guinée, Conakry — Siguiri – Colline</span>
              </div>
              <div className="footer-info-item">
                <div className="footer-info-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <span>djomatech777@gmail.com</span>
              </div>
              <div className="footer-info-item">
                <div className="footer-info-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                </div>
                <span>Lundi – Samedi: 9H-17H</span>
              </div>
            </div>
          </div>

          {/* Column 4: Nous joindre */}
          <div className="footer-column">
            <h4>NOUS JOINDRE</h4>
            <div className="footer-social-boxes">
              <a href="https://www.facebook.com/share/1EJAC7SQaS/" target="_blank" rel="noopener noreferrer" className="social-box fb-box" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-3.5a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1h-2.5a4.5 4.5 0 0 0-4.5 4.5v1.5H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.5v5.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-box x-box" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/djoma-tech/" target="_blank" rel="noopener noreferrer" className="social-box in-box" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-box tg-box" aria-label="Telegram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.94-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-box yt-box" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.003 3.003 0 0 0-2.11 2.108C0 8.026 0 12 0 12s0 3.974.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.863.51 9.388.51 9.388.51s7.525 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.974 24 12 24 12s0-3.974-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            Copyright &copy;2026 DJOMA TECH | Tous les droits sont reservés
          </span>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/224660080507"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter sur WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966a9.782 9.782 0 0 0-6.978-2.879c-5.443 0-9.866 4.372-9.87 9.802 0 1.76.476 3.472 1.378 5.02l-.24 1.134zM16.5 13.5c-.2-.1-.9-.4-1.0-.5-.1-.1-.2-.2-.3-.1-.1.1-.4.5-.5.6-.1.1-.2.1-.4 0-.4-.2-1.4-.5-1.9-1-.4-.3-.7-.7-.8-.9 0-.2.1-.3.2-.4.1-.1.2-.2.3-.3.1-.1.1-.2.1-.3 0-.1-.1-.3-.2-.5-.1-.2-.2-.5-.3-.6-.1-.2-.2-.2-.3-.2h-.3c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 3.9 3.5.5.2 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1-.4 1.2-.8.2-.4.2-.8.1-1-.1-.1-.3-.2-.5-.3z"/>
        </svg>
        <span className="whatsapp-badge">1</span>
      </a>
    </div>
  )
}

export default App
