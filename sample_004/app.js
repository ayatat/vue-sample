Vue.component('fruits-list-title', {
  template: '<h1>フルーツ一覧</h1>'
})

Vue.component('fruits-list-description', {
  template: '<p>季節の代表的なフルールの一覧です</p>'
})

Vue.component('fruits-list-table', {
  template: `
  <table>
    <tr>
      <th>季節</th>
      <th>フルーツ</th>
    </tr>
    <tr>
      <th>春</th>
      <th>いちご</th>
    </tr>
    <tr>
      <th>夏</th>
      <th>スイカ</th>
    </tr>
    <tr>
      <th>秋</th>
      <th>ぶどう</th>
    </tr>
    <tr>
      <th>冬</th>
      <th>みかん</th>
    </tr>
  </table>
  `
})

new Vue({
  el: '#fruits-list'
})
