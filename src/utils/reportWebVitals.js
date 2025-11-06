import { onCLS, onFID, onLCP, onINP, onTTFB } from 'web-vitals';

function sendToGA4(metric) {
  if (typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: metric.name,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
    });
  } catch (_) {}
}

export function initWebVitals() {
  onCLS(sendToGA4);
  onFID(sendToGA4);
  onLCP(sendToGA4);
  onINP(sendToGA4);
  onTTFB(sendToGA4);
}


