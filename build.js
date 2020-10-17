(context => context.keys().forEach(key => context(key)))
(require.context('./src', true, /^(.*\.(js(on)?|css|html|png|ico)$)[^.]*$/im));
