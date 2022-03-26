(context => context.keys().forEach(key => context(key)))
(require.context('./src', true, /^(.*\.(js(on)?|eot|svg|ttf|woff2?|css|html|png|ico)$)[^.]*$/im));
