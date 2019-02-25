import React from 'react';

let getAlignment = (align) => {
  switch (align) {
    case "center":
      return 'display: block; margin-left: auto; margin-right: auto; /**center**/';
    case "right":
      return 'float: right; /**right**/';
    default: //case "left"
      return "float: left; /**left**/";
  }
};

const customImage = {
  label: 'CustomImage',
  id: 'customImage',
  fromBlock: match =>
    match && {
      image: match[1],
      alt: match[3],
      title: match[5],
      align: match[6] || "left",
    },
  toBlock: ({ alt, image, title, align }) => {
    const alignStyle = getAlignment(align);
    return `<img src='${image || ''}'${alt ? ` alt='${alt}'` : ''}${title? ` title='${title}'` : ''} style='${alignStyle}'/>`;
  },
  // eslint-disable-next-line react/display-name
  toPreview: ({ alt, image, title, align }, getAsset) => {
    return `<img src='${getAsset(image) || ''}' alt='${alt || ''}' title='${title || ''}' style='${getAlignment(align)}'/>`;
  },
  pattern: /^<img src='(.*?)'( alt='(.*?)')?( title='(.*?)')? style='.*?(right|center|left)\*\*\/'\/>$/,
  // test with <img src='/img/apple-touch-icon.png' alt='alt title' title='fancy Title' style='float: left; /**left**/'/>
  fields: [
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      media_library: {
        allow_multiple: false,
      },
    },
    {
      label: 'Title',
      name: 'title',
    },
    {
      label: 'Alignment',
      name: 'align',
      widget: 'select',
      options: ['left', 'center', 'right'],
      default: 'left',
    },
    {
      label: 'Alt Text',
      name: 'alt',
    },
  ],
};

export default customImage;
