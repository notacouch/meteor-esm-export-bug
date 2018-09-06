# meteor-esm-export-bug
Importing an [npm package](https://www.npmjs.com/package/@amcharts/amcharts4/v/4.0.0-beta.49) that [uses esm export syntax](https://github.com/amcharts/amcharts4/blob/4.0.0-beta.49/dist/es2015/core.js#L8) is not supported in Meteor 1.7.0.5 through 1.7.1-rc6

To reproduce via CLI:
```bash
git clone https://github.com/notacouch/meteor-esm-export-bug.git
cd meteor-esm-export-bug
meteor npm install
meteor
```
