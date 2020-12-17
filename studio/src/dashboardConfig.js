export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fdb653b81b9c1ff7fd82524',
                  title: 'Sanity Studio',
                  name: 'sanityio-gatsby-test-studio',
                  apiId: '80d1033f-b871-46a7-8c43-e679c7eaa9a6'
                },
                {
                  buildHookId: '5fdb653bad162e2a97c2193e',
                  title: 'Blog Website',
                  name: 'sanityio-gatsby-test',
                  apiId: '64a4fccc-a2bd-442a-b3e9-1acbb18a0510'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jessetinell/Sanityio-Gatsby-Test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanityio-gatsby-test.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
