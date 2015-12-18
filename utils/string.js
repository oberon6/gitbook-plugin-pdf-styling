/**
 * **Collection of utilities related to strings.**
 *
 * @module utils/string
 */

/**
 * Escape spaces within string. Useful for paths containing spaces.
 */
function escapeSpaces(arg) {
  return arg.replace(/ /g, '\\ ');
}

module.exports = {
  escapeSpaces: escapeSpaces
};
