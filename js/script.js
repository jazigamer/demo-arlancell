// js/script.js

// ========== CONFIGURAÇÕES GERAIS ==========
document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    setTimeout(() => {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
            }, 500);
        }
        
        // Mostrar popup após 3 segundos
        setTimeout(showOfferPopup, 3000);
    }, 1000);

    initializeAllFunctions();
});

function initializeAllFunctions() {
    initMobileMenu();
    initFeedbackStars();
    initTestimonialCarousel();
    initScrollAnimations();
    initPerformanceOptimizations();
    initAccessibility();
    initOwnerNotificationSystem();
}

// ========== POPUP DE OFERTA ==========
function showOfferPopup() {
    // Verificar se já mostrou o popup hoje
    const lastPopup = localStorage.getItem('lastOfferPopup');
    const today = new Date().toDateString();
    
    if (lastPopup !== today) {
        const popup = document.getElementById('offer-popup');
        if (popup) {
            popup.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }
}

function closeOffer() {
    const popup = document.getElementById('offer-popup');
    if (popup) {
        popup.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Salvar que mostrou o popup hoje
        localStorage.setItem('lastOfferPopup', new Date().toDateString());
    }
}

function claimOffer() {
    const message = "Olá! Gostaria de aproveitar a oferta da LIMPEZA INTERNA GRÁTIS no meu primeiro conserto!";
    window.open(`https://wa.me/5585982163973?text=${encodeURIComponent(message)}`, '_blank');
    closeOffer();
    
    // Tracking de conversão
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'GA_MEASUREMENT_ID/offer_claim',
            'value': 40.00,
            'currency': 'BRL'
        });
    }
}

// ========== MENU MOBILE ==========
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu when clicking links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// ========== FEEDBACK STARS ==========
function initFeedbackStars() {
    const stars = document.querySelectorAll('.feedback-star');
    const notaInput = document.getElementById('nota');

    if (stars.length > 0 && notaInput) {
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.getAttribute('data-value'));
                notaInput.value = rating + ' estrelas';

                stars.forEach((s, i) => {
                    if (i < rating) {
                        s.classList.add('text-yellow-400', 'active');
                        s.querySelector('i').classList.replace('far', 'fas');
                    } else {
                        s.classList.remove('text-yellow-400', 'active');
                        s.querySelector('i').classList.replace('fas', 'far');
                    }
                });
            });
        });
    }
}

// ========== CARROSSEL DE DEPOIMENTOS ==========
function initTestimonialCarousel() {
    const depoimentos = [
        {
            nome: 'Francisco Célio Gomes Barbosa',
            handle: '@celio_barbosa',
            avatar: './assets/avatares/avatar.png',
            texto: 'Sua personalização em copos térmico é perfeito super indico',
            estrelas: 5,
        },
        {
            nome: 'Marcílio Nery',
            handle: '@marciliomelo2',
            avatar: './assets/avatares/avatar2.jpg',
            texto: 'O melhor atendimento e melhor avaliador de Araçoiaba 👏👏👏',
            estrelas: 5,
        },
        {
            nome: 'Gabriel',
            handle: '@Silvazkk7_',
            avatar: './assets/avatares/avatar3.jpg',
            texto: 'Só oferece produtos de qualidade',
            estrelas: 5,
        },
        {
            nome: 'Vanessa',
            handle: '@wanessagadelha',
            avatar: './assets/avatares/avatar4.jpg',
            texto: 'Ótimo Atendimento, Excelente Profissional A Melhor Loja Da Região Sem Dúvidas 🙅🏻‍♀️ Entregas Rápidas Pra Toda A Região 🤝',
            estrelas: 5,
        },
        {
            nome: 'Noeli',
            handle: '@antonia.campos12',
            avatar: './assets/avatares/avatar5.jpg',
            texto: 'Um ótimo trabalho 🙂',
            estrelas: 5,
        },
        {
            nome: 'Gabriel costa',
            handle: '@_ogabi_',
            avatar: './assets/avatares/avatar6.jpg',
            texto: 'Produtos tops ótima qualidade, sem falar em um ótimo atendimento 😉',
            estrelas: 5,
        },
        {
            nome: 'Geovanna',
            handle: '@giov4nna.___',
            avatar: './assets/avatares/avatar7.jpg',
            texto: 'Otimo',
            estrelas: 5,
        },
        {
            nome: 'Daccy Almeida',
            handle: '@daccyalmeida',
            avatar: './assets/avatares/avatar8.png',
            texto: 'Trabalho com Excelência',
            estrelas: 5,
        },
        {
            nome: 'João Eudes',
            handle: '@joaoeudes',
            avatar: './assets/avatares/avatar9.png',
            texto: 'A melhor assistência da cidade!',
            estrelas: 5,
        },
        {
            nome: 'Francisco Jonas rocha da Silva',
            handle: '@csilvaxx_02',
            avatar: './assets/avatares/avatar10.png',
            texto: 'A melhor que tem em Aracoiaba 🔥🚀',
            estrelas: 5,
        },
        {
            nome: 'Julio',
            handle: '@Juliosousah1231',
            avatar: './assets/avatares/avatar11.png',
            texto: 'Amo os produtos tudo de qualidade',
            estrelas: 5,
        },
    ];

    // Inicializar carrossel apenas se os elementos existirem
    const avatar = document.getElementById('testimonial-avatar');
    const nome = document.getElementById('testimonial-name');
    const handleEl = document.getElementById('testimonial-handle');
    const texto = document.getElementById('testimonial-text');
    const estrelasCont = document.getElementById('testimonial-stars');
    const thumbsContainer = document.getElementById('testimonial-thumbs');
    const counter = document.getElementById('testimonial-counter');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');

    if (avatar && nome && handleEl && texto && estrelasCont && thumbsContainer && counter && prevBtn && nextBtn) {
        let indexAtual = 0;

        function criarEstrelas(qtd) {
            let starsHTML = '';
            for (let i = 0; i < qtd; i++) {
                starsHTML += '<i class="fas fa-star"></i>';
            }
            for (let i = qtd; i < 5; i++) {
                starsHTML += '<i class="far fa-star"></i>';
            }
            return starsHTML;
        }

        function mostrarDepoimento(i) {
            const depo = depoimentos[i];
            avatar.src = depo.avatar;
            avatar.alt = `Avatar de ${depo.nome}`;
            nome.textContent = depo.nome;
            handleEl.textContent = depo.handle;
            texto.textContent = depo.texto;
            estrelasCont.innerHTML = criarEstrelas(depo.estrelas);
            counter.textContent = `${i + 1}/${depoimentos.length}`;

            // Atualizar destaque miniaturas
            const miniaturas = document.querySelectorAll('#testimonial-thumbs img');
            miniaturas.forEach((img, idx) => {
                if (idx === i) {
                    img.classList.add('ring-4', 'ring-gold', 'brightness-110', 'scale-110');
                } else {
                    img.classList.remove('ring-4', 'ring-gold', 'brightness-110', 'scale-110');
                }
            });
        }

        // Criar miniaturas
        depoimentos.forEach((depo, i) => {
            const img = document.createElement('img');
            img.src = depo.avatar;
            img.alt = `Miniatura de ${depo.nome}`;
            img.className = 'w-14 h-14 rounded-full cursor-pointer border-2 border-transparent hover:ring-2 hover:ring-gold transition-all duration-300 object-cover';
            img.addEventListener('click', () => {
                indexAtual = i;
                mostrarDepoimento(indexAtual);
                resetInterval();
            });
            thumbsContainer.appendChild(img);
        });

        // Navegação
        prevBtn.addEventListener('click', () => {
            indexAtual = (indexAtual - 1 + depoimentos.length) % depoimentos.length;
            mostrarDepoimento(indexAtual);
            resetInterval();
        });

        nextBtn.addEventListener('click', () => {
            indexAtual = (indexAtual + 1) % depoimentos.length;
            mostrarDepoimento(indexAtual);
            resetInterval();
        });

        // Mostrar depoimento inicial
        mostrarDepoimento(indexAtual);

        // Rotacionar depoimentos automático
        let rotacionarInterval = setInterval(() => {
            indexAtual = (indexAtual + 1) % depoimentos.length;
            mostrarDepoimento(indexAtual);
        }, 5000);

        function resetInterval() {
            clearInterval(rotacionarInterval);
            rotacionarInterval = setInterval(() => {
                indexAtual = (indexAtual + 1) % depoimentos.length;
                mostrarDepoimento(indexAtual);
            }, 5000);
        }
    }
}

// ========== GARRAFAS PERSONALIZADAS ==========
function toggleGarrafaInfo() {
    const info = document.getElementById("garrafa-info");
    if (info) {
        info.classList.toggle("hidden");
    }
}

// ========== ANIMAÇÕES DE SCROLL ==========
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section-fade').forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== TRACKING DE CONVERSÕES ==========
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', function (e) {
            // Tracking para Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'conversion',
                    'event_label': this.href
                });
            }
            
            console.log('WhatsApp click:', this.href);
        });
    });
}

// ========== OTIMIZAÇÃO DE PERFORMANCE ==========
function initPerformanceOptimizations() {
    // Lazy loading para imagens
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.loading) {
            img.loading = 'lazy';
        }
    });
}

// ========== ACESSIBILIDADE ==========
function initAccessibility() {
    // Suporte a preferência de redução de movimento
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
        document.documentElement.style.setProperty('--scroll-behavior', 'auto');
    }

    // Focus visible para melhor acessibilidade
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

// ========== SISTEMA DE NOTIFICAÇÃO PARA O DONO ==========
function initOwnerNotificationSystem() {
    // Sistema de notificações de leads importantes
    setupLeadTracking();
    setupUrgentContactSystem();
}

function setupLeadTracking() {
    // Rastrear cliques importantes
    const importantCTAs = [
        '#promocoes .btn-gold',
        '#servicos .btn-gold', 
        '.whatsapp-float',
        '#offer-popup .btn-gold'
    ];

    importantCTAs.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.addEventListener('click', function() {
                const action = this.textContent.trim();
                const section = this.closest('section')?.id || 'unknown';
                
                sendOwnerNotification('lead', {
                    action: action,
                    section: section,
                    timestamp: new Date().toISOString(),
                    url: window.location.href
                });
            });
        });
    });
}

function setupUrgentContactSystem() {
    // Botão de emergência para contato imediato
    createEmergencyButton();
    
    // Monitorar tempo na página (lead quente)
    let pageTime = 0;
    const timeInterval = setInterval(() => {
        pageTime += 5;
        
        // Se usuário passou mais de 2 minutos na página, é um lead quente
        if (pageTime === 120) {
            sendOwnerNotification('hot_lead', {
                timeOnPage: pageTime,
                pagesVisited: getVisitedSections(),
                timestamp: new Date().toISOString()
            });
        }
    }, 5000);
}

function createEmergencyButton() {
    // Criar botão flutuante de emergência
    const emergencyBtn = document.createElement('button');
    emergencyBtn.innerHTML = '⚠️ URGENTE';
    emergencyBtn.className = 'fixed bottom-24 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-bold shadow-2xl z-50 transition-all duration-300 transform hover:scale-110';
    emergencyBtn.style.zIndex = '1001';
    
    emergencyBtn.addEventListener('click', function() {
        const message = "🚨 URGENTE - Preciso de atendimento IMEDIATO! Por favor, me retorne!";
        window.open(`https://wa.me/5585982163973?text=${encodeURIComponent(message)}`, '_blank');
        
        sendOwnerNotification('urgent', {
            type: 'emergency_button',
            timestamp: new Date().toISOString()
        });
    });
    
    document.body.appendChild(emergencyBtn);
}

function getVisitedSections() {
    const sections = document.querySelectorAll('section[id]');
    const visited = [];
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            visited.push(section.id);
        }
    });
    
    return visited;
}

function sendOwnerNotification(type, data) {
    // Aqui você pode integrar com:
    // 1. Email (SMTP)
    // 2. WhatsApp Business API
    // 3. Telegram Bot
    // 4. Webhook
    
    const notification = {
        type: type,
        data: data,
        userAgent: navigator.userAgent,
        location: window.location.href
    };
    
    console.log('📞 NOTIFICAÇÃO PARA O DONO:', notification);
    
    // Exemplo: Enviar para Telegram (substitua com seu bot token)
    // sendTelegramNotification(notification);
    
    // Exemplo: Enviar email
    // sendEmailNotification(notification);
}

// ========== EXEMPLO: INTEGRAÇÃO COM TELEGRAM ==========
function sendTelegramNotification(notification) {
    const botToken = 'SEU_BOT_TOKEN_AQUI';
    const chatId = 'SEU_CHAT_ID_AQUI';
    
    const message = `🚨 NOVA NOTIFICAÇÃO ARLANCELL\n
Tipo: ${notification.type}
Ação: ${notification.data.action || 'N/A'}
Seção: ${notification.data.section || 'N/A'}
Tempo: ${new Date(notification.data.timestamp).toLocaleString('pt-BR')}
URL: ${notification.location}`;
    
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        })
    }).catch(error => console.error('Erro Telegram:', error));
}

// ========== EXEMPLO: INTEGRAÇÃO COM EMAIL ==========
function sendEmailNotification(notification) {
    const templateParams = {
        to_email: 'arlantecgames@gmail.com',
        subject: `🚨 Nova Notificação ArlanCell - ${notification.type}`,
        message: `
            Nova atividade no site ArlanCell!
            
            Tipo: ${notification.type}
            Ação: ${notification.data.action || 'N/A'}
            Seção: ${notification.data.section || 'N/A'} 
            Timestamp: ${notification.data.timestamp}
            URL: ${notification.location}
            
            User Agent: ${notification.userAgent}
        `
    };
    
    // Usando EmailJS ou similar
    // emailjs.send('service_id', 'template_id', templateParams)
    //     .then(response => console.log('Email enviado!', response))
    //     .catch(error => console.log('Erro email:', error));
}

// ========== SISTEMA DE ALERTAS SONOROS (OPCIONAL) ==========
function playNotificationSound() {
    const audio = new Audio('data:audio/wav;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAABAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAABQTEFNRTMuMTAwBKkAAAAAAAAAADUgJAOHQQAB9AAAC');
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play failed:', e));
}

// ========== MONITORAMENTO EM TEMPO REAL ==========
// Monitorar comportamento do usuário
let userActions = [];
let startTime = Date.now();

document.addEventListener('click', function(e) {
    const target = e.target;
    
    // Registrar ações importantes
    if (target.matches('a[href*="wa.me"], .btn-gold, button')) {
        userActions.push({
            type: 'click',
            element: target.textContent.trim(),
            timestamp: Date.now() - startTime,
            url: window.location.href
        });
        
        // Se usuário clicou em múltiplos CTAs, é um lead muito quente
        if (userActions.filter(action => action.element.includes('WhatsApp') || action.element.includes('ORÇAMENTO')).length >= 2) {
            sendOwnerNotification('very_hot_lead', {
                actions: userActions,
                totalTime: Date.now() - startTime
            });
        }
    }
});

// Exportar funções globais
window.toggleGarrafaInfo = toggleGarrafaInfo;
window.closeOffer = closeOffer;
window.claimOffer = claimOffer;