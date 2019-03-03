import PrestoFormatter from "./languages/PrestoFormatter";
import StandardSqlFormatter from "./languages/StandardSqlFormatter";

/**
 * Format whitespaces in a query to make it easier to read.
 *
 * @param {String} query
 * @param {Object} cfg
 *  @param {String} cfg.language Query language, default is Standard SQL
 *  @param {String} cfg.indent Characters used for indentation, default is "  " (2 spaces)
 *  @param {Object} cfg.params Collection of params for placeholder replacement
 * @return {String}
 */
function format(query: string, cfg: any = {}) {

  switch (cfg.language) {
    case "presto":
      return new PrestoFormatter(cfg).format(query);
    case "sql":
    case undefined:
      return new StandardSqlFormatter(cfg).format(query);
    default:
      throw Error(`Unsupported SQL dialect: ${cfg.language}`);
  }
}

export default {format}
