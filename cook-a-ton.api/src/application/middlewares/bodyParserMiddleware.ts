import bodyParser from "body-parser";
const bodyParserOptions: bodyParser.OptionsJson = { limit: '50mb', type: 'application/json' };

export default bodyParser.json(bodyParserOptions);