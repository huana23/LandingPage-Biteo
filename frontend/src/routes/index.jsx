import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetail from '../pages/ServiceDetail';
import PartnersPage from '../pages/PartnersPage';
import AffiliatesPage from '../pages/AffiliatesPage';
import BlogPage from '../pages/BlogPage';
import BlogDetail from '../pages/BlogDetail';
import ContactPage from '../pages/ContactPage';
import FAQPage from '../pages/FAQPage';
import DownloadPage from '../pages/DownloadPage';
import HelpPage from '../pages/HelpPage';
import CareersPage from '../pages/CareersPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';

const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/services', component: ServicesPage },
  { path: '/services/:slug', component: ServiceDetail },
  { path: '/partners', component: PartnersPage },
  { path: '/affiliates', component: AffiliatesPage },
  { path: '/blog', component: BlogPage },
  { path: '/blog/:slug', component: BlogDetail },
  { path: '/contact', component: ContactPage },
  { path: '/faq', component: FAQPage },
  { path: '/download', component: DownloadPage },
  { path: '/help', component: HelpPage },
  { path: '/careers', component: CareersPage },
  { path: '/terms', component: TermsPage },
  { path: '/privacy', component: PrivacyPage },
];

export { publicRoutes };
