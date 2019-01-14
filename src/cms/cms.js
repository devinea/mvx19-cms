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
