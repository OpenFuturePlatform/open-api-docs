module.exports = {
    title: 'OPEN Platform Documentation',
    description: 'Start building your decentralized application today',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ],
    dest: 'public',
    themeConfig: {
        logoLink: "https://www.openfuture.io/",
        sidebarDepth: 5,
        logo: '/images/open-logo.svg',
        sidebar: {
            '/': [
                'OPEN-API.md',
                'GoLang-SDK.md',
                'Python-SDK.md',
                'JVM-SDK.md',
                'JS-SDK.md',
                'Spring-Boot-Starter.md',
                'OPEN-User-Guide.md',
                'OPEN-Chain-White-Paper.md',
                'OPEN-Chain-Yellow-Paper.md',
            ],
        },
    }
};

