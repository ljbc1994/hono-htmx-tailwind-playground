import 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import Navigation from './components/Navigation'

declare module 'hono' {
  interface ContextRenderer {
    (content: string, props?: { title?: string }): Response
  }
}

export const renderer = jsxRenderer(
  ({ children, title }) => {
    return (
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/static/style.css" rel="stylesheet" />
          <script src="/static/htmx.min.js"></script>
          <title>{title}</title>
        </head>
        <body class="bg-gray-900">
          <div class="mb-12">
            <Navigation />
          </div>
          {children}
        </body>
      </html>
    )
  },
  {
    docType: true,
  }
)
