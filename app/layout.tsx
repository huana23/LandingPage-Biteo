import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Biteo - Một nền tảng, mọi trải nghiệm',
  description: 'Biteo tích hợp mượt mà Video giải trí, Ẩm thực phong phú, Du lịch khám phá và Mua sắm thông minh trong một nền tảng duy nhất.',
  keywords: 'Biteo, super app, Vietnam, video, food, travel, shopping, đặc sản, du lịch Việt Nam',
  openGraph: {
    title: 'Biteo - Một nền tảng, mọi trải nghiệm',
    description: 'Khám phá video, ẩm thực, du lịch và mua sắm trong một ứng dụng duy nhất.',
    type: 'website',
  },
}

const EXT_ATTR_NAMES = [
  'bis_skin_checked',
  'bis_use_mobile_settings',
  'bis_register_add_button',
  'bis_id',
  'data-bis-id',
]

// Các prefix thường gặp do extension gắn vào
const EXT_ATTR_PREFIXES = [
  'bis_',
  'data-bis-',
  'data-extension-',
  'data-grammarly',
  'data-grammarly-',
  'data-lastpass-',
  'cz-shortcut-',
  'data-new-gr-',
]

const hydrationBootstrapScript = `
(function () {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  var EXT_ATTR_NAMES = ${JSON.stringify(EXT_ATTR_NAMES)};
  var EXT_ATTR_PREFIXES = ${JSON.stringify(EXT_ATTR_PREFIXES)};
  var REACT_HYDRATION_PREFIX = 'Warning: Extra attributes from the server:';
  var LAST_ERROR_PREFIXES = [
    'runtime.lastError',
    'Receiving end does not exist',
    'Could not establish connection'
  ];
  var RESERVED = {
    'class': true, 'id': true, 'style': true, 'href': true, 'src': true,
    'lang': true, 'dir': true, 'title': true, 'tabindex': true,
    'role': true, 'aria-label': true, 'aria-expanded': true, 'aria-hidden': true,
    'data-reactroot': true
  };
  var isReactProp = function (n) {
    return n.indexOf('data-react') === 0 || n === 'suppressContentEditableWarning' || n === 'suppressHydrationWarning';
  };
  function isExtensionAttr(name) {
    if (!name) return false;
    if (RESERVED[name]) return false;
    if (isReactProp(name)) return false;
    if (EXT_ATTR_NAMES.indexOf(name) !== -1) return true;
    for (var i = 0; i < EXT_ATTR_PREFIXES.length; i++) {
      if (name.indexOf(EXT_ATTR_PREFIXES[i]) === 0) return true;
    }
    return false;
  }
  function strip(root) {
    if (!root) return;
    var nodes = root.querySelectorAll ? root.querySelectorAll('*') : [];
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (!el || !el.attributes) continue;
      var attrs = Array.prototype.slice.call(el.attributes);
      for (var j = 0; j < attrs.length; j++) {
        if (isExtensionAttr(attrs[j].name)) {
          el.removeAttribute(attrs[j].name);
        }
      }
    }
  }
  function onMutations(records) {
    for (var i = 0; i < records.length; i++) {
      var r = records[i];
      if (r.addedNodes && r.addedNodes.length) {
        for (var k = 0; k < r.addedNodes.length; k++) {
          var n = r.addedNodes[k];
          if (n && n.nodeType === 1) strip(n);
        }
      }
      if (r.type === 'attributes' && r.target && r.attributeName && isExtensionAttr(r.attributeName)) {
        r.target.removeAttribute(r.attributeName);
      }
    }
  }
  // strip ngay DOM đã render
  strip(document.documentElement);

  // Theo dõi mọi thay đổi attribute / node mới chèn vào trước khi React hydrate xong
  try {
    var mo = new MutationObserver(onMutations);
    mo.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeOldValue: true
    });
    window.__biteoExtensionAttrObserver = mo;
  } catch (_) {}

  // Patch console.error để nuốt hydration warning + lastError
  if (!window.__biteoConsolePatched) {
    window.__biteoConsolePatched = true;
    var original = console.error ? console.error.bind(console) : function () {};
    console.error = function () {
      var first = arguments[0];
      var msg = typeof first === 'string' ? first : (first && first.message) || '';
      for (var i = 0; i < LAST_ERROR_PREFIXES.length; i++) {
        if (msg.indexOf(LAST_ERROR_PREFIXES[i]) !== -1) return;
      }
      if (msg.indexOf(REACT_HYDRATION_PREFIX) === 0) {
        var body = msg.slice(REACT_HYDRATION_PREFIX.length);
        var names = body.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
        var onlyExtension = names.length > 0 && names.every(isExtensionAttr);
        if (onlyExtension) return;
      }
      return original.apply(null, arguments);
    };
  }

  // Catch uncaught runtime.lastError throws
  window.addEventListener('error', function (e) {
    var m = (e && e.message) || '';
    for (var i = 0; i < LAST_ERROR_PREFIXES.length; i++) {
      if (m.indexOf(LAST_ERROR_PREFIXES[i]) !== -1) {
        e.preventDefault();
        e.stopImmediatePropagation && e.stopImmediatePropagation();
        return false;
      }
    }
    return true;
  }, true);
  window.addEventListener('unhandledrejection', function (e) {
    var reason = e && e.reason;
    var msg = (typeof reason === 'string' ? reason : (reason && reason.message)) || '';
    for (var i = 0; i < LAST_ERROR_PREFIXES.length; i++) {
      if (msg.indexOf(LAST_ERROR_PREFIXES[i]) !== -1) {
        e.preventDefault();
        return;
      }
    }
  }, true);
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/images/Logo-Biteo.jpg?v=2" />
        <script
          dangerouslySetInnerHTML={{ __html: hydrationBootstrapScript }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
