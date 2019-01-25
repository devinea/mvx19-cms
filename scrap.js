const axios = require('axios');
const fs = require('fs');

let fundamentalComponents = [];
// Make a request for a user with a given ID
axios.get('https://api.github.com/repos/SAP/fundamental/contents/docs/pages/components')
    .then((response) => {
        fundamentalComponents = response.data;
        const token = fundamentalComponents.filter((c) => {
            return c.name === "token.md";
        });
    })
    .catch((error) => {
        console.log(error);
    })
    .then(() => {
        axios.get('https://raw.githubusercontent.com/SAP/fundamental/develop/docs/pages/components/token.md')
            .then((response) => {
                let md = response.data
                    .replace('\n', '')
                    // .replace(/(\{.*?\})/gi, '```')
                    .replace(/(\{% capture.*?\})/gi, '```')
                    .replace(/(\{% endcapture.*?\})/gi, '```')
                    .replace(/(\{%.*?\})/gi, '')

                var props = md.split('---\n')[0].replace('---', '').trim().split('\n')
                    .map((p) => {
                        var c = {}
                        var i = p.indexOf(':')
                        var key = p.substring(0, i);
                        c[key] = p.substring(i + 1, p.length).trim()
                        return c
                    })

                const metadata = {};
                props.forEach((p) => {
                    if (Object.keys(p)[0] === 'title') metadata['title'] = p['title']
                    if (Object.keys(p)[0] === 'keywords') metadata['keywords'] = p['keywords'].split(',')
                })

                let woFundamentalsMeta = md.substring(3, md.length)
                woFundamentalsMeta = woFundamentalsMeta.substring(woFundamentalsMeta.indexOf('---'), woFundamentalsMeta.length).replace('---', '')
                metadata['description'] = woFundamentalsMeta.split('{: .docs-intro}')[0].replace(/(\r\n|\n|\r)/gm, "");

                let experienceMeta = `
                    ---
                    templateKey: design-guideline-post
                    title: ${metadata['title']}
                    description: ${metadata['description']}
                    date: ${new Date().toISOString()}
                    tags:
                    - ${metadata['keywords'][0]}
                    ---`;

                experienceMeta = experienceMeta.replace(/^ +/gm, '')
                experienceMeta = experienceMeta.replace('- ', '  - ')

                const re = /```([\S\s]*?)```/;
                const htmlExample = woFundamentalsMeta.match(re)[0].replace('\n', '').replace(/```/g, '');

                const removeIntroIdx = woFundamentalsMeta.indexOf('{: .docs-intro}')
                woFundamentalsMeta = woFundamentalsMeta.substring(removeIntroIdx + 15, woFundamentalsMeta.length);
                let completeMd = `${experienceMeta} <br> ${htmlExample} ${woFundamentalsMeta}`
                completeMd = completeMd.split('\n').slice(1).join('\n');

                    fs.writeFile(__dirname + '/src/pages/designguideline/' + `${metadata['title']}.md`, completeMd, (err) => { 
                        // throws an error, you could also catch it here
                        if (err) throw err;
                        // success case, the file was saved
                        console.log('File ready!');
                    });
            })
    });