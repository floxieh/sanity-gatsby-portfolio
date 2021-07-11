export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60eb3f7dcdf13fd968fe44ae',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fbx322g2',
                  apiId: '5e62609b-5155-4c46-ad6f-2e9eeba38e71'
                },
                {
                  buildHookId: '60eb3f7cf3ff09f8703a6272',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qhc67gfd',
                  apiId: '21c536be-e867-45e5-89e6-d3739c056391'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/floxieh/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qhc67gfd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
