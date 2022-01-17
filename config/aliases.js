const aliases = (prefix = `src`) => ({
   '@Components/Menu': `${prefix}/components/menu/component.menu.js`,
   '@Components/Container': `${prefix}/components/container/component.container.js`,
   '@Components/List': `${prefix}/components/list/component.list.js`,
   '@Styles/': `${prefix}/scss/`,
   '@Hooks/Http': `${prefix}/hooks/hook.http.js`,
   '@Hooks/Auth': `${prefix}/hooks/hook.auth.js`,
   '@Context/DataAuth': `${prefix}/context/context.auth.js`,
   '@Context/Page': `${prefix}/context/context.page.js`

 });
 
 module.exports = aliases;