import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GoogleTranslate = () => {
  const { lang } = useParams(); // Extract 'zh' from /zh/slug

  // STEP 1: Inject Google Translate script only once
  useEffect(() => {
    if (!window.google?.translate) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Define the callback Google will look for
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ar,ru,fa,tr,uz,vi,ko,hi,zh-CN,id,ms,ne',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };
  }, []);

  useEffect(() => {
    if (!lang) return;

    const langMap = {
      en: 'en',
      ar: 'ar',
      ru: 'ru',
      fa: 'fa',
      tr: 'tr',
      uz: 'uz',
      vi: 'vi',
      ko: 'ko',
      hi: 'hi',
      zh: 'zh-CN',
      id: 'id',
      ms: 'ms',
      ne: 'ne',
    };

    const targetLang = langMap[lang.toLowerCase()] || 'en';

    const interval = setInterval(() => {
      const combo = document.querySelector('.goog-te-combo');

      if (combo) {
        combo.value = targetLang;
        combo.dispatchEvent(new Event('change'));
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [lang]);

  return (
    <div
      id="google_translate_element"
      style={{
        display: 'none', 
      }}
    />
  );
};

export default GoogleTranslate;
