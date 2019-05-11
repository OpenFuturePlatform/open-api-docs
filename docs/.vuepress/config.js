module.exports = {
    title: 'OPEN Platform Documentation',
    description: 'Start building your decentralized application today',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.png' }]
    ],
    themeConfig: {
        logo: '/images/open-logo.svg',
        nav: [
            {text: 'Home', link: '/'},
            {text: 'OPEN Chain', link: '/open-chain/OPEN-User-Guide.md'},
            {text: 'OPEN API', link: '/open-api/OPEN-API.md'},
        ],
        sidebar: {
            '/open-chain/': [
                'OPEN-User-Guide.md',
                'OPEN-Chain-White-Paper.md',
                'OPEN-Chain-Yellow-Paper.md',
            ],
            '/open-api/': [
                'OPEN-API.md',
                'GoLang-SDK.md',
                'Python-SDK.md',
                'JS-SDK.md',
                'Spring-Boot-Starter.md',
            ],
        },
    }
};