module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
          DEFAULT: "#2563EB", // blue-600
        },
        secondary: {
          50: "#EEF2FF", // indigo-50
          100: "#E0E7FF", // indigo-100
          200: "#C7D2FE", // indigo-200
          300: "#A5B4FC", // indigo-300
          400: "#818CF8", // indigo-400
          500: "#6366F1", // indigo-500
          600: "#4F46E5", // indigo-600
          700: "#4338CA", // indigo-700
          800: "#3730A3", // indigo-800
          900: "#312E81", // indigo-900
          DEFAULT: "#4F46E5", // indigo-600
        },
        accent: {
          DEFAULT: "#1D4ED8", // blue-700
          hover: "#1E40AF", // blue-800
        },
        background: "#F8FAFC", // slate-50
        surface: {
          DEFAULT: "#FFFFFF", // white
          hover: "#F1F5F9", // slate-100
        },
        text: {
          primary: "#0F172A", // slate-900
          secondary: "#64748B", // slate-500
          muted: "#94A3B8", // slate-400
        },
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          DEFAULT: "#059669", // emerald-600
        },
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          DEFAULT: "#D97706", // amber-600
        },
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          DEFAULT: "#DC2626", // red-600
        },
        border: {
          DEFAULT: "#E2E8F0", // slate-200
          light: "#F1F5F9", // slate-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      boxShadow: {
        'tier-1': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'tier-2': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'tier-3': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'elevation-sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevation-md': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'elevation-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'loading': 'loading 1.5s infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        loading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'micro': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(320px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [],
}