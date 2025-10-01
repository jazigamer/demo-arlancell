// js/notifications.js - Configurações de Notificação

const NOTIFICATION_CONFIG = {
    // Configurações do Telegram (opcional)
    telegram: {
        enabled: false,
        botToken: 'SEU_BOT_TOKEN_AQUI',
        chatId: 'SEU_CHAT_ID_AQUI'
    },
    
    // Configurações de Email (opcional) 
    email: {
        enabled: false,
        serviceId: 'seu_service_id',
        templateId: 'seu_template_id',
        toEmail: 'arlantecgames@gmail.com'
    },
    
    // Tipos de notificação a serem enviadas
    notificationTypes: {
        urgent: true,           // Botão urgente
        hot_lead: true,         // Lead quente (>2min)
        very_hot_lead: true,    // Múltiplos cliques
        lead: true              // Clique normal em CTA
    },
    
    // Limites para evitar spam
    limits: {
        maxNotificationsPerHour: 10,
        minTimeBetweenSameUser: 300000 // 5 minutos
    }
};

// Função para configurar notificações
function setupNotificationSystem() {
    console.log('🔔 Sistema de notificação ativado para ArlanCell');
    
    // Verificar se é horário comercial
    const now = new Date();
    const hour = now.getHours();
    const isBusinessHours = (hour >= 8 && hour < 18) || (hour >= 8 && hour < 12 && now.getDay() === 6);
    
    if (!isBusinessHours) {
        console.log('⏰ Fora do horário comercial - Notificações reduzidas');
    }
}

// Inicializar quando documento carregar
document.addEventListener('DOMContentLoaded', setupNotificationSystem);