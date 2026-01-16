import { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';

// Google Analytics tracking function
declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}

export const CookieConsentBanner = () => {
    const { t } = useTranslation();
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if consent was already given
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setShowBanner(true);
        } else if (consent === 'accepted') {
            enableTracking();
        }
    }, []);

    const enableTracking = () => {
        // Enable Google Analytics
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted'
            });
        }
    };

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        enableTracking();
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });
        }
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <CookieConsent
            location="bottom"
            buttonText={t('cookies.accept', 'Accepteren')}
            declineButtonText={t('cookies.decline', 'Weigeren')}
            enableDeclineButton
            onAccept={handleAccept}
            onDecline={handleDecline}
            style={{
                background: 'rgba(11, 17, 32, 0.98)',
                backdropFilter: 'blur(12px)',
                padding: '20px',
                alignItems: 'center',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.2)'
            }}
            buttonStyle={{
                background: 'hsl(199, 89%, 48%)',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                borderRadius: '9999px',
                padding: '12px 32px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
            }}
            declineButtonStyle={{
                background: 'transparent',
                color: 'white',
                fontSize: '14px',
                fontWeight: '600',
                borderRadius: '9999px',
                padding: '12px 32px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.2s'
            }}
            contentStyle={{
                flex: '1 0 300px',
                margin: '0 20px'
            }}
        >
            <div className="flex flex-col gap-2">
                <p className="text-white font-semibold text-base">
                    {t('cookies.title', 'Deze website gebruikt cookies')}
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                    {t('cookies.message', 'We gebruiken cookies om uw ervaring te verbeteren en voor marketing doeleinden. Door op "Accepteren" te klikken, stemt u in met het gebruik van alle cookies voor analyse en advertenties (Google Ads, Meta, LinkedIn).')}
                </p>
            </div>
        </CookieConsent>
    );
};
