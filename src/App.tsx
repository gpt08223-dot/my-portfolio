import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Palette, Code, ArrowRight, Github, Linkedin, Mail, Menu, X, ChevronDown, Sparkles, Zap, Heart } from 'lucide-react';
import { cn } from './utils/cn';


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'contact', label: 'Контакты' },
  ];

  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'Телеграмм боты',
      description: 'Создаю функциональных и красивых ботов любой сложности: от простых автответчиков до сложных систем с интеграциями.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Дизайн интерфейсов',
      description: 'Разрабатываю современный и удобный дизайн для веб-сайтов, мобильных приложений и ботов.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Веб-разработка',
      description: 'Создаю адаптивные и быстрые веб-приложения с использованием современных технологий.',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  const projects = [
    {
      title: 'E-commerce Telegram Bot',
      category: 'Телеграмм бот',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400&h=300',
      description: 'Полноценный магазин в Telegram с корзиной, оплатой, отслеживанием заказов и админ-панелью',
    },
    {
      title: 'AI Support Bot',
      category: 'Телеграмм бот',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=400&h=300',
      description: 'Умный бот техподдержки с интеграцией GPT, базой знаний и эскалацией к живым операторам',
    },
    {
      title: 'CRM Dashboard',
      category: 'UI/UX Дизайн',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300',
      description: 'Современный дизайн панели управления для CRM-системы с аналитикой и отчетностью',
    },
    {
      title: 'Content Management Bot',
      category: 'Телеграмм бот',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=400&h=300',
      description: 'Бот для управления контентом в каналах и группах с планировкой публикаций и аналитикой',
    },
    {
      title: 'Fitness App UI',
      category: 'UI/UX Дизайн',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400&h=300',
      description: 'Дизайн мобильного приложения для фитнес-трекинга с персонализированными тренировками',
    },
    {
      title: 'Booking System Bot',
      category: 'Телеграмм бот',
      image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=400&h=300',
      description: 'Система бронирования услуг с календарем, напоминаниями и интеграцией с Google Calendar',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              fm
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-slate-400 hover:text-white'
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-slate-800"
            >
              <div className="px-4 py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      'block w-full text-left text-sm font-medium py-2',
                      activeSection === item.id
                        ? 'text-cyan-400'
                        : 'text-slate-400 hover:text-white'
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[150px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px]"
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-300 mb-8 border border-slate-700"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Доступен для новых проектов</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Привет, я</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              fxckmorfin
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            Разработчик <span className="text-cyan-400">Телеграмм ботов</span> и{' '}
            <span className="text-blue-400">UI/UX дизайнер</span>. Создаю современные и
            функциональные решения для бизнеса.
          </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/fxckmorfin"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white flex items-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              Написать в Telegram
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-full font-semibold text-white flex items-center gap-2 hover:bg-slate-700 transition-colors"
            >
              Смотреть работы
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-6 h-6 text-slate-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Мои услуги</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Предлагаю комплексные решения для вашего бизнеса
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-slate-900/50 rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                <div className={cn('w-16 h-16 rounded-2xl bg-gradient-to-r', service.color, 'flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300')}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Некоторые из моих последних работ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-2 text-white">{project.title}</h3>
                  <p className="text-slate-400">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Давайте создадим что-то вместе</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
            <p className="text-slate-400 mt-6 text-lg">
              Есть идея проекта? Напишите мне, и мы обсудим детали!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800"
          >
            <div className="max-w-md mx-auto mb-10">
              <motion.a
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="https://t.me/fxckmorfin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Основной аккаунт</div>
                  <div className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    @fxckmorfin
                  </div>
                </div>
              </motion.a>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-center"
            >
              <a
                href="https://t.me/fxckmorfin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-white text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow"
              >
                <Zap className="w-6 h-6" />
                Написать прямо сейчас
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              fm
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <span>Сделано с</span>
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>fxckmorfin</span>
            </div>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://t.me/fxckmorfin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}