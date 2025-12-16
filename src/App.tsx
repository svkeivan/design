import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { ColorPalette, DesignStyle } from '@/types/theme';

// Color Palettes Data
const colorPalettes = {
  'calm-professional': {
    name: 'Calm Professional',
    shortName: 'Healthcare',
    description: 'Trust & professionalism',
    colors: {
      primary: '#0D7377',
      secondary: '#7FB069',
      accent: '#E8AA42',
      background: '#FAFBFC',
      surface: '#F0F4F5',
      textPrimary: '#1A2B3C',
      textSecondary: '#5A6978',
      success: '#22C55E',
      warning: '#F59E0B',
      error: '#EF4444',
    },
  },
  'modern-wellness': {
    name: 'Modern Wellness',
    shortName: 'Tech-Forward',
    description: 'Modern & calming',
    colors: {
      primary: '#4F46E5',
      secondary: '#A78BFA',
      accent: '#34D399',
      background: '#FEFEFE',
      surface: '#F5F3FF',
      textPrimary: '#1E1B4B',
      textSecondary: '#6B7280',
      success: '#10B981',
      warning: '#FBBF24',
      error: '#F43F5E',
    },
  },
  'warm-earth': {
    name: 'Warm Earth Tones',
    shortName: 'Approachable',
    description: 'Human-centered',
    colors: {
      primary: '#C2704B',
      secondary: '#2D5A4A',
      accent: '#D4A853',
      background: '#FDF9F6',
      surface: '#F5EDE4',
      textPrimary: '#2C1810',
      textSecondary: '#6B5B4F',
      success: '#84CC16',
      warning: '#FB923C',
      error: '#DC2626',
    },
  },
};

const designStyles = {
  'clean-card': {
    name: 'Clean Card-Based',
    shortName: 'Clean',
    description: 'Rounded, subtle shadows',
    borderRadius: '12px',
    borderRadiusSm: '8px',
    borderRadiusLg: '16px',
    shadow: '0 2px 8px rgba(0,0,0,0.08)',
    shadowLg: '0 4px 16px rgba(0,0,0,0.1)',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700 },
  },
  'soft-neumorphic': {
    name: 'Soft Neumorphic',
    shortName: 'Soft',
    description: 'Pillow-like, depth',
    borderRadius: '16px',
    borderRadiusSm: '12px',
    borderRadiusLg: '20px',
    shadow: '6px 6px 12px rgba(0,0,0,0.08), -6px -6px 12px rgba(255,255,255,0.9)',
    shadowLg: '8px 8px 20px rgba(0,0,0,0.1), -8px -8px 20px rgba(255,255,255,0.95)',
    fontFamily: "'Outfit', system-ui, sans-serif",
    fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700 },
  },
  'minimalist-clinical': {
    name: 'Minimalist Clinical',
    shortName: 'Minimal',
    description: 'Sharp, content-first',
    borderRadius: '4px',
    borderRadiusSm: '2px',
    borderRadiusLg: '6px',
    shadow: '0 1px 3px rgba(0,0,0,0.06)',
    shadowLg: '0 2px 6px rgba(0,0,0,0.08)',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontWeight: { normal: 400, medium: 500, semibold: 600, bold: 700 },
  },
};

function App() {
  const [selectedPalette, setSelectedPalette] = useState<ColorPalette>('calm-professional');
  const [selectedStyle, setSelectedStyle] = useState<DesignStyle>('clean-card');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const colors = colorPalettes[selectedPalette].colors;
  const design = designStyles[selectedStyle];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Mobile Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Drawer on mobile, fixed on desktop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white border-r border-slate-200 z-50 overflow-y-auto shadow-xl lg:relative lg:z-auto"
          >
            <div className="p-4 sm:p-5 border-b border-slate-200 sticky top-0 bg-white z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-base sm:text-lg font-bold text-slate-900">Theme Selector</h1>
                  <p className="text-[10px] sm:text-xs text-slate-500">Clarity Path Design</p>
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 hover:bg-slate-100 active:bg-slate-200 rounded-lg transition-colors touch-manipulation"
                  aria-label="Close sidebar"
                >
                  <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Color Palette Selection */}
            <div className="p-4 sm:p-5 border-b border-slate-100">
              <h2 className="text-xs sm:text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Color Palette</h2>
              <div className="space-y-2">
                {(Object.entries(colorPalettes) as [ColorPalette, typeof colorPalettes['calm-professional']][]).map(([key, palette]) => (
                  <motion.button
                    key={key}
                    onClick={() => setSelectedPalette(key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-2.5 sm:p-3 rounded-xl border-2 transition-all text-left touch-manipulation ${
                      selectedPalette === key
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex -space-x-1 flex-shrink-0">
                        {[palette.colors.primary, palette.colors.secondary, palette.colors.accent].map((color, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white shadow-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-slate-900 text-xs sm:text-sm">{palette.shortName}</div>
                        <div className="text-[10px] sm:text-xs text-slate-500">{palette.description}</div>
                      </div>
                      {selectedPalette === key && (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Design Style Selection */}
            <div className="p-4 sm:p-5 border-b border-slate-100">
              <h2 className="text-xs sm:text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Design Style</h2>
              <div className="space-y-2">
                {(Object.entries(designStyles) as [DesignStyle, typeof designStyles['clean-card']][]).map(([key, style]) => (
                  <motion.button
                    key={key}
                    onClick={() => setSelectedStyle(key)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-2.5 sm:p-3 rounded-xl border-2 transition-all text-left touch-manipulation ${
                      selectedStyle === key
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-200 flex-shrink-0"
                        style={{
                          borderRadius: style.borderRadius,
                          boxShadow: style.shadow,
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-slate-900 text-xs sm:text-sm">{style.shortName}</div>
                        <div className="text-[10px] sm:text-xs text-slate-500">{style.description}</div>
                      </div>
                      {selectedStyle === key && (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Color Swatches */}
            <div className="p-4 sm:p-5">
              <h2 className="text-xs sm:text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Color Swatches</h2>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {Object.entries(colors).map(([name, color]) => (
                  <div key={name} className="text-center">
                    <div
                      className="w-full aspect-square rounded-md sm:rounded-lg shadow-inner mb-1"
                      style={{ backgroundColor: color }}
                      title={`${name}: ${color}`}
                    />
                    <div className="text-[8px] sm:text-[9px] text-slate-500 truncate">{name.replace(/([A-Z])/g, '\n$1').split('\n')[0]}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Toggle Sidebar Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed left-4 top-4 z-50 p-3 bg-white rounded-xl shadow-lg border border-slate-200 hover:bg-slate-50 active:bg-slate-100 transition-colors touch-manipulation lg:hidden"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      {/* Desktop Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="hidden lg:fixed lg:left-4 lg:top-4 lg:z-50 lg:p-2 lg:bg-white lg:rounded-lg lg:shadow-md lg:border lg:border-slate-200 lg:hover:bg-slate-50 lg:transition-colors"
        aria-label="Toggle sidebar"
      >
        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-80' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedPalette}-${selectedStyle}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen"
            style={{
              backgroundColor: colors.background,
              fontFamily: design.fontFamily,
            }}
          >
            {/* Preview Header */}
            <header
              className="sticky top-0 z-40 border-b"
              style={{
                backgroundColor: colors.surface,
                borderColor: `${colors.textSecondary}20`,
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0"
                      style={{ 
                        backgroundColor: colors.primary,
                        borderRadius: design.borderRadiusSm,
                      }}
                    >
                      CP
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm sm:text-base truncate" style={{ color: colors.textPrimary, fontWeight: design.fontWeight.semibold }}>
                        Clarity Path
                      </div>
                      <div className="text-[10px] sm:text-xs truncate" style={{ color: colors.textSecondary }}>
                        {colorPalettes[selectedPalette].shortName} • {designStyles[selectedStyle].shortName}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <button
                      className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium border transition-all touch-manipulation"
                      style={{
                        color: colors.textPrimary,
                        borderColor: `${colors.textSecondary}30`,
                        borderRadius: design.borderRadiusSm,
                      }}
                    >
                      <span className="hidden sm:inline">Settings</span>
                      <span className="sm:hidden">⚙</span>
                    </button>
                    <button
                      className="px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white transition-all touch-manipulation"
                      style={{
                        backgroundColor: colors.primary,
                        borderRadius: design.borderRadiusSm,
                        boxShadow: design.shadow,
                      }}
                    >
                      <span className="hidden sm:inline">New Session</span>
                      <span className="sm:hidden">+</span>
                    </button>
                  </div>
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
              {/* Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { label: 'Active Clients', value: '24', change: '+3 this month', icon: '👥' },
                  { label: 'Sessions Today', value: '6', change: '2 remaining', icon: '📅' },
                  { label: 'Course Progress', value: '78%', change: '+12% this week', icon: '📈' },
                  { label: 'Assessments', value: '12', change: '3 pending', icon: '📋' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 sm:p-5"
                    style={{
                      backgroundColor: colors.surface,
                      borderRadius: design.borderRadius,
                      boxShadow: design.shadow,
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xl sm:text-2xl">{stat.icon}</span>
                      <span
                        className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1"
                        style={{
                          backgroundColor: `${colors.success}15`,
                          color: colors.success,
                          borderRadius: design.borderRadiusSm,
                        }}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold" style={{ color: colors.textPrimary, fontWeight: design.fontWeight.bold }}>
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm" style={{ color: colors.textSecondary }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Buttons Section */}
                <div
                  className="p-4 sm:p-6"
                  style={{
                    backgroundColor: colors.surface,
                    borderRadius: design.borderRadius,
                    boxShadow: design.shadow,
                  }}
                >
                  <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: colors.textPrimary, fontWeight: design.fontWeight.semibold }}>
                    Button Styles
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <button
                      className="w-full py-3 sm:py-2.5 px-4 text-sm font-medium text-white transition-all touch-manipulation"
                      style={{
                        backgroundColor: colors.primary,
                        borderRadius: design.borderRadiusSm,
                        boxShadow: design.shadow,
                        fontWeight: design.fontWeight.medium,
                      }}
                    >
                      Primary Button
                    </button>
                    <button
                      className="w-full py-3 sm:py-2.5 px-4 text-sm font-medium text-white transition-all touch-manipulation"
                      style={{
                        backgroundColor: colors.secondary,
                        borderRadius: design.borderRadiusSm,
                        fontWeight: design.fontWeight.medium,
                      }}
                    >
                      Secondary Button
                    </button>
                    <button
                      className="w-full py-3 sm:py-2.5 px-4 text-sm font-medium border-2 transition-all touch-manipulation"
                      style={{
                        backgroundColor: 'transparent',
                        color: colors.primary,
                        borderColor: colors.primary,
                        borderRadius: design.borderRadiusSm,
                        fontWeight: design.fontWeight.medium,
                      }}
                    >
                      Outline Button
                    </button>
                    <button
                      className="w-full py-3 sm:py-2.5 px-4 text-sm font-medium text-white transition-all touch-manipulation"
                      style={{
                        backgroundColor: colors.accent,
                        borderRadius: design.borderRadiusSm,
                        fontWeight: design.fontWeight.medium,
                      }}
                    >
                      Accent Button
                    </button>
                    <div className="flex gap-2 pt-2">
                      <button
                        className="flex-1 py-2.5 sm:py-2 px-2 sm:px-3 text-xs font-medium text-white touch-manipulation"
                        style={{ backgroundColor: colors.success, borderRadius: design.borderRadiusSm }}
                      >
                        Success
                      </button>
                      <button
                        className="flex-1 py-2.5 sm:py-2 px-2 sm:px-3 text-xs font-medium text-white touch-manipulation"
                        style={{ backgroundColor: colors.warning, borderRadius: design.borderRadiusSm }}
                      >
                        Warning
                      </button>
                      <button
                        className="flex-1 py-2.5 sm:py-2 px-2 sm:px-3 text-xs font-medium text-white touch-manipulation"
                        style={{ backgroundColor: colors.error, borderRadius: design.borderRadiusSm }}
                      >
                        Error
                      </button>
                    </div>
                  </div>
                </div>

                {/* Form Inputs */}
                <div
                  className="p-4 sm:p-6"
                  style={{
                    backgroundColor: colors.surface,
                    borderRadius: design.borderRadius,
                    boxShadow: design.shadow,
                  }}
                >
                  <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: colors.textPrimary, fontWeight: design.fontWeight.semibold }}>
                    Form Elements
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm mb-1.5" style={{ color: colors.textSecondary, fontWeight: design.fontWeight.medium }}>
                        Client Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter name..."
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border outline-none transition-all touch-manipulation"
                        style={{
                          backgroundColor: colors.background,
                          borderColor: `${colors.textSecondary}30`,
                          borderRadius: design.borderRadiusSm,
                          color: colors.textPrimary,
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm mb-1.5" style={{ color: colors.textSecondary, fontWeight: design.fontWeight.medium }}>
                        Session Type
                      </label>
                      <select
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border outline-none touch-manipulation"
                        style={{
                          backgroundColor: colors.background,
                          borderColor: `${colors.textSecondary}30`,
                          borderRadius: design.borderRadiusSm,
                          color: colors.textPrimary,
                        }}
                      >
                        <option>Individual Therapy</option>
                        <option>Couples Therapy</option>
                        <option>Group Session</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm mb-1.5" style={{ color: colors.textSecondary, fontWeight: design.fontWeight.medium }}>
                        Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Session notes..."
                        className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border outline-none resize-none touch-manipulation"
                        style={{
                          backgroundColor: colors.background,
                          borderColor: `${colors.textSecondary}30`,
                          borderRadius: design.borderRadiusSm,
                          color: colors.textPrimary,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Badges & Tags */}
                <div
                  className="p-4 sm:p-6 sm:col-span-2 lg:col-span-1"
                  style={{
                    backgroundColor: colors.surface,
                    borderRadius: design.borderRadius,
                    boxShadow: design.shadow,
                  }}
                >
                  <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: colors.textPrimary, fontWeight: design.fontWeight.semibold }}>
                    Badges & Status
                  </h3>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="px-3 py-1 text-xs font-medium text-white"
                        style={{ backgroundColor: colors.primary, borderRadius: design.borderRadiusSm }}
                      >
                        Active
                      </span>
                      <span
                        className="px-3 py-1 text-xs font-medium text-white"
                        style={{ backgroundColor: colors.secondary, borderRadius: design.borderRadiusSm }}
                      >
                        In Progress
                      </span>
                      <span
                        className="px-3 py-1 text-xs font-medium text-white"
                        style={{ backgroundColor: colors.accent, borderRadius: design.borderRadiusSm }}
                      >
                        Pending
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="px-3 py-1 text-xs font-medium"
                        style={{ 
                          backgroundColor: `${colors.success}15`, 
                          color: colors.success,
                          borderRadius: design.borderRadiusSm,
                        }}
                      >
                        ✓ Completed
                      </span>
                      <span
                        className="px-3 py-1 text-xs font-medium"
                        style={{ 
                          backgroundColor: `${colors.warning}15`, 
                          color: colors.warning,
                          borderRadius: design.borderRadiusSm,
                        }}
                      >
                        ⏳ Scheduled
                      </span>
                      <span
                        className="px-3 py-1 text-xs font-medium"
                        style={{ 
                          backgroundColor: `${colors.error}15`, 
                          color: colors.error,
                          borderRadius: design.borderRadiusSm,
                        }}
                      >
                        ✕ Cancelled
                      </span>
                    </div>
                    <div
                      className="p-3 border-l-4"
                      style={{
                        backgroundColor: `${colors.primary}10`,
                        borderColor: colors.primary,
                        borderRadius: `0 ${design.borderRadiusSm} ${design.borderRadiusSm} 0`,
                      }}
                    >
                      <div className="text-sm font-medium" style={{ color: colors.textPrimary }}>
                        Info Alert
                      </div>
                      <div className="text-xs" style={{ color: colors.textSecondary }}>
                        This is an informational message for the user.
                      </div>
                    </div>
                    <div
                      className="p-3 border-l-4"
                      style={{
                        backgroundColor: `${colors.success}10`,
                        borderColor: colors.success,
                        borderRadius: `0 ${design.borderRadiusSm} ${design.borderRadiusSm} 0`,
                      }}
                    >
                      <div className="text-sm font-medium" style={{ color: colors.textPrimary }}>
                        Success Alert
                      </div>
                      <div className="text-xs" style={{ color: colors.textSecondary }}>
                        Operation completed successfully!
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress & Charts */}
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Progress Bars */}
                <div
                  className="p-4 sm:p-6"
                  style={{
                    backgroundColor: colors.surface,
                    borderRadius: design.borderRadius,
                    boxShadow: design.shadow,
                  }}
                >
                  <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: colors.textPrimary, fontWeight: design.fontWeight.semibold }}>
                    Progress Indicators
                  </h3>
                  <div className="space-y-4 sm:space-y-5">
                    {[
                      { label: 'Course Completion', value: 78, color: colors.primary },
                      { label: 'Skill Assessment', value: 92, color: colors.secondary },
                      { label: 'CEU Credits', value: 45, color: colors.accent },
                      { label: 'Certification Progress', value: 60, color: colors.success },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span style={{ color: colors.textSecondary }}>{item.label}</span>
                          <span style={{ color: colors.textPrimary, fontWeight: design.fontWeight.semibold }}>{item.value}%</span>
                        </div>
                        <div
                          className="h-2 overflow-hidden"
                          style={{
                            backgroundColor: `${item.color}20`,
                            borderRadius: design.borderRadiusSm,
                          }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                            className="h-full"
                            style={{
                              backgroundColor: item.color,
                              borderRadius: design.borderRadiusSm,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Circular Progress */}
                <div
                  className="p-4 sm:p-6"
                  style={{
                    backgroundColor: colors.surface,
                    borderRadius: design.borderRadius,
                    boxShadow: design.shadow,
                  }}
                >
                  <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: colors.textPrimary, fontWeight: design.fontWeight.semibold }}>
                    Skills Overview
                  </h3>
                  <div className="grid grid-cols-4 gap-2 sm:gap-4">
                    {[
                      { label: 'Clinical', value: 92, color: colors.primary },
                      { label: 'Ethics', value: 95, color: colors.secondary },
                      { label: 'Comm.', value: 88, color: colors.accent },
                      { label: 'Docs', value: 76, color: colors.success },
                    ].map((skill, i) => (
                      <div key={i} className="text-center">
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2">
                          <svg className="w-12 h-12 sm:w-16 sm:h-16 transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke={`${skill.color}25`}
                              strokeWidth="8"
                              fill="none"
                            />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="40"
                              stroke={skill.color}
                              strokeWidth="8"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ strokeDasharray: `${2 * Math.PI * 40}`, strokeDashoffset: `${2 * Math.PI * 40}` }}
                              animate={{ strokeDashoffset: `${2 * Math.PI * 40 * (1 - skill.value / 100)}` }}
                              transition={{ duration: 1.5, delay: 0.5 + i * 0.15 }}
                            />
                          </svg>
                          <div
                            className="absolute inset-0 flex items-center justify-center text-sm font-bold"
                            style={{ color: colors.textPrimary }}
                          >
                            {skill.value}
                          </div>
                        </div>
                        <div className="text-xs" style={{ color: colors.textSecondary }}>
                          {skill.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Table & List */}
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Data Table */}
                <div
                  className="p-4 sm:p-6"
                  style={{
                    backgroundColor: colors.surface,
                    borderRadius: design.borderRadius,
                    boxShadow: design.shadow,
                  }}
                >
                  <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: colors.textPrimary, fontWeight: design.fontWeight.semibold }}>
                    Recent Sessions
                  </h3>
                  <div className="overflow-x-auto -mx-4 sm:mx-0" style={{ borderRadius: design.borderRadiusSm }}>
                    <div className="min-w-full px-4 sm:px-0">
                      <table className="w-full text-xs sm:text-sm">
                      <thead>
                        <tr style={{ backgroundColor: `${colors.textSecondary}10` }}>
                          <th className="text-left py-3 px-4" style={{ color: colors.textSecondary, fontWeight: design.fontWeight.medium }}>Client</th>
                          <th className="text-left py-3 px-4" style={{ color: colors.textSecondary, fontWeight: design.fontWeight.medium }}>Type</th>
                          <th className="text-left py-3 px-4" style={{ color: colors.textSecondary, fontWeight: design.fontWeight.medium }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { client: 'Sarah M.', type: 'Individual', status: 'Completed', statusColor: colors.success },
                          { client: 'James K.', type: 'Couples', status: 'In Progress', statusColor: colors.warning },
                          { client: 'Emily R.', type: 'Individual', status: 'Scheduled', statusColor: colors.primary },
                        ].map((row, i) => (
                          <tr key={i} className="border-t" style={{ borderColor: `${colors.textSecondary}15` }}>
                            <td className="py-3 px-4" style={{ color: colors.textPrimary }}>{row.client}</td>
                            <td className="py-3 px-4" style={{ color: colors.textSecondary }}>{row.type}</td>
                            <td className="py-3 px-4">
                              <span
                                className="px-2 py-0.5 text-xs font-medium"
                                style={{
                                  backgroundColor: `${row.statusColor}15`,
                                  color: row.statusColor,
                                  borderRadius: design.borderRadiusSm,
                                }}
                              >
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    </div>
                  </div>
                </div>

                {/* Navigation / Tabs */}
                <div
                  className="p-4 sm:p-6"
                  style={{
                    backgroundColor: colors.surface,
                    borderRadius: design.borderRadius,
                    boxShadow: design.shadow,
                  }}
                >
                  <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: colors.textPrimary, fontWeight: design.fontWeight.semibold }}>
                    Navigation Elements
                  </h3>
                  
                  {/* Tabs */}
                  <div className="mb-6">
                    <div className="text-xs uppercase mb-2" style={{ color: colors.textSecondary }}>Tabs</div>
                    <div className="flex gap-1 p-1" style={{ backgroundColor: `${colors.textSecondary}10`, borderRadius: design.borderRadiusSm }}>
                      {['Overview', 'Sessions', 'Reports'].map((tab, i) => (
                        <button
                          key={tab}
                          className="flex-1 py-2 px-4 text-sm font-medium transition-all"
                          style={{
                            backgroundColor: i === 0 ? colors.background : 'transparent',
                            color: i === 0 ? colors.primary : colors.textSecondary,
                            borderRadius: design.borderRadiusSm,
                            boxShadow: i === 0 ? design.shadow : 'none',
                          }}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar Nav */}
                  <div>
                    <div className="text-xs uppercase mb-2" style={{ color: colors.textSecondary }}>Menu Items</div>
                    <div className="space-y-1">
                      {[
                        { label: 'Dashboard', icon: '🏠', active: true },
                        { label: 'Clients', icon: '👥', active: false },
                        { label: 'Schedule', icon: '📅', active: false },
                        { label: 'Resources', icon: '📚', active: false },
                      ].map((item) => (
                        <button
                          key={item.label}
                          className="w-full flex items-center gap-3 py-2.5 px-4 text-sm font-medium text-left transition-all"
                          style={{
                            backgroundColor: item.active ? `${colors.primary}15` : 'transparent',
                            color: item.active ? colors.primary : colors.textSecondary,
                            borderRadius: design.borderRadiusSm,
                          }}
                        >
                          <span>{item.icon}</span>
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[
                  {
                    title: 'Start Assessment',
                    desc: 'Complete your professional skills evaluation',
                    cta: 'Begin Now',
                    color: colors.primary,
                  },
                  {
                    title: 'Learning Path',
                    desc: 'Continue your certification coursework',
                    cta: 'Resume',
                    color: colors.secondary,
                  },
                  {
                    title: 'Book Supervision',
                    desc: 'Schedule your next supervision session',
                    cta: 'Schedule',
                    color: colors.accent,
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="p-4 sm:p-6 text-white"
                    style={{
                      background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}dd 100%)`,
                      borderRadius: design.borderRadius,
                      boxShadow: design.shadowLg,
                    }}
                  >
                    <h4 className="font-semibold text-base sm:text-lg mb-2" style={{ fontWeight: design.fontWeight.semibold }}>
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm opacity-90 mb-4">{card.desc}</p>
                    <button
                      className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all touch-manipulation"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: design.borderRadiusSm,
                        fontWeight: design.fontWeight.medium,
                      }}
                    >
                      {card.cta} →
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Toggle & Checkbox */}
              <div
                className="p-4 sm:p-6 mb-6 sm:mb-8"
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: design.borderRadius,
                  boxShadow: design.shadow,
                }}
              >
                <h3 className="font-semibold mb-4 text-sm sm:text-base" style={{ color: colors.textPrimary, fontWeight: design.fontWeight.semibold }}>
                  Toggle & Selection
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-4">
                    <div className="text-xs uppercase" style={{ color: colors.textSecondary }}>Toggles</div>
                    {['Email Notifications', 'Session Reminders', 'Weekly Reports'].map((label, i) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-sm" style={{ color: colors.textPrimary }}>{label}</span>
                        <div
                          className="w-12 h-6 p-1 cursor-pointer transition-all"
                          style={{
                            backgroundColor: i < 2 ? colors.primary : `${colors.textSecondary}30`,
                            borderRadius: '100px',
                          }}
                        >
                          <div
                            className="w-4 h-4 bg-white transition-all"
                            style={{
                              borderRadius: '100px',
                              transform: i < 2 ? 'translateX(24px)' : 'translateX(0)',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="text-xs uppercase" style={{ color: colors.textSecondary }}>Checkboxes</div>
                    {['Client confidentiality agreement', 'Terms of service', 'Privacy policy'].map((label, i) => (
                      <div key={label} className="flex items-center gap-3">
                        <div
                          className="w-5 h-5 flex items-center justify-center border-2"
                          style={{
                            backgroundColor: i < 2 ? colors.primary : 'transparent',
                            borderColor: i < 2 ? colors.primary : `${colors.textSecondary}40`,
                            borderRadius: design.borderRadiusSm,
                          }}
                        >
                          {i < 2 && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm" style={{ color: colors.textPrimary }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div
                className="p-4 sm:p-6 text-center"
                style={{
                  backgroundColor: colors.surface,
                  borderRadius: design.borderRadius,
                }}
              >
                <p className="text-xs sm:text-sm" style={{ color: colors.textSecondary }}>
                  Theme Preview: <strong style={{ color: colors.textPrimary }}>{colorPalettes[selectedPalette].name}</strong> + <strong style={{ color: colors.textPrimary }}>{designStyles[selectedStyle].name}</strong>
                </p>
                <p className="text-[10px] sm:text-xs mt-1" style={{ color: colors.textSecondary }}>
                  Font: {design.fontFamily.split(',')[0].replace(/'/g, '')}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;