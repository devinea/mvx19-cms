const axios = require('axios');
const fs = require('fs');

exports.scrapFundamentals = () => {
    let fundamentalComponents = [];
    // Make a request to api contents in order to get the components
    axios.get('https://api.github.com/repos/SAP/fundamental/contents/docs/pages/components')
        .then((response) => {
            fundamentalComponents = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
        .then(() => {
            fundamentalComponents.forEach((f) => {
                if (f.download_url) {
                    axios.get(f.download_url)
                        .then((response) => {
                            // A little bit of cleanup to the imported md file
                            const md = response.data
                                .replace('\n', '')
                                .replace(/(\{% capture.*?\})/gi, '```')
                                .replace(/(\{% endcapture.*?\})/gi, '```')
                                .replace(/(\{%.*?\})/gi, '')

                            // Reading Fundamentals Helmet
                            const fundHelmet = md.split('---\n')[0].replace('---', '').trim().split('\n')
                                .map((p) => {
                                    let c = {}
                                    const i = p.indexOf(':')
                                    const key = p.substring(0, i);
                                    c[key] = p.substring(i + 1, p.length).trim()
                                    return c
                                })

                            // Create Fiori Experience Developers Helmet with basic properties
                            const metadata = {};
                            fundHelmet.forEach((p) => {
                                if (Object.keys(p)[0] === 'title') metadata['title'] = p['title']
                                if (Object.keys(p)[0] === 'keywords') metadata['keywords'] = p['keywords'].split(',')
                            })

                            // Inject to Fiori Experience Developers Helmet all the required properties
                            let woFundamentalsMeta = md.substring(3, md.length)
                            woFundamentalsMeta = woFundamentalsMeta.substring(woFundamentalsMeta.indexOf('---'), woFundamentalsMeta.length).replace('---', '')
                            metadata['description'] = woFundamentalsMeta.split('{: .docs-intro}')[0].replace(/(\r\n|\n|\r)/gm, "");

                            let experienceMeta = `
                    ---
                    templateKey: design-guideline-post
                    title: ${metadata['title']}
                    description: ${metadata['description'].replace(':', '')}
                    date: ${new Date().toISOString()}
                    tags:
                    - ${metadata['keywords'][0]}
                    ---`;

                            experienceMeta = experienceMeta.replace(/^ +/gm, '')
                            experienceMeta = experienceMeta.replace('- ', '  - ')
                            woFundamentalsMeta = woFundamentalsMeta.substring(woFundamentalsMeta.indexOf('{: .docs-intro}') + 15, woFundamentalsMeta.length);

                            const htmlDemoWrapper = (code) => {
                                return `
<div class="fd-tile docs-component docs-component__">
    <label class="fd-form__label docs-component__bg-toggle" for="" title="Change Background">
      <span class="fd-toggle fd-toggle--xs fd-form__control">
        <input type="checkbox" name="" value="" id="" class="toggle-bg">
        <span class="fd-toggle__switch" role="presentation"></span>
      </span>
    </label>
    <div class="fd-tile__content">${code}</div>
</div>`
                            }

                            // Creating the html and the demo code for the component
                            woFundamentalsMeta = woFundamentalsMeta.replace(/```([\S\s]*?)```/g, (x) => {
                                return htmlDemoWrapper(x.replace(/```/g, '')) + '\n\n' + x.replace('```', '```html') + '\n';
                            })

                            // Build the final md file. This is getting written in /pages
                            let completeMd = `${experienceMeta} \n\n ${woFundamentalsMeta}`
                            completeMd = completeMd.split('\n').slice(1).join('\n');

                            fs.writeFile(__dirname + '/src/pages/designguideline/' + `${metadata['title']}.md`, completeMd, (err) => {
                                // throws an error, you could also catch it here
                                if (err) throw err;
                                // success case, the file was saved
                                console.log('File ready!');
                            });
                        })
                }
            })
        });
};