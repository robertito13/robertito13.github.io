const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                source
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const blogPost = path.resolve(`./src/templates/post.tsx`);
  const posts = result.data.allMarkdownRemark.edges.filter((post) => post.node.fields.source === 'posts');

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Create certificates pages.
  const certPost = path.resolve(`./src/templates/cert.tsx`);
  const certificates = result.data.allMarkdownRemark.edges.filter((cert) => cert.node.fields.source === 'certificates');

  certificates.forEach((cert, index) => {
    createPage({
      path: cert.node.fields.slug,
      component: certPost,
      context: {
        slug: cert.node.fields.slug,
      },
    });
  });
};


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const parentNode = getNode(node.parent);
    createNodeField({
      node,
      name: 'source',
      value: parentNode.sourceInstanceName,
    });

    const slugValue = (parentNode.sourceInstanceName !== `links`) ? createFilePath({ node, getNode }) : null;
    createNodeField({
      node,
      name: `slug`,
      value: slugValue,
    });
  }
};
