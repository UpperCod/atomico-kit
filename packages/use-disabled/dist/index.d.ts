/**
 * Synchronize disabled status with a parent
 * @param {string} [matches] - allows to change the search of the fieldset to another element.
 * @returns {boolean}
 * @example
 * ```jsx
 * <fieldset disabled>
 *      <my-input>I am disabled</my-input>
 * </fieldset>
 * ```
 * @example
 * ```css
 * :host([disabled]){
 *      pointer-events: none;
 * }
 * ```
 */
export declare function useDisabled(matches?: string): any;