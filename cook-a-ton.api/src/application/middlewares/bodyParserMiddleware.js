import bodyParser from "body-parser";
const bodyParserOptions = { limit: '50mb', type: 'application/json' };

export default bodyParser.json(bodyParserOptions);