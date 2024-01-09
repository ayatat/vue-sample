var headerTemplate = `
  <div>
    <slot name="header">No title</slot>
  </div>
`

var contentTemplate = `
  <div>
    <slot name="content">No contents</slot>
  </div>
`

Vue.component('page-header', {
  template: headerTemplate
})

Vue.component('page-content', {
  template: contentTemplate
})

new Vue({
  el: "#fruits-list"
})
