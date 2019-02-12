import CMS from 'netlify-cms'
import React from 'react'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import LearningPagePreview from './preview-templates/LearningPagePreview'
import DesignGuidelinePagePreview from './preview-templates/DesignGuidelinePagePreview'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/core'
import FileSystemControl from './FileSelectControl';

// We need this for injecting the inline css into preview section of admin
class CSSInjector extends React.Component {
  constructor() {
    super()
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHead = iframe.contentDocument.head
    this.cache = createCache({ container: iframeHead })
  }

  render() {
    return (
      <CacheProvider value={this.cache}>
        {this.props.children}
      </CacheProvider>
    )
  }
}

CMS.registerPreviewTemplate('about', props => (
  <CSSInjector>
    <AboutPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('learning', props => (
  <CSSInjector>
    <LearningPagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('designguideline', props => (
  <CSSInjector>
    <DesignGuidelinePagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('developerguideline', props => (
  <CSSInjector>
    <DeveloperGuidelinePagePreview {...props} />
  </CSSInjector>
))
CMS.registerPreviewTemplate('blog', props => (
  <CSSInjector>
    <BlogPostPreview {...props} />
  </CSSInjector>
))
CMS.registerEditorComponent({
    // Internal id of the component
    id: "vimeo",
    // Visible label
    label: "Vimeo",
    // Fields the user need to fill out when adding an instance of the component
    fields: [{name: 'id', label: 'Vimeo Video ID', widget: 'string'}],
    // Pattern to identify a block as being an instance of this component
    pattern: /^vimeo (\S+)$/,
    // Function to extract data elements from the regexp match
    fromBlock: function(match) {
      return {
        id: match[1]
      };
    },
    // Function to create a text block from an instance of this component
    toBlock: function(obj) {
    //return "`vimeo: https://vimeo.com/" +obj.id+ "`";
    return  '<iframe width="640" height="360" src="https://player.vimeo.com/video/' +obj.id+ '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    }
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    // toPreview: function(obj) {
    //   return (
    //     '<img src="http://img.vimeo.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Vimeo Video"/>'
    //   );
    // }
  });
CMS.registerWidget("fileSelect", FileSystemControl);
