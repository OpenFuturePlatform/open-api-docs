module.exports = {
    title: 'OPEN Platform Documentation',
    description: 'Start building your decentralized application today',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.png' }],
        ['script', {}, `window.onload = function() {
                        const currentYear = new Date().getFullYear();
                        document.getElementsByClassName("footer")[0].innerHTML = \`© \${currentYear} OPEN. All Rights Reserved\`};`]
    ],
    dest: 'public',
    themeConfig: {
        logoLink: "https://www.openfuture.io/",
        sidebarDepth: 5,
        logo: '/images/open-logo.svg',
        sidebar: {
            '/': [
                'OPEN-User-Guide.md',
                'OPEN-Chain-White-Paper.md',
                'OPEN-Chain-Yellow-Paper.md',
                'OPEN-API.md',
                'GoLang-SDK.md',
                'Python-SDK.md',
                'JVM-SDK.md',
                'JS-SDK.md',
                'Spring-Boot-Starter.md',
            ],
        },
    }
};

