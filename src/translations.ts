export type Language = 'en' | 'es' | 'ja' | 'ru';

export interface Post {
    title: string;
    excerpt: string;
    content: string;
}

export interface PortfolioItem {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export const translations = {
  en: {
    nav: {
        about: 'About',
        services: 'Services',
        technologies: 'Technologies',
        portfolio: 'Portfolio',
        casestudies: 'Case Studies',
        impact: 'Impact',
        process: 'Process',
        blog: 'Blog',
        contact: 'Contact',
    },
    hero: {
        title: 'Innovate. Build. <span class="text-brand-accent">Deploy.</span>',
        subtitle: 'We are a digital innovation agency crafting bespoke software solutions that drive growth and define the future of technology.',
        cta: "Let's build together",
        seo: {
          title: "Nova Dev SAS | Custom Software Development",
          description: "Leading digital innovation agency in Colombia. We build custom web, mobile, and cloud solutions to drive your business growth.",
          keywords: "custom software, web development, mobile apps, Colombia, Nova Dev"
        }
    },
    about: {
        title: 'Meet Our Team',
        subtitle: 'The collective of passionate developers, designers, and strategists dedicated to transforming ideas into powerful digital realities.',
        teamMembers: [
            {
                quote: "Specialized in scalable architectures and full stack development. I dedicate myself to building robust systems and cutting-edge technologies that support the growth and evolution of our clients' businesses.",
                name: "Fabian Bonilla",
                designation: "Software Architect & Full Stack Developer",
                src: "/team/fabian.webp",
            },
            {
                quote: "As CEO of Nova Dev SAS, I lead the strategic vision of the company, focusing on creating innovative technological solutions that transform the way companies operate and generate real value for our clients.",
                name: "Sebastian Quintero",
                designation: "CEO & Founder",
                src: "/team/sebastian.webp",
            },
            {
                quote: "As a full stack developer, I focus on creating complete solutions from frontend to backend, building robust and scalable applications that meet the specific needs of each project.",
                name: "Esteban Dominguez",
                designation: "Full Stack Developer",
                src: "/team/esteban.webp",
            },
            {
                quote: "We are Nova Dev SAS, a passionate team committed to excellence in software development. We combine experience, innovation and a culture of quality to create technological solutions that accelerate growth and generate sustainable value for our clients.",
                name: "Nova Dev Team",
                designation: "Our Complete Team",
                src: "/team/team-nova.webp",
            }
        ],
        seo: {
            title: "About Nova Dev SAS | Our Team & Values",
            description: "Meet the passionate team of developers, designers, and strategists at Nova Dev SAS. Discover our commitment to integrity, innovation, and collaboration.",
            keywords: "software company, our values, tech team, innovation, Colombia"
        }
    },
    services: {
        title: 'Our Competencies',
        description: 'We provide a full spectrum of digital services to bring your vision to life, from concept to launch and beyond.',
        cards: {
            web: { title: "Web Development", description: "High-performance, scalable web applications tailored to your business needs." },
            uiux: { title: "UI/UX Design", description: "Intuitive and beautiful user interfaces that provide an exceptional user experience." },
            mobile: { title: "Mobile Apps", description: "Native and cross-platform mobile applications for iOS and Android." },
            cloud: { title: "Cloud Solutions", description: "Robust cloud infrastructure and DevOps services to ensure scalability and reliability." },
            ai: { title: "AI Integration", description: "Leverage the power of artificial intelligence to automate processes and gain insights." },
            blockchain: { title: "Blockchain Tech", description: "Decentralized applications and smart contracts for the new era of the internet." },
        },
        seo: {
            title: "Our Services | Web, Mobile, AI & Cloud Solutions",
            description: "Explore our full spectrum of services: web & mobile development, UI/UX design, cloud solutions, AI integration, and blockchain technology.",
            keywords: "web development services, ui/ux design, cloud solutions, ai integration, mobile app development"
        }
    },
    technologies: {
        title: 'Our Tech Stack',
        description: 'We work with the most modern and powerful tools to build robust, scalable, and high-performance solutions.',
        techNames: {
            react: "React",
            nodejs: "Node.js",
            python: "Python",
            typescript: "TypeScript",
            docker: "Docker",
            postgres: "PostgreSQL",
            astro: "Astro",
            github: "GitHub",
            n8n: "n8n",
            supabase: "Supabase",
            nova: "Nova Dev",
            java: "Java",
        },
        seo: {
            title: "Technology Stack | Nova Dev SAS",
            description: "Discover the technologies we use at Nova Dev SAS, including React, Node.js, Python, AWS, and more, to build cutting-edge software.",
            keywords: "tech stack, react, node.js, python, aws, docker, javascript, typescript"
        }
    },
    portfolio: {
        title: 'Featured Work',
        description: 'Explore a selection of our projects that showcase our commitment to quality and innovation.',
        items: [
            { title: "Project Cygnus", description: "A scalable web application for the fintech industry.", imageUrl: "/images/portfolio/project-cygnus-fintech.webp", link: "https://example.com" },
            { title: "Orion Platform", description: "A cross-platform mobile app for e-commerce.", imageUrl: "/images/portfolio/project-orion-ecommerce.webp", link: "https://example.com" },
            { title: "Nebula Dashboard", description: "An intuitive UI/UX design for a data analytics platform.", imageUrl: "/images/portfolio/project-nebula-dashboard.webp", link: "https://example.com" },
            { title: "Andromeda AI", description: "An AI integration project for process automation.", imageUrl: "/images/portfolio/project-andromeda-ai.webp", link: "https://example.com" },
            { title: "Lyra Blockchain", description: "A Web3 application utilizing smart contracts.", imageUrl: "/images/portfolio/project-lyra-blockchain.webp", link: "https://example.com" },
            { title: "Vega Cloud", description: "A robust cloud solution for a high-traffic service.", imageUrl: "/images/portfolio/project-vega-cloud.webp", link: "https://example.com" },
        ],
        seo: {
            title: "Portfolio | Our Featured Work",
            description: "Browse our portfolio of successful projects. See how Nova Dev SAS delivers high-quality, innovative software solutions for clients.",
            keywords: "software portfolio, project examples, case studies, web applications, mobile apps"
        }
    },
    casestudies: {
        title: 'Success Stories',
        description: 'Discover how we partner with clients to overcome challenges and achieve remarkable results.',
        readMore: 'Read Case Study',
        case1: {
            client: 'Transistor',
            title: 'Boosting E-commerce Conversion by 25%',
            description: 'We re-architected their mobile platform, leading to a significant increase in user engagement and sales.',
            tags: ['React Native', 'E-commerce', 'UX Overhaul']
        },
        case2: {
            client: 'Reform',
            title: 'Scaling Cloud Infrastructure for a SaaS Giant',
            description: 'Our DevOps team implemented a robust, scalable cloud solution on AWS, ensuring 99.99% uptime during peak loads.',
            tags: ['AWS', 'DevOps', 'SaaS', 'Scalability']
        },
        case3: {
            client: 'SavvyCal',
            title: 'Developing a Real-time Data Analytics Dashboard',
            description: 'We built a custom dashboard providing real-time insights, empowering data-driven decision-making across the company.',
            tags: ['React', 'Data Visualization', 'WebSockets']
        },
        seo: {
            title: "Case Studies | Success Stories by Nova Dev SAS",
            description: "Explore in-depth case studies of our work. See how we've helped businesses like yours achieve their technology goals.",
            keywords: "case studies, success stories, software projects, client work, portfolio"
        }
    },
    impact: {
        title: 'Quantifiable Impact',
        description: 'We don\'t just build software; we deliver measurable results that drive business growth and operational efficiency.',
        metrics: {
            metric1: { label: 'Increase in Mobile Conversions', value: 25, prefix: '+', suffix: '%' },
            metric2: { label: 'Users Reached Across Platforms', value: 3, prefix: '', suffix: 'M+' },
            metric3: { label: 'Uptime in Critical Systems', value: 99.9, prefix: '', suffix: '%' },
            metric4: { label: 'Reduction in Processing Times', value: 40, prefix: '', suffix: '%' },
        },
        seo: {
            title: "Our Impact | Measurable Results by Nova Dev SAS",
            description: "See the quantifiable impact of our software solutions, including increased conversions, user growth, and improved system performance.",
            keywords: "business results, impact metrics, software ROI, performance increase, user growth"
        }
    },
    process: {
        title: 'Our Methodology',
        description: 'A transparent and collaborative process that guarantees results and keeps you in the loop every step of the aay.',
        steps: {
            discovery: { title: "Discovery & Strategy", description: "We start by understanding your vision, goals, and challenges to build a strategic roadmap for success." },
            design: { title: "Design & Prototyping", description: "Our team creates wireframes and high-fidelity prototypes to visualize the user experience and interface." },
            development: { title: "Development & Testing", description: "Using the agile Scrum framework, our development sprints bring the design to life, with rigorous testing at every stage to ensure quality." },
            deployment: { title: "Deployment & Launch", description: "We handle the seamless deployment to your chosen infrastructure, followed by a successful launch." },
            support: { title: "Support & Iteration", description: "Our partnership continues with ongoing support and data-driven iterations to enhance the product." },
        },
        seo: {
            title: "Our Methodology | The Nova Dev Process",
            description: "Learn about our agile and transparent development process, from discovery and design to deployment and support, ensuring project success.",
            keywords: "agile development, scrum, software process, methodology, project management, discovery, deployment"
        }
    },
    testimonials: {
        title: 'What Our Clients Say',
        testimonials: {
            jane: { quote: "Nova Dev transformed our entire digital presence. Their expertise and dedication are unmatched. The results speak for themselves.", author: "Jane Doe, CEO of TechCorp" },
            john: { quote: "Working with this team was a game-changer. They delivered a flawless product on time and exceeded all our expectations.", author: "John Smith, Founder of Innovate Inc." },
            emily: { quote: "Their process is incredibly streamlined and transparent. We felt like true partners throughout the project.", author: "Emily White, CTO of Future Solutions" },
        },
        seo: {
            title: "Client Testimonials | What Our Partners Say",
            description: "Read testimonials from our satisfied clients. Find out why businesses trust Nova Dev SAS for their digital transformation needs.",
            keywords: "client reviews, testimonials, software development success, customer feedback"
        }
    },
     blog: {
        title: 'Our Insights',
        description: 'Stay updated with the latest trends, tutorials, and insights from the world of technology.',
        readMore: 'Read More',
        posts: {
            post1: { 
                title: 'The Future of Web Development with AI', 
                excerpt: 'Exploring how artificial intelligence is reshaping the landscape of web development, from automated coding to personalized user experiences.',
                content: `Artificial Intelligence is no longer a futuristic concept; it's a present-day reality transforming web development from the ground up. At Nova Dev, we are at the forefront of integrating AI to build smarter, more efficient, and highly personalized web applications.

One of the most significant impacts of AI is in the realm of automated code generation and testing. Tools powered by machine learning can now write boilerplate code, suggest optimizations, and even identify potential bugs before they are committed, significantly accelerating the development lifecycle and allowing our developers to focus on complex problem-solving and innovation.

Furthermore, AI-driven analytics are providing unprecedented insights into user behavior. By analyzing interaction patterns in real-time, we can create dynamic user experiences that adapt to individual needs, boosting engagement and conversion rates. From personalized content recommendations to intelligent chatbots, AI is the key to creating truly user-centric digital products.`
            },
            post2: { 
                title: 'Mastering Scalability in Cloud Architectures', 
                excerpt: 'A deep dive into best practices for designing and maintaining scalable, resilient, and cost-effective cloud infrastructures on AWS.',
                content: `As businesses grow, their digital infrastructure must scale seamlessly to meet increasing demand. Cloud architecture, particularly on platforms like Amazon Web Services (AWS), offers incredible potential for scalability, but it requires careful planning and expertise to master.

The first principle of a scalable architecture is decoupling. By breaking down a monolithic application into smaller, independent microservices, we ensure that individual components can be scaled independently. This means if your user authentication service is under heavy load, you can scale it up without affecting the product catalog service, optimizing resource allocation and cost.

Secondly, automation is paramount. Leveraging Infrastructure as Code (IaC) tools like Terraform and AWS CloudFormation allows us to define and manage infrastructure programmatically. This enables automated scaling policies, where resources are provisioned or de-provisioned automatically based on real-time traffic metrics, ensuring high availability and performance without manual intervention.`
            },
            post3: { 
                title: 'UI vs. UX: A Comprehensive Guide for 2024', 
                excerpt: 'Understanding the critical differences and synergies between User Interface and User Experience design to build products that users love.',
                content: `In the world of digital product development, the terms UI (User Interface) and UX (User Experience) are often used interchangeably, but they represent distinct and crucial disciplines. Understanding their relationship is fundamental to creating successful products.

User Experience (UX) Design is the macro-level process of enhancing overall user satisfaction. It's about the entire journey a user takes with a product. A UX designer is concerned with questions like: Is the product easy to navigate? Does it solve a real problem for the user? Is the experience enjoyable and efficient? It involves research, user personas, journey mapping, and information architecture.

User Interface (UI) Design, on the other hand, is the micro-level execution of the UX strategy. It's the visual and interactive part of the product—the buttons, the colors, the typography, and the layout. A UI designer focuses on making the interface aesthetically pleasing, visually consistent, and intuitive to interact with. While UX is the skeleton, UI is the skin and clothes. A product can have a beautiful UI but a terrible UX, and vice-versa. True success is achieved when both disciplines work in perfect harmony.`
            },
        },
        seo: {
            title: "Blog | Tech Insights from Nova Dev SAS",
            description: "Read the latest articles on web development, AI, cloud computing, and UI/UX design from the experts at Nova Dev SAS.",
            keywords: "tech blog, web development trends, ai insights, cloud architecture, ui/ux articles"
        }
    },
    contact: {
        title: 'Ready to Innovate?',
        subtitle: 'Let\'s Build the Future Together',
        description: "Transform your ideas into powerful digital solutions. Connect with our team of experts and start your journey towards technological excellence.",
        cta: {
            button: 'Chat on WhatsApp',
            subtext: 'Get instant response and personalized consultation'
        },
        features: {
            instant: 'Instant Response',
            direct: 'Direct Communication',
            available: '24/7 Available'
        },
        seo: {
            title: "Contact Nova Dev SAS | Let's Build Together",
            description: "Get in touch with Nova Dev SAS in Cajicá, Colombia. Let's discuss your project idea and how we can help you build the future.",
            keywords: "contact us, get a quote, software consultation, Cajicá, Colombia"
        }
    },
    footer: {
        copyright: '© {year} Nova Dev SAS. All Rights Reserved.',
        tagline: 'We transform innovative ideas into digital solutions. Committed to quality and technological excellence.',
        quickLinksTitle: 'QUICK LINKS',
        contactTitle: 'CONTACT',
        socialTitle: 'Follow Us',
        newsletterTitle: 'Stay Updated',
        newsletterPlaceholder: 'Your email address',
        newsletterButton: 'Subscribe',
        links: {
            services: 'Services',
            technologies: 'Technologies',
            portfolio: 'Portfolio',
            casestudies: 'Case Studies',
            impact: 'Impact',
            blog: 'Blog',
            contact: 'Contact'
        },
        contactInfo: {
            email: 'novadevsas@gmail.com',
            phone: '310 8644580',
            address: 'Cajicá, Cundinamarca, Colombia'
        }
    }
  },
  es: {
    nav: {
        about: 'Nosotros',
        services: 'Servicios',
        technologies: 'Tecnologías',
        portfolio: 'Portafolio',
        casestudies: 'Proyectos Recientes',
        impact: 'Impacto',
        process: 'Proceso',
        blog: 'Blog',
        contact: 'Contacto',
    },
    hero: {
        title: 'Innovar. Construir. <span class="text-brand-accent">Desplegar.</span>',
        subtitle: 'Somos una agencia de innovación digital que crea soluciones de software a la medida que impulsan la transformación digital y definen el futuro de la tecnología.',
        cta: 'Construyamos juntos',
        seo: {
            title: "Nova Dev SAS | Desarrollo de Software a la Medida",
            description: "Agencia de innovación digital líder en Colombia. Construimos soluciones web, móviles y en la nube a medida para impulsar el crecimiento de tu negocio.",
            keywords: "software a la medida, desarrollo web, apps móviles, Colombia, Nova Dev, Cajicá"
        }
    },
    about: {
        title: 'Conoce a Nuestro Equipo',
        subtitle: 'El colectivo de apasionados desarrolladores, diseñadores y estrategas dedicados a transformar ideas en poderosas realidades digitales.',
        teamMembers: [
            {
                quote: "Especializado en arquitecturas escalables y desarrollo full stack. Me dedico a construir sistemas robustos y tecnologías de vanguardia que soporten el crecimiento y evolución de los negocios de nuestros clientes.",
                name: "Fabian Bonilla",
                designation: "Arquitecto de Software & Desarrollador Full Stack",
                src: "/team/fabian.webp",
            },
            {
                quote: "Como CEO de Nova Dev SAS, lidero la visión estratégica de la empresa, enfocándome en crear soluciones tecnológicas innovadoras que transformen la manera en que las empresas operan y generen valor real para nuestros clientes.",
                name: "Sebastian Quintero",
                designation: "CEO & Fundador",
                src: "/team/sebastian.webp",
            },
            {
                quote: "Como desarrollador full stack, me enfoco en crear soluciones completas desde el frontend hasta el backend, construyendo aplicaciones robustas y escalables que satisfagan las necesidades específicas de cada proyecto.",
                name: "Esteban Dominguez",
                designation: "Desarrollador Full Stack",
                src: "/team/esteban.webp",
            },
            {
                quote: "Somos Nova Dev SAS, un equipo apasionado y comprometido con la excelencia en el desarrollo de software. Combinamos experiencia, innovación y una cultura de calidad para crear soluciones tecnológicas que aceleran el crecimiento y generan valor sostenible para nuestros clientes.",
                name: "Equipo Nova Dev",
                designation: "Nuestro Equipo Completo",
                src: "/team/team-nova.webp",
            }
        ],
        seo: {
            title: "Sobre Nova Dev SAS | Nuestro Equipo y Valores",
            description: "Conoce al apasionado equipo de desarrolladores, diseñadores y estrategas de Nova Dev SAS. Descubre nuestro compromiso con la integridad, innovación y colaboración.",
            keywords: "empresa de software, nuestros valores, equipo tecnológico, innovación, Colombia"
        }
    },
    services: {
        title: 'Nuestras Competencias',
        description: 'Ofrecemos un espectro completo de servicios digitales para dar vida a tu visión, desde el concepto hasta el lanzamiento y más allá.',
        cards: {
            web: { title: "Desarrollo Web a la Medida", description: "Aplicaciones web escalables y de alto rendimiento adaptadas a las necesidades de tu negocio." },
            uiux: { title: "Diseño UI/UX", description: "Interfaces de usuario intuitivas y atractivas que brindan una experiencia de usuario excepcional." },
            mobile: { title: "Apps Móviles", description: "Aplicaciones móviles nativas y multiplataforma para iOS y Android, listas para el mercado." },
            cloud: { title: "Soluciones en la Nube", description: "Infraestructura de nube robusta y servicios de DevOps para garantizar escalabilidad y confiabilidad." },
            ai: { title: "Integración de IA", description: "Aprovecha el poder de la inteligencia artificial para automatizar procesos y obtener información valiosa." },
            blockchain: { title: "Tecnología Blockchain", description: "Aplicaciones descentralizadas y contratos inteligentes para la nueva era de internet." },
        },
        seo: {
            title: "Nuestros Servicios | Soluciones Web, Móvil, IA y Nube",
            description: "Explora nuestro espectro completo de servicios: desarrollo web y móvil, diseño UI/UX, soluciones en la nube, integración de IA y tecnología blockchain.",
            keywords: "servicios de desarrollo web, diseño ui/ux, soluciones cloud, integración ia, desarrollo de apps móviles"
        }
    },
    technologies: {
        title: 'Nuestro Stack Tecnológico',
        description: 'Trabajamos con las herramientas más modernas y potentes para construir soluciones robustas, escalables y de alto rendimiento.',
        techNames: {
            react: "React",
            nodejs: "Node.js",
            python: "Python",
            typescript: "TypeScript",
            docker: "Docker",
            postgres: "PostgreSQL",
            astro: "Astro",
            github: "GitHub",
            n8n: "n8n",
            supabase: "Supabase",
            nova: "Nova Dev",
            java: "Java",
        },
        seo: {
            title: "Stack Tecnológico | Nova Dev SAS",
            description: "Descubre las tecnologías que utilizamos en Nova Dev SAS, incluyendo React, Node.js, Python, AWS y más, para construir software de vanguardia.",
            keywords: "stack tecnológico, react, node.js, python, aws, docker, javascript"
        }
    },
    portfolio: {
        title: 'Trabajos Destacados',
        description: 'Explora una selección de nuestros proyectos que demuestran nuestro compromiso con la calidad y la innovación.',
        items: [
            { title: "Proyecto Cygnus", description: "Una aplicación web escalable para la industria fintech.", imageUrl: "/images/portfolio/project-cygnus-fintech.webp", link: "https://example.com" },
            { title: "Plataforma Orión", description: "Una app móvil multiplataforma para e-commerce.", imageUrl: "/images/portfolio/project-orion-ecommerce.webp", link: "https://example.com" },
            { title: "Dashboard Nébula", description: "Un diseño UI/UX intuitivo para una plataforma de analítica.", imageUrl: "/images/portfolio/project-nebula-dashboard.webp", link: "https://example.com" },
            { title: "IA Andrómeda", description: "Un proyecto de integración de IA para automatización de procesos.", imageUrl: "/images/portfolio/project-andromeda-ai.webp", link: "https://example.com" },
            { title: "Blockchain Lyra", description: "Una aplicación Web3 utilizando contratos inteligentes.", imageUrl: "/images/portfolio/project-lyra-blockchain.webp", link: "https://example.com" },
            { title: "Nube Vega", description: "Una solución en la nube robusta para un servicio de alto tráfico.", imageUrl: "/images/portfolio/project-vega-cloud.webp", link: "https://example.com" },
        ],
        seo: {
            title: "Portafolio | Nuestros Proyectos Destacados",
            description: "Navega por nuestro portafolio de proyectos exitosos. Ve cómo Nova Dev SAS entrega soluciones de software innovadoras y de alta calidad para sus clientes.",
            keywords: "portafolio de software, ejemplos de proyectos, casos de éxito, aplicaciones web"
        }
    },
    casestudies: {
        title: 'Proyectos Recientes',
        description: 'Una selección de proyectos reales que estamos construyendo o hemos entregado. Sin exageraciones; enfoque en calidad, aprendizaje y evolución continua.',
        readMore: 'Ver proyecto',
        case1: {
            client: 'E-commerce Retail',
            title: 'Optimización de experiencia de compra en móvil',
            description: 'Mejoramos la navegación y el flujo de checkout en la app, reduciendo fricción y facilitando la compra desde dispositivos móviles.',
            tags: ['React Native', 'E-commerce', 'Mejora UX']
        },
        case2: {
            client: 'Startup SaaS',
            title: 'Infraestructura en la nube preparada para crecer',
            description: 'Definimos pipelines CI/CD, observabilidad y un esquema de autoescalado básico en AWS para acompañar el crecimiento sin interrupciones.',
            tags: ['AWS', 'DevOps', 'SaaS', 'Escalabilidad']
        },
        case3: {
            client: 'Empresa de Datos',
            title: 'Dashboard de analítica para decisiones oportunas',
            description: 'Implementamos un panel con métricas clave y actualizaciones frecuentes, habilitando decisiones con datos confiables y oportunos.',
            tags: ['React', 'Visualización de Datos', 'WebSockets']
        },
        seo: {
            title: "Proyectos Recientes | Trabajo Real de Nova Dev SAS",
            description: "Explora proyectos reales y representativos. Conoce cómo abordamos desafíos y evolucionamos soluciones junto a nuestros clientes.",
            keywords: "proyectos recientes, trabajo real, ejemplos de proyectos, software a la medida"
        }
    },
    impact: {
        title: 'Impacto Cuantificable',
        description: 'No solo construimos software; entregamos resultados medibles que impulsan el crecimiento del negocio y la eficiencia operativa.',
        metrics: {
            metric1: { label: 'Aumento en Conversiones Móviles', value: 25, prefix: '+', suffix: '%' },
            metric2: { label: 'Usuarios Alcanzados en Plataformas', value: 3, prefix: '', suffix: 'M+' },
            metric3: { label: 'De Uptime en Sistemas Críticos', value: 99.9, prefix: '', suffix: '%' },
            metric4: { label: 'Reducción en Tiempos de Procesamiento', value: 40, prefix: '', suffix: '%' },
        },
        seo: {
            title: "Nuestro Impacto | Resultados Medibles por Nova Dev SAS",
            description: "Vea el impacto cuantificable de nuestras soluciones de software, incluyendo aumento de conversiones, crecimiento de usuarios y mejora del rendimiento del sistema.",
            keywords: "resultados de negocio, métricas de impacto, ROI de software, aumento de rendimiento"
        }
    },
    process: {
        title: 'Nuestra Metodología',
        description: 'Un proceso transparente y colaborativo que garantiza resultados y te mantiene informado en cada paso del camino.',
        steps: {
            discovery: { title: "Descubrimiento y Estrategia", description: "Comenzamos por comprender tu visión, objetivos y desafíos para construir una hoja de ruta estratégica hacia el éxito." },
            design: { title: "Diseño y Prototipado", description: "Nuestro equipo crea wireframes y prototipos de alta fidelidad para visualizar la experiencia e interfaz de usuario." },
            development: { title: "Desarrollo y Pruebas", description: "Utilizando el marco de trabajo ágil Scrum, nuestros sprints de desarrollo dan vida al diseño, con pruebas rigurosas en cada etapa para garantizar la máxima calidad." },
            deployment: { title: "Despliegue y Lanzamiento", description: "Nos encargamos del despliegue sin problemas en tu infraestructura elegida, seguido de un lanzamiento exitoso." },
            support: { title: "Soporte e Iteración", description: "Nuestra asociación continúa con soporte continuo e iteraciones basadas en datos para mejorar el producto." },
        },
        seo: {
            title: "Nuestra Metodología | El Proceso de Nova Dev",
            description: "Aprende sobre nuestro proceso de desarrollo ágil y transparente, desde el descubrimiento y diseño hasta el despliegue y soporte, asegurando el éxito del proyecto.",
            keywords: "desarrollo ágil, scrum, proceso de software, metodología, gestión de proyectos"
        }
    },
    testimonials: {
        title: 'Lo Que Dicen Nuestros Clientes',
        testimonials: {
            jane: { quote: "Nova Dev transformó toda nuestra presencia digital. Su experiencia y dedicación son inigualables. Los resultados hablan por sí solos.", author: "Jane Doe, CEO de TechCorp" },
            john: { quote: "Trabajar con este equipo fue un cambio radical. Entregaron un producto impecable a tiempo y superaron todas nuestras expectativas.", author: "John Smith, Fundador de Innovate Inc." },
            emily: { quote: "Su proceso es increíblemente ágil y transparente. Nos sentimos como verdaderos socios durante todo el proyecto.", author: "Emily White, CTO de Future Solutions" },
        },
        seo: {
            title: "Testimonios de Clientes | Lo que Dicen Nuestros Socios",
            description: "Lee los testimonios de nuestros clientes satisfechos. Descubre por qué las empresas confían en Nova Dev SAS para sus necesidades de transformación digital.",
            keywords: "opiniones de clientes, testimonios, éxito en desarrollo de software"
        }
    },
     blog: {
        title: 'Nuestras Novedades',
        description: 'Mantente actualizado con las últimas tendencias, tutoriales y conocimientos del mundo de la tecnología.',
        readMore: 'Leer Más',
        posts: {
            post1: { 
                title: 'El Futuro del Desarrollo Web con IA', 
                excerpt: 'Explorando cómo la inteligencia artificial está remodelando el panorama del desarrollo web, desde la codificación automatizada hasta las experiencias de usuario personalizadas.',
                content: `La Inteligencia Artificial ya no es un concepto futurista; es una realidad actual que transforma el desarrollo web desde sus cimientos. En Nova Dev, estamos a la vanguardia de la integración de IA para construir aplicaciones web más inteligentes, eficientes y altamente personalizadas.

Uno de los impactos más significativos de la IA se encuentra en el ámbito de la generación y prueba automatizada de código. Las herramientas impulsadas por machine learning ahora pueden escribir código repetitivo, sugerir optimizaciones e incluso identificar posibles errores antes de que se integren, acelerando significativamente el ciclo de vida del desarrollo y permitiendo a nuestros desarrolladores centrarse en la resolución de problemas complejos y la innovación.

Además, los análisis impulsados por IA están proporcionando una visión sin precedentes sobre el comportamiento del usuario. Al analizar los patrones de interacción en tiempo real, podemos crear experiencias de usuario dinámicas que se adaptan a las necesidades individuales, aumentando la participación y las tasas de conversión. Desde recomendaciones de contenido personalizadas hasta chatbots inteligentes, la IA es la clave para crear productos digitales verdaderamente centrados en el usuario.`
            },
            post2: { 
                title: 'Dominando la Escalabilidad en Arquitecturas Cloud', 
                excerpt: 'Un análisis profundo de las mejores prácticas para diseñar y mantener infraestructuras en la nube escalables, resilientes y rentables en AWS.',
                content: `A medida que las empresas crecen, su infraestructura digital debe escalar sin problemas para satisfacer la creciente demanda. La arquitectura en la nube, especialmente en plataformas como Amazon Web Services (AWS), ofrece un potencial increíble para la escalabilidad, pero requiere una planificación cuidadosa y experiencia para dominarla.

El primer principio de una arquitectura escalable es el desacoplamiento. Al dividir una aplicación monolítica en microservicios más pequeños e independientes, nos aseguramos de que los componentes individuales puedan escalar de forma independiente. Esto significa que si tu servicio de autenticación de usuarios está bajo una carga pesada, puedes escalarlo sin afectar al servicio del catálogo de productos, optimizando la asignación de recursos y los costos.

En segundo lugar, la automatización es fundamental. Aprovechar las herramientas de Infraestructura como Código (IaC) como Terraform y AWS CloudFormation nos permite definir y gestionar la infraestructura de forma programática. Esto habilita políticas de escalado automático, donde los recursos se aprovisionan o desaprovisionan automáticamente según las métricas de tráfico en tiempo real, garantizando una alta disponibilidad y rendimiento sin intervención manual.`
            },
            post3: { 
                title: 'UI vs. UX: Una Guía Completa para 2024', 
                excerpt: 'Comprendiendo las diferencias críticas y las sinergias entre el diseño de Interfaz de Usuario y Experiencia de Usuario para crear productos que los usuarios amen.',
                content: `En el mundo del desarrollo de productos digitales, los términos UI (Interfaz de Usuario) y UX (Experiencia de Usuario) a menudo se usan indistintamente, pero representan disciplinas distintas y cruciales. Comprender su relación es fundamental para crear productos exitosos.

El Diseño de Experiencia de Usuario (UX) es el proceso a nivel macro para mejorar la satisfacción general del usuario. Se trata de todo el viaje que un usuario realiza con un producto. Un diseñador de UX se preocupa por preguntas como: ¿Es el producto fácil de navegar? ¿Resuelve un problema real para el usuario? ¿Es la experiencia agradable y eficiente? Implica investigación, creación de perfiles de usuario, mapeo del viaje del cliente y arquitectura de la información.

Por otro lado, el Diseño de Interfaz de Usuario (UI) es la ejecución a nivel micro de la estrategia de UX. Es la parte visual e interactiva del producto: los botones, los colores, la tipografía y la disposición. Un diseñador de UI se enfoca en hacer que la interfaz sea estéticamente agradable, visualmente consistente e intuitiva para interactuar. Mientras que la UX es el esqueleto, la UI es la piel y la ropa. Un producto puede tener una UI hermosa pero una UX terrible, y viceversa. El verdadero éxito se logra cuando ambas disciplinas trabajan en perfecta armonía.`
            },
        },
        seo: {
            title: "Blog | Conocimientos Técnicos de Nova Dev SAS",
            description: "Lee los últimos artículos sobre desarrollo web, IA, computación en la nube y diseño UI/UX de los expertos de Nova Dev SAS.",
            keywords: "blog de tecnología, tendencias de desarrollo web, IA, arquitectura en la nube"
        }
    },
    contact: {
        title: '¿Listo para Innovar?',
        subtitle: 'Construyamos el Futuro Juntos',
        description: 'Transforma tus ideas en poderosas soluciones digitales. Conecta con nuestro equipo de expertos y comienza tu viaje hacia la excelencia tecnológica.',
        cta: {
            button: 'Chatear por WhatsApp',
            subtext: 'Obtén respuesta instantánea y consultoría personalizada'
        },
        features: {
            instant: 'Respuesta Instantánea',
            direct: 'Comunicación Directa',
            available: 'Disponible 24/7'
        },
        seo: {
            title: "Contacta a Nova Dev SAS | Construyamos Juntos",
            description: "Ponte en contacto con Nova Dev SAS en Cajicá, Colombia. Hablemos de tu idea de proyecto y cómo podemos ayudarte a construir el futuro.",
            keywords: "contáctanos, obtener cotización, consultoría de software, Cajicá"
        }
    },
    footer: {
        copyright: '© {year} Nova Dev SAS. Todos los derechos reservados.',
        tagline: 'Transformamos ideas en soluciones digitales innovadoras. Comprometidos con la calidad y la excelencia tecnológica.',
        quickLinksTitle: 'ENLACES RÁPIDOS',
        contactTitle: 'CONTACTO',
        socialTitle: 'Síguenos',
        newsletterTitle: 'Mantente Actualizado',
        newsletterPlaceholder: 'Tu dirección de correo',
        newsletterButton: 'Suscribirse',
        links: {
            services: 'Servicios',
            technologies: 'Tecnologías',
            portfolio: 'Portafolio',
            casestudies: 'Proyectos Recientes',
            impact: 'Impacto',
            blog: 'Blog',
            contact: 'Contacto'
        },
        contactInfo: {
            email: 'novadevsas@gmail.com',
            phone: '310 8644580',
            address: 'Cajicá, Cundinamarca, Colombia'
        }
    }
  },
  ja: {
    nav: {
        about: '会社概要',
        services: 'サービス',
        technologies: '技術',
        portfolio: '実績',
        casestudies: '成功事例',
        impact: 'インパクト',
        process: 'プロセス',
        blog: 'ブログ',
        contact: 'お問い合わせ',
    },
    hero: {
        title: '革新。構築。<span class="text-brand-accent">展開。</span>',
        subtitle: '私たちは、成長を促進し、テクノロジーの未来を定義するオーダーメイドのソフトウェアソリューションを創造するデジタルイノベーションエージェンシーです。',
        cta: '共に築きましょう',
        seo: {
            title: "Nova Dev SAS | カスタムソフトウェア開発",
            description: "コロンビアをリードするデジタルイノベーションエージェンシー。ビジネスの成長を促進するカスタムウェブ、モバイル、クラウドソリューションを構築します。",
            keywords: "カスタムソフトウェア, ウェブ開発, モバイルアプリ, コロンビア, Nova Dev"
        }
    },
    about: {
        title: '私たちのチームに会う',
        subtitle: 'アイデアを強力なデジタルリアリティに変えることに専念する情熱的な開発者、デザイナー、ストラテジストの集団。',
        teamMembers: [
            {
                quote: "スケーラブルなアーキテクチャとフルスタック開発を専門としています。私は、クライアントのビジネスの成長と発展をサポートする堅牢なシステムと最先端技術の構築に専念しています。",
                name: "ファビアン・ボニージャ",
                designation: "ソフトウェアアーキテクト兼フルスタック開発者",
                src: "/team/fabian.webp",
            },
            {
                quote: "Nova Dev SASのCEOとして、私は会社の戦略的ビジョンを主導し、企業の働き方を変革し、クライアントに真の価値を創造する革新的な技術ソリューションの構築に焦点を当てています。",
                name: "セバスティアン・キンテロ",
                designation: "CEO兼創設者",
                src: "/team/sebastian.webp",
            },
            {
                quote: "フルスタック開発者として、私はフロントエンドからバックエンドまでの包括的なソリューションの構築に焦点を当て、各プロジェクトの特定のニーズに応える堅牢でスケーラブルなアプリケーションを作成しています。",
                name: "エステバン・ドミンゲス",
                designation: "フルスタック開発者",
                src: "/team/esteban.webp",
            },
            {
                quote: "私たちはNova Dev SAS、ソフトウェア開発の卓越性に情熱を注ぐチームです。私たちは専門知識、革新、品質の文化を組み合わせて、成長を加速し、クライアントに持続可能な価値を創造する技術ソリューションを構築しています。",
                name: "Nova Devチーム",
                designation: "私たちの完全なチーム",
                src: "/team/team-nova.webp",
            }
        ],
        seo: {
            title: "Nova Dev SASについて | 私たちのチームと価値観",
            description: "Nova Dev SASの情熱的な開発者、デザイナー、ストラテジストチームをご覧ください。誠実さ、革新、協力への私たちのコミットメントを発見してください。",
            keywords: "ソフトウェア会社, 私たちの価値観, 技術チーム, 革新"
        }
    },
    services: {
        title: '私たちの専門分野',
        description: 'コンセプトからローンチ、そしてその先まで、お客様のビジョンを実現するためのデジタルサービスを幅広く提供します。',
        cards: {
            web: { title: "ウェブ開発", description: "ビジネスニーズに合わせた高性能でスケーラブルなウェブアプリケーション。" },
            uiux: { title: "UI/UXデザイン", description: "卓越したユーザーエクスペリエンスを提供する、直感的で美しいユーザーインターフェース。" },
            mobile: { title: "モバイルアプリ", description: "iOSおよびAndroid向けのネイティブおよびクロスプラットフォームのモバイルアプリケーション。" },
            cloud: { title: "クラウドソリューション", description: "スケーラビリティと信頼性を確保するための堅牢なクラウドインフラとDevOpsサービス。" },
            ai: { title: "AI統合", description: "人工知能の力を活用してプロセスを自動化し、洞察を得ます。" },
            blockchain: { title: "ブロックチェーン技術", description: "インターネットの新時代のための分散型アプリケーションとスマートコントラクト。" },
        },
        seo: {
            title: "サービス | ウェブ、モバイル、AI、クラウドソリューション",
            description: "ウェブ・モバイル開発、UI/UXデザイン、クラウドソリューション、AI統合、ブロックチェーン技術など、当社の全サービスをご覧ください。",
            keywords: "ウェブ開発サービス, ui/uxデザイン, クラウドソリューション, ai統合"
        }
    },
    technologies: {
        title: '技術スタック',
        description: '私たちは、堅牢でスケーラブル、かつ高性能なソリューションを構築するために、最新かつ最も強力なツールを使用しています。',
        techNames: {
            react: "React",
            nodejs: "Node.js",
            python: "Python",
            typescript: "TypeScript",
            docker: "Docker",
            postgres: "PostgreSQL",
            astro: "Astro",
            github: "GitHub",
            n8n: "n8n",
            supabase: "Supabase",
            nova: "Nova Dev",
            java: "Java",
        },
        seo: {
            title: "技術スタック | Nova Dev SAS",
            description: "React、Node.js、Python、AWSなど、Nova Dev SASが最先端のソフトウェアを構築するために使用する技術をご覧ください。",
            keywords: "技術スタック, react, node.js, python, aws, docker, javascript"
        }
    },
    portfolio: {
        title: '注目の実績',
        description: '品質と革新への私たちのコミットメントを示すプロジェクトのセレクションをご覧ください。',
        items: [
            { title: "プロジェクト・キグナス", description: "フィンテック業界向けのスケーラブルなWebアプリケーション。", imageUrl: "/images/portfolio/project-cygnus-fintech.webp", link: "https://example.com" },
            { title: "オリオン・プラットフォーム", description: "Eコマース向けのクロスプラットフォームモバイルアプリ。", imageUrl: "/images/portfolio/project-orion-ecommerce.webp", link: "https://example.com" },
            { title: "ネビュラ・ダッシュボード", description: "データ分析プラットフォーム向けの直感的なUI/UXデザイン。", imageUrl: "/images/portfolio/project-nebula-dashboard.webp", link: "https://example.com" },
            { title: "アンドロメダAI", description: "プロセス自動化のためのAI統合プロジェクト。", imageUrl: "/images/portfolio/project-andromeda-ai.webp", link: "https://example.com" },
            { title: "リラ・ブロックチェーン", description: "スマートコントラクトを活用したWeb3アプリケーション。", imageUrl: "/images/portfolio/project-lyra-blockchain.webp", link: "https://example.com" },
            { title: "ベガ・クラウド", description: "高トラフィックサービス向けの堅牢なクラウドソリューション。", imageUrl: "/images/portfolio/project-vega-cloud.webp", link: "https://example.com" },
        ],
        seo: {
            title: "実績 | 注目のプロジェクト",
            description: "成功したプロジェクトのポートフォリオをご覧ください。Nova Dev SASがクライアントに高品質で革新的なソフトウェアソリューションを提供する方法をご覧ください。",
            keywords: "ソフトウェアポートフォリオ, プロジェクト例, ケーススタディ, ウェブアプリケーション"
        }
    },
    casestudies: {
        title: '成功事例',
        description: '私たちがクライアントと提携して課題を克服し、顕著な成果を達成する方法をご覧ください。',
        readMore: 'ケーススタディを読む',
        case1: {
            client: 'Transistor',
            title: 'Eコマースのコンバージョン率を25%向上',
            description: '彼らのモバイルプラットフォームを再設計し、ユーザーエンゲージメントと売上の大幅な増加につながりました。',
            tags: ['React Native', 'Eコマース', 'UX改善']
        },
        case2: {
            client: 'Reform',
            title: 'SaaS大手のためのクラウドインフラのスケーリング',
            description: '当社のDevOpsチームは、AWS上に堅牢でスケーラブルなクラウドソリューションを実装し、ピーク負荷時でも99.99%の稼働時間を保証しました。',
            tags: ['AWS', 'DevOps', 'SaaS', 'スケーラビリティ']
        },
        case3: {
            client: 'SavvyCal',
            title: 'リアルタイムデータ分析ダッシュボードの開発',
            description: 'リアルタイムの洞察を提供するカスタムダッシュボードを構築し、全社的なデータ駆動型の意思決定を強化しました。',
            tags: ['React', 'データ可視化', 'WebSockets']
        },
        seo: {
            title: "ケーススタディ | Nova Dev SASによる成功事例",
            description: "私たちの仕事の詳細なケーススタディをご覧ください。あなたのような企業が技術目標を達成するのをどのように支援したかをご覧ください。",
            keywords: "ケーススタディ, 成功事例, ソフトウェアプロジェクト, クライアントワーク, ポートフォリオ"
        }
    },
    impact: {
        title: '定量的なインパクト',
        description: '私たちは単にソフトウェアを構築するだけでなく、ビジネスの成長と運用効率を促進する測定可能な結果を提供します。',
        metrics: {
            metric1: { label: 'モバイルコンバージョンの増加', value: 25, prefix: '+', suffix: '%' },
            metric2: { label: 'プラットフォーム全体の到達ユーザー数', value: 3, prefix: '', suffix: 'M+' },
            metric3: { label: '重要システムの稼働率', value: 99.9, prefix: '', suffix: '%' },
            metric4: { label: '処理時間の削減', value: 40, prefix: '', suffix: '%' },
        },
        seo: {
            title: "当社のインパクト | Nova Dev SASによる測定可能な結果",
            description: "コンバージョン率の向上、ユーザー数の増加、システムパフォーマンスの改善など、当社のソフトウェアソリューションがもたらす定量的なインパクトをご覧ください。",
            keywords: "ビジネス成果, インパクト指標, ソフトウェアROI, パフォーマンス向上"
        }
    },
    process: {
        title: '私たちの方法論',
        description: '結果を保証し、すべての段階でお客様に情報を提供し続ける、透明で協力的なプロセス。',
        steps: {
            discovery: { title: "発見と戦略", description: "成功への戦略的ロードマップを構築するために、お客様のビジョン、目標、課題を理解することから始めます。" },
            design: { title: "設計とプロトタイピング", description: "私たちのチームは、ユーザーエクスペリエンスとインターフェースを視覚化するためにワイヤーフレームと高忠実度のプロトタイプを作成します。" },
            development: { title: "開発とテスト", description: "アジャイルなScrumフレームワークを使用して、開発スプリントが設計を具現化し、すべての段階で厳格なテストを行い、品質を保証します。" },
            deployment: { title: "展開とローンチ", description: "選択したインフラへのシームレスな展開を処理し、成功裏にローンチします。" },
            support: { title: "サポートと反復", description: "製品を強化するための継続的なサポートとデータ駆動型の反復により、私たちのパートナーシップは続きます。" },
        },
        seo: {
            title: "私たちの方法論 | Nova Devのプロセス",
            description: "発見と設計から展開とサポートまで、当社の機敏で透明な開発プロセスについて学び、プロジェクトの成功を確実にします。",
            keywords: "アジャイル開発, スクラム, ソフトウェアプロセス, 方法論, プロジェクト管理"
        }
    },
    testimonials: {
        title: 'お客様の声',
        testimonials: {
            jane: { quote: "Nova Devは私たちのデジタルプレゼンス全体を変革してくれました。彼らの専門知識と献身は比類のないものです。結果がすべてを物語っています。", author: "ジェーン・ドウ、TechCorp CEO" },
            john: { quote: "このチームとの仕事は画期的でした。彼らは完璧な製品を時間通りに納品し、私たちの期待をすべて超えました。", author: "ジョン・スミス、Innovate Inc. 創設者" },
            emily: { quote: "彼らのプロセスは信じられないほど効率的で透明です。プロジェクト全体を通して、私たちは真のパートナーのように感じました。", author: "エミリー・ホワイト、Future Solutions CTO" },
        },
        seo: {
            title: "お客様の声 | パートナーの声",
            description: "満足されたお客様からの推薦状をお読みください。企業がデジタルトランスフォーメーションのニーズでNova Dev SASを信頼する理由をご覧ください。",
            keywords: "顧客レビュー, 推薦状, ソフトウェア開発の成功"
        }
    },
    blog: {
        title: '私たちの洞察',
        description: 'テクノロジーの世界からの最新トレンド、チュートリアル、洞察を常に入手してください。',
        readMore: '続きを読む',
        posts: {
            post1: { 
                title: 'AIによるWeb開発の未来', 
                excerpt: '自動コーディングからパーソナライズされたユーザーエクスペリエンスまで、人工知能がWeb開発の展望をどのように再構築しているかを探ります。',
                content: `人工知能はもはや未来的な概念ではなく、ウェブ開発を根本から変革する現代の現実です。Nova Devでは、よりスマートで効率的、そして高度にパーソナライズされたウェブアプリケーションを構築するために、AI統合の最前線に立っています。

AIの最も重要な影響の1つは、自動コード生成とテストの分野にあります。機械学習を活用したツールは、定型コードの記述、最適化の提案、さらにはコミット前の潜在的なバグの特定さえも可能にし、開発ライフサイクルを大幅に加速させ、開発者が複雑な問題解決と革新に集中できるようにします。

さらに、AI駆動の分析は、ユーザー行動に関する前例のない洞察を提供しています。リアルタイムでインタラクションパターンを分析することにより、個々のニーズに適応する動的なユーザーエクスペリエンスを作成し、エンゲージメントとコンバージョン率を高めることができます。パーソナライズされたコンテンツの推奨からインテリジェントなチャットボットまで、AIは真にユーザー中心のデジタル製品を作成するための鍵です。`
            },
            post2: { 
                title: 'クラウドアーキテクチャにおけるスケーラビリティの習得', 
                excerpt: 'AWS上でスケーラブルで、回復力があり、コスト効率の高いクラウドインフラを設計および維持するためのベストプラクティスを深く掘り下げます。',
                content: `ビジネスが成長するにつれて、そのデジタルインフラストラクチャは増大する需要に対応するためにシームレスに拡張する必要があります。特にAmazon Web Services (AWS) のようなプラットフォーム上のクラウドアーキテクチャは、スケーラビリティのための信じられないほどの可能性を提供しますが、それを習得するには慎重な計画と専門知識が必要です。

スケーラブルなアーキテクチャの第一の原則は、分離です。モノリシックなアプリケーションをより小さく独立したマイクロサービスに分割することで、個々のコンポーネントを独立して拡張できるようにします。これは、ユーザー認証サービスに高い負荷がかかっている場合、製品カタログサービスに影響を与えることなくそれをスケールアップできることを意味し、リソースの割り当てとコストを最適化します。

第二に、自動化が最も重要です。TerraformやAWS CloudFormationのようなInfrastructure as Code (IaC) ツールを活用することで、インフラストラクチャをプログラムで定義および管理できます。これにより、リアルタイムのトラフィックメトリックに基づいてリソースが自動的にプロビジョニングまたはデプロビジョニングされる自動スケーリングポリシーが可能になり、手動介入なしで高い可用性とパフォーマンスを確保します。`
            },
            post3: { 
                title: 'UI vs. UX: 2024年版総合ガイド', 
                excerpt: 'ユーザーが愛用する製品を構築するために、ユーザーインターフェースとユーザーエクスペリエンスデザインの重要な違いと相乗効果を理解します。',
                content: `デジタル製品開発の世界では、UI（ユーザーインターフェース）とUX（ユーザーエクスペリエンス）という用語はしばしば同じ意味で使われますが、それらは明確で重要な専門分野を表しています。成功する製品を作るためには、それらの関係を理解することが不可欠です。

ユーザーエクスペリエンス（UX）デザインは、全体的なユーザー満足度を向上させるためのマクロレベルのプロセスです。それは、ユーザーが製品でたどる全体の旅に関するものです。UXデザイナーは、「製品はナビゲートしやすいか？」「ユーザーの実際の問題を解決しているか？」「体験は楽しく効率的か？」といった問いに関心を持ちます。これには、リサーチ、ユーザーペルソナ、ジャーニーマッピング、情報アーキテクチャが含まれます。

一方、ユーザーインターフェース（UI）デザインは、UX戦略のミクロレベルの実行です。それは製品の視覚的でインタラクティブな部分、つまりボタン、色、タイポグラフィ、レイアウトです。UIデザイナーは、インターフェースを美的に魅力的にし、視覚的に一貫性があり、直感的に操作できるようにすることに焦点を当てます。UXが骨格であるとすれば、UIは皮膚と衣服です。製品は美しいUIを持ちながらひどいUXを持つことも、その逆もあり得ます。真の成功は、両方の専門分野が完璧な調和で機能するときに達成されます。`
            },
        },
        seo: {
            title: "ブログ | Nova Dev SASからの技術的洞察",
            description: "Nova Dev SASの専門家によるWeb開発、AI、クラウドコンピューティング、UI/UXデザインに関する最新記事をお読みください。",
            keywords: "技術ブログ, ウェブ開発トレンド, AI洞察, クラウドアーキテクチャ, UI/UX記事"
        }
    },
    contact: {
        title: 'イノベーションの準備はできていますか？',
        subtitle: '一緒に未来を築きましょう',
        description: 'あなたのアイデアを強力なデジタルソリューションに変えましょう。専門家チームと繋がり、技術的卓越性への旅を始めましょう。',
        cta: {
            button: 'WhatsAppでチャット',
            subtext: '即座の返答とパーソナライズされた相談を受けましょう'
        },
        features: {
            instant: '即座の返答',
            direct: '直接コミュニケーション',
            available: '24時間365日利用可能'
        },
        seo: {
            title: "Nova Dev SASへのお問い合わせ | 共に築きましょう",
            description: "コロンビアのカヒカにあるNova Dev SASにお問い合わせください。あなたのプロジェクトのアイデアと、未来を築くお手伝いについて話し合いましょう。",
            keywords: "お問い合わせ, 見積もり依頼, ソフトウェア相談, カヒカ"
        }
    },
    footer: {
        copyright: '© {year} Nova Dev SAS. 全著作権所有。',
        tagline: '革新的なアイデアをデジタルソリューションに変えます。品質と技術的卓越性に取り組んでいます。',
        quickLinksTitle: 'クイックリンク',
        contactTitle: '連絡先',
        socialTitle: 'フォローする',
        newsletterTitle: '最新情報を受け取る',
        newsletterPlaceholder: 'あなたのメールアドレス',
        newsletterButton: '購読する',
        links: {
            services: 'サービス',
            technologies: '技術',
            portfolio: '実績',
            casestudies: '成功事例',
            impact: 'インパクト',
            blog: 'ブログ',
            contact: 'お問い合わせ'
        },
        contactInfo: {
            email: 'novadevsas@gmail.com',
            phone: '310 8644580',
            address: 'カヒカ、クンディナマルカ、コロンビア'
        }
    }
  },
  ru: {
    nav: {
        about: 'О нас',
        services: 'Услуги',
        technologies: 'Технологии',
        portfolio: 'Портфолио',
        casestudies: 'Кейсы',
        impact: 'Результаты',
        process: 'Процесс',
        blog: 'Блог',
        contact: 'Контакты',
    },
    hero: {
        title: 'Инновации. Создание. <span class="text-brand-accent">Развертывание.</span>',
        subtitle: 'Мы — агентство цифровых инноваций, создающее индивидуальные программные решения, которые стимулируют рост и определяют будущее технологий.',
        cta: 'Давайте строить вместе',
        seo: {
            title: "Nova Dev SAS | Разработка Программного Обеспечения на Заказ",
            description: "Ведущее агентство цифровых инноваций в Колумбии. Мы создаем индивидуальные веб-, мобильные и облачные решения для роста вашего бизнеса.",
            keywords: "программное обеспечение на заказ, веб-разработка, мобильные приложения, Колумбия, Nova Dev"
        }
    },
    about: {
        title: 'Познакомьтесь с нашей командой',
        subtitle: 'Коллектив увлеченных разработчиков, дизайнеров и стратегов, посвятивших себя превращению идей в мощные цифровые реальности.',
        teamMembers: [
            {
                quote: "Специализируюсь на масштабируемых архитектурах и полнофункциональной разработке. Я посвящаю себя созданию надежных систем и передовых технологий, которые поддерживают рост и развитие бизнеса наших клиентов.",
                name: "Фабиан Бонилья",
                designation: "Архитектор программного обеспечения и Full Stack разработчик",
                src: "/team/fabian.webp",
            },
            {
                quote: "Как генеральный директор Nova Dev SAS, я руковожу стратегическим видением компании, сосредотачиваясь на создании инновационных технологических решений, которые трансформируют способ работы компаний и создают реальную ценность для наших клиентов.",
                name: "Себастьян Кинтеро",
                designation: "Генеральный директор и основатель",
                src: "/team/sebastian.webp",
            },
            {
                quote: "Как full stack разработчик, я сосредотачиваюсь на создании комплексных решений от фронтенда до бэкенда, создавая надежные и масштабируемые приложения, которые отвечают конкретным потребностям каждого проекта.",
                name: "Эстебан Домингес",
                designation: "Full Stack разработчик",
                src: "/team/esteban.webp",
            },
            {
                quote: "Мы - Nova Dev SAS, страстная команда, приверженная совершенству в разработке программного обеспечения. Мы сочетаем опыт, инновации и культуру качества для создания технологических решений, которые ускоряют рост и создают устойчивую ценность для наших клиентов.",
                name: "Команда Nova Dev",
                designation: "Наша полная команда",
                src: "/team/team-nova.webp",
            }
        ],
        seo: {
            title: "О Nova Dev SAS | Наша Команда и Ценности",
            description: "Познакомьтесь с увлеченной командой разработчиков, дизайнеров и стратегов Nova Dev SAS. Узнайте о нашей приверженности честности, инновациям и сотрудничеству.",
            keywords: "компания по разработке ПО, наши ценности, техническая команда, инновации"
        }
    },
    services: {
        title: 'Наши компетенции',
        description: 'Мы предоставляем полный спектр цифровых услуг для воплощения вашего видения в жизнь, от концепции до запуска и далее.',
        cards: {
            web: { title: "Веб-разработка", description: "Высокопроизводительные, масштабируемые веб-приложения, адаптированные к вашим бизнес-потребностям." },
            uiux: { title: "UI/UX Дизайн", description: "Интуитивно понятные и красивые пользовательские интерфейсы, обеспечивающие исключительный пользовательский опыт." },
            mobile: { title: "Мобильные приложения", description: "Нативные и кроссплатформенные мобильные приложения для iOS и Android." },
            cloud: { title: "Облачные решения", description: "Надежная облачная инфраструктура и услуги DevOps для обеспечения масштабируемости и надежности." },
            ai: { title: "Интеграция ИИ", description: "Используйте возможности искусственного интеллекта для автоматизации процессов и получения ценной информации." },
            blockchain: { title: "Блокчейн-технологии", description: "Децентрализованные приложения и смарт-контракты для новой эры интернета." },
        },
        seo: {
            title: "Наши Услуги | Веб, Мобильные, ИИ и Облачные Решения",
            description: "Ознакомьтесь с нашим полным спектром услуг: веб- и мобильная разработка, UI/UX-дизайн, облачные решения, интеграция ИИ и технология блокчейн.",
            keywords: "услуги веб-разработки, ui/ux дизайн, облачные решения, интеграция ии"
        }
    },
    technologies: {
        title: 'Наш Технологический Стек',
        description: 'Мы работаем с самыми современными и мощными инструментами для создания надежных, масштабируемых и высокопроизводительных решений.',
        techNames: {
            react: "React",
            nodejs: "Node.js",
            python: "Python",
            typescript: "TypeScript",
            docker: "Docker",
            postgres: "PostgreSQL",
            astro: "Astro",
            github: "GitHub",
            n8n: "n8n",
            supabase: "Supabase",
            nova: "Nova Dev",
            java: "Java",
        },
        seo: {
            title: "Технологический Стек | Nova Dev SAS",
            description: "Узнайте о технологиях, которые мы используем в Nova Dev SAS, включая React, Node.js, Python, AWS и другие, для создания передового программного обеспечения.",
            keywords: "технологический стек, react, node.js, python, aws, docker, javascript"
        }
    },
    portfolio: {
        title: 'Избранные работы',
        description: 'Ознакомьтесь с подборкой наших проектов, которые демонстрируют нашу приверженность качеству и инновациям.',
        items: [
            { title: "Проект Cygnus", description: "Масштабируемое веб-приложение для финтех-индустрии.", imageUrl: "/images/portfolio/project-cygnus-fintech.webp", link: "https://example.com" },
            { title: "Платформа Orion", description: "Кроссплатформенное мобильное приложение для электронной коммерции.", imageUrl: "/images/portfolio/project-orion-ecommerce.webp", link: "https://example.com" },
            { title: "Панель Nebula", description: "Интуитивно понятный UI/UX дизайн для платформы анализа данных.", imageUrl: "/images/portfolio/project-nebula-dashboard.webp", link: "https://example.com" },
            { title: "ИИ Andromeda", description: "Проект интеграции ИИ для автоматизации процессов.", imageUrl: "/images/portfolio/project-andromeda-ai.webp", link: "https://example.com" },
            { title: "Блокчейн Lyra", description: "Веб3-приложение, использующее смарт-контракты.", imageUrl: "/images/portfolio/project-lyra-blockchain.webp", link: "https://example.com" },
            { title: "Облако Vega", description: "Надежное облачное решение для сервиса с высоким трафиком.", imageUrl: "/images/portfolio/project-vega-cloud.webp", link: "https://example.com" },
        ],
        seo: {
            title: "Портфолио | Наши Избранные Работы",
            description: "Просмотрите наше портфолио успешных проектов. Узнайте, как Nova Dev SAS поставляет высококачественные, инновационные программные решения для клиентов.",
            keywords: "портфолио программного обеспечения, примеры проектов, кейсы, веб-приложения"
        }
    },
    casestudies: {
        title: 'Истории Успеха',
        description: 'Узнайте, как мы сотрудничаем с клиентами для преодоления трудностей и достижения выдающихся результатов.',
        readMore: 'Читать кейс',
        case1: {
            client: 'Transistor',
            title: 'Увеличение конверсии в электронной коммерции на 25%',
            description: 'Мы переработали их мобильную платформу, что привело к значительному увеличению вовлеченности пользователей и продаж.',
            tags: ['React Native', 'E-commerce', 'UX редизайн']
        },
        case2: {
            client: 'Reform',
            title: 'Масштабирование облачной инфраструктуры для SaaS-гиганта',
            description: 'Наша команда DevOps внедрила надежное и масштабируемое облачное решение на AWS, обеспечив 99.99% времени безотказной работы в пиковые нагрузки.',
            tags: ['AWS', 'DevOps', 'SaaS', 'Масштабируемость']
        },
        case3: {
            client: 'SavvyCal',
            title: 'Разработка панели аналитики в реальном времени',
            description: 'Мы создали настраиваемую панель мониторинга, предоставляющую информацию в реальном времени и расширяющую возможности принятия решений на основе данных по всей компании.',
            tags: ['React', 'Визуализация данных', 'WebSockets']
        },
        seo: {
            title: "Кейсы | Истории Успеха от Nova Dev SAS",
            description: "Изучите подробные кейсы нашей работы. Посмотрите, как мы помогли компаниям, подобным вашей, достичь своих технологических целей.",
            keywords: "кейсы, истории успеха, программные проекты, работа с клиентами, портфолио"
        }
    },
    impact: {
        title: 'Измеримый Результат',
        description: 'Мы не просто создаем программное обеспечение; мы предоставляем измеримые результаты, которые способствуют росту бизнеса и операционной эффективности.',
        metrics: {
            metric1: { label: 'Увеличение мобильных конверсий', value: 25, prefix: '+', suffix: '%' },
            metric2: { label: 'Охваченных пользователей на платформах', value: 3, prefix: '', suffix: 'М+' },
            metric3: { label: 'Время безотказной работы критических систем', value: 99.9, prefix: '', suffix: '%' },
            metric4: { label: 'Сокращение времени обработки', value: 40, prefix: '', suffix: '%' },
        },
        seo: {
            title: "Наш Вклад | Измеримые Результаты от Nova Dev SAS",
            description: "Оцените измеримый вклад наших программных решений, включая увеличение конверсий, рост числа пользователей и повышение производительности систем.",
            keywords: "бизнес-результаты, метрики влияния, рентабельность инвестиций в ПО, повышение производительности"
        }
    },
    process: {
        title: 'Наша методология',
        description: 'Прозрачный и совместный процесс, который гарантирует результаты и держит вас в курсе на каждом этапе пути.',
        steps: {
            discovery: { title: "Исследование и стратегия", description: "Мы начинаем с понимания вашего видения, целей и задач, чтобы построить стратегическую дорожную карту к успеху." },
            design: { title: "Дизайн и прототипирование", description: "Наша команда создает каркасы и высокоточные прототипы для визуализации пользовательского опыта и интерфейса." },
            development: { title: "Разработка и тестирование", description: "Используя гибкую методологию Scrum, наши спринты разработки воплощают дизайн в жизнь, с тщательным тестированием на каждом этапе для обеспечения качества." },
            deployment: { title: "Развертывание и запуск", description: "Мы обеспечиваем беспроблемное развертывание на выбранной вами инфраструктуре с последующим успешным запуском." },
            support: { title: "Поддержка и итерация", description: "Наше партнерство продолжается с постоянной поддержкой и итерациями на основе данных для улучшения продукта." },
        },
        seo: {
            title: "Наша Методология | Процесс Nova Dev",
            description: "Узнайте о нашем гибком и прозрачном процессе разработки, от исследования и проектирования до развертывания и поддержки, обеспечивающем успех проекта.",
            keywords: "гибкая разработка, scrum, процесс разработки ПО, методология, управление проектами"
        }
    },
    testimonials: {
        title: 'Что говорят наши клиенты',
        testimonials: {
            jane: { quote: "Nova Dev полностью преобразили наше цифровое присутствие. Их опыт и преданность делу не имеют себе равных. Результаты говорят сами за себя.", author: "Джейн Доу, генеральный директор TechCorp" },
            john: { quote: "Работа с этой командой изменила правила игры. Они поставили безупречный продукт в срок и превзошли все наши ожидания.", author: "Джон Смит, основатель Innovate Inc." },
            emily: { quote: "Их процесс невероятно оптимизирован и прозрачен. Мы чувствовали себя настоящими партнерами на протяжении всего проекта.", author: "Эмили Уайт, технический директор Future Solutions" },
        },
        seo: {
            title: "Отзывы Клиентов | Что Говорят Наши Партнеры",
            description: "Прочитайте отзывы наших довольных клиентов. Узнайте, почему компании доверяют Nova Dev SAS свои потребности в цифровой трансформации.",
            keywords: "отзывы клиентов, рекомендации, успех в разработке программного обеспечения"
        }
    },
    blog: {
        title: 'Наши Статьи',
        description: 'Будьте в курсе последних тенденций, руководств и идей из мира технологий.',
        readMore: 'Читать далее',
        posts: {
            post1: { 
                title: 'Будущее веб-разработки с ИИ', 
                excerpt: 'Исследование того, как искусственный интеллект меняет ландшафт веб-разработки, от автоматизированного кодирования до персонализированного пользовательского опыта.',
                content: `Искусственный интеллект — это уже не футуристическая концепция, а современная реальность, которая коренным образом меняет веб-разработку. В Nova Dev мы находимся на переднем крае интеграции ИИ для создания более умных, эффективных и персонализированных веб-приложений.

Одно из самых значительных влияний ИИ наблюдается в области автоматической генерации и тестирования кода. Инструменты на базе машинного обучения теперь могут писать шаблонный код, предлагать оптимизации и даже выявлять потенциальные ошибки до их коммита, что значительно ускоряет жизненный цикл разработки и позволяет нашим разработчикам сосредоточиться на решении сложных задач и инновациях.

Кроме того, аналитика на основе ИИ предоставляет беспрецедентное понимание поведения пользователей. Анализируя модели взаимодействия в реальном времени, мы можем создавать динамический пользовательский опыт, который адаптируется к индивидуальным потребностям, повышая вовлеченность и конверсию. От персонализированных рекомендаций контента до интеллектуальных чат-ботов — ИИ является ключом к созданию по-настоящему ориентированных на пользователя цифровых продуктов.`
            },
            post2: { 
                title: 'Освоение масштабируемости в облачных архитектурах', 
                excerpt: 'Глубокое погружение в лучшие практики проектирования и поддержки масштабируемых, отказоустойчивых и экономически эффективных облачных инфраструктур на AWS.',
                content: `По мере роста бизнеса его цифровая инфраструктура должна беспрепятственно масштабироваться для удовлетворения растущего спроса. Облачная архитектура, особенно на таких платформах, как Amazon Web Services (AWS), предлагает невероятный потенциал для масштабируемости, но для ее освоения требуется тщательное планирование и опыт.

Первый принцип масштабируемой архитектуры — это разделение. Разбивая монолитное приложение на более мелкие, независимые микросервисы, мы гарантируем, что отдельные компоненты могут масштабироваться независимо. Это означает, что если ваша служба аутентификации пользователей находится под большой нагрузкой, вы можете ее расширить, не затрагивая службу каталога продуктов, оптимизируя распределение ресурсов и затраты.

Во-вторых, автоматизация имеет первостепенное значение. Использование инструментов «Инфраструктура как код» (IaC), таких как Terraform и AWS CloudFormation, позволяет нам программно определять и управлять инфраструктурой. Это обеспечивает автоматические политики масштабирования, при которых ресурсы предоставляются или отзываются автоматически на основе показателей трафика в реальном времени, гарантируя высокую доступность и производительность без ручного вмешательства.`
            },
            post3: { 
                title: 'UI vs. UX: Полное руководство на 2024 год', 
                excerpt: 'Понимание критических различий и синергии между дизайном пользовательского интерфейса и пользовательского опыта для создания продуктов, которые полюбят пользователи.',
                content: `В мире разработки цифровых продуктов термины UI (пользовательский интерфейс) и UX (пользовательский опыт) часто используются как взаимозаменяемые, но они представляют собой разные и важные дисциплины. Понимание их взаимосвязи является основополагающим для создания успешных продуктов.

Дизайн пользовательского опыта (UX) — это макроуровневый процесс повышения общей удовлетворенности пользователя. Речь идет о всем пути, который пользователь проходит с продуктом. UX-дизайнер занимается такими вопросами, как: Легко ли ориентироваться в продукте? Решает ли он реальную проблему пользователя? Является ли опыт приятным и эффективным? Это включает исследования, создание персон пользователей, картирование пути клиента и информационную архитектуру.

С другой стороны, дизайн пользовательского интерфейса (UI) — это микроуровневое исполнение UX-стратегии. Это визуальная и интерактивная часть продукта — кнопки, цвета, типографика и макет. UI-дизайнер фокусируется на том, чтобы сделать интерфейс эстетически приятным, визуально последовательным и интуитивно понятным для взаимодействия. Если UX — это скелет, то UI — это кожа и одежда. Продукт может иметь красивый UI, но ужасный UX, и наоборот. Настоящий успех достигается, когда обе дисциплины работают в идеальной гармонии.`
            },
        },
        seo: {
            title: "Блог | Технические статьи от Nova Dev SAS",
            description: "Читайте последние статьи о веб-разработке, ИИ, облачных вычислениях и UI/UX дизайне от экспертов Nova Dev SAS.",
            keywords: "технологический блог, тенденции веб-разработки, статьи об ии, облачная архитектура"
        }
    },
    contact: {
        title: 'Готовы к инновациям?',
        subtitle: 'Давайте строить будущее вместе',
        description: 'Превратите ваши идеи в мощные цифровые решения. Свяжитесь с нашей командой экспертов и начните путь к технологическому совершенству.',
        cta: {
            button: 'Чат в WhatsApp',
            subtext: 'Получите мгновенный ответ и персонализированную консультацию'
        },
        features: {
            instant: 'Мгновенный ответ',
            direct: 'Прямое общение',
            available: 'Доступно 24/7'
        },
        seo: {
            title: "Связаться с Nova Dev SAS | Давайте Строить Вместе",
            description: "Свяжитесь с Nova Dev SAS в Кахика, Колумбия. Давайте обсудим идею вашего проекта и то, как мы можем помочь вам построить будущее.",
            keywords: "связаться с нами, получить предложение, консультация по ПО, Кахика"
        }
    },
    footer: {
        copyright: '© {year} Nova Dev SAS. Все права защищены.',
        tagline: 'Мы превращаем инновационные идеи в цифровые решения. Привержены качеству и технологическому совершенству.',
        quickLinksTitle: 'БЫСТРЫЕ ССЫЛКИ',
        contactTitle: 'КОНТАКТЫ',
        socialTitle: 'Подписывайтесь',
        newsletterTitle: 'Будьте в курсе',
        newsletterPlaceholder: 'Ваш адрес электронной почты',
        newsletterButton: 'Подписаться',
        links: {
            services: 'Услуги',
            technologies: 'Технологии',
            portfolio: 'Портфолио',
            casestudies: 'Кейсы',
            impact: 'Результаты',
            blog: 'Блог',
            contact: 'Контакты'
        },
        contactInfo: {
            email: 'novadevsas@gmail.com',
            phone: '310 8644580',
            address: 'Кахика, Кундинамарка, Колумбия'
        }
    }
  }
};