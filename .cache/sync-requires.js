
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/speson/Workspace/spelog/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/speson/Workspace/spelog/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/speson/Workspace/spelog/src/pages/index.tsx")),
  "component---src-pages-info-tsx": preferDefault(require("/Users/speson/Workspace/spelog/src/pages/info.tsx")),
  "component---src-templates-post-template-tsx": preferDefault(require("/Users/speson/Workspace/spelog/src/templates/post_template.tsx"))
}

