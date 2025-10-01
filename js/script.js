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
        localStorage.setItem('lastOfferPopup', new Date().toDateString());
    }
}

function claimOffer() {
    const message = "Olá! Gostaria de aproveitar a oferta da LIMPEZA INTERNA GRÁTIS no meu primeiro conserto!";
    window.open(`https://wa.me/5585982163973?text=${encodeURIComponent(message)}`, '_blank');
    closeOffer();
    
    // ✅ AGORA COM SEU GA REAL
    gtag('event', 'conversion', {
        'send_to': 'G-492K84P5CN/offer_claim',
        'value': 40.00,
        'currency': 'BRL'
    });
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
                    const icon = s.querySelector('i');
                    if (!icon) return;

                    if (i < rating) {
                        s.classList.add('text-yellow-400', 'active');
                        icon.classList.replace('far', 'fas');
                    } else {
                        s.classList.remove('text-yellow-400', 'active');
                        icon.classList.replace('fas', 'far');
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
    texto:
      'Só oferece produtos de qualidad',
    estrelas: 5,
  },
  {
    nome: 'Vanessa',
    handle: '@wanessagadelha',
    avatar: './assets/avatares/avatar4.jpg',
    texto:
      'Ótimo Atendimento, Excelente Profissional A Melhor Loja Da Região Sem Dúvidas 🙅🏻‍♀️ Entregas Rápidas Pra Toda A Região 🤝',
    estrelas: 5,
  },
  {
    nome: 'Noeli',
    handle: '@antonia.campos12',
    avatar: './assets/avatares/avatar5.jpg',
    texto:
      'Um ótimo trabalho 🙂',
    estrelas: 5,
  },
  {
    nome: 'Gabriel costa',
    handle: '@_ogabi_',
    avatar: './assets/avatares/avatar6.jpg',
    texto:
      'Produtos tops ótima qualidade, sem falar em um ótimo atendimento 😉',
    estrelas: 5,
  },
  {
    nome: 'Geovanna',
    handle: '@giov4nna.___',
    avatar: './assets/avatares/avatar7.jpg',
    texto:
      'Otimo',
    estrelas: 5,
  },
  {
    nome: 'Daccy Almeida',
    handle: '@daccyalmeida',
    avatar: './assets/avatares/avatar8.png',
    texto:
      'Trabalho com Excelência',
    estrelas: 5,
  },
  {
    nome: 'João Eudes',
    handle: '@joaoeudes',
    avatar: './assets/avatares/avatar9.png',
    texto:
      'A melhor assistência da cidade!',
    estrelas: 5,
  },
  {
    nome: 'Francisco Jonas rocha da Silva',
    handle: '@csilvaxx_02',
    avatar: './assets/avatares/avatar10.png',
    texto:
      'A melhor que tem em Aracoiaba 🔥🚀',
    estrelas: 5,
  },
  {
    nome: 'Julio',
    handle: '@Juliosousah1231',
    avatar: './assets/avatares/avatar11.png',
    texto:
      'Amo os produtos tudo de qualidade',
    estrelas: 5,
  },
        // ... (seus outros depoimentos)
    ];

    const elements = {
        avatar: document.getElementById('testimonial-avatar'),
        nome: document.getElementById('testimonial-name'),
        handleEl: document.getElementById('testimonial-handle'),
        texto: document.getElementById('testimonial-text'),
        estrelasCont: document.getElementById('testimonial-stars'),
        thumbsContainer: document.getElementById('testimonial-thumbs'),
        counter: document.getElementById('testimonial-counter'),
        prevBtn: document.getElementById('prev-testimonial'),
        nextBtn: document.getElementById('next-testimonial')
    };

    if (Object.values(elements).every(el => el !== null)) {
        let indexAtual = 0;
        let rotacionarInterval;

        function criarEstrelas(qtd) {
            let starsHTML = '';
            for (let i = 0; i < qtd; i++) starsHTML += '<i class="fas fa-star"></i>';
            for (let i = qtd; i < 5; i++) starsHTML += '<i class="far fa-star"></i>';
            return starsHTML;
        }

        function mostrarDepoimento(i) {
            const depo = depoimentos[i];
            elements.avatar.src = depo.avatar;
            elements.avatar.alt = `Avatar de ${depo.nome}`;
            elements.nome.textContent = depo.nome;
            elements.handleEl.textContent = depo.handle;
            elements.texto.textContent = depo.texto;
            elements.estrelasCont.innerHTML = criarEstrelas(depo.estrelas);
            elements.counter.textContent = `${i + 1}/${depoimentos.length}`;

            // ✅ CORREÇÃO AQUI - separar as classes
            document.querySelectorAll('#testimonial-thumbs img').forEach((img, idx) => {
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
            elements.thumbsContainer.appendChild(img);
        });

        // Navegação
        elements.prevBtn.addEventListener('click', () => {
            indexAtual = (indexAtual - 1 + depoimentos.length) % depoimentos.length;
            mostrarDepoimento(indexAtual);
            resetInterval();
        });

        elements.nextBtn.addEventListener('click', () => {
            indexAtual = (indexAtual + 1) % depoimentos.length;
            mostrarDepoimento(indexAtual);
            resetInterval();
        });

        function resetInterval() {
            clearInterval(rotacionarInterval);
            rotacionarInterval = setInterval(() => {
                indexAtual = (indexAtual + 1) % depoimentos.length;
                mostrarDepoimento(indexAtual);
            }, 5000);
        }

        mostrarDepoimento(indexAtual);
        rotacionarInterval = setInterval(() => {
            indexAtual = (indexAtual + 1) % depoimentos.length;
            mostrarDepoimento(indexAtual);
        }, 5000);
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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section-fade').forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ✅ WHATSAPP TRACKING ATUALIZADO
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', function () {
            // ✅ AGORA COM SEU GA REAL
            gtag('event', 'whatsapp_click', {
                'event_category': 'conversion',
                'event_label': this.href
            });
        });
    });
}

// ========== OTIMIZAÇÃO DE PERFORMANCE ==========
function initPerformanceOptimizations() {
    document.querySelectorAll('img').forEach(img => {
        if (!img.loading) img.loading = 'lazy';
    });
}

// ========== ACESSIBILIDADE ==========
function initAccessibility() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--scroll-behavior', 'auto');
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') document.body.classList.add('keyboard-navigation');
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// ========== SISTEMA DE NOTIFICAÇÃO PARA O DONO ==========
function initOwnerNotificationSystem() {
    setupLeadTracking();
    setupUrgentContactSystem();
}

function setupLeadTracking() {
    const importantCTAs = [
        '#promocoes .btn-gold',
        '#servicos .btn-gold', 
        '.whatsapp-float',
        '#offer-popup .btn-gold'
    ];

    importantCTAs.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener('click', function() {
                sendOwnerNotification('lead', {
                    action: this.textContent.trim(),
                    section: this.closest('section')?.id || 'unknown',
                    timestamp: new Date().toISOString(),
                    url: window.location.href
                });
            });
        });
    });
}

function setupUrgentContactSystem() {
    createEmergencyButton();
    
    let pageTime = 0;
    const timeInterval = setInterval(() => {
        pageTime += 5;
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
    if (document.getElementById('emergency-btn')) return;
    
    const emergencyBtn = document.createElement('button');
    emergencyBtn.id = 'emergency-btn';
    emergencyBtn.innerHTML = '⚠️ URGENTE';
    emergencyBtn.className = 'fixed bottom-24 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-bold shadow-2xl z-50 transition-all duration-300 transform hover:scale-110';
    emergencyBtn.style.zIndex = '1001';
    
    emergencyBtn.addEventListener('click', function() {
        const message = "🚨 URGENTE - Preciso de atendimento IMEDIATO! Por favor, me retorne!";
        window.open(`https://wa.me/5585982163973?text=${encodeURIComponent(message)}`, '_blank');
        
        // ✅ NOVO TRACKING PARA BOTÃO URGENTE
        gtag('event', 'urgent_contact', {
            'event_category': 'conversion',
            'event_label': 'botao_emergencia'
        });
        
        sendOwnerNotification('urgent', { type: 'emergency_button', timestamp: new Date().toISOString() });
    });
    
    document.body.appendChild(emergencyBtn);
}

function getVisitedSections() {
    const visited = [];
    document.querySelectorAll('section[id]').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            visited.push(section.id);
        }
    });
    return visited;
}

// ========== SISTEMA DE NOTIFICAÇÕES REAIS ==========
async function sendRealNotification(type, data) {
    const botToken = '7769230336:AAFlV93hWqjJiKr-c0yIJRRcq_b82VDXPeQ';
    const chatId = '7349012355';
    
    const message = `🚨 ARLANCELL - NOVO LEAD!

📞 Tipo: ${type}
👤 Ação: ${data.action || 'Navegação Avançada'}
📍 Seção: ${data.section || 'Múltiplas Seções'}  
⏰ Tempo: ${data.timeOnPage || 0} segundos
📊 Páginas: ${data.pagesVisited?.join(', ') || 'Home'}
🌐 URL: ${window.location.href}
🕒 Horário: ${new Date().toLocaleString('pt-BR')}`;

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: message })
        });
        
        const result = await response.json();
        if (result.ok) {
            console.log('✅ Notificação enviada para Telegram!');
        } else {
            console.log('❌ Erro Telegram:', result);
        }
    } catch (error) {
        console.error('❌ Erro ao enviar:', error);
    }
}

function showLeadAlert(type, data) {
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #D4AF37;
        color: black;
        padding: 15px;
        border-radius: 8px;
        z-index: 10000;
        font-weight: bold;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        max-width: 300px;
    `;
    
    let message = '';
    if (type === 'hot_lead') message = '🔥 LEAD QUENTE! Usuário passou 2 minutos no site';
    else if (type === 'very_hot_lead') message = '🚨 LEAD MUITO QUENTE! Clique em múltiplos botões';
    else message = '📞 Novo lead no site';
    
    alertDiv.innerHTML = `
        <div style="margin-bottom: 8px;">${message}</div>
        <small style="font-weight: normal;">Seções: ${data.pagesVisited?.join(', ') || 'N/A'}</small>
        <button onclick="this.parentElement.remove()" style="margin-top: 8px; padding: 4px 8px; background: black; color: white; border: none; border-radius: 4px; cursor: pointer;">OK</button>
    `;
    
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 8000);
}

// ========== FUNÇÃO PRINCIPAL DE NOTIFICAÇÃO ==========
function sendOwnerNotification(type, data) {
    console.log('📞 NOTIFICAÇÃO PARA O DONO:', { type, data, userAgent: navigator.userAgent, location: window.location.href });
    
    // 🔔 Mostra alerta visual no site
    showLeadAlert(type, data);
    
    // 📤 Envia para Telegram
    sendRealNotification(type, data);
}

// ========== MONITORAMENTO DE LEADS ==========
let userActions = [];
let startTime = Date.now();

document.addEventListener('click', function(e) {
    const target = e.target;
    
    if (target.matches('a[href*="wa.me"], .btn-gold, button')) {
        userActions.push({
            type: 'click',
            element: target.textContent.trim(),
            timestamp: Date.now() - startTime,
            url: window.location.href
        });
        
        if (userActions.filter(action => 
            action.element.includes('WhatsApp') || 
            action.element.includes('ORÇAMENTO') ||
            action.element.includes('Chamar') ||
            action.element.includes('Fale')
        ).length >= 2) {
            sendOwnerNotification('very_hot_lead', {
                actions: userActions,
                totalTime: Date.now() - startTime
            });
        }
    }
});

// ========== TESTE INICIAL (REMOVA DEPOIS) ==========
setTimeout(() => {
    sendOwnerNotification('hot_lead_test', {
        pagesVisited: ['home', 'servicos', 'contato'],
        timeOnPage: 130,
        action: 'Teste Inicial'
    });
}, 3000);

// ========== EXPORTAR FUNÇÕES GLOBAIS ==========
window.toggleGarrafaInfo = toggleGarrafaInfo;
window.closeOffer = closeOffer;
window.claimOffer = claimOffer;