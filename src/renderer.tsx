import 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

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
          <link href="/static/style.css" rel="stylesheet" />
          <script src="/static/htmx.min.js"></script>
          <title>{title}</title>
        </head>
        <body class="bg-gray-900">
          <div class="container container-lg mx-auto px-2 md:px-10">
            {children}
          </div>
        </body>
      </html>
    )
  },
  {
    docType: true,
  }
)
