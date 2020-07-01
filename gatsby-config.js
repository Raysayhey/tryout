module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-banshorian`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Block-Lab.ch`,
        siteUrl: `https://block-lab.ch`,
        siteName: `block lab webseite`,
        siteShortName: `BL`,
        siteDescription: `Block Lab Zürich, Webseiten und mobile Apps Produktion.`,
        siteKeywords: `Application developer, Full Stack Developer, Front-end, mobile apps, zürich, webseiten`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Arbeit`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `about`, title: `Über uns`, color: `#fff`, link: `` },
        ],
        email: `info@block-lab.ch`,
        social: {
          // Usernames
           twitter: `webmaeistro`,
          //  Discord: ``,
          gitHub: `webmaeistro`,
          stackOverflow: `/`,
          linkedIn: `in/raymond-lotmar`,
          resumeInPdf: `/CV-20.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Block Lab`,
          h2Text: `Wir entwickeln Webseiten und mobile Apps`,
          typewriter: [
            `Das Internet ist unsere Passion 🦋`,
            `Wir lieben 🍕`,
            `Wir sind an den neusten Technologien interessiert 💎`,
            `Wir machen auch Design mit <span style='color: #27ae60;'> Figma</span>`,
            `Wir entwickeln mobile Apps mit <span style='color: #4a8ae2;'> Flutter</span>`,
            `Wir leben ☁️ Backend`,

            
            // `I think one of my values is the <strong>ability to find solutions to problems<strong>`,
            // `I like to share what I know 👨‍🏫`,
            // `In my non-coding hours, I'm a electro IoT nerd and a family man.`,
           
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#fff" },
          shape1: {
            color: `#413f46`,
            opacity: `0.7`,
          },
          
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `*`, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true,
          cookie_name: `gatsby-starter-banshorian.netlify.app`,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
  ],
}
