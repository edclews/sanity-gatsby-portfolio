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
                  buildHookId: '60585b95e13312736faf8e80',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5i2myxtd',
                  apiId: '19c007a4-cbcd-4e54-8d61-b85ed288313a'
                },
                {
                  buildHookId: '60585b959d138233640c696d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-iwf25h1k',
                  apiId: '9670e6ab-916b-4e75-98a5-0182ffcd4c70'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edclews/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-iwf25h1k.netlify.app',
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
