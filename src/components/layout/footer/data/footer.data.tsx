export interface FooterLinkItem {
  id: string
  title: string
  href: string
  external?: boolean
}

export interface FooterColumn {
  id: string
  title: string
  links: FooterLinkItem[]
}

export interface SocialLink {
  id: string
  name: string
  href: string
  icon: React.ReactNode
}

export const SocialIcons = {
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.8594 24V13.0533H17.5323L18.0833 8.78588H13.8594V6.06176C13.8594 4.82664 14.201 3.98492 15.9742 3.98492L18.232 3.98399V0.167076C17.8415 0.116334 16.5012 0 14.9412 0C11.6837 0 9.45356 1.98836 9.45356 5.63912V8.78588H5.76953V13.0533H9.45356V24H13.8594Z" fill="#565656"/>
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <path d="M23.9773 7.05607C23.9211 5.78085 23.7149 4.90416 23.4195 4.14449C23.1147 3.33812 22.6459 2.61617 22.0316 2.01602C21.4315 1.40652 20.7048 0.932922 19.9078 0.632936C19.1437 0.337529 18.2716 0.131312 16.9964 0.0750879C15.7116 0.0141019 15.3038 0 12.0453 0C8.78687 0 8.37901 0.0141019 7.09903 0.0703262C5.82382 0.126551 4.94712 0.332951 4.18764 0.628174C3.38108 0.932922 2.65914 1.40176 2.05899 2.01602C1.44949 2.61617 0.976073 3.34288 0.675905 4.13991C0.380498 4.90416 0.174281 5.77609 0.118057 7.0513C0.0570706 8.33604 0.0429688 8.7439 0.0429688 12.0023C0.0429688 15.2608 0.0570706 15.6686 0.113295 16.9486C0.169519 18.2238 0.37592 19.1005 0.671326 19.8602C0.976073 20.6666 1.44949 21.3885 2.05899 21.9887C2.65914 22.5982 3.38585 23.0718 4.18288 23.3718C4.94712 23.6672 5.81906 23.8734 7.09446 23.9296C8.37425 23.986 8.78229 23.9999 12.0407 23.9999C15.2992 23.9999 15.707 23.986 16.987 23.9296C18.2622 23.8734 19.1389 23.6672 19.8984 23.3718C21.5113 22.7482 22.7865 21.4729 23.4101 19.8602C23.7054 19.096 23.9118 18.2238 23.968 16.9486C24.0242 15.6686 24.0383 15.2608 24.0383 12.0023C24.0383 8.7439 24.0336 8.33604 23.9773 7.05607ZM21.8161 16.8549C21.7644 18.027 21.5676 18.6599 21.4035 19.0819C21.0002 20.1274 20.1704 20.9572 19.1248 21.3605C18.7029 21.5246 18.0654 21.7215 16.8978 21.7729C15.632 21.8293 15.2523 21.8433 12.0501 21.8433C8.84785 21.8433 8.46344 21.8293 7.20214 21.7729C6.03004 21.7215 5.3971 21.5246 4.97515 21.3605C4.45484 21.1682 3.98124 20.8635 3.59682 20.4649C3.19831 20.0758 2.89356 19.6069 2.70126 19.0866C2.53717 18.6647 2.34029 18.027 2.28883 16.8596C2.23242 15.5937 2.2185 15.2139 2.2185 12.0117C2.2185 8.80946 2.23242 8.42505 2.28883 7.16394C2.34029 5.99183 2.53717 5.3589 2.70126 4.93694C2.89356 4.41645 3.19831 3.94303 3.60159 3.55843C3.99058 3.15992 4.45942 2.85517 4.97991 2.66306C5.40187 2.49896 6.03956 2.30209 7.2069 2.25044C8.47278 2.19422 8.85261 2.18011 12.0547 2.18011C15.2616 2.18011 15.6413 2.19422 16.9026 2.25044C18.0747 2.30209 18.7076 2.49896 19.1296 2.66306C19.6499 2.85517 20.1235 3.15992 20.5079 3.55843C20.9064 3.94761 21.2112 4.41645 21.4035 4.93694C21.5676 5.3589 21.7644 5.99641 21.8161 7.16394C21.8723 8.42981 21.8864 8.80946 21.8864 12.0117C21.8864 15.2139 21.8723 15.589 21.8161 16.8549Z" fill="#565656"/>
      <path d="M12.0453 5.8374C8.64159 5.8374 5.88 8.59881 5.88 12.0027C5.88 15.4065 8.64159 18.1679 12.0453 18.1679C15.4491 18.1679 18.2105 15.4065 18.2105 12.0027C18.2105 8.59881 15.4491 5.8374 12.0453 5.8374ZM12.0453 16.0019C9.83714 16.0019 8.04602 14.211 8.04602 12.0027C8.04602 9.79435 9.83714 8.00341 12.0453 8.00341C14.2536 8.00341 16.0445 9.79435 16.0445 12.0027C16.0445 14.211 14.2536 16.0019 12.0453 16.0019Z" fill="#565656"/>
      <path d="M19.8938 5.5936C19.8938 6.38844 19.2493 7.03291 18.4543 7.03291C17.6595 7.03291 17.015 6.38844 17.015 5.5936C17.015 4.79859 17.6595 4.1543 18.4543 4.1543C19.2493 4.1543 19.8938 4.79859 19.8938 5.5936Z" fill="#565656"/>
    </svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14.2339 10.1624L22.9764 0H20.9047L13.3137 8.82384L7.2507 0H0.257812L9.42618 13.3432L0.257812 24H2.3296L10.3459 14.6817L16.7489 24H23.7418L14.2339 10.1624ZM3.0761 1.55961H6.25825L20.9057 22.5113H17.7235L3.0761 1.55961Z" fill="#565656"/>
    </svg>
  ),
  email: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15.5511 12.9961L13.541 15.013C12.7259 15.831 11.2917 15.8486 10.459 15.013L8.44884 12.9961L1.22934 20.2391C1.49808 20.3633 1.79438 20.4375 2.10938 20.4375H21.8906C22.2056 20.4375 22.5018 20.3634 22.7705 20.2391L15.5511 12.9961Z" fill="#565656"/>
      <path d="M21.8906 3.5625H2.10938C1.79438 3.5625 1.49808 3.63666 1.22944 3.76092L8.94398 11.5011L8.94563 11.5022L8.94623 11.5034L11.4547 14.0201C11.7211 14.2866 12.279 14.2866 12.5454 14.0201L15.0533 11.5038L15.0545 11.5022L15.0561 11.5011L22.7705 3.76088C22.5018 3.63656 22.2056 3.5625 21.8906 3.5625Z" fill="#565656"/>
      <path d="M0.224344 4.74431C0.0853125 5.02547 0 5.33756 0 5.67188V18.3281C0 18.6624 0.0852187 18.9745 0.224297 19.2557L7.45631 12.0002L0.224344 4.74431Z" fill="#565656"/>
      <path d="M23.7757 4.74422L16.5437 12.0002L23.7757 19.2558C23.9147 18.9746 24 18.6625 24 18.3281V5.67188C24 5.33747 23.9147 5.02538 23.7757 4.74422Z" fill="#565656"/>
    </svg>
  )
}

export const footerColumns: FooterColumn[] = [
  {
    id: 'popular',
    title: 'Popularne',
    links: [
      { 
        id: 'servers', 
        title: 'Serwery dedykowane', 
        href: '/serwery-dedykowane' 
      },
      { 
        id: 'cloud', 
        title: 'Hosting w chmurze', 
        href: '/hosting-chmura' 
      },
      { 
        id: 'shop', 
        title: 'Hosting dla sklepu', 
        href: '/hosting-sklep' 
      },
      { 
        id: 'foreign', 
        title: 'Hosting zagraniczny', 
        href: '/hosting-zagraniczny' 
      },
      { 
        id: 'wordpress', 
        title: 'Hosting WordPress', 
        href: '/hosting-wordpress' 
      }
    ]
  },
  {
    id: 'opinions',
    title: 'Opinie',
    links: [
      { 
        id: 'names', 
        title: 'Nazwa.pl opinie', 
        href: '/opinie/nazwa-pl' 
      },
      { 
        id: 'hostinghouse', 
        title: 'HostingHouse opinie', 
        href: '/opinie/hostinghouse' 
      },
      { 
        id: 'athost', 
        title: 'Athost opinie', 
        href: '/opinie/athost' 
      },
      { 
        id: 'seohost', 
        title: 'Seohost opinie', 
        href: '/opinie/seohost' 
      },
      { 
        id: 'smarthost', 
        title: 'Smarthost recenzja', 
        href: '/opinie/smarthost' 
      }
    ]
  },
  {
    id: 'news',
    title: 'Nowości',
    links: [
      { 
        id: 'hostido-review', 
        title: 'Hostido recenzja', 
        href: '/recenzje/hostido' 
      },
      { 
        id: 'az-review', 
        title: 'AZ recenzja', 
        href: '/recenzje/az' 
      },
      { 
        id: 'lh-review', 
        title: 'LH opinie', 
        href: '/recenzje/lh' 
      },
      { 
        id: 'seohost-opinion', 
        title: 'Seohost opinie', 
        href: '/recenzje/seohost' 
      },
      { 
        id: 'smarthost-review', 
        title: 'Smarthost recenzja', 
        href: '/recenzje/smarthost' 
      }
    ]
  }
]

export const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    href: 'https://facebook.com/vmline',
    icon: SocialIcons.facebook
  },
  {
    id: 'instagram', 
    name: 'Instagram',
    href: 'https://instagram.com/vmline',
    icon: SocialIcons.instagram
  },
  {
    id: 'twitter',
    name: 'Twitter',
    href: 'https://twitter.com/vmline',
    icon: SocialIcons.twitter
  },
  {
    id: 'email',
    name: 'Email',
    href: 'mailto:contact@vmline.pl',
    icon: SocialIcons.email
  }
]

export const bottomLinks: FooterLinkItem[] = [
  { 
    id: 'ranking', 
    title: 'Ranking i porównanie hostingów', 
    href: '/ranking' 
  },
  { 
    id: 'privacy', 
    title: 'Polityka prywatności', 
    href: '/privacy' 
  }
]

export const companyInfo = {
  name: 'Vmline.pl',
  description: 'Profesjonalne usługi hostingowe w Polsce',
  email: 'contact@vmline.pl',
  phone: '+48 123 456 789'
}