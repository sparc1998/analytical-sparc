// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/analytical-sparc/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/analytical-sparc/blog/";
          },
        },{id: "post-historical-analysis-of-ncaam-tournament-results",
        
          title: "Historical Analysis of NCAAM Tournament Results",
        
        description: "A look at historical NCAAM tournament results.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/analytical-sparc/blog/2026/ncaam-tournament-history/";
          
        },
      },{id: "news-i-am-excited-to-announce-the-launch-of-my-new-blog-analytical-sparc-where-i-ll-be-sharing-in-depth-sports-analysis-and-insights-check-out-the-blog-for-more",
          title: 'I am excited to announce the launch of my new blog, Analytical Sparc,...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
