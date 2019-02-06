import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import LearningPagePreview from './preview-templates/LearningPagePreview'
import DeveloperGuidelinePagePreview from './preview-templates/DeveloperGuidelinePagePreview'
import DesignGuidelinePagePreview from './preview-templates/DesignGuidelinePagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('learning', LearningPagePreview)
CMS.registerPreviewTemplate('designguideline', DesignGuidelinePagePreview)
CMS.registerPreviewTemplate('developerguideline', DeveloperGuidelinePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
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
import FileSystemControl from './FileSelectControl';

CMS.registerWidget("fileSelect", FileSystemControl);
