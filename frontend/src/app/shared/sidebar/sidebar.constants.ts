export interface SidebarPanelItem {
    title: string;
    url: string;
}

export interface SidebarPanel {
    title: string;
    items: SidebarPanelItem[];
}

export const SIDEBAR_NAVS: SidebarPanel[] = [
    {
        title: 'title1',
        items: [
            {
                title: 'title1.1',
                url: 'http://www.amazon.com',
            },
            {
                title: 'title1.2',
                url: 'http://www.google.com',
            }
        ]
    },
    {
        title: 'title2',
        items: [
            {
                title: 'title2.1',
                url: 'http://www.amazon.com',
            },
            {
                title: 'title2.2',
                url: 'http://www.google.com',
            }
        ]
    },
    {
        title: 'title3',
        items: [
            {
                title: 'title3.1',
                url: 'http://www.amazon.com',
            },
            {
                title: 'title3.2',
                url: 'http://www.google.com',
            }
        ]
    },
]