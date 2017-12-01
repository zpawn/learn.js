const render = () => {
    const hash = document.location.hash;
    const renderByHash = {
        '#markdown': () => import('../FeedMarkdown/'),
        '#raw': () => import('../FeedRaw/'),
    };

    if (renderByHash[hash]) {
        renderByHash[hash]()
            .then(module => {
                module.render();
            });
    }
};

window.addEventListener('hashchange', render);
render();