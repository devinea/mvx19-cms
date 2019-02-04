const fundamentalsRepoUrl = 'https://github.com/SAP/fundamental.git';

const cmd = require('node-cmd');

const rimraf = require('rimraf')


exports.importFundamentals = () => {

    cmd.get(
        `
            git clone ${fundamentalsRepoUrl}
        `,
        (err, data, stderr) => {
            if (!err) {
                console.log('Fiori Fundamentals repository cloned:\n\n', data)
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
                                    bundle exec jekyll build --config _config.yml,_mvx.yml --baseurl /docs/fundamental/
                                `,
                                (err, data, stderr) => {
                                    if (!err) {
                                        console.log('Finished building the static files:\n\n', data)
                                        this.copyStaticFundamentals()
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
            cp -R fundamental/docs/_site/ static/docs/fundamental/
        `,
        (err, data, stderr) => {
            if (!err) {
                console.log('Finished copying static files in static/docs/fundamental/ folder:\n\n', data)
                rimraf.sync('fundamental')
                console.log('Fundamental folder removed:\n\n', data)
            } else {
                console.log('error', err)
            }

        }
    );
}