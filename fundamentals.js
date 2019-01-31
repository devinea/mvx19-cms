const fundamentalsRepoUrl = 'https://github.com/SAP/fundamental.git';

const cmd = require('node-cmd');

exports.importFundamentals = () => {

    cmd.get(
        `
            git clone ${fundamentalsRepoUrl}
        `,
        (err, data, stderr) => {
            if (!err) {
                console.log('the Fiori Fundamentals repository cloned:\n\n', data)
                cmd.get(
                    `
                        cd fundamental
                        npm i
                    `,
                    (err, data, stderr) => {
                        if (!err) {
                            console.log('Finished installing npm packages:\n\n', data)
                            cmd.get(
                                `
                                    cd fundamental/docs/
                                    bundle exec jekyll build --config _config.yml,_mvx.yml --baseurl /_site
                                `,
                                (err, data, stderr) => {
                                    if (!err) {
                                        console.log('Finished building the static files:\n\n', data)
                                    } else {
                                        console.log('error', err)
                                    }

                                }
                            );
                        } else {
                            console.log('error', err)
                        }

                    }
                );
            } else {
                console.log('error', err)
            }

        }
    );
}

exports.copyStaticFundamentals = () => {
    cmd.get(
        `
            mkdir -p public/_site
            cp -R fundamental/docs/_site/ public/_site
        `,
        (err, data, stderr) => {
            if (!err) {
                console.log('Finished copying static files in public folder:\n\n', data)
            } else {
                console.log('error', err)
            }

        }
    );
}