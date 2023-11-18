/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [{
    pattern: /hljs+/,
  }],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: [{
            'code': {
              backgroundColor: 'var(--tw-prose-code-bg)',
              borderRadius: theme('borderRadius.md'),
              paddingLeft: theme('padding.2'),
              paddingRight: theme('padding.2'),
              paddingTop: theme('padding.1'),
              paddingBottom: theme('padding.1')
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: ''
            }
          }]
        },
        dark: {
          css: {
            '--tw-prose-body': theme('colors.gray[200]'),
            '--tw-prose-headings': theme('colors.gray[100]'),
            '--tw-prose-lead': theme('colors.gray[300]'),
            '--tw-prose-links': theme('colors.sky[400]'),
            '--tw-prose-bold': theme('colors.gray[100]'),
            '--tw-prose-counters': theme('colors.gray[400]'),
            '--tw-prose-bullets': theme('colors.gray[400]'),
            '--tw-prose-hr': theme('colors.sky[300]'),
            '--tw-prose-quotes': theme('colors.sky[400]'),
            '--tw-prose-quote-borders': theme('colors.gray[300]'),
            '--tw-prose-captions': theme('colors.gray[300]'),
            '--tw-prose-code': theme('colors.sky[100]'),
            '--tw-prose-code-bg': theme('colors.gray[700]'),
            '--tw-prose-pre-code': theme('colors.sky[200]'),
            '--tw-prose-pre-bg': theme('colors.gray[800]'),
            '--tw-prose-th-borders': theme('colors.gray[300]'),
            '--tw-prose-td-borders': theme('colors.gray[200]'),
            '--tw-prose-invert-body': theme('colors.gray[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.gray[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.gray[400]'),
            '--tw-prose-invert-bullets': theme('colors.gray[600]'),
            '--tw-prose-invert-hr': theme('colors.gray[700]'),
            '--tw-prose-invert-quotes': theme('colors.gray[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.gray[700]'),
            '--tw-prose-invert-captions': theme('colors.gray[400]'),
            '--tw-prose-invert-code': theme('colors.gray'),
            '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.gray[600]'),
            '--tw-prose-invert-td-borders': theme('colors.gray[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

